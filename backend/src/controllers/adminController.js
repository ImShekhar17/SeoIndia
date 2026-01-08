const User = require('../models/User');
const Audit = require('../models/Audit');
const Role = require('../models/Role');
const { sequelize } = require('../config/db');
const { Op, fn, col, literal } = require('sequelize');
const {
    Setting
} = require('../models');
const bcrypt = require('bcryptjs');
const MaintenanceService = require('../services/maintenanceService');

// @desc    Get dashboard stats (Professional & Dynamic)
// @route   GET /api/admin/stats
// @access  Private/Admin
exports.getStats = async (req, res, next) => {
    try {
        const now = new Date();
        const sevenDaysAgo = new Date(now - 7 * 24 * 60 * 60 * 1000);

        // Basic Counts
        const userCount = await User.count();
        const auditCount = await Audit.count();

        // 1. Audit Trends (Last 7 Days)
        const auditTrends = await Audit.findAll({
            attributes: [
                [fn('DATE', col('createdAt')), 'date'],
                [fn('COUNT', col('id')), 'count']
            ],
            where: {
                createdAt: { [Op.gte]: sevenDaysAgo }
            },
            group: [fn('DATE', col('createdAt'))],
            order: [[fn('DATE', col('createdAt')), 'ASC']],
            raw: true
        });

        // 2. User Trends (Last 7 Days)
        const userTrends = await User.findAll({
            attributes: [
                [fn('DATE', col('createdAt')), 'date'],
                [fn('COUNT', col('id')), 'count']
            ],
            where: {
                createdAt: { [Op.gte]: sevenDaysAgo }
            },
            group: [fn('DATE', col('createdAt'))],
            order: [[fn('DATE', col('createdAt')), 'ASC']],
            raw: true
        });

        // 3. Grade Distribution
        const rawGradeDistribution = await Audit.findAll({
            attributes: [
                'overallGrade',
                [fn('COUNT', col('id')), 'count']
            ],
            group: ['overallGrade'],
            raw: true
        });

        const gradeDistribution = rawGradeDistribution.map(g => ({
            ...g,
            count: parseInt(g.count) || 0
        }));

        // 4. Status Distribution
        const statusDistribution = await Audit.findAll({
            attributes: [
                'status',
                [fn('COUNT', col('id')), 'count']
            ],
            group: ['status'],
            raw: true
        });

        // 6. Recent Audits (Enhanced with User Data)
        const limit = parseInt(req.query.limit) || 10;
        const page = parseInt(req.query.page) || 1;
        const offset = (page - 1) * limit;

        const recentAudits = await Audit.findAll({
            limit: limit,
            offset: offset,
            order: [['createdAt', 'DESC']],
            include: [{ model: User, as: 'user', attributes: ['name', 'email'] }]
        });

        const maintenanceStats = await MaintenanceService.getStorageStats();

        res.status(200).json({
            success: true,
            data: {
                totalUsers: userCount,
                totalAudits: auditCount,
                auditTrends,
                userTrends,
                gradeDistribution,
                statusDistribution,
                recentAudits,
                maintenanceStats,
                serverTime: now
            }
        });
    } catch (err) {
        console.error('Admin Stats Error:', err);
        res.status(400).json({ success: false, message: err.message });
    }
};

