import React from 'react';
import { motion } from 'framer-motion';
import { MetricCircle } from './AuditUtils';

const AuditScoreCard = ({ auditData }) => {
    const getGrade = (pct) => {
        if (pct >= 90) return 'A+';
        if (pct >= 80) return 'A';
        if (pct >= 70) return 'B';
        if (pct >= 60) return 'C';
        return 'D';
    };

    return (
        <div id="grade-breakdown" className="bg-white rounded-[32px] md:rounded-[40px] p-6 md:p-12 shadow-2xl shadow-blue-900/5 border border-white scroll-mt-28">
            <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16">
                {/* Main Grade Circle */}
                <div className="shrink-0">
                    <div className="relative w-48 h-48 md:w-80 md:h-80 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle cx="50%" cy="50%" r="44%" className="stroke-gray-100 fill-none" strokeWidth={window.innerWidth < 768 ? "12" : "16"} />
                            <motion.circle
                                cx="50%" cy="50%" r="44%" className="stroke-blue-600 fill-none" strokeWidth={window.innerWidth < 768 ? "12" : "16"} strokeLinecap="round"
                                initial={{ strokeDasharray: "0 1000" }} animate={{ strokeDasharray: "850 1000" }} transition={{ duration: 2, ease: "easeOut" }}
                            />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-6xl md:text-9xl font-black text-gray-900">{auditData.overallGrade}</span>
                            <span className="text-[10px] md:text-xs font-black text-blue-600 uppercase tracking-[0.2em] md:tracking-[0.3em] mt-1 md:mt-2">Overall Score {auditData.totalScore}%</span>
                        </div>
                    </div>
                </div>

                {/* Summary Text */}
                <div className="flex-1 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-xl bg-green-50 text-green-600 text-[10px] font-black uppercase tracking-widest mb-4 md:mb-6">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500 animate-pulse" />
                        Your page is good
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 md:mb-8 leading-tight">
                        Better than <span className="text-[#0071e3]">{Math.round(auditData.totalScore * 0.9)}% of websites</span> in your industry.
                    </h2>
                    <p className="text-gray-500 text-lg font-medium mb-10 max-w-xl">
                        We've analyzed your on-page SEO, link profile, and social signals. Here is your prioritized task list to reach an A+ grade.
                    </p>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-8 md:gap-12">
                        <MetricCircle value={auditData.results.categories?.onPage?.percentage || 0} grade={getGrade(auditData.results.categories?.onPage?.percentage || 0)} label="On-Page" color={{ stroke: 'stroke-green-500', text: 'text-green-500' }} />
                        <MetricCircle value={auditData.results.categories?.links?.percentage || 0} grade={getGrade(auditData.results.categories?.links?.percentage || 0)} label="Links" color={{ stroke: 'stroke-blue-500', text: 'text-blue-500' }} />
                        <MetricCircle value={auditData.results.categories?.technical?.percentage || 0} grade={getGrade(auditData.results.categories?.technical?.percentage || 0)} label="Tech" color={{ stroke: 'stroke-orange-500', text: 'text-orange-500' }} />
                        <MetricCircle value={auditData.results.categories?.performance?.percentage || 0} grade={getGrade(auditData.results.categories?.performance?.percentage || 0)} label="Speed" color={{ stroke: 'stroke-emerald-500', text: 'text-emerald-500' }} />
                        <MetricCircle value={auditData.results.categories?.social?.percentage || 0} grade={getGrade(auditData.results.categories?.social?.percentage || 0)} label="Social" color={{ stroke: 'stroke-indigo-500', text: 'text-indigo-500' }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuditScoreCard;
