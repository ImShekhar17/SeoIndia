const axios = require('axios');
const cheerio = require('cheerio');
const urlParser = require('url-parse');
const robotsParser = require('robots-parser');

class CrawlerService {
    constructor(baseUrl, options = {}) {
        this.baseUrl = baseUrl;
        this.domain = new urlParser(baseUrl).hostname;
        this.maxDepth = options.maxDepth || 1;
        this.maxPages = options.maxPages || 10;
        // Use a professional, browser-like User-Agent to prevent blocking
        this.userAgent = options.userAgent || 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';
        this.visited = new Set();
        this.queue = [];
        this.robots = null;
    }

    async init() {
        // fetch robots.txt
        const robotsUrl = `${new urlParser(this.baseUrl).origin}/robots.txt`;
        try {
            const res = await axios.get(robotsUrl, {
                timeout: 5000,
                validateStatus: null // Don't throw on 404
            });
            if (res.status === 200) {
                this.robots = robotsParser(robotsUrl, res.data);
            }
        } catch (err) {
            console.log('Robots.txt not found or unreachable, proceeding assuming allowed.');
        }
    }

    isAllowed(url) {
        if (!this.robots) return true;
        return this.robots.isAllowed(url, this.userAgent);
    }

    async crawl() {
        await this.init();

        this.queue.push({ url: this.baseUrl, depth: 0 });
        const results = [];

        while (this.queue.length > 0 && this.visited.size < this.maxPages) {
            const { url, depth } = this.queue.shift();

            if (this.visited.has(url)) continue;
            if (depth > this.maxDepth) continue;

            // Optional: Log robots.txt restriction but don't hard block user-initiated audit
            if (!this.isAllowed(url)) {
                console.log(`[Crawler] URL ${url} is restricted by robots.txt but proceeding for user audit.`);
            }

            this.visited.add(url);

            try {
                const startTime = Date.now();
                const res = await axios.get(url, {
                    timeout: 8000,
                    headers: { 'User-Agent': this.userAgent }
                });
                const loadTime = Date.now() - startTime;

                results.push({
                    url,
                    status: res.status,
                    data: res.data,
                    headers: res.headers,
                    loadTime,
                    size: res.data.length
                });

                // Extract links if depth allows
                if (depth < this.maxDepth && res.headers['content-type']?.includes('text/html')) {
                    const $ = cheerio.load(res.data);
                    $('a[href]').each((i, el) => {
                        let link = $(el).attr('href');
                        if (!link) return;

                        // Resolve relative URLs
                        try {
                            if (link.startsWith('/')) {
                                link = `${new urlParser(this.baseUrl).origin}${link}`;
                            } else if (!link.startsWith('http')) {
                                return;
                            }

                            const parsed = new urlParser(link);
                            if (parsed.hostname === this.domain && !this.visited.has(link)) {
                                this.queue.push({ url: link, depth: depth + 1 });
                            }
                        } catch (e) { /* ignore invalid urls */ }
                    });
                }

            } catch (err) {
                results.push({
                    url,
                    status: err.response?.status || 500,
                    data: '',
                    headers: err.response?.headers || {},
                    loadTime: 0,
                    size: 0,
                    error: err.message
                });
            }
        }

        return results;
    }
}

module.exports = CrawlerService;
