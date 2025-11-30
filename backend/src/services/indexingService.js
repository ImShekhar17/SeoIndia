const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');

/**
 * Professional Google Indexing Service
 * Uses Google Indexing API to notify Google of new/updated URLs.
 * Requires: Service Account JSON key
 */
class IndexingService {
    static async activateIndexing(url) {
        try {
            console.log(`[IndexingService] Activating indexing for: ${url}`);

            // 1. Path to service account key
            // Admins should place their indexing-key.json in the backend root
            const keyPath = path.join(process.cwd(), 'indexing-key.json');

            if (!fs.existsSync(keyPath)) {
                console.warn('[IndexingService] Warning: indexing-key.json not found. Falling back to simulation mode.');
                // Return a "Ready to scale" status if key is missing
                return {
                    success: true,
                    mode: 'simulation',
                    message: 'Infrastructure ready. Add indexing-key.json for real-time activation.',
                    activatedAt: new Date()
                };
            }

            // 2. Initialize Auth
            const auth = new google.auth.GoogleAuth({
                keyFile: keyPath,
                scopes: ['https://www.googleapis.com/auth/indexing'],
            });

            const indexing = google.indexing({
                version: 'v3',
                auth: auth
            });

            // 3. Publish URL notification
            const response = await indexing.urlNotifications.publish({
                requestBody: {
                    url: url,
                    type: 'URL_UPDATED'
                }
            });

            console.log(`[IndexingService] Google API Response:`, response.data);

            return {
                success: true,
                mode: 'production',
                data: response.data,
                activatedAt: new Date()
            };

        } catch (error) {
            console.error(`[IndexingService] Error:`, error.message);
            throw new Error(`Indexing Failed: ${error.message}`);
        }
    }
}

module.exports = IndexingService;
