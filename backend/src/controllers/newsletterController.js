const { Subscriber, Newsletter } = require('../models');
const NewsletterService = require('../services/newsletterService');

// @desc    Subscribe to newsletter
// @route   POST /api/newsletter/subscribe
// @access  Public
exports.subscribe = async (req, res) => {
    try {
        const { email, name, source } = req.body;

        if (!email) {
            return res.status(400).json({ success: false, message: 'Email is required' });
        }

        const [subscriber, created] = await Subscriber.findOrCreate({
            where: { email },
            defaults: { name, source, status: 'active' }
        });

        if (!created && subscriber.status === 'active') {
            return res.status(400).json({ success: false, message: 'Email already subscribed' });
        }

        if (!created && subscriber.status === 'unsubscribed') {
            subscriber.status = 'active';
            await subscriber.save();
        }

        res.status(201).json({
            success: true,
            message: 'Subscribed successfully',
            data: subscriber
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};

// @desc    Unsubscribe from newsletter
// @route   POST /api/newsletter/unsubscribe
// @access  Public
exports.unsubscribe = async (req, res) => {
    try {
        const { email } = req.body;

        const subscriber = await Subscriber.findOne({ where: { email } });

        if (!subscriber) {
            return res.status(404).json({ success: false, message: 'Subscriber not found' });
        }

        subscriber.status = 'unsubscribed';
        await subscriber.save();

        res.status(200).json({
            success: true,
            message: 'Unsubscribed successfully'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};

// @desc    Get all subscribers
// @route   GET /api/admin/newsletter/subscribers
// @access  Private/Admin
exports.getSubscribers = async (req, res) => {
    try {
        const subscribers = await Subscriber.findAll({
            order: [['createdAt', 'DESC']]
        });

        res.status(200).json({
            success: true,
            count: subscribers.length,
            data: subscribers
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};

// @desc    Send newsletter broadcast
// @route   POST /api/admin/newsletter/send
// @access  Private/Admin
exports.sendNewsletter = async (req, res) => {
    try {
        const { subject, content, recipientEmails } = req.body;

        if (!subject || !content) {
            return res.status(400).json({ success: false, message: 'Subject and content are required' });
        }

        let recipients;
        if (recipientEmails && recipientEmails.length > 0) {
            // Send to select individuals
            recipients = await Subscriber.findAll({
                where: {
                    email: recipientEmails,
                    status: 'active'
                }
            });
        } else {
            // Send to all active subscribers
            recipients = await Subscriber.findAll({
                where: { status: 'active' }
            });
        }

        if (recipients.length === 0) {
            return res.status(400).json({ success: false, message: 'No active recipients found' });
        }

        // Create newsletter record
        const newsletter = await Newsletter.create({
            subject,
            content,
            status: 'draft'
        });

        // Start bulk sending in background (don't await for huge lists to avoid timeout)
        NewsletterService.sendBulkEmail(subject, content, recipients, newsletter.id);

        res.status(200).json({
            success: true,
            message: `Newsletter broadcast started for ${recipients.length} recipients`,
            newsletterId: newsletter.id
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};
