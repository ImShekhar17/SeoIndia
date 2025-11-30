const { Audit, User, Setting } = require('../models');
const SeoService = require('../services/seoService');
const PdfService = require('../services/pdfService');
const cache = require('../services/cacheService');

// @desc    Start/Save an SEO Audit
// @route   POST /api/audits
// @access  Private/Public
exports.saveAudit = async (req, res, next) => {
    try {
        const { url } = req.body;

        if (!url) {
            return res.status(400).json({ success: false, message: 'Please provide a URL' });
        }

        // <META-SCALE-ARCH> 
        // Zero-Latency Caching Layer: Check for fresh audit (< 1 hour)
        const oneHourAgo = new Date(new Date() - 60 * 60 * 1000);
        const cachedAudit = await Audit.findOne({
            where: {
                url,
                status: 'completed',
                createdAt: { [require('sequelize').Op.gt]: oneHourAgo }
            },
            order: [['createdAt', 'DESC']]
        });

        if (cachedAudit) {
            return res.status(200).json({
                success: true,
                data: cachedAudit,
                cached: true
            });
        }
        // </META-SCALE-ARCH>

        const auditData = {
            url,
            status: 'pending'
        };

        // If user is logged in, associate the audit with them
        if (req.user) {
            auditData.userId = req.user.id;
        }

        const audit = await Audit.create(auditData);

        // Hyper-Scale Deduplication: Ensure only one analysis runs per URL
        cache.deduplicate(`audit:${url}`, () => SeoService.startAudit(audit.id, url));

        res.status(201).json({
            success: true,
            data: audit
        });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};

// @desc    Get user's audits
// @route   GET /api/audits/my-audits
// @access  Private
exports.getMyAudits = async (req, res, next) => {
    try {
        const audits = await Audit.findAll({
            where: { userId: req.user.id },
            order: [['createdAt', 'DESC']]
        });

        res.status(200).json({
            success: true,
            count: audits.length,
            data: audits
        });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};

// @desc    Get single audit
// @route   GET /api/audits/:id
// @access  Public/Private
exports.getAudit = async (req, res, next) => {
    try {
        const audit = await Audit.findByPk(req.params.id);

        if (!audit) {
            return res.status(404).json({ success: false, message: 'Audit not found' });
        }

        res.status(200).json({
            success: true,
            data: audit
        });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};

// @desc    Generate and stream Audit PDF
// @route   GET /api/audits/:id/pdf
// @access  Public/Private
exports.generatePdf = async (req, res, next) => {
    try {
        const audit = await Audit.findByPk(req.params.id);
        if (!audit) {
            return res.status(404).json({ success: false, message: 'Audit not found' });
        }

        if (audit.status !== 'completed') {
            return res.status(400).json({ success: false, message: 'Audit is not yet completed' });
        }

        // Get PDF settings
        const settings = await Setting.findOne({ where: { key: 'pdf_template' } });

        const pdfBuffer = await PdfService.generateAuditReport(audit, settings);

        const filename = `SEO_Audit_${audit.url.replace(/[^a-z0-0]/gi, '_').toLowerCase()}.pdf`;

        res.set({
            'Content-Type': 'application/pdf',
            'Content-Disposition': `attachment; filename="${filename}"`,
            'Content-Length': pdfBuffer.length
        });

        res.send(pdfBuffer);
    } catch (err) {
        console.error('PDF Generation Error:', err);
        res.status(500).json({ success: false, message: 'Failed to generate PDF' });
    }
};
