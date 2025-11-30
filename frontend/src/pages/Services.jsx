import React from 'react';
import { motion } from 'framer-motion';
import { Search, Code, Share2, TrendingUp, Cpu, Globe, Zap, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
    const services = [
        {
            title: 'Neural SEO Analysis',
            icon: <Cpu className="text-indigo-400" />,
            description: 'We utilize AI-driven data modeling to predict search algorithm shifts before they happen.',
            features: ['Intent Mapping', 'Semantic Graphing', 'AI Content Integrity'],
            color: 'indigo'
        },
        {
            title: 'Technical Dominance',
            icon: <Code className="text-cyan-400" />,
            description: 'Infrastructure-level optimization ensuring crawl efficiency and lighthouse-perfect performance.',
            features: ['Server-Side Edge SEO', 'Schema Engineering', 'Core Web Vitals'],
            color: 'cyan'
        },
        {
            title: 'Strategic Link Equity',
            icon: <Share2 className="text-indigo-400" />,
            description: 'Acquiring high-authority backlinks from established enterprise domains in your industry.',
            features: ['PR Distribution', 'Editorial Outreach', 'Niche-Relevant Equity'],
            color: 'indigo'
        },
        {
            title: 'Global Organic Scale',
            icon: <Globe className="text-cyan-400" />,
            description: 'Expanding your reach beyond borders with advanced multi-lingual and regional strategies.',
            features: ['Hreflang Mastery', 'Local Search Dominance', 'Cross-Border Visibility'],
            color: 'cyan'
        }
    ];

    return (
        <div className="bg-[#fbfbfd] min-h-screen pt-44 pb-32">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0071e3]/5 text-[#0071e3] text-[10px] font-black uppercase tracking-widest mb-6"
                    >
                        Engineering Dominance
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-bold mb-8 text-[#1d1d1f] tracking-tighter"
                    >
                        Our Core <span className="text-gradient">Capabilities</span>
                    </motion.h1>
                    <p className="text-[#86868b] text-xl max-w-2xl font-medium leading-relaxed">
                        We don't just offer services; we build growth engines. Every solution is tailored
                        to the specific neural profile of your industry.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            className="glass-card flex flex-col lg:flex-row gap-12 group hover:bg-[#f5f5f7] p-12 overflow-hidden"
                        >
                            <div className="lg:w-1/3">
                                <div className="w-16 h-16 rounded-2xl bg-[#f5f5f7] border border-black/5 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[#0071e3]/10 group-hover:border-[#0071e3]/30 transition-all duration-500">
                                    {React.cloneElement(service.icon, { size: 32 })}
                                </div>
                                <h3 className="text-3xl font-bold mb-4 text-[#1d1d1f]">{service.title}</h3>
                                <p className="text-[#86868b] leading-relaxed font-medium">
                                    {service.description}
                                </p>
                            </div>

                            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
                                {service.features.map((feature, i) => (
                                    <div key={i} className="p-6 rounded-2xl bg-[#f5f5f7]/50 border border-black/5 flex flex-col justify-between hover:bg-white transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/5">
                                        <Target size={20} className="text-[#0071e3] mb-6" />
                                        <span className="text-[14px] font-bold text-[#1d1d1f]/70 uppercase tracking-widest leading-snug">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="mt-32 p-16 rounded-[40px] bg-gradient-to-r from-indigo-600 to-indigo-900 overflow-hidden relative"
                >
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
                    <div className="relative z-10 text-center max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Optimize Your Destiny?</h2>
                        <p className="text-indigo-100/70 text-lg mb-12 font-medium">
                            Join the elite circle of companies dominating search results globally.
                        </p>
                        <Link to="/contact" className="premium-button text-black bg-white hover:bg-slate-100 px-12 py-5 text-lg font-black uppercase tracking-widest shadow-2xl">
                            Initiate Strategy Session <Zap size={20} fill="currentColor" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Services;
