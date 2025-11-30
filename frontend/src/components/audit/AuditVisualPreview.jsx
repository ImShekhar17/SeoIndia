import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Globe } from 'lucide-react';

const AuditVisualPreview = ({ auditData, previewView, setPreviewView }) => {
    return (
        <section id="visual-preview" className="bg-white rounded-[40px] shadow-2xl shadow-blue-900/5 border border-white overflow-hidden mb-12 scroll-mt-28">
            <div className="p-10 border-b border-gray-100 flex items-center justify-between">
                <div>
                    <h3 className="text-2xl font-black text-gray-900 mb-1">Visual Preview</h3>
                    <p className="text-gray-400 font-bold text-xs uppercase tracking-widest">How your page looks on different devices</p>
                </div>
                <div className="flex gap-4">
                    <button
                        onClick={() => setPreviewView(previewView === 'mobile' ? 'both' : 'mobile')}
                        className={`p-3 rounded-xl transition-all ${previewView === 'mobile' ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' : 'bg-blue-50 text-blue-600 hover:bg-blue-100'}`}
                        title="Mobile View"
                    >
                        <Smartphone size={20} />
                    </button>
                    <button
                        onClick={() => setPreviewView(previewView === 'desktop' ? 'both' : 'desktop')}
                        className={`p-3 rounded-xl transition-all ${previewView === 'desktop' ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' : 'bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-600'}`}
                        title="Desktop View"
                    >
                        <Globe size={20} />
                    </button>
                </div>
            </div>
            <div className="p-10">
                <div className={`grid grid-cols-1 ${previewView === 'both' ? 'md:grid-cols-2' : ''} gap-12`}>
                    <AnimatePresence mode="popLayout">
                        {(previewView === 'both' || previewView === 'mobile') && (
                            <motion.div
                                key="preview-mobile"
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="space-y-4"
                            >
                                <div className="flex items-center justify-between px-2">
                                    <span className="text-xs font-black text-gray-400 uppercase tracking-widest">Mobile View</span>
                                    <span className="text-xs font-bold text-green-500">Optimized ({auditData.results.performance?.mobile?.score ?? '--'})</span>
                                </div>
                                <div className="max-w-[300px] mx-auto w-full">
                                    <div className="aspect-[9/16] bg-gray-100 rounded-[32px] border-[8px] border-gray-900 overflow-hidden relative group shadow-2xl">
                                        <div className="absolute inset-x-0 top-0 h-6 bg-gray-900 rounded-b-xl mx-auto w-1/3 z-10" />
                                        {auditData.results.raw.screenshots?.mobile ? (
                                            <img
                                                src={`${import.meta.env.VITE_BASE_URL}${auditData.results.raw.screenshots.mobile}`}
                                                alt="Mobile Preview"
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full p-4 flex flex-col gap-4">
                                                <div className="w-2/3 h-4 bg-gray-200 rounded-md" />
                                                <div className="w-full aspect-video bg-gray-200 rounded-xl" />
                                                <div className="space-y-2">
                                                    <div className="w-full h-3 bg-gray-200 rounded" />
                                                    <div className="w-full h-3 bg-gray-200 rounded" />
                                                    <div className="w-1/2 h-3 bg-gray-200 rounded" />
                                                </div>
                                                <div className="mt-auto flex items-center justify-center text-gray-400 text-xs font-bold uppercase tracking-widest">
                                                    Preview Unavailable
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {(previewView === 'both' || previewView === 'desktop') && (
                            <motion.div
                                key="preview-desktop"
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="space-y-4 flex-grow"
                            >
                                <div className="flex items-center justify-between px-2">
                                    <span className="text-xs font-black text-gray-400 uppercase tracking-widest">Desktop View</span>
                                    <span className="text-xs font-bold text-green-500">Perfect ({auditData.results.performance?.desktop?.score ?? '--'})</span>
                                </div>
                                <div className={`aspect-video bg-gray-100 rounded-2xl border-[4px] border-gray-200 overflow-hidden relative group shadow-2xl ${previewView === 'desktop' ? 'max-w-4xl mx-auto' : ''}`}>
                                    {auditData.results.raw.screenshots?.desktop ? (
                                        <img
                                            src={`${import.meta.env.VITE_BASE_URL}${auditData.results.raw.screenshots.desktop}`}
                                            alt="Desktop Preview"
                                            className="w-full h-full object-cover object-top"
                                        />
                                    ) : (
                                        <div className="w-full h-full p-6 flex flex-col gap-6">
                                            <div className="flex justify-between items-center">
                                                <div className="w-24 h-6 bg-gray-200 rounded-md" />
                                                <div className="flex gap-4">
                                                    <div className="w-12 h-4 bg-gray-200 rounded" />
                                                    <div className="w-12 h-4 bg-gray-200 rounded" />
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-6">
                                                <div className="space-y-4">
                                                    <div className="w-full h-8 bg-gray-200 rounded-lg" />
                                                    <div className="w-2/3 h-4 bg-gray-200 rounded" />
                                                    <div className="w-1/3 h-4 bg-gray-200 rounded" />
                                                </div>
                                                <div className="w-full h-full bg-gray-200 rounded-xl" />
                                            </div>
                                            <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-xs font-bold uppercase tracking-widest bg-gray-50/50 backdrop-blur-sm">
                                                Preview Unavailable
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default AuditVisualPreview;
