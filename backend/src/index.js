const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const path = require('path');
const compression = require('compression');
require('dotenv').config();

// Database and Models
const { connectDB, sequelize } = require('./config/db');
const User = require('./models/User');
const Role = require('./models/Role');
const MaintenanceService = require('./services/maintenanceService');
const Setting = require('./models/Setting');

// Route files
const authRoutes = require('./routes/authRoutes');
const auditRoutes = require('./routes/auditRoutes');
const adminRoutes = require('./routes/adminRoutes');
const newsletterRoutes = require('./routes/newsletterRoutes');
const errorHandler = require('./middleware/error');
const logger = require('./utils/logger');

const app = express();

// Body parser
app.use(express.json());

// Cookie parser
app.use(cookieParser());

// Enable compression
app.use(compression());

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Set security headers
app.use(helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" }
}));

// Serve Static files (Screenshots)
app.use('/public', express.static(path.join(__dirname, '../public')));

// Enable CORS
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true
}));

// Mount routers
app.use('/api/auth', authRoutes);
app.use('/api/audits', auditRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/newsletter', newsletterRoutes);

// Basic health check
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP', timestamp: new Date() });
});

// Professional Error handling middleware
app.use(errorHandler);

// Role Seeding Function
const seedRoles = async () => {
    try {
        const roles = [
            {
                name: "Administrator",
                description: "Full system access and authority",
                permissions: ["audit:create", "audit:view", "user:manage", "role:manage", "report:export"]
            },
            {
                name: "SEO Analyst",
                description: "Standard analyst with audit capabilities",
                permissions: ["audit:create", "audit:view", "report:export"]
            },
            {
                name: "Viewer",
                description: "Read-only access to reports",
                permissions: ["audit:view"]
            }
        ];

        for (const role of roles) {
            await Role.findOrCreate({
                where: { name: role.name },
                defaults: role
            });
        }
        logger.info("Default roles seeded successfully");
    } catch (error) {
        logger.error("Error seeding roles:", error);
    }
};

// Admin Seeding Function (Enhanced with Role)
const createAdminIfNotExists = async () => {
    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminEmail || !adminPassword) {
        logger.warn("Admin credentials missing in environment variables. Skipping admin creation.");
        return;
    }

    try {
        const adminRole = await Role.findOne({ where: { name: "Administrator" } });
        const existing = await User.findOne({ where: { email: adminEmail } });

        if (!existing) {
            logger.info("Admin user not found. Creating one...");
            await User.create({
                name: "Admin User",
                email: adminEmail,
                password: adminPassword,
                role: "admin",
                roleId: adminRole ? adminRole.id : null
            });

            logger.info("Admin account created successfully");
        } else if (adminRole && !existing.roleId) {
            // Update existing admin to have the roleId
            existing.roleId = adminRole.id;
            await existing.save();
            logger.info("Existing admin updated with Role association.");
        }
    } catch (error) {
        logger.error("Error seeding admin user:", error);
    }
};

const seedSettings = async () => {
    try {
        const defaultPdfTemplate = {
            brandName: "SEO India Intelligence",
            primaryColor: "#0071e3",
            secondaryColor: "#0a1128",
            headerText: "Enterprise SEO Performance Report",
            footerText: "Confidential - SeoIndia Digital Solutions",
            showScreenshots: true,
            showBacklinks: true
        };

        await Setting.findOrCreate({
            where: { key: 'pdf_template' },
            defaults: {
                key: 'pdf_template',
                value: defaultPdfTemplate,
                category: 'pdf'
            }
        });
        logger.info("Default system settings seeded successfully");
    } catch (error) {
        logger.error("Error seeding settings:", error);
    }
};

const startServer = async () => {
    // Connect to Database
    await connectDB();

    // Sync Models
    try {
        await sequelize.sync();
        logger.info('Database models synced.');

        // Seed Data
        await seedRoles();
        await createAdminIfNotExists();
        await seedSettings();

        // Start System Maintenance Cycle
        await MaintenanceService.init();
    } catch (err) {
        logger.error('Error syncing database models:', err);
    }

    const PORT = process.env.PORT || 5000;

    const server = app.listen(PORT, () => {
        logger.info(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
    });

    // Handle unhandled promise rejections
    process.on('unhandledRejection', (err, promise) => {
        logger.error(`Unhandled Rejection: ${err.message}`, err);
    });
};

startServer();
