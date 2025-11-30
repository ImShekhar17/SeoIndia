const sendEmail = require('../utils/sendEmail');
const { Subscriber, Newsletter } = require('../models');

class NewsletterService {
    /**
     * Send bulk email to a list of subscribers
     * @param {string} subject 
     * @param {string} content 
     * @param {Array} subscribers - List of subscriber objects
     * @param {string} newsletterId - ID for tracking (optional)
     */
    static async sendBulkEmail(subject, content, subscribers, newsletterId = null) {
        const BATCH_SIZE = 50;
        const totalSubscribers = subscribers.length;
        let successfullySent = 0;

        for (let i = 0; i < totalSubscribers; i += BATCH_SIZE) {
            const batch = subscribers.slice(i, i + BATCH_SIZE);
            const batchPromises = batch.map(async (subscriber) => {
                try {
                    await sendEmail({
                        email: subscriber.email,
                        subject: subject,
                        html: content,
                        message: content.replace(/<[^>]*>?/gm, '') // Simple text fallback
                    });
                    return true;
                } catch (error) {
                    console.error(`Failed to send email to ${subscriber.email}:`, error);
                    return false;
                }
            });

            const results = await Promise.all(batchPromises);
            successfullySent += results.filter(res => res).length;

            // Optional: Small delay between batches to respect rate limits
            if (i + BATCH_SIZE < totalSubscribers) {
                await new Promise(resolve => setTimeout(resolve, 1000));
            }
        }

        // Update Newsletter status if ID provided
        if (newsletterId) {
            await Newsletter.update({
                sentCount: successfullySent,
                status: 'sent',
                sentAt: new Date()
            }, {
                where: { id: newsletterId }
            });
        }

        return {
            total: totalSubscribers,
            sent: successfullySent
        };
    }
}

module.exports = NewsletterService;
