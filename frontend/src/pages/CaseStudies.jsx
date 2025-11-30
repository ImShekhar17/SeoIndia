import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Search, ArrowUpRight, BarChart3, Globe, Zap } from 'lucide-react';

const CaseStudies = () => {
    const cases = [
        {
            title: 'Global SaaS Expansion',
            result: '+340% Traffic',
            description: 'How we helped a B2B SaaS platform dominate search results in 6 months.',
            tags: ['Enterprise SaaS', 'Neural Strategy', 'Backlinks'],
            icon: <TrendingUp className="text-emerald-400" />,
            color: 'emerald'
        },
        {
            title: 'E-commerce Revenue Lift',
            result: '₹2.5Cr/mo Growth',
            description: 'Technical SEO overhaul for a leading lifestyle brand with global presence.',
            tags: ['Retail Dominance', 'Technical Audit', 'CRO'],
            icon: <Users className="text-blue-400" />,
            color: 'blue'
        },
        {
            title: 'Fintech Market Dominance',
            result: 'Rank #1 for 50+ Keywords',
            description: 'Authority building for a competitive fintech startup in the European market.',
            tags: ['Fintech Protocols', 'Authority', 'Market Ranking'],
            icon: <Search className="text-purple-400" />,
            color: 'purple'
        }
    ];

    return (
        <div className="bg-[#fbfbfd] min-h-screen pt-44 pb-32">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0071e3]/5 text-[#0071e3] text-[10px] font-black uppercase tracking-widest mb-6"
                    >
                        Verified Outcomes
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-bold mb-8 text-[#1d1d1f] tracking-tighter"
                    >
                        Empirical <span className="text-gradient">Evidence</span>
                    </motion.h1>
                    <p className="text-[#86868b] text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                        We don't promise results; we architect them. View the data models
                        behind some of our most successful enterprise deployments.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {cases.map((cs, index) => (
                        <motion.div
                            key={cs.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            viewport={{ once: true }}
                            className="glass-card flex flex-col group cursor-pointer hover:border-[#0071e3]/20 transition-all duration-500 overflow-hidden bg-white shadow-xl shadow-indigo-500/5"
                        >
                            <div className="mb-8 p-5 rounded-2xl bg-[#f5f5f7] border border-black/5 w-fit group-hover:bg-[#0071e3] group-hover:text-white transition-all duration-500">
                                {React.cloneElement(cs.icon, { size: 28 })}
                            </div>

                            <h3 className="text-2xl font-bold mb-3 group-hover:text-[#0071e3] transition-colors tracking-tight text-[#1d1d1f]">{cs.title}</h3>
                            <div className="text-3xl font-black text-[#1d1d1f] mb-6 tracking-tighter">{cs.result}</div>

                            <p className="text-[#86868b] mb-10 leading-relaxed font-lg flex-grow">
                                {cs.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-10">
                                {cs.tags.map(tag => (
                                    <span key={tag} className="text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1.5 bg-[#f5f5f7] rounded-lg border border-black/5 text-[#86868b]">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="pt-8 border-t border-black/5 flex items-center justify-between text-xs font-black uppercase tracking-[0.2em] text-[#86868b] group-hover:text-[#0071e3] transition-colors">
                                <span>View Strategic Case</span>
                                <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500 text-[#0071e3]" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Global Impact Summary */}
                <div className="mt-32 p-12 glass-card border-[#0071e3]/10 bg-[#0071e3]/5 text-center shadow-2xl shadow-indigo-500/5">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div>
                            <div className="text-4xl font-black text-[#1d1d1f] mb-2 tracking-tighter">50M+</div>
                            <div className="text-[#86868b] text-[10px] font-black uppercase tracking-widest">Aggregate Traffic Growth</div>
                        </div>
                        <div>
                            <div className="text-4xl font-black text-[#1d1d1f] mb-2 tracking-tighter">1.2k+</div>
                            <div className="text-[#86868b] text-[10px] font-black uppercase tracking-widest">Dominant Keywords</div>
                        </div>
                        <div>
                            <div className="text-4xl font-black text-[#1d1d1f] mb-2 tracking-tighter">₹240Cr+</div>
                            <div className="text-[#86868b] text-[10px] font-black uppercase tracking-widest">Incremental Client Revenue</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaseStudies;
