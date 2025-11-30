import React from 'react';
import { RecommendationRow } from './AuditUtils';
import { ArrowRight } from 'lucide-react';

const AuditRecommendations = ({ issues }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div id="recommendations" className="lg:col-span-2 bg-white rounded-[40px] shadow-2xl shadow-blue-900/5 border border-white overflow-hidden scroll-mt-28">
                <div className="p-10 border-b border-gray-100 flex justify-between items-center">
                    <div>
                        <h3 className="text-2xl font-black text-gray-900 mb-1">Top Recommendations</h3>
                        <p className="text-gray-400 font-bold text-xs uppercase tracking-widest">Priority task list for immediate ranking gains</p>
                    </div>
                </div>
                <div className="divide-y divide-gray-100">
                    {issues.length > 0 ? (
                        issues.map((issue, idx) => (
                            <RecommendationRow
                                key={idx}
                                title={issue.message}
                                priority={issue.type === 'Critical' ? 'High' : issue.type === 'Warning' ? 'Medium' : 'Low'}
                                category={issue.check || "SEO Issue"}
                            />
                        ))
                    ) : (
                        <div className="p-10 text-center text-gray-500 font-bold uppercase tracking-widest text-xs">
                            No major issues found!
                        </div>
                    )}
                </div>
            </div>

            <div className="space-y-8">
                <div className="bg-[#0a1128] rounded-[40px] p-10 text-white relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600 rounded-full blur-[80px] opacity-20 -mr-16 -mt-16" />
                    <h4 className="text-xl font-black mb-8 relative z-10 italic">Premium Suite</h4>
                    <div className="space-y-4 relative z-10">
                        {['SEO Crawler', 'Keyword Research', 'Backlink Monitor', 'Bulk Reporting'].map((tool, i) => (
                            <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-all cursor-pointer">
                                <span className="text-sm font-black text-gray-400">{tool}</span>
                                <ArrowRight size={14} className="text-blue-500" />
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-10 py-5 bg-blue-600 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20">
                        Unlock Full Suite
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AuditRecommendations;
