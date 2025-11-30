import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getMarketData } from '../data/markets';
import { ArrowRight, CheckCircle2, BarChart3, Users, Zap } from 'lucide-react';

const MarketDetail = () => {
    const { marketSlug } = useParams();
    const data = getMarketData(marketSlug);

    return (
        <div className="pt-32 pb-20 bg-white">
            <div className="container mx-auto px-6">
                {/* Hero Section */}
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-50 text-blue-600 font-bold text-xs uppercase tracking-widest"
                    >
                        {data.title}
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight"
                    >
                        {data.headline}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 leading-relaxed mb-10"
                    >
                        {data.description}
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all flex items-center gap-2 group shadow-lg shadow-blue-500/20">
                            Get Free Audit <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-all">
                            View Case Studies
                        </button>
                    </motion.div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                    {data.stats.map((stat, idx) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + (idx * 0.1) }}
                            className="bg-gray-50 rounded-[32px] p-10 border border-gray-100 text-center hover:shadow-xl transition-all"
                        >
                            <div className="text-4xl font-black text-blue-600 mb-2">{stat.value}</div>
                            <div className="text-gray-500 font-semibold uppercase text-xs tracking-widest">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Features Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold mb-8 text-gray-900">Why {data.title} Matters</h2>
                        <div className="space-y-6">
                            {data.benefits.map((benefit, idx) => (
                                <div key={idx} className="flex items-start gap-4">
                                    <div className="mt-1 bg-green-50 p-1 rounded-full">
                                        <CheckCircle2 size={20} className="text-green-600" />
                                    </div>
                                    <p className="text-lg text-gray-700 font-medium">{benefit}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-square bg-blue-50 rounded-[40px] flex items-center justify-center overflow-hidden">
                            {/* Decorative Elements */}
                            <div className="absolute inset-0 opacity-20">
                                <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl" />
                                <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-400 rounded-full blur-3xl" />
                            </div>
                            <BarChart3 size={120} className="text-blue-600 relative z-10" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default MarketDetail;
