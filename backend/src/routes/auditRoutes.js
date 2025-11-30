const express = require('express');
const { saveAudit, getMyAudits, getAudit, generatePdf } = require('../controllers/auditController');
const { protect, optionalProtect } = require('../middleware/auth');
const validate = require('../middleware/validate');
const { auditSchema } = require('../utils/validationSchemas');

const router = express.Router();

// Public/Private mixed route
const optionalAuth = async (req, res, next) => {
    try {
        const { protect } = require('../middleware/auth');
        // This is a hacky way to allow public access but attach user if present
        // In a real app, you'd extract the logic or use a specific middleware
        await protect(req, res, () => { });
        next();
    } catch (err) {
        next();
    }
};

const { auditLimiter } = require('../middleware/rateLimiter');

router.post('/', auditLimiter, optionalProtect, validate(auditSchema), saveAudit); // Usually called from frontend after audit is done
router.get('/my-audits', protect, getMyAudits);
router.get('/:id', getAudit);
router.get('/:id/pdf', generatePdf);

module.exports = router;
