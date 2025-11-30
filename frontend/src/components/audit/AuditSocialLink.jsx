import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

const AuditSocialLink = ({ auditData }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-20">
            <section id="social" className="bg-white rounded-[40px] shadow-2xl shadow-blue-900/5 border border-white overflow-hidden scroll-mt-28">
                <div className="p-10 border-b border-gray-100">
                    <h3 className="text-xl font-black text-gray-900 mb-1">Social & Meta Tags</h3>
                    <p className="text-gray-400 font-bold text-[10px] uppercase tracking-widest">Open Graph & Branding</p>
                </div>
                <div className="p-10 space-y-6">
                    {[
                        { label: 'Open Graph (Facebook)', status: !!auditData.results.raw.ogTitle },
                        { label: 'Twitter Cards', status: !!auditData.results.raw.twitterCard },
                        { label: 'Schema.org Markup', status: !!auditData.results.raw.schema },
                        { label: 'Favicon Present', status: !!auditData.results.raw.favicon }
                    ].map((tag, i) => (
                        <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                            <span className="text-sm font-bold text-gray-700">{tag.label}</span>
                            {tag.status ? <CheckCircle2 size={18} className="text-green-500" /> : <XCircle size={18} className="text-red-400" />}
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-white rounded-[40px] shadow-2xl shadow-blue-900/5 border border-white overflow-hidden">
                <div className="p-10 border-b border-gray-100">
                    <h3 className="text-xl font-black text-gray-900 mb-1">Link Profile</h3>
                    <p className="text-gray-400 font-bold text-[10px] uppercase tracking-widest">Backlinks & Internal Links</p>
                </div>
                <div className="p-10">
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="text-center p-6 bg-blue-50 rounded-3xl">
                            <div className="text-3xl font-black text-blue-600 mb-1">
                                {auditData.results.backlinks?.total || 0}
                            </div>
                            <div className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Backlinks</div>
                        </div>
                        <div className="text-center p-6 bg-indigo-50 rounded-3xl">
                            <div className="text-3xl font-black text-indigo-600 mb-1">
                                {auditData.results.backlinks?.authorityScore || 0}
                            </div>
                            <div className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Domain Auth</div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="p-4 border border-gray-100 rounded-2xl flex items-center justify-between">
                            <span className="text-xs font-bold text-gray-500">Broken Links</span>
                            <span className={`text-sm font-black ${auditData.results.brokenLinks?.length > 0 ? 'text-red-500' : 'text-green-500'}`}>
                                {auditData.results.brokenLinks?.length || 0} Found
                            </span>
                        </div>
                        <div className="p-4 border border-gray-100 rounded-2xl flex items-center justify-between">
                            <span className="text-xs font-bold text-gray-500">Referring Domains</span>
                            <span className="text-sm font-black text-blue-500">
                                {auditData.results.backlinks?.referringDomains || 0}
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AuditSocialLink;
