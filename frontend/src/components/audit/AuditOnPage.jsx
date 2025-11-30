import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle } from 'lucide-react';

const AuditOnPage = ({ raw }) => {
    return (
        <section id="on-page" className="bg-white rounded-[40px] shadow-2xl shadow-blue-900/5 border border-white overflow-hidden scroll-mt-28">
            <div className="p-10 border-b border-gray-100 flex items-center justify-between">
                <div>
                    <h3 className="text-2xl font-black text-gray-900 mb-1">On-Page SEO Analysis</h3>
                    <p className="text-gray-400 font-bold text-xs uppercase tracking-widest">HTML Structure & Meta Data</p>
                </div>
                <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 font-black">A</div>
            </div>
            <div className="p-10 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-6">
                        <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-xs font-black text-gray-400 uppercase tracking-widest">Title Tag</span>
                                {raw.title ? <CheckCircle2 size={16} className="text-green-500" /> : <AlertCircle size={16} className="text-red-500" />}
                            </div>
                            <p className="text-gray-900 font-bold mb-2 truncate">{raw.title || 'No title tag found'}</p>
                            <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${Math.min(100, (raw.title?.length || 0) * 1.5)}%` }}
                                    className={`h-full ${raw.title?.length > 30 && raw.title?.length < 60 ? 'bg-green-500' : 'bg-orange-500'}`}
                                />
                            </div>
                            <p className="text-[10px] text-gray-400 mt-2 font-bold uppercase">{raw.title?.length || 0} Characters</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-xs font-black text-gray-400 uppercase tracking-widest">Meta Description</span>
                                {raw.description ? <CheckCircle2 size={16} className="text-green-500" /> : <AlertCircle size={16} className="text-orange-500" />}
                            </div>
                            <p className="text-gray-900 font-bold mb-2 line-clamp-2">{raw.description || 'Meta description missing'}</p>
                            <p className="text-[10px] text-gray-400 mt-4 font-black uppercase tracking-widest">Length: {raw.description?.length || 0}</p>
                        </div>
                    </div>
                    <div className="bg-[#0a1128] rounded-3xl p-8 text-white">
                        <h4 className="text-sm font-black uppercase tracking-[0.2em] text-blue-400 mb-6">Header Hierarchy</h4>
                        <div className="space-y-5">
                            {[
                                { tag: 'H1', count: raw.h1?.length || 0, status: (raw.h1?.length === 1) ? 'Perfect' : 'Review' },
                                { tag: 'H2', count: raw.h2?.length || 0, status: 'Good' },
                                { tag: 'Images', count: raw.images?.length || 0, status: 'Extracted' },
                                { tag: 'Links', count: raw.links?.length || 0, status: 'Crawlable' }
                            ].map((h, i) => (
                                <div key={i} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                                    <span className="font-black text-xl">{h.tag}</span>
                                    <div className="flex items-center gap-4">
                                        <span className="text-blue-500 font-black">{h.count} Found</span>
                                        <span className="text-[10px] bg-white/10 px-2 py-1 rounded text-gray-400 uppercase font-black">{h.status}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AuditOnPage;
