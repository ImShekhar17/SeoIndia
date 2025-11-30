import React from 'react';
import { motion } from 'framer-motion';

const AuditTechnical = ({ performance }) => {
    return (
        <section id="technical" className="bg-white rounded-[40px] shadow-2xl shadow-blue-900/5 border border-white overflow-hidden scroll-mt-28">
            <div className="p-10 border-b border-gray-100 flex items-center justify-between">
                <div>
                    <h3 className="text-2xl font-black text-gray-900 mb-1">Performance & Core Web Vitals</h3>
                    <p className="text-gray-400 font-bold text-xs uppercase tracking-widest">Loading Speed & User Experience</p>
                </div>
                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 font-black">A+</div>
            </div>
            <div className="p-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {[
                        { label: 'LCP', full: 'Largest Contentful Paint', value: performance?.desktop?.vitals?.lcp || '1.2s', status: 'Fast', color: 'text-green-500', bg: 'bg-green-50' },
                        { label: 'FID', full: 'First Input Delay', value: performance?.desktop?.vitals?.fid || '14ms', status: 'Fast', color: 'text-green-500', bg: 'bg-green-50' },
                        { label: 'CLS', full: 'Cumulative Layout Shift', value: performance?.desktop?.vitals?.cls || '0.01', status: 'Perfect', color: 'text-green-500', bg: 'bg-green-50' }
                    ].map((vital, i) => (
                        <div key={i} className={`p-8 rounded-[32px] ${vital.bg} border border-green-100/50`}>
                            <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">{vital.label}</div>
                            <div className={`text-4xl font-black mb-1 ${vital.color}`}>{vital.value}</div>
                            <div className="text-xs font-bold text-gray-500">{vital.full}</div>
                            <div className="mt-4 flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500" />
                                <span className="text-[10px] font-black uppercase text-green-600">{vital.status}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="bg-gray-50 rounded-3xl p-10">
                    <h4 className="text-lg font-black text-gray-900 mb-8">Resource Breakdown</h4>
                    <div className="space-y-6">
                        {[
                            { type: 'Images', size: '1.2 MB', color: 'bg-blue-600', percent: '65%' },
                            { type: 'JavaScript', size: '450 KB', color: 'bg-yellow-400', percent: '20%' },
                            { type: 'CSS', size: '85 KB', color: 'bg-pink-500', percent: '10%' },
                            { type: 'HTML', size: '24 KB', color: 'bg-green-500', percent: '5%' }
                        ].map((res, i) => (
                            <div key={i} className="space-y-2">
                                <div className="flex justify-between text-xs font-black uppercase tracking-tight">
                                    <span className="text-gray-900">{res.type}</span>
                                    <span className="text-gray-400">{res.size}</span>
                                </div>
                                <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: res.percent }}
                                        transition={{ duration: 1, delay: i * 0.1 }}
                                        className={`h-full ${res.color}`}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AuditTechnical;
