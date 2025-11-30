const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Protect routes
exports.protect = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    } else if (req.cookies.token) {
        token = req.cookies.token;
    }

    // Make sure token exists
    if (!token) {
        return res.status(401).json({ success: false, message: 'Not authorized to access this route' });
    }

    try {
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const { Role } = require('../models');

        req.user = await User.findByPk(decoded.id, {
            include: [{ model: Role, as: 'assignedRole' }]
        });

        if (!req.user) {
            return res.status(401).json({ success: false, message: 'User no longer exists' });
        }

        next();
    } catch (err) {
        return res.status(401).json({ success: false, message: 'Not authorized to access this route' });
    }
};

// Grant access to specific legacy roles (e.g. 'admin')
exports.authorize = (...roles) => {
    return (req, res, next) => {
        // Super-admin escape hatch
        if (req.user.role === 'admin') return next();

        if (!roles.includes(req.user.role)) {
            return res.status(403).json({
                success: false,
                message: `User role ${req.user.role} is not authorized to access this route`
            });
        }
        next();
    };
};

// Grant access based on specific dynamic permissions
exports.checkPermission = (...permissions) => {
    return (req, res, next) => {
        // Super-admin escape hatch
        if (req.user.role === 'admin') return next();

        const userPermissions = req.user.assignedRole?.permissions || [];

        // Check if user has ANY of the required permissions
        const hasAccess = permissions.some(p => userPermissions.includes(p));

        if (!hasAccess) {
            return res.status(403).json({
                success: false,
                message: 'You do not have the required permissions to perform this action'
            });
        }
        next();
    };
};

// Optional authentication (for public routes that can be enhanced with user data)
exports.optionalProtect = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    } else if (req.cookies.token) {
        token = req.cookies.token;
    }

    if (!token) {
        return next();
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findByPk(decoded.id);
        next();
    } catch (err) {
        // If token is invalid/expired, just proceed as guest
        next();
    }
};
