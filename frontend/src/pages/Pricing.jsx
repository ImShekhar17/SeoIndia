import React from 'react';
import { motion } from 'framer-motion';
import { Check, Shield, Zap, Trophy, Crown, ArrowUpRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
    const plans = [
        {
            name: 'Basic',
            price: '15,000',
            keywords: '25 Keywords',
            icon: <Zap className="text-blue-400" size={24} />,
            description: 'Ideal for startups looking to establish initial search presence.',
            features: [
                'On-Page Optimization',
                'Technical SEO Audit',
                'Monthly Reporting',
                'Keyword research'
            ],
            popular: false
        },
        {
            name: 'Silver',
            price: '22,000',
            keywords: '45-50 Keywords',
            icon: <Shield className="text-indigo-400" size={24} />,
            description: 'Advanced optimization for growing small-to-medium businesses.',
            features: [
                'Everything in Basic',
                'Content Strategy',
                'Link Building (Basic)',
                'Competitor Analysis'
            ],
            popular: false
        },
        {
            name: 'Gold',
            price: '30,000',
            keywords: '100 Keywords',
            icon: <Trophy className="text-yellow-400" size={24} />,
            description: 'Strategic dominant search engine visibility for aggressive scale.',
            features: [
                'Everything in Silver',
                'Advanced Link Building',
                'Weekly Updates',
                'Conversion Optimization'
            ],
            popular: true
        },
        {
            name: 'Premium',
            price: '40,000',
            keywords: '150-200 Keywords',
            icon: <Crown className="text-purple-400" size={24} />,
            description: 'Full-scale market dominance for enterprise tech companies.',
            features: [
                'Everything in Gold',
                'Full Authority Building',
                'Dedicated SEO Manager',
                'Priority 24/7 Support'
            ],
            popular: false
        }
    ];

    return (
        <div className="bg-[#fbfbfd] min-h-screen pt-44 pb-32 selection:bg-indigo-100">
            {/* Background Decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-[#0071e3]/5 to-transparent -z-10 blur-3xl opacity-50" />

            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-24 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0071e3]/5 text-[#0071e3] text-[10px] font-black uppercase tracking-widest mb-6"
                    >
                        Flexible Plans
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold mb-8 text-[#1d1d1f]"
                    >
                        Strategic <span className="text-gradient">Investment</span>
                    </motion.h1>
                    <p className="text-[#86868b] text-xl font-medium leading-relaxed">
                        Choose the intelligence level required to dominate your niche.
                        No hidden costs, purely performance-driven growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.8, ease: [0, 0.55, 0.45, 1] }}
                            viewport={{ once: true }}
                            className={`glass-card p-10 flex flex-col relative group h-full ${plan.popular
                                ? 'border-[#0071e3]/30 bg-white ring-2 ring-[#0071e3]/10 shadow-lg shadow-indigo-500/5'
                                : 'border-black/5 hover:border-[#0071e3]/20'
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0071e3] text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-xl">
                                    Recommended
                                </div>
                            )}

                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 rounded-xl bg-[#f5f5f7] border border-black/5 group-hover:border-[#0071e3]/20 transition-all duration-500">
                                    {plan.icon}
                                </div>
                                <h3 className="text-2xl font-bold tracking-tight text-[#1d1d1f]">{plan.name}</h3>
                            </div>

                            <div className="mb-6">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl md:text-5xl font-black text-[#1d1d1f] tracking-tighter">₹{plan.price}</span>
                                    <span className="text-[#86868b] text-sm font-bold uppercase tracking-widest">/mo</span>
                                </div>
                            </div>

                            <div className="text-[#0071e3] text-[11px] font-black uppercase tracking-widest mb-8 py-1.5 px-4 rounded-full bg-[#0071e3]/5 border border-[#0071e3]/10 w-fit">
                                {plan.keywords}
                            </div>

                            <p className="text-[#86868b] text-sm mb-10 leading-relaxed font-medium">
                                {plan.description}
                            </p>

                            <ul className="space-y-5 mb-12 flex-grow">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-4 text-[13px] text-[#1d1d1f]/70 font-semibold group/item">
                                        <div className="w-5 h-5 rounded-full bg-[#0071e3]/5 flex items-center justify-center shrink-0 group-hover/item:bg-[#0071e3] transition-colors">
                                            <Check size={12} className="text-[#0071e3] group-hover/item:text-white" />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Link
                                to="/contact"
                                className={`w-full text-sm font-bold uppercase tracking-widest py-4 rounded-full flex items-center justify-center gap-2 transition-all duration-500 ${plan.popular
                                    ? 'bg-[#0071e3] text-white hover:bg-[#0077ed] shadow-xl shadow-[#0071e3]/20'
                                    : 'bg-[#f5f5f7] text-[#1d1d1f] hover:bg-[#eaeaea] border border-black/5'
                                    }`}
                            >
                                Select Plan <ArrowUpRight size={16} />
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* FAQ Section Trigger */}
                <div className="mt-32 text-center">
                    <h3 className="text-2xl font-bold mb-4">Need a Tailored Engine?</h3>
                    <p className="text-slate-500 mb-8 max-w-xl mx-auto">
                        We provide custom strategic models for Fortune 500 companies and high-growth unicorn startups.
                    </p>
                    <Link to="/contact" className="text-indigo-400 font-black uppercase tracking-[0.2em] text-xs hover:text-indigo-300 transition-colors flex items-center justify-center gap-2">
                        Connect with our strategy team <ArrowRight size={14} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
