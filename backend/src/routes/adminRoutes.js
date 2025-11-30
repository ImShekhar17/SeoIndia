const express = require('express');
const {
    getStats, getUsers, deleteUser,
    exportAudits, getRoles, createRole, updateRole,
    deleteRole, createUser, updateUser, activateSite,
    purgeSystemCache, getSystemSettings, updateSystemSetting
} = require('../controllers/adminController');
const { getSubscribers, sendNewsletter } = require('../controllers/newsletterController');
const { protect, checkPermission } = require('../middleware/auth');

const router = express.Router();

// All admin routes must be authenticated
router.use(protect);

// Granular Permission Checks
router.get('/stats', checkPermission('audit:view'), getStats);

router.get('/users', checkPermission('user:manage'), getUsers);
router.post('/users', checkPermission('user:manage'), createUser);
router.put('/users/:id', checkPermission('user:manage'), updateUser);
router.delete('/users/:id', checkPermission('user:manage'), deleteUser);

router.get('/roles', checkPermission('role:manage'), getRoles);
router.post('/roles', checkPermission('role:manage'), createRole);
router.put('/roles/:id', checkPermission('role:manage'), updateRole);
router.delete('/roles/:id', checkPermission('role:manage'), deleteRole);

// Site Activation (requires audit creation or management)
router.post('/activate/:id', checkPermission('audit:create'), require('../controllers/adminController').activateSite);

router.get('/export/audits', checkPermission('report:export'), exportAudits);
router.post('/purge-cache', checkPermission('system:manage'), purgeSystemCache); // Restricted to high-level system role
router.get('/settings', checkPermission('settings:manage'), getSystemSettings);
router.put('/settings/:key', checkPermission('settings:manage'), updateSystemSetting);

// Newsletter
router.get('/newsletter/subscribers', checkPermission('marketing:view'), getSubscribers);
router.post('/newsletter/send', checkPermission('marketing:view'), sendNewsletter);

module.exports = router;
