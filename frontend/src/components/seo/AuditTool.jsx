import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Globe, Shield, ArrowRight, Zap, Target, BarChart3, Globe2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AuditTool = () => {
    const [url, setUrl] = useState('');
    const navigate = useNavigate();

    const handleAudit = (e) => {
        e.preventDefault();
        if (!url) return;
        // Navigate to results page (Audit.jsx)
        navigate('/audit', { state: { url } });
    };

    return (
        <section className="relative pt-32 pb-24 overflow-hidden bg-white">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 -skew-x-12 translate-x-1/4 -z-10" />

            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-bold mb-8"
                    >
                        <Zap size={16} />
                        <span>Now with AI-powered GEO related checks</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight"
                    >
                        SEO Audit & <span className="text-[#0071e3]">Reporting Tool</span>
                        <div className="text-2xl md:text-3xl font-bold text-gray-400 mt-2">+ Comprehensive SEO Toolset</div>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto font-medium"
                    >
                        Identify problems that are holding your site back. Get a clear, actionable, prioritized list of recommendations to help you rank higher.
                    </motion.p>

                    <motion.form
                        onSubmit={handleAudit}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="relative max-w-2xl mx-auto mb-16"
                    >
                        <div className="flex flex-col md:flex-row gap-4 p-2 bg-white rounded-2xl shadow-2xl border border-gray-100">
                            <div className="flex-grow relative flex items-center">
                                <Globe2 className="absolute left-4 text-gray-400" size={20} />
                                <input
                                    type="text"
                                    placeholder="Enter your website URL (e.g., example.com)"
                                    className="w-full pl-12 pr-4 py-4 rounded-xl text-lg font-medium focus:outline-none placeholder:text-gray-400"
                                    value={url}
                                    onChange={(e) => setUrl(e.target.value)}
                                />
                            </div>
                            <button
                                type="submit"
                                className="px-10 py-4 bg-[#fea116] hover:bg-[#e68a00] text-white font-black text-lg rounded-xl transition-all shadow-xl shadow-orange-500/20 flex items-center justify-center gap-2 group"
                            >
                                AUDIT <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                        <p className="mt-4 text-gray-400 text-sm font-bold">Enter an URL address and get a Free Website Analysis!</p>
                    </motion.form>

                    {/* Trust Logos */}
                    <div className="pt-12 border-t border-gray-100">
                        <p className="text-sm font-black text-gray-400 uppercase tracking-widest mb-8">Trusted by industry leaders</p>
                        <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all">
                            <span className="text-2xl font-bold">Deloitte.</span>
                            <span className="text-2xl font-bold">iProspect.</span>
                            <span className="text-2xl font-bold">Ogilvy</span>
                            <span className="text-2xl font-bold">shopify</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AuditTool;
