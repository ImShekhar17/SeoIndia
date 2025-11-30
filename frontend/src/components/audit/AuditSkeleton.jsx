import React from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

const AuditSkeleton = ({ url, statusMessage }) => {
    return (
        <div className="flex flex-col min-h-screen bg-[#f2f4f7]">
            {/* Loading Header */}
            <div className="flex flex-col items-center justify-center pt-20 pb-10 text-center bg-white border-b border-gray-100">
                <div className="relative w-32 h-32 mb-10">
                    <motion.div
                        className="absolute inset-0 border-[6px] border-blue-50 rounded-full"
                    />
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
                        className="absolute inset-0 border-[6px] border-[#0071e3] border-t-transparent rounded-full shadow-[0_0_20px_rgba(0,113,227,0.2)]"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Search size={32} className="text-blue-600 animate-pulse" />
                    </div>
                </div>
                <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">Analyzing <span className="text-[#0071e3]">{url}</span></h2>
                <p className="text-gray-500 font-bold text-lg max-w-sm mx-auto leading-relaxed h-8">
                    {statusMessage}
                </p>
            </div>

            {/* Skeleton Content */}
            <div className="flex-1 max-w-7xl mx-auto w-full px-6 md:px-12 py-10 space-y-12">
                {/* Score Card Skeleton */}
                <div className="bg-white rounded-[40px] p-12 shadow-2xl shadow-blue-900/5 flex flex-col lg:flex-row gap-16 animate-pulse">
                    <div className="w-80 h-80 rounded-full bg-gray-100 shrink-0 mx-auto lg:mx-0" />
                    <div className="flex-1 space-y-8">
                        <div className="h-6 w-32 bg-gray-100 rounded-xl" />
                        <div className="h-20 w-full bg-gray-100 rounded-3xl" />
                        <div className="h-10 w-2/3 bg-gray-100 rounded-2xl" />
                        <div className="flex gap-12 pt-4">
                            {[1, 2, 3, 4, 5].map(i => (
                                <div key={i} className="w-20 h-24 bg-gray-100 rounded-2xl" />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Grid Skeletons */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 h-[400px] bg-white rounded-[40px] shadow-2xl shadow-blue-900/5 animate-pulse" />
                    <div className="h-[400px] bg-white rounded-[40px] shadow-2xl shadow-blue-900/5 animate-pulse" />
                </div>
            </div>
        </div>
    );
};

export default AuditSkeleton;
