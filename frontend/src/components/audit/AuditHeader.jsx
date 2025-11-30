import React from 'react';
import { Globe, Download, Share2 } from 'lucide-react';

const AuditHeader = ({ url, handleDownloadPDF, handleShare }) => {
    return (
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 md:mb-10 gap-6">
            <div className="w-full lg:w-auto">
                <div className="flex items-center gap-2 md:gap-3 text-[#0071e3] font-black text-xs md:text-sm uppercase tracking-widest mb-2">
                    <Globe size={14} className="md:w-4 md:h-4" /> Website Analysis Report
                </div>
                <h1 className="text-2xl md:text-4xl font-black text-gray-900 break-all">Report for <span className="text-[#0071e3]">{url}</span></h1>
            </div>
            <div className="flex gap-3 md:gap-4 w-full lg:w-auto">
                <button
                    onClick={handleDownloadPDF}
                    className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-4 md:px-8 py-3 md:py-4 bg-white border border-gray-200 rounded-2xl font-black hover:bg-gray-50 transition-all text-[10px] md:text-xs uppercase tracking-widest shadow-sm active:scale-95"
                >
                    <Download size={16} className="md:w-[18px]" /> <span className="hidden md:inline">Download PDF</span><span className="md:hidden">PDF</span>
                </button>
                <button
                    onClick={handleShare}
                    className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-4 md:px-8 py-3 md:py-4 bg-[#fea116] text-white rounded-2xl font-black hover:bg-orange-600 transition-all text-[10px] md:text-xs uppercase tracking-widest shadow-xl shadow-orange-500/20 active:scale-95"
                >
                    <Share2 size={16} className="md:w-[18px]" /> share
                </button>
            </div>
        </div>
    );
};

export default AuditHeader;