// @desc    Get all users (Enhanced with Role)
// @route   GET /api/admin/users
// @access  Private/Admin
exports.getUsers = async (req, res, next) => {
    try {
        const limit = parseInt(req.query.limit) || 10;
        const page = parseInt(req.query.page) || 1;
        const offset = (page - 1) * limit;

        const totalUsers = await User.count();
        const users = await User.findAll({
            limit: limit,
            offset: offset,
            order: [['createdAt', 'DESC']],
            include: [{ model: Role, as: 'assignedRole' }]
        });

        res.status(200).json({
            success: true,
            total: totalUsers,
            count: users.length,
            currentPage: page,
            totalPages: Math.ceil(totalUsers / limit),
            data: users
        });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};

// @desc    Create User (Provisioned by Admin)
// @route   POST /api/admin/users
// @access  Private/Admin
exports.createUser = async (req, res, next) => {
    try {
        const { name, email, password, roleId } = req.body;

        const user = await User.create({
            name,
            email,
            password,
            roleId,
            role: 'user' // Sync field for legacy compatibility
        });

        res.status(201).json({
            success: true,
            data: user
        });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};

// @desc    Get all roles
// @route   GET /api/admin/roles
// @access  Private/Admin
exports.getRoles = async (req, res, next) => {
    try {
        const roles = await Role.findAll();
        res.status(200).json({ success: true, data: roles });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};

// @desc    Create new role
// @route   POST /api/admin/roles
// @access  Private/Admin
exports.createRole = async (req, res, next) => {
    try {
        const { name, description, permissions } = req.body;
        const role = await Role.create({ name, description, permissions });
        res.status(201).json({ success: true, data: role });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};

// @desc    Update role
// @route   PUT /api/admin/roles/:id
// @access  Private/Admin
exports.updateRole = async (req, res, next) => {
    try {
        const { name, description, permissions } = req.body;
        const role = await Role.findByPk(req.params.id);

        if (!role) {
            return res.status(404).json({ success: false, message: 'Role not found' });
        }

        if (role.name === 'Administrator' || role.name === 'admin') {
            return res.status(403).json({ success: false, message: 'System Administrator role cannot be modified.' });
        }

        const updates = {};
        if (name) updates.name = name;
        if (description) updates.description = description;
        if (permissions) updates.permissions = permissions;

        await role.update(updates);

        // REAL-TIME PERMISSION SYNC: Invalidate cache for ALL affected users
        // This forces their next request (page refresh/nav) to fetch fresh permissions from DB
        const cache = require('../services/cacheService');
        const affectedUsers = await User.findAll({ where: { roleId: role.id }, attributes: ['id'] });

        affectedUsers.forEach(user => {
            cache.invalidate(`user:${user.id}`);
        });

        res.status(200).json({ success: true, data: role });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};

// @desc    Delete role
// @route   DELETE /api/admin/roles/:id
// @access  Private/Admin
exports.deleteRole = async (req, res, next) => {
    try {
        const role = await Role.findByPk(req.params.id);
        if (!role) {
            return res.status(404).json({ success: false, message: 'Role not found' });
        }
        await role.destroy();
        res.status(200).json({ success: true, data: {} });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};

const IndexingService = require('../services/indexingService');

// @desc    Activate Site (Real Google Indexing API)
// @route   POST /api/admin/activate/:id
// @access  Private/Admin
exports.activateSite = async (req, res, next) => {
    try {
        const audit = await Audit.findByPk(req.params.id);
        if (!audit) {
            return res.status(404).json({ success: false, message: 'Audit not found' });
        }

        // Construct the absolute Frontend URL for the audit page
        // This ensures we index OUR site (confirmed in Search Console) and not the external site
        const frontendUrl = process.env.FRONTEND_URL || 'https://seo.value4media.com';
        const absoluteAuditUrl = `${frontendUrl}/audit/${audit.id}`;

        console.log(`[AdminController] Triggering indexing for internal report: ${absoluteAuditUrl}`);

        // Trigger Real Google Indexing API
        const indexingResult = await IndexingService.activateIndexing(absoluteAuditUrl);

        await Audit.update({
            message: indexingResult.mode === 'production'
                ? 'SEO Hyper-Acceleration Active: Indexing in progress (Est. 1-60 min)'
                : 'Indexing Scheduled: Infrastructure authenticated. Real API pending key validation.',
            results: {
                ...audit.results,
                indexingStatus: 'active',
                indexingData: indexingResult
            }
        }, { where: { id: req.params.id } });

        res.status(200).json({
            success: true,
            message: indexingResult.mode === 'production'
                ? 'Google Indexing API notification sent successfully.'
                : 'Rapid SEO Indexing infrastructure initialized. Key required for production pings.',
            data: indexingResult
        });
    } catch (err) {
        console.error('Activation Error:', err);
        res.status(400).json({ success: false, message: err.message });
    }
};

// @desc    Export all audits
// @route   GET /api/admin/export/audits
// @access  Private/Admin
exports.exportAudits = async (req, res, next) => {
    try {
        const audits = await Audit.findAll({
            order: [['createdAt', 'DESC']],
            include: [{ model: User, as: 'user', attributes: ['name', 'email'] }]
        });

        res.status(200).json({
            success: true,
            data: audits
        });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};

// @desc    Update user (Admin controlled)
// @route   PUT /api/admin/users/:id
// @access  Private/Admin
exports.updateUser = async (req, res, next) => {
    try {
        const { name, email, roleId, role } = req.body;
        const user = await User.findByPk(req.params.id);

        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        const updates = {};
        if (name) updates.name = name;
        if (email) updates.email = email;
        if (roleId !== undefined) updates.roleId = roleId || null;
        if (role) updates.role = role;

        await user.update(updates);

        // Invalidate cache to force reload with new permissions
        const cache = require('../services/cacheService');
        cache.invalidate(`user:${user.id}`);

        const updatedUser = await User.findByPk(user.id, {
            include: [{ model: Role, as: 'assignedRole' }]
        });

        res.status(200).json({
            success: true,
            data: updatedUser
        });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};

// @desc    Delete user
// @route   DELETE /api/admin/users/:id
// @access  Private/Admin
exports.deleteUser = async (req, res, next) => {
    try {
        const user = await User.findByPk(req.params.id);

        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        await user.destroy();

        res.status(200).json({
            success: true,
            data: {}
        });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};

// @desc    Purge System Cache (Clear All Screenshots)
// @route   POST /api/admin/purge-cache
// @access  Private/Admin
exports.purgeSystemCache = async (req, res, next) => {
    try {
        const result = await MaintenanceService.clearAllScreenshots();
        res.status(200).json({
            success: true,
            message: `📦 System purged successfully. ${result.count} assets removed from disk.`,
            count: result.count
        });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Purge failed' });
    }
};

// @desc    Get all system settings
// @route   GET /api/admin/settings
// @access  Private/Admin
exports.getSystemSettings = async (req, res) => {
    try {
        const settings = await Setting.findAll();
        res.status(200).json({ success: true, data: settings });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to fetch settings' });
    }
};

// @desc    Update a specific setting
// @route   PUT /api/admin/settings/:key
// @access  Private/Admin
exports.updateSystemSetting = async (req, res) => {
    try {
        const { key } = req.params;
        const { value } = req.body;

        const setting = await Setting.findOne({ where: { key } });
        if (!setting) {
            return res.status(404).json({ success: false, message: 'Setting not found' });
        }

        setting.value = value;
        await setting.save();

        res.status(200).json({ success: true, data: setting });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to update setting' });
    }
};
