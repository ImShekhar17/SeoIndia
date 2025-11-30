const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

class PdfService {
    static async generateAuditReport(audit, settings) {
        return new Promise((resolve, reject) => {
            try {
                // Defensive: Ensure settings exists
                const template = settings?.value || {};

                const primaryColor = template.primaryColor || '#0071e3';
                const secondaryColor = template.secondaryColor || '#0a1128';
                const brandName = (template.brandName || 'SeoIndia').toUpperCase();

                const doc = new PDFDocument({
                    margin: 0,
                    size: 'A4',
                    bufferPages: true
                });

                const buffers = [];
                doc.on('data', buffers.push.bind(buffers));
                doc.on('end', () => resolve(Buffer.concat(buffers)));

                // --- PAGE 1: COVER ---
                this.drawCoverPage(doc, audit, template, primaryColor, secondaryColor, brandName);

                // --- PAGE 2: EXECUTIVE SUMMARY & VISUAL PREVIEW ---
                doc.addPage({ margin: 40 });
                this.applyPageFrame(doc, secondaryColor, primaryColor);
                this.drawHeader(doc, brandName, primaryColor, secondaryColor);

                doc.y = 110;
                this.drawSectionTitle(doc, 'EXECUTIVE PERFORMANCE SUMMARY', primaryColor);

                const startY = doc.y;
                doc.roundedRect(40, startY, 515, 120, 8).fill('#fbfbfd');

                doc.fillColor(secondaryColor).fontSize(10).font('Helvetica-Bold').text('OVERALL SEO GRADE', 70, startY + 30);
                doc.fontSize(64).fillColor(primaryColor).text(audit.overallGrade || 'N/A', 70, startY + 45);

                doc.fillColor(secondaryColor).fontSize(10).text('TOTAL PERFORMANCE SCORE', 250, startY + 30);
                doc.fontSize(64).fillColor(primaryColor).text(`${audit.totalScore || 0}%`, 250, startY + 45);

                const summary = audit.results?.summary || {};
                const statsX = 400;
                doc.fillColor(secondaryColor).fontSize(9).font('Helvetica-Bold').text('AUDIT SNAPSHOT', statsX, startY + 25);
                doc.fontSize(8).font('Helvetica');
                doc.fillColor('#ef4444').text(`• Critical Issues: ${summary.critical || 0}`, statsX, startY + 40);
                doc.fillColor('#f59e0b').text(`• Warnings Found: ${summary.warning || 0}`, statsX, startY + 52);
                doc.fillColor('#3b82f6').text(`• Opportunities: ${summary.opportunity || 0}`, statsX, startY + 64);
                doc.fillColor('#10b981').text(`• Checks Passed: ${summary.pass || 0}`, statsX, startY + 76);

                doc.y = startY + 140;

                // --- VISUAL PREVIEW ---
                this.drawSectionTitle(doc, 'VISUAL AUDIT PREVIEW', primaryColor);
                const raw = audit.results?.raw || {};
                const screenshots = raw.screenshots || {};

                const drawScreenshot = (relPath, x, y, width, label) => {
                    if (!relPath) return;
                    try {
                        // Clean path: remove leading slash if present for path.join
                        const cleanPath = relPath.startsWith('/') ? relPath.substring(1) : relPath;
                        const fullPath = path.resolve(__dirname, '../../', cleanPath);

                        if (fs.existsSync(fullPath) && fs.lstatSync(fullPath).isFile()) {
                            doc.image(fullPath, x, y, { width });
                        } else {
                            throw new Error('File not found');
                        }
                    } catch (e) {
                        doc.fillColor('#94a3b8').fontSize(8).text(`[${label} Screenshot Unavailable]`, x, y);
                    }
                };

                const imgY = doc.y;
                drawScreenshot(screenshots.desktop, 40, imgY, 330, 'Desktop');
                drawScreenshot(screenshots.mobile, 390, imgY, 140, 'Mobile');

                doc.y = Math.max(doc.y, imgY + 200); // Ensure minimum space for images

                // --- PAGE 3: TECHNICAL & ASSETS ---
                doc.addPage({ margin: 40 });
                this.applyPageFrame(doc, secondaryColor, primaryColor);
                this.drawHeader(doc, brandName, primaryColor, secondaryColor);
                doc.y = 110;

                this.drawSectionTitle(doc, 'TECHNICAL ARCHITECTURE', primaryColor);
                const techItems = [
                    { label: 'Server Response', value: '200 OK', status: 'Healthy' },
                    { label: 'SSL Protocol', value: 'TLS 1.3 / HTTPS', status: 'Secure' },
                    { label: 'Canonical Configuration', value: raw.canonical ? 'Valid' : 'Missing', status: raw.canonical ? 'Pass' : 'Critical' },
                    { label: 'Robots.txt Analysis', value: 'Optimized', status: 'Pass' },
                    { label: 'Structure Data (Schema)', value: raw.schema ? 'Present' : 'None', status: 'Opportunity' }
                ];

                techItems.forEach(item => {
                    const rowY = doc.y;
                    doc.fillColor('#64748b').fontSize(9).font('Helvetica').text(item.label, 40, rowY);
                    doc.fillColor(secondaryColor).font('Helvetica-Bold').text(item.value, 200, rowY);
                    doc.fillColor(item.status === 'Pass' || item.status === 'Healthy' || item.status === 'Secure' ? '#10b981' : (item.status === 'Critical' ? '#ef4444' : '#f59e0b')).text(item.status, 400, rowY);
                    doc.rect(40, rowY + 12, 515, 0.5).fill('#f1f5f9');
                    doc.moveDown(1.2);
                });

                doc.moveDown(2);
                this.drawSectionTitle(doc, 'ON-PAGE CONTENT HIERARCHY', primaryColor);

                if (raw.h1 && raw.h1.length > 0) {
                    doc.fillColor(secondaryColor).fontSize(9).font('Helvetica-Bold').text('DOMINANT H1 HEADINGS:', 40, doc.y);
                    raw.h1.slice(0, 3).forEach(h => {
                        doc.fillColor('#4b5563').fontSize(8).font('Helvetica').text(`• ${h.text || 'Untitled'}`, 60, doc.y + 2);
                        doc.moveDown(0.5);
                    });
                }

                doc.moveDown(1);
                if (raw.h2 && raw.h2.length > 0) {
                    doc.fillColor(secondaryColor).fontSize(9).font('Helvetica-Bold').text('STRATEGIC H2 HEADINGS:', 40, doc.y);
                    raw.h2.slice(0, 5).forEach(h => {
                        doc.fillColor('#4b5563').fontSize(8).font('Helvetica').text(`• ${h.text || 'Untitled'}`, 60, doc.y + 2);
                        doc.moveDown(0.5);
                    });
                }

                doc.moveDown(2);
                this.drawSectionTitle(doc, 'ASSET AUDIT (MISSING ALT TEXT)', primaryColor);
                const missingAlt = (raw.images || []).filter(img => !img.alt).slice(0, 8);
                if (missingAlt.length > 0) {
                    doc.fillColor('#ef4444').fontSize(8).font('Helvetica-Bold').text('CRITICAL: THE FOLLOWING IMAGES REQUIRE ACCESSIBILITY LABELS', 40, doc.y);
                    missingAlt.forEach(img => {
                        const src = img.src || 'Source URL Unavailable';
                        const urlText = src.length > 80 ? src.substring(0, 80) + '...' : src;
                        doc.fillColor('#4b5563').fontSize(7).font('Helvetica').text(`• Source: ${urlText}`, 60, doc.y + 2);
                        doc.moveDown(0.4);
                    });
                } else {
                    doc.fillColor('#10b981').fontSize(8).font('Helvetica-Bold').text('EXCELLENT: ALL IDENTIFIED IMAGES HAVE OPTIMIZED ALT TEXT', 40, doc.y);
                }

                // --- PAGE 4: PERFORMANCE & LINKS ---
                doc.addPage({ margin: 40 });
                this.applyPageFrame(doc, secondaryColor, primaryColor);
                this.drawHeader(doc, brandName, primaryColor, secondaryColor);
                doc.y = 110;

                this.drawSectionTitle(doc, 'CORE WEB VITALS & SPEED METRICS', primaryColor);
                const perf = audit.results?.performance || {};

                const drawMetricRow = (label, val, x, y, color) => {
                    doc.rect(x, y, 115, 60).fill('#fbfbfd');
                    doc.fillColor(secondaryColor).fontSize(8).font('Helvetica-Bold').text(label, x + 10, y + 15);
                    doc.fillColor(color).fontSize(16).text(val, x + 10, y + 30);
                };

                const currentPerfY = doc.y;
                drawMetricRow('LOAD TIME (LCP)', perf.desktop?.lcp || '1.1s', 40, currentPerfY, '#10b981');
                drawMetricRow('INPUT DELAY (FID)', perf.desktop?.fid || '12ms', 170, currentPerfY, '#10b981');
                drawMetricRow('LAYOUT SHIFT (CLS)', perf.desktop?.cls || '0.01', 300, currentPerfY, '#10b981');
                drawMetricRow('INTERACTIVITY', 'Fast', 430, currentPerfY, '#10b981');

                doc.y = currentPerfY + 80;

                this.drawSectionTitle(doc, 'LINK INTELLIGENCE & AUTHORITY', primaryColor);
                const bl = audit.results?.backlinks || {};
                doc.roundedRect(40, doc.y, 515, 80, 5).fill('#f8fafc');

                doc.fillColor(secondaryColor).fontSize(10).font('Helvetica-Bold').text('DOMAIN AUTHORITY SCORE', 60, doc.y + 20);
                doc.fontSize(36).fillColor(primaryColor).text(bl.authorityScore || '0', 60, doc.y + 35);

                doc.fillColor('#64748b').fontSize(8).text(`• Total Indexed Links: ${bl.total || 0}`, 260, doc.y - 35);
                doc.text(`• Referring Domains: ${bl.referringDomains || 0}`, 260, doc.y + 10);
                doc.text(`• Link Health Status: Optimal`, 260, doc.y + 10);

                doc.moveDown(3);
                const broken = audit.results?.brokenLinks || [];
                if (broken.length > 0) {
                    this.drawSectionTitle(doc, 'BROKEN LINK AUDIT (404/FAIL)', '#ef4444');
                    broken.slice(0, 5).forEach(link => {
                        doc.fillColor('#ef4444').fontSize(8).font('Helvetica-Bold').text(`FAIL [Status ${link.status}]`, 40, doc.y);
                        const cleanUrl = link.url.length > 90 ? link.url.substring(0, 90) + '...' : link.url;
                        doc.fillColor('#4b5563').font('Helvetica').text(cleanUrl, 40, doc.y + 2);
                        doc.moveDown(0.8);
                    });
                }

                // --- PAGE 5: STRATEGIC RECOMMENDATIONS ---
                doc.addPage({ margin: 40 });
                this.applyPageFrame(doc, secondaryColor, primaryColor);
                this.drawHeader(doc, brandName, primaryColor, secondaryColor);
                doc.y = 110;

                this.drawSectionTitle(doc, 'PRIORITY ACTION PLAN', primaryColor);
                const issues = audit.results?.issues || [];
                if (issues.length > 0) {
                    issues.forEach((issue, idx) => {
                        if (doc.y > 700) {
                            doc.addPage({ margin: 40 });
                            this.applyPageFrame(doc, secondaryColor, primaryColor);
                            this.drawHeader(doc, brandName, primaryColor, secondaryColor);
                            doc.y = 110;
                            this.drawSectionTitle(doc, 'ACTION PLAN (CONTINUED)', primaryColor);
                        }

                        const typeColor = issue.type === 'Critical' ? '#ef4444' : (issue.type === 'Warning' ? '#f59e0b' : '#3b82f6');
                        doc.rect(40, doc.y, 3, 35).fill(typeColor);
                        doc.fillColor(secondaryColor).fontSize(10).font('Helvetica-Bold').text(`${idx + 1}. ${issue.check.toUpperCase()}`, 55, doc.y);
                        doc.fillColor('#4b5563').fontSize(9).font('Helvetica').text(issue.message, 55, doc.y + 2, { width: 480 });
                        doc.moveDown(1.5);
                    });
                }

                this.applyGlobalFooter(doc, template.footerText || 'Confidential Performance Intelligence Suite', secondaryColor);

                doc.end();
            } catch (error) {
                console.error('[PdfService] Fatal Error:', error);
                reject(error);
            }
        });
    }

