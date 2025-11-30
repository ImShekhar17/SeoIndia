import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, AlertCircle, ArrowRight } from 'lucide-react';

export const MetricCircle = ({ value, grade, label, color }) => (
    <div className="flex flex-col items-center">
        <div className="relative w-16 h-16 md:w-20 md:h-20 mb-3 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90">
                <circle cx="50%" cy="50%" r="42%" className="stroke-gray-100 fill-none" strokeWidth="8" />
                <motion.circle
                    cx="50%" cy="50%" r="42%" className={`${color.stroke} fill-none`} strokeWidth="8" strokeLinecap="round"
                    initial={{ strokeDasharray: "0 1000" }} animate={{ strokeDasharray: `${(value / 100) * 264} 1000` }} transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
                <span className={`text-md md:text-xl font-black ${color.text}`}>{grade}</span>
            </div>
        </div>
        <span className="text-[10px] md:text-xs font-black text-gray-500 uppercase tracking-widest">{label}</span>
    </div>
);

export const RecommendationRow = ({ title, priority, category }) => (
    <div className="p-6 md:p-8 hover:bg-blue-50/30 transition-all flex items-start gap-4 md:gap-6 group">
        <div className={`mt-1.5 shrink-0 w-8 h-8 rounded-xl flex items-center justify-center ${priority === 'High' ? 'bg-red-50 text-red-500' : priority === 'Medium' ? 'bg-orange-50 text-orange-500' : 'bg-blue-50 text-blue-500'}`}>
            {priority === 'High' ? <AlertCircle size={18} /> : <CheckCircle2 size={18} />}
        </div>
        <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
                <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded ${priority === 'High' ? 'bg-red-100 text-red-600' : priority === 'Medium' ? 'bg-orange-100 text-orange-600' : 'bg-blue-100 text-blue-600'}`}>
                    {priority} Priority
                </span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{category}</span>
            </div>
            <h4 className="text-gray-900 font-bold md:text-lg group-hover:text-blue-600 transition-colors">{title}</h4>
        </div>
        <button className="self-center p-3 rounded-xl bg-gray-50 text-gray-400 opacity-0 group-hover:opacity-100 transition-all hover:bg-blue-600 hover:text-white">
            <ArrowRight size={18} />
        </button>
    </div>
);
