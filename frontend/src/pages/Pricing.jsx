import React from 'react';
import { motion } from 'framer-motion';
import { Check, Shield, Zap, Trophy, Crown, ArrowUpRight, ArrowRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
    const plans = [
        {
            name: 'BASIC',
            price: '500',
            oldPrice: '700',
            priceColor: 'text-[#4CAF50]',
            keywords: '30 Keywords',
            icon: <Zap className="text-blue-400" size={24} />,
            features: [
                { text: '40 Backlinks (per month)', status: null },
                { text: 'Target Pages Optimized - Up to 10', status: null },
                { text: 'GBP (GMB)', status: false },
                { text: 'Geotagging', status: false },
                { text: 'G.E.O', status: false },
                { text: 'A.E.O', status: false },
                { text: 'AI Compatibility Testing', status: true },
                { text: 'AI Visibility Audit - 2 pages', status: null }
            ],
            popular: false
        },
        {
            name: 'SILVER',
            price: '700',
            oldPrice: '900',
            priceColor: 'text-[#666666]',
            keywords: '40 Keywords',
            icon: <Shield className="text-indigo-400" size={24} />,
            features: [
                { text: '60 Backlinks (per month)', status: null },
                { text: 'Target Pages Optimized - Up to 15', status: null },
                { text: 'GBP (GMB)', status: true },
                { text: 'Geotagging', status: false },
                { text: 'G.E.O', status: false },
                { text: 'A.E.O', status: false },
                { text: 'AI Compatibility Testing', status: true },
                { text: 'AI Visibility Audit - 4 pages', status: null }
            ],
            popular: false
        },
        {
            name: 'GOLD',
            price: '1000',
            oldPrice: '1200',
            priceColor: 'text-[#f5a623]',
            keywords: '50 Keywords',
            icon: <Trophy className="text-yellow-400" size={24} />,
            features: [
                { text: '100 Backlinks (per month)', status: null },
                { text: 'Target Pages Optimized - Up to 25', status: null },
                { text: 'GBP (GMB)', status: true },
                { text: 'Geotagging', status: true },
                { text: 'G.E.O', status: false },
                { text: 'A.E.O', status: false },
                { text: 'AI Compatibility Testing', status: true },
                { text: 'AI Visibility Audit - 6 pages', status: null }
            ],
            popular: true
        },
        {
            name: 'PREMIUM',
            price: '1800',
            oldPrice: '2000',
            priceColor: 'text-[#4a90e2]',
            keywords: '100 Keywords',
            icon: <Crown className="text-purple-400" size={24} />,
            features: [
                { text: '200 Backlinks (per month)', status: null },
                { text: 'Target Pages Optimized - Up to 40', status: null },
                { text: 'GBP (GMB)', status: true },
                { text: 'Geotagging', status: true },
                { text: 'G.E.O', status: true },
                { text: 'A.E.O', status: true },
                { text: 'AI Compatibility Testing', status: true },
                { text: 'AI Visibility Audit - 8 pages', status: null }
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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.8, ease: [0, 0.55, 0.45, 1] }}
                            viewport={{ once: true }}
                            className={`glass-card p-10 flex flex-col relative group h-full ${plan.popular
                                ? 'border-[#f5a623] bg-white ring-4 ring-[#f5a623]/20 shadow-xl'
                                : 'border-black/5 hover:border-[#0071e3]/20'
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-5 right-4 z-10 w-16">
                                    <img src="https://img.icons8.com/color/96/best-seller.png" alt="Best Seller" className="w-full drop-shadow-lg" />
                                </div>
                            )}

                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-black tracking-[0.15em] text-[#1d1d1f] mb-8">{plan.name}</h3>

                                <div className="flex flex-col items-center gap-1">
                                    <div className="flex items-start justify-center">
                                        <span className={`text-xl font-bold mt-2 ${plan.priceColor}`}>$</span>
                                        <span className={`text-5xl md:text-6xl font-black tracking-tighter ${plan.priceColor}`}>
                                            {plan.price}
                                        </span>
                                        <span className="text-4xl md:text-5xl font-black tracking-tighter text-[#1d1d1f]/30 line-through ml-2">
                                            {plan.oldPrice}
                                        </span>
                                    </div>
                                    <span className="text-[#1d1d1f] text-xs font-black uppercase italic">/ MONTH</span>
                                </div>
                            </div>

                            <div className="text-center mb-10">
                                <span className="text-[#1d1d1f] text-sm font-bold">{plan.keywords}</span>
                            </div>

                            <ul className="space-y-6 mb-12 flex-grow text-center">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="text-[13px] text-[#1d1d1f] font-bold flex items-center justify-center gap-2">
                                        {feature.text}
                                        {feature.status === true && <Check size={14} className="text-black inline" strokeWidth={3} />}
                                        {feature.status === false && <X size={14} className="text-black inline" strokeWidth={3} />}
                                    </li>
                                ))}
                            </ul>

                            <Link
                                to="/contact"
                                className={`w-full text-sm font-black py-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-500 ${plan.popular
                                    ? 'bg-[#f5a623] text-[#1d1d1f] hover:bg-[#ffb633] shadow-lg shadow-[#f5a623]/20'
                                    : 'bg-white text-[#1d1d1f] hover:bg-[#f5f5f7] border-2 border-[#1d1d1f]'
                                    }`}
                            >
                                START TODAY
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* FAQ Section Trigger */}
                <div className="mt-32 text-center">
                    <h3 className="text-2xl font-bold mb-4">Need a Tailored Engine?</h3>
                    <p className="text-[#86868b] mb-8 max-w-xl mx-auto">
                        We provide custom strategic models for Fortune 500 companies and high-growth unicorn startups.
                    </p>
                    <Link to="/contact" className="text-[#0071e3] font-black uppercase tracking-[0.2em] text-xs hover:opacity-70 transition-opacity flex items-center justify-center gap-2">
                        Connect with our strategy team <ArrowRight size={14} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
