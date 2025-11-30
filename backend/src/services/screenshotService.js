const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

class ScreenshotService {
    constructor() {
        this.screenshotDir = path.join(__dirname, '../../public/screenshots');
        if (!fs.existsSync(this.screenshotDir)) {
            fs.mkdirSync(this.screenshotDir, { recursive: true });
        }
    }

    async capture(url, auditId) {
        let browser = null;
        try {
            console.log(`[ScreenshotService] Launching browser for ${url}`);
            browser = await puppeteer.launch({
                headless: 'new',
                args: ['--no-sandbox', '--disable-setuid-sandbox']
            });

            const page = await browser.newPage();
            // Use a professional User-Agent to avoid being blocked by WAFs
            await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

            // 1. Capture Desktop
            await page.setViewport({ width: 1920, height: 1080 });
            await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });

            const desktopFilename = `desktop_${auditId}.jpg`;
            await page.screenshot({
                path: path.join(this.screenshotDir, desktopFilename),
                type: 'jpeg',
                quality: 80
            });

            // 2. Capture Mobile (iPhone X viewport)
            await page.setViewport({ width: 375, height: 812, isMobile: true });
            await page.reload({ waitUntil: 'networkidle2' });

            const mobileFilename = `mobile_${auditId}.jpg`;
            await page.screenshot({
                path: path.join(this.screenshotDir, mobileFilename),
                type: 'jpeg',
                quality: 80
            });

            const renderedHtml = await page.content();

            console.log(`[ScreenshotService] Captured: ${desktopFilename}, ${mobileFilename}`);

            return {
                desktop: `/public/screenshots/${desktopFilename}`,
                mobile: `/public/screenshots/${mobileFilename}`,
                html: renderedHtml
            };

        } catch (error) {
            console.error('[ScreenshotService] Error:', error.message);
            return { desktop: null, mobile: null };
        } finally {
            if (browser) await browser.close();
        }
    }
}

module.exports = new ScreenshotService();