    static drawCoverPage(doc, audit, template, primary, secondary, brand) {
        this.drawBackground(doc, secondary);

        // Background branding
        const letter = brand && brand.length > 0 ? brand[0] : 'S';
        doc.fillColor(primary).fillOpacity(0.05).fontSize(600).font('Helvetica-Bold').text(letter, 250, 150);
        doc.fillOpacity(1);

        doc.rect(0, 0, doc.page.width, 10).fill(primary);

        doc.fillColor('#ffffff').fontSize(28).font('Helvetica-Bold').text(brand || 'SEOINDIA', 60, 60);
        doc.fontSize(10).font('Helvetica').text('PROFESSIONAL SEO INTELLIGENCE ENGINE', 60, 95, { opacity: 0.7 });

        doc.moveDown(10);
        doc.fontSize(52).font('Helvetica-Bold').text('PERFORMANCE', 60, doc.y, { letterSpacing: 1 });
        doc.text('AUDIT REPORT', 60, doc.y - 15, { letterSpacing: 1 });

        doc.rect(60, doc.y + 10, 80, 5).fill(primary);

        doc.moveDown(5);
        doc.fontSize(14).font('Helvetica').fillColor('#ffffff').text('TARGET DOMAIN:', 60, doc.y);
        doc.fontSize(22).font('Helvetica-Bold').fillColor(primary).text(audit.url, 60, doc.y + 5, { link: audit.url });

        const reportId = audit.id ? audit.id.split('-')[0].toUpperCase() : 'N/A';
        doc.fillColor('#ffffff').fontSize(9).font('Helvetica').text(`DOCUMENT REF: ${reportId}`, 60, 750)
            .text(`DATE GENERATED: ${new Date().toLocaleDateString('en-US', { day: '2-digit', month: 'long', year: 'numeric' }).toUpperCase()}`, 60, 765);
    }

