const fs = require('fs').promises;
const path = require('path');

class MaintenanceService {
    constructor() {
        this.screenshotDir = path.join(__dirname, '../../public/screenshots');
        this.RETENTION_DAYS = 7;
    }

    /**
     * Initializes the maintenance cycle
     */
    async init() {
        console.log('🛡️ System Maintenance Service Initialized');
        // Initial clean on startup
        await this.cleanOldScreenshots();

        // Schedule daily cleanup (every 24 hours)
        setInterval(() => {
            this.cleanOldScreenshots();
        }, 24 * 60 * 60 * 1000);
    }

    /**
     * Removes screenshots older than the defined retention period
     */
    async cleanOldScreenshots() {
        try {
            console.log('🧹 Maintenance: Scanning for old assets...');
            const files = await fs.readdir(this.screenshotDir);
            const now = Date.now();
            let deletedCount = 0;

            for (const file of files) {
                if (file === '.gitkeep') continue;

                const filePath = path.join(this.screenshotDir, file);
                const stats = await fs.stat(filePath);

                const ageInDays = (now - stats.mtimeMs) / (1000 * 60 * 60 * 24);

                if (ageInDays > this.RETENTION_DAYS) {
                    await fs.unlink(filePath);
                    deletedCount++;
                }
            }

            if (deletedCount > 0) {
                console.log(`✅ Maintenance: Automatically purged ${deletedCount} expired screenshots.`);
            } else {
                console.log('✅ Maintenance: No expired assets found.');
            }
        } catch (error) {
            console.error('❌ Maintenance Error:', error.message);
        }
    }

    /**
     * Manually clear all assets (Admin triggered)
     */
    async clearAllScreenshots() {
        try {
            const files = await fs.readdir(this.screenshotDir);
            let deletedCount = 0;

            for (const file of files) {
                if (file === '.gitkeep') continue;
                const filePath = path.join(this.screenshotDir, file);
                await fs.unlink(filePath);
                deletedCount++;
            }
            return { success: true, count: deletedCount };
        } catch (error) {
            throw new Error(`Failed to clear assets: ${error.message}`);
        }
    }

    /**
     * Get disk usage statistics for the screenshots folder
     */
    async getStorageStats() {
        try {
            const files = await fs.readdir(this.screenshotDir);
            let totalSize = 0;

            for (const file of files) {
                if (file === '.gitkeep') continue;
                const stats = await fs.stat(path.join(this.screenshotDir, file));
                totalSize += stats.size;
            }

            return {
                fileCount: files.filter(f => f !== '.gitkeep').length,
                sizeBytes: totalSize,
                sizeFormatted: (totalSize / (1024 * 1024)).toFixed(2) + ' MB'
            };
        } catch (error) {
            return { fileCount: 0, sizeBytes: 0, sizeFormatted: '0 MB' };
        }
    }
}

module.exports = new MaintenanceService();
