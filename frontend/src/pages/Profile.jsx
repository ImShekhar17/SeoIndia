import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    LayoutDashboard, Globe, Clock, ChevronRight, Search,
    Filter, Download, ExternalLink, User as UserIcon, Calendar,
    BarChart3, ShieldCheck, Settings, ArrowRight, TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';
import { useMemo } from 'react';

const Profile = () => {
    const { user } = useAuth();
    const [activeTab, setActiveTab] = useState('overview');
    const [statusFilter, setStatusFilter] = useState('all');
    const [audits, setAudits] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const filteredAudits = useMemo(() => {
        if (statusFilter === 'all') return audits;
        if (statusFilter === 'successful') return audits.filter(a => a.status === 'completed');
        if (statusFilter === 'failed') return audits.filter(a => a.status === 'failed');
        return audits;
    }, [audits, statusFilter]);

    useEffect(() => {
        fetchAudits();
    }, []);

    const fetchAudits = async () => {
        try {
            const res = await api.get('/audits/my-audits');
            if (res.data.success) {
                setAudits(res.data.data);
            }
        } catch (error) {
            toast.error('Failed to load audits');
        } finally {
            setIsLoading(false);
        }
    };

    const handleDownloadPDF = async (audit) => {
        const toastId = toast.loading(`Generating PDF for ${audit.url}...`);
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/audits/${audit.id}/pdf`);
            if (!response.ok) throw new Error('Failed to generate PDF');

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `SEO_Audit_${audit.url.replace(/[^a-zA-Z0-9]/gi, '_').toLowerCase()}.pdf`;
            document.body.appendChild(a);
            a.click();
            a.remove();
            toast.success('Download started!', { id: toastId });
        } catch (err) {
            console.error('Download error:', err);
            toast.error('Failed to download PDF. Please try again.', { id: toastId });
        }
    };

    if (!user) return null;

    const renderOverview = () => (
        <div className="bg-white rounded-[40px] border border-gray-100 overflow-hidden shadow-sm">
            <div className="p-8 border-b border-gray-50 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <h2 className="text-xl font-black text-gray-900 flex items-center gap-3">
                    <Clock size={20} className="text-blue-600" /> Recent SEO Audits
                </h2>
                <div className="flex bg-gray-50 p-1.5 rounded-2xl w-full md:w-auto">
                    <button
                        onClick={() => setStatusFilter('all')}
                        className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${statusFilter === 'all' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                        ALL
                    </button>
                    <button
                        onClick={() => setStatusFilter('successful')}
                        className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${statusFilter === 'successful' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                        SUCCESSFUL
                    </button>
                    <button
                        onClick={() => setStatusFilter('failed')}
                        className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${statusFilter === 'failed' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                        FAILED
                    </button>
                </div>
            </div>

            {isLoading ? (
                <div className="p-20 text-center">
                    <div className="animate-spin w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4" />
                    <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Loading Audit History...</p>
                </div>
            ) : filteredAudits.length === 0 ? (
                <div className="p-20 text-center">
                    <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-300">
                        <Search size={40} />
                    </div>
                    <h3 className="text-xl font-black text-gray-900 mb-2">No Audits Found</h3>
                    <p className="text-gray-500 mb-8 font-medium">You haven't performed any SEO audits yet.</p>
                    <Link to="/audit" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20">
                        Run Your First Audit <ArrowRight size={16} />
                    </Link>
                </div>
            ) : (
                <div className="divide-y divide-gray-50">
                    {filteredAudits.map((audit) => (
                        <div key={audit.id} className="p-8 hover:bg-gray-50 transition-all group">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                                <div className="flex gap-6">
                                    <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex flex-col items-center justify-center font-black text-xl group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                                        {audit.overallGrade || '-'}
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3 mb-1">
                                            <h4 className="font-black text-gray-900 text-lg group-hover:text-blue-600 transition-colors uppercase tracking-tight">{audit.url}</h4>
                                            <ExternalLink size={14} className="text-gray-400" />
                                            {audit.status === 'pending' || audit.status === 'analyzing' ? (
                                                <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded text-[10px] font-black uppercase tracking-widest">
                                                    Analyzing...
                                                </span>
                                            ) : audit.status === 'failed' ? (
                                                <span className="px-2 py-0.5 bg-red-100 text-red-700 rounded text-[10px] font-black uppercase tracking-widest">
                                                    Failed
                                                </span>
                                            ) : (
                                                <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-[10px] font-black uppercase tracking-widest">
                                                    Completed
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-sm font-medium text-gray-500 flex items-center gap-2">
                                            Score: <span className="font-black text-gray-900">{audit.totalScore || 0}</span> •
                                            {new Date(audit.createdAt).toLocaleDateString()}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-3 w-full md:w-auto">
                                    <Link
                                        to={`/audit`}
                                        state={{ url: audit.url }}
                                        className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-3 bg-white border border-gray-200 rounded-xl font-black text-[10px] uppercase tracking-widest text-gray-600 hover:bg-gray-50 transition-all"
                                    >
                                        RERUN
                                    </Link>
                                    <button
                                        onClick={() => handleDownloadPDF(audit)}
                                        className="hidden sm:flex items-center justify-center p-3 bg-slate-50 text-slate-600 border border-slate-100 rounded-xl hover:bg-slate-100 transition-all"
                                        title="Download PDF Report"
                                    >
                                        <Download size={18} />
                                    </button>
                                    <Link
                                        to={`/audit`}
                                        state={{ id: audit.id }}
                                        className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/10"
                                    >
                                        VIEW REPORT
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );

    const renderAnalytics = () => {
        const avgScore = audits.length > 0 ? Math.round(audits.reduce((acc, curr) => acc + (curr.totalScore || 0), 0) / audits.length) : 0;
        const highestScore = audits.length > 0 ? Math.max(...audits.map(a => a.totalScore || 0)) : 0;
        const totalAudits = audits.length;

        return (
            <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-8 rounded-[30px] border border-gray-100 shadow-sm">
                        <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-4">
                            <BarChart3 size={24} />
                        </div>
                        <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Average Score</p>
                        <p className="text-4xl font-black text-gray-900">{avgScore}%</p>
                    </div>
                    <div className="bg-white p-8 rounded-[30px] border border-gray-100 shadow-sm">
                        <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-4">
                            <ShieldCheck size={24} />
                        </div>
                        <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Best Performance</p>
                        <p className="text-4xl font-black text-gray-900">{highestScore}%</p>
                    </div>
                    <div className="bg-white p-8 rounded-[30px] border border-gray-100 shadow-sm">
                        <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-4">
                            <Globe size={24} />
                        </div>
                        <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Total Sites</p>
                        <p className="text-4xl font-black text-gray-900">{totalAudits}</p>
                    </div>
                </div>

                <div className="bg-white rounded-[40px] border border-gray-100 p-8 shadow-sm">
                    <h3 className="text-xl font-black text-gray-900 mb-8 flex items-center gap-3">
                        <TrendingUp size={20} className="text-blue-600" /> Performance Trend
                    </h3>
                    {audits.length > 0 ? (
                        <div className="space-y-6">
                            {audits.slice(0, 5).map((audit, i) => (
                                <div key={i} className="space-y-2">
                                    <div className="flex justify-between items-end">
                                        <span className="font-bold text-gray-700 text-sm truncate w-1/2">{audit.url}</span>
                                        <span className="font-black text-gray-900">{audit.totalScore || 0}%</span>
                                    </div>
                                    <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${audit.totalScore || 0}%` }}
                                            className={`h-full rounded-full ${(audit.totalScore || 0) >= 90 ? 'bg-emerald-500' :
                                                (audit.totalScore || 0) >= 70 ? 'bg-blue-500' :
                                                    (audit.totalScore || 0) >= 50 ? 'bg-orange-500' : 'bg-red-500'
                                                }`}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-10 text-gray-400 font-medium">No audit data available for trends.</div>
                    )}
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-32 pb-20">
            <div className="container mx-auto px-6">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
                    <div>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 rounded-3xl bg-blue-600 flex items-center justify-center text-white text-2xl font-black shadow-xl shadow-blue-500/20 overflow-hidden">
                                {user.profileImage && user.profileImage !== 'default_profile.png' ? (
                                    <img
                                        src={user.profileImage.startsWith('http') ? user.profileImage : `${import.meta.env.VITE_API_URL.replace('/api', '')}/public/${user.profileImage}`}
                                        alt={user.name}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    user.name.charAt(0)
                                )}
                            </div>
                            <div>
                                <h1 className="text-3xl font-black text-gray-900">{user.name}</h1>
                                <p className="text-gray-500 font-medium">{user.email} • {user.role === 'admin' ? 'Administrator' : 'Free Member'}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-xs font-black text-gray-500 uppercase tracking-widest flex items-center gap-2">
                                <Calendar size={14} /> Joined {new Date(user.createdAt).toLocaleDateString()}
                            </span>
                            {user.role === 'admin' && (
                                <Link to="/admin" className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-xl text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:bg-indigo-100 transition-all">
                                    <ShieldCheck size={14} /> Admin Panel
                                </Link>
                            )}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
                        <div className="bg-white p-6 rounded-[30px] border border-gray-100 shadow-sm min-w-[160px]">
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1">Total Audits</p>
                            <p className="text-3xl font-black text-gray-900">{audits.length}</p>
                        </div>
                        <div className="bg-white p-6 rounded-[30px] border border-gray-100 shadow-sm min-w-[160px]">
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1">Avg Score</p>
                            <p className="text-3xl font-black text-blue-600">{audits.length > 0 ? Math.round(audits.reduce((acc, curr) => acc + (curr.totalScore || 0), 0) / audits.length) : 0}%</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar / Stats */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-white rounded-[40px] p-8 border border-gray-100 flex flex-col gap-2 shadow-sm sticky top-32">
                            <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-4">Quick Navigation</h3>
                            <button
                                onClick={() => setActiveTab('overview')}
                                className={`flex items-center gap-4 px-6 py-4 rounded-2xl font-black text-sm uppercase tracking-widest w-full transition-all ${activeTab === 'overview' ? 'bg-blue-50 text-blue-600' : 'text-gray-500 hover:bg-gray-50'}`}
                            >
                                <LayoutDashboard size={18} /> Overview
                            </button>
                            <button
                                onClick={() => setActiveTab('analytics')}
                                className={`flex items-center gap-4 px-6 py-4 rounded-2xl font-black text-sm uppercase tracking-widest w-full transition-all ${activeTab === 'analytics' ? 'bg-blue-50 text-blue-600' : 'text-gray-500 hover:bg-gray-50'}`}
                            >
                                <BarChart3 size={18} /> Analytics
                            </button>
                            <Link to="/settings" className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 text-gray-500 rounded-2xl font-black text-sm uppercase tracking-widest w-full transition-all">
                                <Settings size={18} /> Settings
                            </Link>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="lg:col-span-3">
                        {activeTab === 'overview' ? renderOverview() : renderAnalytics()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