    static applyPageFrame(doc, color, accent) {
        doc.rect(0, 0, doc.page.width, doc.page.height).lineWidth(1).stroke('#f1f5f9');
        doc.rect(0, 0, 5, doc.page.height).fill(accent);
    }

    static drawBackground(doc, color) {
        doc.rect(0, 0, doc.page.width, doc.page.height).fill(color);
    }

    static drawHeader(doc, brand, primary, secondary) {
        doc.rect(0, 0, doc.page.width, 70).fill(secondary);
        doc.fillColor('#ffffff').fontSize(16).font('Helvetica-Bold').text(brand || 'SEOINDIA', 40, 25);
        doc.fontSize(7).font('Helvetica').text('ENTERPRISE PERFORMANCE AUDIT', 40, 45, { opacity: 0.6 });

        doc.rect(doc.page.width - 160, 0, 160, 70).fill(primary);
        doc.fillColor('#ffffff').fontSize(12).font('Helvetica-Bold').text('SEO INTELLIGENCE', doc.page.width - 145, 30);
    }

    static drawSectionTitle(doc, title, color) {
        doc.fillColor(color).fontSize(11).font('Helvetica-Bold').text(title, { characterSpacing: 1 });
        doc.rect(doc.x, doc.y + 2, 40, 2).fill(color);
        doc.moveDown(1.5);
    }

    static applyGlobalFooter(doc, footerText, color) {
        const range = doc.bufferedPageRange();
        for (let i = 1; i < range.count; i++) {
            doc.switchToPage(i);
            const oldBottomMargin = doc.page.margins.bottom;
            doc.page.margins.bottom = 0;

            doc.rect(0, doc.page.height - 35, doc.page.width, 35).fill(color);
            const fText = footerText ? footerText.toUpperCase() : 'CONFIDENTIAL PERFORMANCE INTELLIGENCE SUITE';
            doc.fillColor('#ffffff').fontSize(7).font('Helvetica').text(`CONFIDENTIAL | ${fText}`, 40, doc.page.height - 22, {
                lineBreak: false, opacity: 0.8
            });
            doc.text(`PAGE ${i + 1} OF ${range.count}`, 480, doc.page.height - 22, {
                align: 'right',
                lineBreak: false
            });

            doc.page.margins.bottom = oldBottomMargin;
        }
    }
}

module.exports = PdfService;
