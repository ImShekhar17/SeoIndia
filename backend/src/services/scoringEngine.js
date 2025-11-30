/**
 * ScoringEngine.js
 * Professional-grade SEO rules engine with weighted scoring and severity levels.
 */

const RULES = {
    // --- ON-PAGE SEO ---
    title: {
        weight: 10,
        category: 'onPage',
        check: (data) => {
            if (!data.title) return { score: 0, severity: 'Critical', message: 'Missing Title Tag' };
            if (data.title.length < 10) return { score: 5, severity: 'Warning', message: 'Title is too short (<10 chars)' };
            if (data.title.length > 60) return { score: 5, severity: 'Warning', message: 'Title is too long (>60 chars)' };
            return { score: 10, severity: 'Pass', message: 'Title tag is optimized' };
        }
    },
    description: {
        weight: 10,
        category: 'onPage',
        check: (data) => {
            if (!data.description) return { score: 0, severity: 'Critical', message: 'Missing Meta Description' };
            if (data.description.length < 50) return { score: 5, severity: 'Warning', message: 'Meta Description too short' };
            if (data.description.length > 160) return { score: 5, severity: 'Warning', message: 'Meta Description too long' };
            return { score: 10, severity: 'Pass', message: 'Meta Description is optimized' };
        }
    },
    h1: {
        weight: 10,
        category: 'onPage',
        check: (data) => {
            if (!data.h1 || data.h1.length === 0) return { score: 0, severity: 'Critical', message: 'Missing H1 Heading' };
            if (data.h1.length > 1) return { score: 5, severity: 'Warning', message: 'Multiple H1 Tags found (should be one)' };
            return { score: 10, severity: 'Pass', message: 'H1 Tag usage is correct' };
        }
    },
    images: {
        weight: 10,
        category: 'onPage',
        check: (data) => {
            if (data.images.length === 0) return { score: 10, severity: 'Pass', message: 'No images found' };
            const missingAlt = data.images.filter(img => !img.alt).length;
            if (missingAlt > 0) return {
                score: Math.max(0, 10 - (missingAlt * 2)),
                severity: 'Warning',
                message: `${missingAlt} images are missing ALT text`
            };
            return { score: 10, severity: 'Pass', message: 'All images have ALT text' };
        }
    },

    // --- TECHNICAL SEO ---
    canonical: {
        weight: 10,
        category: 'technical',
        check: (data) => {
            if (!data.canonical) return { score: 0, severity: 'Warning', message: 'Missing Canonical Tag' };
            return { score: 10, severity: 'Pass', message: 'Canonical Tag is present' };
        }
    },
    schema: {
        weight: 10,
        category: 'technical',
        check: (data) => {
            if (!data.schema) return { score: 0, severity: 'Opportunity', message: 'No Structured Data (Schema.org) detected' };
            return { score: 10, severity: 'Pass', message: 'Structured Data detected' };
        }
    },
    robots: {
        weight: 5,
        category: 'technical',
        check: (data) => {
            if (!data.robots) return { score: 5, severity: 'Pass', message: 'No restrictive Robots tag found' };
            if (data.robots.includes('noindex')) return { score: 0, severity: 'Critical', message: 'Page is blocked from indexing (noindex)' };
            return { score: 5, severity: 'Pass', message: 'Robots tag allowed' };
        }
    },
    https: {
        weight: 5,
        category: 'technical',
        check: (data) => {
            if (data.url && !data.url.startsWith('https')) return { score: 0, severity: 'Critical', message: 'Site is not using HTTPS' };
            return { score: 5, severity: 'Pass', message: 'Valid HTTPS connection' };
        }
    },

    // --- PERFORMANCE ---
    loadTime: {
        weight: 15,
        category: 'performance',
        check: (data) => {
            if (data.loadTime > 3000) return { score: 0, severity: 'Critical', message: `Slow Load Time (${(data.loadTime / 1000).toFixed(2)}s)` };
            if (data.loadTime > 1500) return { score: 8, severity: 'Warning', message: `Average Load Time (${(data.loadTime / 1000).toFixed(2)}s)` };
            return { score: 15, severity: 'Pass', message: `Fast Load Time (${(data.loadTime / 1000).toFixed(2)}s)` };
        }
    },
    pageSize: {
        weight: 5,
        category: 'performance',
        check: (data) => {
            // Heuristic: > 5MB is heavy
            if (data.pageSize && data.pageSize > 5 * 1024 * 1024) return { score: 0, severity: 'Warning', message: 'Page size is very heavy (>5MB)' };
            return { score: 5, severity: 'Pass', message: 'Page size is optimal' };
        }
    },

    // --- LINKS/AUTHORITY ---
    internalLinks: {
        weight: 5,
        category: 'links',
        check: (data) => {
            if (data.links.length < 5) return { score: 0, severity: 'Opportunity', message: 'Very few internal links found' };
            return { score: 5, severity: 'Pass', message: 'Good internal linking structure' };
        }
    },

    // --- SOCIAL ---
    socialMedia: {
        weight: 5,
        category: 'social',
        check: (data) => {
            if (!data.ogTitle) return { score: 0, severity: 'Opportunity', message: 'Missing Open Graph (Social) Tags' };
            return { score: 5, severity: 'Pass', message: 'Social Meta Tags presnet' };
        }
    }
};

class ScoringEngine {
    static calculate(analysisData) {
        let totalScore = 0;
        let maxScore = 0;
        const results = {
            summary: { critical: 0, warning: 0, opportunity: 0, pass: 0 },
            issues: [],
            categories: {
                onPage: { score: 0, total: 0 },
                technical: { score: 0, total: 0 },
                performance: { score: 0, total: 0 },
                links: { score: 0, total: 0 },
                social: { score: 0, total: 0 }
            }
        };

        for (const [key, rule] of Object.entries(RULES)) {
            const result = rule.check(analysisData);

            // Accumulate scores
            totalScore += result.score;
            maxScore += rule.weight;

            // Category scores
            results.categories[rule.category].score += result.score;
            results.categories[rule.category].total += rule.weight;

            // Stats
            if (result.severity !== 'Pass') {
                results.summary[result.severity.toLowerCase()]++;
                results.issues.push({
                    type: result.severity, // Critical, Warning, Opportunity
                    check: key,
                    message: result.message,
                    deduction: rule.weight - result.score
                });
            } else {
                results.summary.pass++;
            }
        }

        // Normalize Scores
        const finalScore = Math.round((totalScore / maxScore) * 100);

        // Normalize Category Scores
        Object.keys(results.categories).forEach(cat => {
            const c = results.categories[cat];
            c.percentage = c.total > 0 ? Math.round((c.score / c.total) * 100) : 0;
        });

        // Grading
        let grade = 'A';
        if (finalScore < 50) grade = 'F';
        else if (finalScore < 60) grade = 'D';
        else if (finalScore < 75) grade = 'C';
        else if (finalScore < 90) grade = 'B';

        return {
            score: finalScore,
            grade,
            breakdown: results
        };
    }
}

module.exports = ScoringEngine;
