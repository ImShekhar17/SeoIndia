const cheerio = require('cheerio');

class AnalysisEngine {
    static analyze(html, context = {}) {
        const $ = cheerio.load(html);
        const { url = '', loadTime, headers = {}, size } = context;

        const data = {
            url,
            loadTime: loadTime || 0,
            pageSize: size || 0,
            title: $('title').text().trim() || '',
            description: $('meta[name="description"]').attr('content') || '',
            keywords: $('meta[name="keywords"]').attr('content') || '',
            canonical: $('link[rel="canonical"]').attr('href') || '',
            robots: $('meta[name="robots"]').attr('content') || '',

            // Struct Data
            schema: $('script[type="application/ld+json"]').length > 0,

            // Headings
            h1: $('h1').map((i, el) => $(el).text().trim()).get(),
            h2: $('h2').map((i, el) => $(el).text().trim()).get(),
            h3: $('h3').map((i, el) => $(el).text().trim()).get(),

            // Images
            images: $('img').map((i, el) => ({
                src: $(el).attr('src'),
                alt: $(el).attr('alt') || ''
            })).get(),

            // Enhanced Links (Backlink Identity)
            links: $('a').map((i, el) => {
                let href = $(el).attr('href');
                const text = $(el).text().trim();
                const rel = $(el).attr('rel') || '';

                // Resolve relative URLs
                if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('javascript:')) {
                    try {
                        const base = url.startsWith('http') ? url : `https://${url}`;
                        const baseUrl = new URL(base);
                        href = new URL(href, baseUrl.origin).href;
                    } catch (e) {
                        // Keep as is if invalid
                    }
                }

                const isExternal = href && href.startsWith('http') && !href.includes(context.domain);

                return {
                    text: text || '[No Text]',
                    href,
                    rel,
                    type: isExternal ? 'external' : 'internal',
                    isNoFollow: rel.includes('nofollow')
                };
            }).get().filter(l => l.href && l.href.startsWith('http')),

            // Social
            ogTitle: $('meta[property="og:title"]').attr('content') || '',
            ogImage: $('meta[property="og:image"]').attr('content') || '',
            twitterCard: $('meta[name="twitter:card"]').attr('content') || '',

            // Technical/Server
            server: headers['server'] || 'Unknown',
            cacheControl: headers['cache-control'] || '',

            // Usability Heuristics
            viewport: $('meta[name="viewport"]').attr('content') || '',
            favicon: $('link[rel="icon"], link[rel="shortcut icon"]').attr('href') || '',

            // Screenshots
            screenshots: context.screenshots || { desktop: null, mobile: null }
        };

        return data;
    }
}

module.exports = AnalysisEngine;
