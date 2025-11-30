import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Users, Globe, Trash2, ExternalLink, Shield, CheckCircle2, Clock, Search,
    Download, LayoutDashboard, FileText, RefreshCw, Activity, Zap, Eye, Edit2,
    XCircle, Settings, Palette, Type, Smartphone, ChevronLeft, ChevronRight,
    ArrowUpRight, ArrowDownRight, Mail, Check, Square, CheckSquare
} from 'lucide-react';
import axios from 'axios';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
    ResponsiveContainer, PieChart, Pie, Cell, Legend
} from 'recharts';
import api from '../services/api';
import toast from 'react-hot-toast';
import '../AdminDashboard.css';
import { AVAILABLE_PERMISSIONS } from '../utils/permissions';

import { useAuth } from '../context/AuthContext';

const AdminDashboard = () => {
    const { hasPermission } = useAuth();
    const navigate = useNavigate();
    const GRADE_COLORS = {
        'A': '#10b981', // Emerald
        'B': '#3b82f6', // Blue
        'C': '#f59e0b', // Amber
        'D': '#f97316', // Orange
        'F': '#ef4444', // Red
        'DEFAULT': '#94a3b8' // Slate
    };

    const NEWSLETTER_TEMPLATES = [
        {
            id: 'standard',
            name: 'Standard (Amazon-like)',
            description: 'A balanced design with product images, clear pricing, and a professional layout. Best for most stores.',
            html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
    <div style="background-color: #232f3e; padding: 20px; text-align: center;">
        <h1 style="color: #ffffff; margin: 0;">SeoIndia Intelligence</h1>
    </div>
    <div style="padding: 30px; line-height: 1.6; color: #374151;">
        <h2 style="color: #111827;">What's New This Month?</h2>
        <p>Hello there,</p>
        <p>We've analyzed the latest search trends and algorithmic shifts. Here are the key highlights you need to know to stay ahead of the competition.</p>
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; font-weight: bold; color: #4b5563;">Pro Tip:</p>
            <p style="margin: 5px 0 0;">Focus on semantic entities and user intent rather than just keywords.</p>
        </div>
        <p>Ready to scale your organic growth?</p>
        <a href="#" style="display: inline-block; background-color: #febd69; color: #111827; padding: 12px 24px; border-radius: 4px; text-decoration: none; font-weight: bold; margin-top: 10px;">View Full Report</a>
    </div>
    <div style="background-color: #f9fafb; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb; font-size: 12px; color: #9ca3af;">
        &copy; 2026 SeoIndia. Value4Media Strategic Group.
    </div>
</div>
            `.trim()
        },
        {
            id: 'minimalist',
            name: 'Minimalist',
            description: 'Clean and simple. Focuses on the essential details without heavy styling or borders.',
            html: `
<div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #1d1d1f; max-width: 500px; margin: 40px auto; line-height: 1.5;">
    <h1 style="font-size: 24px; font-weight: 700; letter-spacing: -0.015em; margin-bottom: 24px;">Deep Intelligence.</h1>
    <p style="font-size: 16px; margin-bottom: 20px;">The landscape is changing. Are you observing?</p>
    <p style="font-size: 16px; margin-bottom: 32px;">Our neural analysis engine just processed 10M+ data points. The results were unexpected. We've optimized your strategy models accordingly.</p>
    <a href="#" style="color: #0071e3; text-decoration: none; font-weight: 500; font-size: 16px;">Access Command Center &rarr;</a>
    <p style="font-size: 12px; color: #86868b; margin-top: 64px;">Sent from the SeoIndia Core Intelligence Unit.</p>
</div>
            `.trim()
        },
        {
            id: 'corporate',
            name: 'Corporate / Professional',
            description: 'High-contrast header, structured grid layout, and blue accent colors. Ideal for premium brands.',
            html: `
<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc; padding: 40px 0;">
    <table style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; border-collapse: separate; shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);">
        <tr>
            <td style="padding: 40px; border-bottom: 4px solid #4f46e5;">
                <table width="100%">
                    <tr>
                        <td><h1 style="margin: 0; color: #0f172a; font-size: 28px; font-weight: 800; letter-spacing: -1px;">SEO INDIA</h1></td>
                        <td align="right" style="color: #64748b; font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px;">Q1 Intelligence</td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td style="padding: 40px;">
                <h2 style="color: #1e293b; font-size: 20px; font-weight: 700; margin-bottom: 16px;">Enterprise Performance Audit</h2>
                <p style="color: #475569; font-size: 15px; margin-bottom: 24px;">Confirming deployment of new semantic data models across all managed domains. System integrity remains at 99.8% with zero service interruptions.</p>
                <table width="100%" style="margin-bottom: 32px;">
                    <tr>
                        <td width="50%" style="padding-right: 12px;">
                            <div style="background-color: #f1f5f9; padding: 20px; border-radius: 16px; color: #4f46e5;">
                                <div style="font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">Growth</div>
                                <div style="font-size: 24px; font-weight: 800; margin-top: 4px;">+42%</div>
                            </div>
                        </td>
                        <td width="50%" style="padding-left: 12px;">
                            <div style="background-color: #f1f5f9; padding: 20px; border-radius: 16px; color: #0f172a;">
                                <div style="font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">Uptime</div>
                                <div style="font-size: 24px; font-weight: 800; margin-top: 4px;">100%</div>
                            </div>
                        </td>
                    </tr>
                </table>
                <a href="#" style="display: block; text-align: center; background-color: #0f172a; color: #ffffff; padding: 18px; border-radius: 12px; text-decoration: none; font-weight: 800; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Download Full Audit Log</a>
            </td>
        </tr>
    </table>
</div>
            `.trim()
        }
    ];

    const [stats, setStats] = useState(null);
    const [users, setUsers] = useState([]);
    const [roles, setRoles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [activeTab, setActiveTab] = useState('overview');

    // Define permitted tabs and auto-redirect
    const visibleTabs = useMemo(() => {
        const tabs = [
            { id: 'overview', icon: <LayoutDashboard size={18} />, label: 'Overview', permission: 'audit:view' },
            { id: 'reports', icon: <FileText size={18} />, label: 'Reports', permission: 'report:export' },
            { id: 'marketing', icon: <Mail size={18} />, label: 'Marketing', permission: 'marketing:view' },
            { id: 'access', icon: <Shield size={18} />, label: 'Access', permission: 'role:manage' },
            { id: 'users', icon: <Users size={18} />, label: 'Users', permission: 'user:manage' },
            { id: 'settings', icon: <Settings size={18} />, label: 'Settings', permission: 'settings:manage' }
        ];
        return tabs.filter(tab => hasPermission(tab.permission));
    }, [hasPermission]);

    useEffect(() => {
        if (visibleTabs.length > 0 && !visibleTabs.find(t => t.id === activeTab)) {
            setActiveTab(visibleTabs[0].id);
        }
    }, [visibleTabs, activeTab]);
    const [isExporting, setIsExporting] = useState(false);

    // Form States
    const [isRoleModalOpen, setIsRoleModalOpen] = useState(false);
    const [isEditRoleModalOpen, setIsEditRoleModalOpen] = useState(false);
    const [editingRole, setEditingRole] = useState(null);
    const [isUserModalOpen, setIsUserModalOpen] = useState(false);
    const [isEditUserModalOpen, setIsEditUserModalOpen] = useState(false);
    const [editingUser, setEditingUser] = useState(null);
    const [auditLimit, setAuditLimit] = useState(10);
    const [userLimit, setUserLimit] = useState(10);
    const [auditPage, setAuditPage] = useState(1);
    const [userPage, setUserPage] = useState(1);
    const [settings, setSettings] = useState([]);
    const [isSavingSettings, setIsSavingSettings] = useState(false);
    const [newRole, setNewRole] = useState({ name: '', description: '', permissions: [] });
    const [newUser, setNewUser] = useState({ name: '', email: '', password: '', roleId: '' });

    // SEO Intelligence States
    const [isBacklinkExplorerOpen, setIsBacklinkExplorerOpen] = useState(false);
    const [selectedAuditBacklinks, setSelectedAuditBacklinks] = useState(null);
    const [isActivating, setIsActivating] = useState(null);

    // Marketing States
    const [subscribers, setSubscribers] = useState([]);
    const [selectedSubscribers, setSelectedSubscribers] = useState([]);
    const [newsletterForm, setNewsletterForm] = useState({ subject: '', content: '' });
    const [isSendingNewsletter, setIsSendingNewsletter] = useState(false);
    const [previewModal, setPreviewModal] = useState({ isOpen: false, html: '', name: '' });



    useEffect(() => {
        fetchAdminData();
    }, [auditLimit, userLimit, auditPage, userPage]);

    const fetchAdminData = async () => {
        setIsLoading(true);
        try {
            const promises = [];
            const results = {};

            // 1. Stats (Overview Tab)
            if (hasPermission('audit:view')) {
                promises.push(
                    api.get(`/admin/stats?limit=${auditLimit}&page=${auditPage}`)
                        .then(res => ({ key: 'stats', data: res.data.data }))
                );
            }

            // 2. Users Tab
            if (hasPermission('user:manage')) {
                promises.push(
                    api.get(`/admin/users?limit=${userLimit}&page=${userPage}`)
                        .then(res => ({ key: 'users', data: res.data.data }))
                );
            }

            // 3. Roles (Access Tab)
            if (hasPermission('role:manage')) {
                promises.push(
                    api.get('/admin/roles')
                        .then(res => ({ key: 'roles', data: res.data.data }))
                );
            }

            // 4. Settings Tab (NEW Granular Permission)
            if (hasPermission('settings:manage')) {
                promises.push(
                    api.get('/admin/settings')
                        .then(res => ({ key: 'settings', data: res.data.data }))
                );
            }

            // 5. Marketing Tab (NEW Granular Permission)
            if (hasPermission('marketing:view')) {
                promises.push(
                    api.get('/admin/newsletter/subscribers')
                        .then(res => ({ key: 'subscribers', data: res.data.data }))
                );
            }

            // Execute all requests in parallel with fault tolerance
            const responses = await Promise.allSettled(promises);

            responses.forEach(result => {
                if (result.status === 'fulfilled' && result.value) {
                    const { key, data } = result.value;
                    if (key === 'stats') setStats(data);
                    if (key === 'users') setUsers(data);
                    if (key === 'roles') setRoles(data);
                    if (key === 'settings') setSettings(data);
                    if (key === 'subscribers') setSubscribers(data);
                } else if (result.status === 'rejected') {
                    console.error('Data fetch failed for one resource:', result.reason);
                }
            });

        } catch (err) {
            console.error(err);
            toast.error('Failed to initialize dashboard');
        } finally {
            setIsLoading(false);
        }
    };

    const filteredUsers = useMemo(() => {
        return users.filter(user =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [users, searchTerm]);

    if (isLoading) return (
        <div className="min-h-screen flex items-center justify-center pt-20">
            <div className="flex flex-col items-center gap-4">
                <div className="animate-spin w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full shadow-lg" />
                <p className="font-black text-indigo-600 uppercase tracking-widest text-[10px] animate-pulse">Initializing System...</p>
            </div>
        </div>
    );

    const handleCreateRole = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post('/admin/roles', newRole);
            if (res.data.success) {
                toast.success('Role created successfully');
                setRoles([...roles, res.data.data]);
                setIsRoleModalOpen(false);
                setNewRole({ name: '', description: '', permissions: [] });
            }
        } catch (error) {
            toast.error(error.response?.data?.message || 'Failed to create role');
        }
    };

    const handleEditRole = (role) => {
        setEditingRole(role);
        setIsEditRoleModalOpen(true);
    };

    const handleUpdateRole = async (e) => {
        e.preventDefault();
        try {
            const res = await api.put(`/admin/roles/${editingRole.id}`, editingRole);
            if (res.data.success) {
                toast.success('Role updated successfully');
                setRoles(roles.map(r => r.id === editingRole.id ? res.data.data : r));
                setIsEditRoleModalOpen(false);
                setEditingRole(null);
            }
        } catch (error) {
            toast.error(error.response?.data?.message || 'Failed to update role');
        }
    };

    const toggleEditPermission = (perm) => {
        setEditingRole(prev => ({
            ...prev,
            permissions: prev.permissions.includes(perm)
                ? prev.permissions.filter(p => p !== perm)
                : [...prev.permissions, perm]
        }));
    };

    const handleCreateUser = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post('/admin/users', newUser);
            if (res.data.success) {
                toast.success('User provisioned successfully');
                setUsers([...users, res.data.data]);
                setIsUserModalOpen(false);
                setNewUser({ name: '', email: '', password: '', roleId: '' });
                fetchAdminData(); // Refresh to get associated role data
            }
        } catch (error) {
            toast.error(error.response?.data?.message || 'Failed to create user');
        }
    };

    const handleEditUser = (user) => {
        setEditingUser({
            id: user.id,
            name: user.name,
            email: user.email,
            roleId: user.roleId || '',
            role: user.role
        });
        setIsEditUserModalOpen(true);
    };

    const handleUpdateUser = async (e) => {
        e.preventDefault();
        try {
            const res = await api.put(`/admin/users/${editingUser.id}`, editingUser);
            if (res.data.success) {
                toast.success('User updated successfully');
                setUsers(users.map(u => u.id === editingUser.id ? res.data.data : u));
                setIsEditUserModalOpen(false);
                setEditingUser(null);
                fetchAdminData(); // Force refresh to ensure all associations are loaded
            }
        } catch (error) {
            toast.error(error.response?.data?.message || 'Failed to update user');
        }
    };

    const togglePermission = (perm) => {
        setNewRole(prev => ({
            ...prev,
            permissions: prev.permissions.includes(perm)
                ? prev.permissions.filter(p => p !== perm)
                : [...prev.permissions, perm]
        }));
    };

    // Imported from utils/permissions.js
    // const AVAILABLE_PERMISSIONS = [ ... ]

    const handleDeleteRole = async (id) => {
        if (!window.confirm('Are you sure? This will affect users with this role.')) return;
        try {
            await api.delete(`/admin/roles/${id}`);
            setRoles(roles.filter(r => r.id !== id));
            toast.success('Role deleted');
        } catch (error) {
            toast.error('Failed to delete role');
        }
    };

    const handleDeleteUser = async (id) => {
        if (!window.confirm('Are you sure you want to delete this user?')) return;
        try {
            const res = await api.delete(`/admin/users/${id}`);
            if (res.data.success) {
                toast.success('User deleted');
                setUsers(users.filter(u => u.id !== id));
            }
        } catch (error) {
            toast.error('Failed to delete user');
        }
    };

    const handleActivateSite = async (auditId) => {
        setIsActivating(auditId);
        try {
            const res = await api.post(`/admin/activate/${auditId}`);
            if (res.data.success) {
                toast.success(res.data.message || 'Indexing Triggered');
                fetchAdminData();
            }
        } catch (error) {
            toast.error(error.response?.data?.message || 'Activation failed');
        } finally {
            setIsActivating(null);
        }
    };

    const openBacklinkExplorer = (audit) => {
        setSelectedAuditBacklinks(audit);
        setIsBacklinkExplorerOpen(true);
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

    const handlePurgeCache = async () => {
        if (!window.confirm('WARNING: This will permanently delete all stored screenshots from the disk. This action cannot be undone. Proceed?')) return;
        setIsLoading(true);
        try {
            const res = await api.post('/admin/purge-cache');
            if (res.data.success) {
                toast.success(res.data.message || 'Cache cleared');
                fetchAdminData();
            }
        } catch (error) {
            toast.error(error.response?.data?.message || 'Purge failed');
        } finally {
            setIsLoading(false);
        }
    };

    const handleUpdateSetting = async (key, value) => {
        try {
            setIsSavingSettings(true);
            await api.put(`/admin/settings/${key}`, { value });
            await fetchAdminData();
            toast.success('Setting updated successfully!');
        } catch (err) {
            console.error('Update Setting Error:', err);
            toast.error('Failed to update setting');
        } finally {
            setIsSavingSettings(false);
        }
    };

    const handleSendNewsletter = async (e) => {
        e.preventDefault();
        if (!newsletterForm.subject || !newsletterForm.content) {
            return toast.error('Subject and Content are required');
        }

        setIsSendingNewsletter(true);
        try {
            const res = await api.post('/admin/newsletter/send', {
                subject: newsletterForm.subject,
                content: newsletterForm.content,
                recipientEmails: selectedSubscribers
            });

            if (res.data.success) {
                toast.success(res.data.message);
                setNewsletterForm({ subject: '', content: '' });
                setSelectedSubscribers([]);
            }
        } catch (error) {
            toast.error(error.response?.data?.message || 'Failed to send newsletter');
        } finally {
            setIsSendingNewsletter(false);
        }
    };

    const toggleSubscriberSelection = (email) => {
        setSelectedSubscribers(prev =>
            prev.includes(email) ? prev.filter(e => e !== email) : [...prev, email]
        );
    };

    const applyTemplate = (html) => {
        setNewsletterForm(prev => ({ ...prev, content: html }));
        toast.success('Template applied to editor');
    };

    const handlePreview = (template) => {
        setPreviewModal({
            isOpen: true,
            html: template.html,
            name: template.name
        });
    };

    const selectAllSubscribers = () => {
        if (selectedSubscribers.length === subscribers.length) {
            setSelectedSubscribers([]);
        } else {
            setSelectedSubscribers(subscribers.map(s => s.email));
        }
    };

    const exportToCSV = async () => {
        setIsExporting(true);
        try {
            const res = await api.get('/admin/export/audits');
            if (res.data.success) {
                const data = res.data.data;
                const headers = ['URL', 'Score', 'Grade', 'Status', 'User Name', 'User Email', 'Date'];
                const csvRows = [
                    headers.join(','),
                    ...data.map(row => [
                        `"${row.url}"`,
                        row.totalScore,
                        row.overallGrade,
                        row.status,
                        `"${row.user?.name || 'Guest'}"`,
                        `"${row.user?.email || 'N/A'}"`,
                        new Date(row.createdAt).toLocaleDateString()
                    ].join(','))
                ].join('\n');

                const blob = new Blob([csvRows], { type: 'text/csv' });
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.setAttribute('hidden', '');
                a.setAttribute('href', url);
                a.setAttribute('download', `SeoIndia_Full_Report_${new Date().toISOString().split('T')[0]}.csv`);
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                toast.success('Report exported successfully!');
            }
        } catch (error) {
            toast.error('Failed to export report');
        } finally {
            setIsExporting(false);
        }
    };

    const COLORS = ['#4f46e5', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

    const renderMarketing = () => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
        >
            {/* Template Selection */}
            <div>
                <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Execution Templates</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {NEWSLETTER_TEMPLATES.map(template => (
                        <div key={template.id} className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm flex flex-col h-full group hover:border-indigo-200 transition-all">
                            <h4 className="text-lg font-black text-slate-900 mb-3">{template.name}</h4>
                            <p className="text-xs text-slate-400 font-medium mb-8 flex-1">{template.description}</p>
                            <div className="flex gap-3">
                                <button
                                    onClick={() => applyTemplate(template.html)}
                                    className="flex-1 py-3 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-[9px] hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
                                >
                                    Apply
                                </button>
                                <button
                                    onClick={() => handlePreview(template)}
                                    className="flex-1 py-3 bg-slate-100 text-slate-500 rounded-2xl font-black uppercase tracking-widest text-[9px] hover:bg-slate-200 transition-all"
                                >
                                    Preview
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Marketing Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm flex items-center gap-6">
                    <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-3xl flex items-center justify-center">
                        <Users size={28} />
                    </div>
                    <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Total Subscribers</p>
                        <p className="text-4xl font-black text-slate-900">{subscribers.length}</p>
                    </div>
                </div>
                {/* Placeholder for more stats if needed */}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Send Newsletter Form */}
                <div className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm">
                    <div className="flex items-center gap-3 mb-8">
                        <Mail className="text-indigo-600" size={24} />
                        <h3 className="text-2xl font-black text-slate-900 tracking-tight">Send Newsletter</h3>
                    </div>
                    <form onSubmit={handleSendNewsletter} className="space-y-6">
                        <div>
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block">Subject</label>
                            <input
                                type="text"
                                placeholder="Newsletter Subject..."
                                required
                                className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-transparent focus:bg-white focus:border-indigo-600 outline-none font-bold placeholder:font-medium transition-all"
                                value={newsletterForm.subject}
                                onChange={(e) => setNewsletterForm({ ...newsletterForm, subject: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block">Body (HTML supported)</label>
                            <textarea
                                placeholder="<h1>Hello!</h1><p>Check out our new collection...</p>"
                                required
                                className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-transparent focus:bg-white focus:border-indigo-600 outline-none font-medium transition-all h-64"
                                value={newsletterForm.content}
                                onChange={(e) => setNewsletterForm({ ...newsletterForm, content: e.target.value })}
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={isSendingNewsletter}
                            className="w-full py-5 bg-slate-900 text-white rounded-[24px] font-black uppercase tracking-[0.2em] text-[11px] transition-all flex items-center justify-center gap-3 shadow-2xl disabled:opacity-50 hover:bg-slate-800"
                        >
                            {isSendingNewsletter ? <RefreshCw size={18} className="animate-spin" /> : <ArrowUpRight size={18} />}
                            Send Broadcast {selectedSubscribers.length > 0 ? `to ${selectedSubscribers.length} Selected` : 'to All'}
                        </button>
                    </form>
                </div>

                {/* Subscribers Table */}
                <div className="bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden flex flex-col">
                    <div className="p-8 border-b border-slate-50 flex justify-between items-center">
                        <h4 className="text-xl font-black text-slate-900">Recent Subscribers</h4>
                        <button
                            onClick={selectAllSubscribers}
                            className="text-[10px] font-black text-indigo-600 uppercase tracking-widest hover:underline"
                        >
                            {selectedSubscribers.length === subscribers.length ? 'Deselect All' : 'Select All'}
                        </button>
                    </div>
                    <div className="flex-1 overflow-auto max-h-[600px]">
                        {subscribers.length > 0 ? (
                            <div className="min-w-[400px]">
                                <table className="w-full">
                                    <thead className="bg-slate-50 sticky top-0 z-10">
                                        <tr>
                                            <th className="px-8 py-4 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest">Email</th>
                                            <th className="px-8 py-4 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest">Date</th>
                                            <th className="px-8 py-4 text-right text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-50">
                                        {subscribers.map((sub) => (
                                            <tr
                                                key={sub.id}
                                                className={`group hover:bg-slate-50/50 transition-all cursor-pointer ${selectedSubscribers.includes(sub.email) ? 'bg-indigo-50/30' : ''}`}
                                                onClick={() => toggleSubscriberSelection(sub.email)}
                                            >
                                                <td className="px-8 py-6">
                                                    <div className="flex items-center gap-3">
                                                        <div className={`w-5 h-5 rounded border flex items-center justify-center transition-all ${selectedSubscribers.includes(sub.email) ? 'bg-indigo-600 border-indigo-600 text-white' : 'border-slate-200'}`}>
                                                            {selectedSubscribers.includes(sub.email) && <Check size={12} />}
                                                        </div>
                                                        <span className="font-bold text-slate-900">{sub.email}</span>
                                                    </div>
                                                </td>
                                                <td className="px-8 py-6 text-slate-400 text-xs font-medium">
                                                    {new Date(sub.createdAt).toLocaleDateString()}
                                                </td>
                                                <td className="px-8 py-6 text-right">
                                                    <span className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-tight ${sub.status === 'active' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
                                                        {sub.status}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <div className="p-20 text-center text-slate-400 font-bold uppercase tracking-widest text-xs">
                                No subscribers yet
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );

    const renderAccessControl = () => (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-12"
        >
            {/* Action Headers */}
            <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm">
                    <Shield className="text-indigo-600 mb-6" size={32} />
                    <h3 className="text-2xl font-black text-slate-900 mb-2">Role Management</h3>
                    <p className="text-slate-400 text-sm font-medium mb-8">Define corporate hierarchies and individual access scopes.</p>
                    <button
                        onClick={() => setIsRoleModalOpen(true)}
                        className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
                    >
                        Create Custom Role
                    </button>
                </div>
                <div className="flex-1 bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm">
                    <Users className="text-emerald-600 mb-6" size={32} />
                    <h3 className="text-2xl font-black text-slate-900 mb-2">User Provisioning</h3>
                    <p className="text-slate-400 text-sm font-medium mb-8">Securely onboard new analysts with predefined permissions.</p>
                    <button
                        onClick={() => setIsUserModalOpen(true)}
                        className="w-full py-4 bg-emerald-600 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200"
                    >
                        Provision New User
                    </button>
                </div>
            </div>

            {/* Roles Table */}
            <div className="bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden">
                <div className="p-8 border-b border-slate-50">
                    <h4 className="text-xl font-black text-slate-900">Configured Roles</h4>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-slate-50">
                            <tr>
                                <th className="px-8 py-4 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest">Role Identity</th>
                                <th className="px-8 py-4 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest">Permission Scope</th>
                                <th className="px-8 py-4 text-right text-[10px] font-black text-slate-400 uppercase tracking-widest">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {roles.map((role) => (
                                <tr key={role.id} className="group hover:bg-slate-50/50 transition-all">
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                                                <Shield size={18} />
                                            </div>
                                            <div>
                                                <p className="font-bold text-slate-900">{role.name}</p>
                                                <p className="text-xs text-slate-400 font-medium">{role.description}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="flex flex-wrap gap-2">
                                            {role.permissions?.map(p => (
                                                <span key={p} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-[9px] font-black uppercase tracking-tight">
                                                    {p.replace(':', ' ')}
                                                </span>
                                            ))}
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 text-right">
                                        {(role.name === 'Administrator' || role.name === 'admin') ? (
                                            <span className="text-slate-300 text-[10px] font-black uppercase tracking-widest flex items-center justify-end gap-1">
                                                <Shield size={12} /> System
                                            </span>
                                        ) : (
                                            <div className="flex justify-end gap-2">
                                                <button onClick={() => handleEditRole(role)} className="p-2 text-slate-300 hover:text-indigo-600 transition-colors">
                                                    <Edit2 size={18} />
                                                </button>
                                                <button onClick={() => handleDeleteRole(role.id)} className="p-2 text-slate-300 hover:text-red-500 transition-colors">
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Role Creation Modal */}
            <AnimatePresence>
                {isRoleModalOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-sm bg-slate-900/40">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 50 }}
                            className="bg-white w-full max-w-xl rounded-[40px] shadow-2xl overflow-hidden"
                        >
                            <form onSubmit={handleCreateRole} className="p-10">
                                <h3 className="text-3xl font-black text-slate-900 mb-8 tracking-tighter">Architect Custom Role</h3>
                                <div className="space-y-6">
                                    <input
                                        type="text"
                                        placeholder="Role Name (e.g., SEO Architect)"
                                        required
                                        className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-transparent focus:bg-white focus:border-indigo-600 outline-none font-bold placeholder:font-medium transition-all"
                                        value={newRole.name}
                                        onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
                                    />
                                    <textarea
                                        placeholder="Brief Description"
                                        className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-transparent focus:bg-white focus:border-indigo-600 outline-none font-medium transition-all h-24"
                                        value={newRole.description}
                                        onChange={(e) => setNewRole({ ...newRole, description: e.target.value })}
                                    />
                                    <div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Grant Permissions</p>
                                        <div className="grid grid-cols-2 gap-3">
                                            {AVAILABLE_PERMISSIONS.map(p => (
                                                <div
                                                    key={p.id}
                                                    onClick={() => togglePermission(p.id)}
                                                    className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center gap-3 ${newRole.permissions.includes(p.id) ? 'bg-indigo-50 border-indigo-200 text-indigo-700 shadow-sm' : 'bg-slate-50 border-transparent text-slate-400'}`}
                                                >
                                                    {p.icon}
                                                    <span className="text-xs font-black">{p.label}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-4 mt-10">
                                    <button
                                        type="button"
                                        onClick={() => setIsRoleModalOpen(false)}
                                        className="flex-1 py-4 bg-slate-100 text-slate-600 rounded-2xl font-black uppercase tracking-widest text-[10px]"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="flex-2 py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-lg shadow-indigo-200"
                                    >
                                        Confirm Role Deployment
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                )}

                {/* Edit Role Modal */}
                {isEditRoleModalOpen && editingRole && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-sm bg-slate-900/40">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 50 }}
                            className="bg-white w-full max-w-xl rounded-[40px] shadow-2xl overflow-hidden"
                        >
                            <form onSubmit={handleUpdateRole} className="p-10">
                                <h3 className="text-3xl font-black text-slate-900 mb-8 tracking-tighter">Modify Role Scope</h3>
                                <div className="space-y-6">
                                    <input
                                        type="text"
                                        placeholder="Role Name"
                                        required
                                        className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-transparent focus:bg-white focus:border-indigo-600 outline-none font-bold placeholder:font-medium transition-all"
                                        value={editingRole.name}
                                        onChange={(e) => setEditingRole({ ...editingRole, name: e.target.value })}
                                    />
                                    <textarea
                                        placeholder="Brief Description"
                                        className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-transparent focus:bg-white focus:border-indigo-600 outline-none font-medium transition-all h-24"
                                        value={editingRole.description}
                                        onChange={(e) => setEditingRole({ ...editingRole, description: e.target.value })}
                                    />
                                    <div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Adjust Authorities</p>
                                        <div className="flex flex-wrap gap-2">
                                            {AVAILABLE_PERMISSIONS.map(perm => (
                                                <button
                                                    key={perm.id}
                                                    type="button"
                                                    onClick={() => toggleEditPermission(perm.id)}
                                                    className={`px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-wide border transition-all ${editingRole.permissions.includes(perm.id) ? 'bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-200' : 'bg-white text-slate-500 border-slate-200 hover:border-indigo-300'}`}
                                                >
                                                    {perm.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-4 mt-10">
                                    <button
                                        type="button"
                                        onClick={() => setIsEditRoleModalOpen(false)}
                                        className="flex-1 py-4 bg-slate-100 text-slate-600 rounded-2xl font-black uppercase tracking-widest text-[10px]"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="flex-2 py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-lg shadow-indigo-200"
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                )}

                {/* User Provisioning Modal */}
                {isUserModalOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-sm bg-slate-900/40">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 50 }}
                            className="bg-white w-full max-w-xl rounded-[40px] shadow-2xl overflow-hidden"
                        >
                            <form onSubmit={handleCreateUser} className="p-10">
                                <h3 className="text-3xl font-black text-slate-900 mb-8 tracking-tighter">Provision New Analyst</h3>
                                <div className="space-y-6">
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        required
                                        className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-transparent focus:bg-white focus:border-indigo-600 outline-none font-bold transition-all"
                                        value={newUser.name}
                                        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        required
                                        className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-transparent focus:bg-white focus:border-indigo-600 outline-none font-bold transition-all"
                                        value={newUser.email}
                                        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                                    />
                                    <input
                                        type="password"
                                        placeholder="Secure Password"
                                        required
                                        className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-transparent focus:bg-white focus:border-indigo-600 outline-none font-bold transition-all"
                                        value={newUser.password}
                                        onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                                    />
                                    <div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Assign Operational Role</p>
                                        <select
                                            required
                                            className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-transparent focus:bg-white focus:border-emerald-600 outline-none font-bold transition-all appearance-none"
                                            value={newUser.roleId}
                                            onChange={(e) => setNewUser({ ...newUser, roleId: e.target.value })}
                                        >
                                            <option value="">Select a Role...</option>
                                            {roles.map(r => (
                                                <option key={r.id} value={r.id}>{r.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="flex gap-4 mt-10">
                                    <button
                                        type="button"
                                        onClick={() => setIsUserModalOpen(false)}
                                        className="flex-1 py-4 bg-slate-100 text-slate-600 rounded-2xl font-black uppercase tracking-widest text-[10px]"
                                    >
                                        Discard
                                    </button>
                                    <button
                                        type="submit"
                                        className="flex-2 py-4 bg-emerald-600 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-lg shadow-emerald-200"
                                    >
                                        Finalize Provisioning
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                )}

            </AnimatePresence>
        </motion.div>
    );

    const renderOverview = () => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
        >
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {[
                    { label: 'Total Users', value: stats?.totalUsers || 0, icon: <Users size={20} />, color: 'text-blue-600', bg: 'bg-blue-50/50', trend: '+12%', isUp: true },
                    { label: 'Total Audits', value: stats?.totalAudits || 0, icon: <Globe size={20} />, color: 'text-indigo-600', bg: 'bg-indigo-50/50', trend: '+8%', isUp: true },
                    { label: 'System Storage', value: stats?.maintenanceStats?.sizeFormatted || '0 MB', icon: <Activity size={20} />, color: 'text-emerald-600', bg: 'bg-emerald-50/50', trend: 'ACTIVE', isUp: true },
                    { label: 'System Uptime', value: '99.9%', icon: <CheckCircle2 size={20} />, color: 'text-orange-600', bg: 'bg-orange-50/50', trend: 'STABLE', isUp: true },
                ].map((stat, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ y: -5 }}
                        className="bg-white p-6 md:p-8 rounded-[32px] md:rounded-[40px] border border-slate-100 shadow-sm relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity -mr-16 -mt-16" />
                        <div className={`w-12 h-12 md:w-14 md:h-14 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center mb-4 md:mb-6 z-10 relative`}>
                            {React.cloneElement(stat.icon, { size: window.innerWidth < 768 ? 18 : 20 })}
                        </div>
                        <div className="flex justify-between items-end z-10 relative">
                            <div>
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
                                <p className="text-2xl md:text-3xl font-black text-slate-900">{stat.value}</p>
                            </div>
                            <div className={`flex items-center gap-1 text-[10px] font-black ${stat.isUp ? 'text-emerald-500' : 'text-red-500'}`}>
                                {stat.isUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />} {stat.trend}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                {/* Main Trend Chart */}
                <div className="lg:col-span-2 bg-white p-6 md:p-8 rounded-[32px] md:rounded-[40px] border border-slate-100 shadow-sm">
                    <div className="flex justify-between items-center mb-6 md:mb-8">
                        <div>
                            <h3 className="text-lg md:text-xl font-black text-slate-900">Performance Trends</h3>
                            <p className="text-[10px] md:text-xs font-medium text-slate-400">7-day audit volume and user registrations</p>
                        </div>
                        <div className="flex gap-2">
                            <span className="flex items-center gap-1.5 text-[10px] font-black text-indigo-600 uppercase tracking-tighter">
                                <div className="w-2 h-2 rounded-full bg-indigo-600" /> Audits
                            </span>
                        </div>
                    </div>
                    <div className="h-[250px] md:h-[300px] w-full chart-container min-h-[250px]">
                        <ResponsiveContainer width="100%" height="100%" minHeight={250}>
                            <AreaChart data={stats?.auditTrends || []}>
                                <defs>
                                    <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.1} />
                                        <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                <XAxis
                                    dataKey="date"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 700 }}
                                    tickFormatter={(val) => new Date(val).toLocaleDateString('en-US', { weekday: 'short' })}
                                />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 700 }} />
                                <Tooltip
                                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', fontWeight: 800, fontSize: '12px' }}
                                />
                                <Area type="monotone" dataKey="count" stroke="#4f46e5" strokeWidth={4} fillOpacity={1} fill="url(#colorCount)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Grade Distribution Visualization */}
                <div className="bg-white p-6 md:p-8 rounded-[32px] md:rounded-[40px] border border-slate-100 shadow-sm relative overflow-hidden group">
                    <div className="flex justify-between items-center mb-6 md:mb-8">
                        <h3 className="text-lg md:text-xl font-black text-slate-900 tracking-tight">Grade Metrics</h3>
                        <div className="px-3 py-1 bg-slate-50 rounded-full border border-slate-100">
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Global Distribution</span>
                        </div>
                    </div>

                    <div className="h-[250px] md:h-[280px] w-full relative min-h-[250px]">
                        {/* Center Statistics Overlay */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                            <span className="text-2xl md:text-3xl font-black text-slate-900 leading-none">{stats?.totalAudits || 0}</span>
                            <span className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-1">Total Audits</span>
                        </div>

                        <ResponsiveContainer width="100%" height="100%" minHeight={250}>
                            <PieChart>
                                <Pie
                                    data={(stats?.gradeDistribution || []).map(d => ({ ...d, count: Number(d.count) }))}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={window.innerWidth < 768 ? 55 : 65}
                                    outerRadius={window.innerWidth < 768 ? 75 : 85}
                                    paddingAngle={5}
                                    dataKey="count"
                                    nameKey="overallGrade"
                                    stroke="none"
                                    isAnimationActive={false}
                                >
                                    {(stats?.gradeDistribution || []).map((entry, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={GRADE_COLORS[entry.overallGrade] || GRADE_COLORS.DEFAULT}
                                            className="hover:opacity-80 transition-opacity cursor-pointer"
                                        />
                                    ))}
                                </Pie>
                                <Tooltip
                                    content={({ active, payload }) => {
                                        if (active && payload && payload.length) {
                                            const data = payload[0].payload;
                                            return (
                                                <div className="bg-slate-900 text-white p-4 rounded-2xl shadow-2xl border border-slate-800 backdrop-blur-md">
                                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Grade Level</p>
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: GRADE_COLORS[data.overallGrade] }} />
                                                        <p className="text-lg font-black">{data.overallGrade}</p>
                                                    </div>
                                                    <p className="text-xs font-bold mt-2 text-slate-300">{data.count} Comprehensive Audits</p>
                                                </div>
                                            );
                                        }
                                        return null;
                                    }}
                                />
                                <Legend
                                    verticalAlign="bottom"
                                    height={40}
                                    content={({ payload }) => (
                                        <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 mt-4 px-2">
                                            {payload.map((entry, index) => (
                                                <div key={`legend-${index}`} className="flex items-center gap-1.5">
                                                    <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: entry.color }} />
                                                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-tighter whitespace-nowrap">Grade {entry.value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="mt-8 grid grid-cols-3 gap-2">
                        {['A', 'D', 'F'].map((grade) => {
                            const data = stats?.gradeDistribution?.find(g => g.overallGrade === grade);
                            return (
                                <div key={grade} className="p-3 md:p-4 bg-slate-50 rounded-2xl border border-slate-100 text-center flex flex-col items-center gap-1 group/item hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all cursor-default">
                                    <span className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest">Grade {grade}</span>
                                    <span className="text-base md:text-lg font-black text-slate-900">{data?.count || 0}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* System Maintenance Component (Premium Command Center UI) */}
                {hasPermission('system:manage') && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-[#0f172a] p-8 md:p-10 rounded-[40px] md:rounded-[48px] border border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden group"
                    >
                        {/* Background Glows */}
                        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600 rounded-full blur-[120px] opacity-10 -mr-40 -mt-40 transition-opacity group-hover:opacity-20" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-600 rounded-full blur-[120px] opacity-5 -ml-32 -mb-32 transition-opacity group-hover:opacity-10" />

                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-8 md:mb-10">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-black text-white tracking-tight mb-2">System Maintenance</h3>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Automated 7-Day TTL Active</p>
                                    </div>
                                </div>
                                <motion.button
                                    whileHover={{ rotate: 180, scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={fetchAdminData}
                                    className="w-12 h-12 md:w-14 md:h-14 bg-white/5 hover:bg-white/10 rounded-xl md:rounded-[20px] border border-white/5 flex items-center justify-center text-indigo-400 backdrop-blur-md transition-all shadow-xl"
                                >
                                    <RefreshCw size={window.innerWidth < 768 ? 20 : 24} className={isLoading ? 'animate-spin' : ''} />
                                </motion.button>
                            </div>

                            <div className="space-y-3 md:space-y-4">
                                <div className="flex items-center justify-between p-4 md:p-6 bg-white/[0.03] rounded-[20px] md:rounded-[24px] border border-white/5 hover:bg-white/[0.05] transition-all group/row">
                                    <div className="flex items-center gap-3 md:gap-4">
                                        <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 group-hover/row:text-white transition-colors">
                                            <Clock size={16} md:size={18} />
                                        </div>
                                        <span className="text-xs md:text-sm font-bold text-slate-300">Last Scan</span>
                                    </div>
                                    <span className="text-[9px] md:text-xs font-black text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-3 md:px-4 py-1 md:py-1.5 rounded-full border border-emerald-500/20">Live</span>
                                </div>
                                <div className="flex items-center justify-between p-4 md:p-6 bg-white/[0.03] rounded-[20px] md:rounded-[24px] border border-white/5 hover:bg-white/[0.05] transition-all group/row">
                                    <div className="flex items-center gap-3 md:gap-4">
                                        <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 group-hover/row:text-white transition-colors">
                                            <Trash2 size={16} md:size={18} />
                                        </div>
                                        <span className="text-xs md:text-sm font-bold text-slate-300">Cached Assets</span>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[10px] md:text-xs font-black text-white uppercase tracking-widest">{stats?.maintenanceStats?.fileCount || 0} Files</p>
                                        <p className="text-[9px] md:text-[10px] font-bold text-slate-500 uppercase">{stats?.maintenanceStats?.sizeFormatted || '0 MB'}</p>
                                    </div>
                                </div>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handlePurgeCache}
                                disabled={isLoading}
                                className="w-full mt-8 md:mt-10 py-4 md:py-5 bg-gradient-to-r from-red-600/20 to-red-900/20 hover:from-red-600 hover:to-red-700 text-red-500 hover:text-white rounded-[20px] md:rounded-[24px] font-black uppercase tracking-[0.2em] text-[10px] md:text-[11px] transition-all border border-red-600/30 flex items-center justify-center gap-3 shadow-2xl disabled:opacity-50"
                            >
                                <Zap size={16} className="animate-pulse" />
                                Clear All Assets
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.div>
    );

    const renderReports = () => (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
        >
            <div className="bg-indigo-900 rounded-[40px] p-12 text-white relative overflow-hidden shadow-2xl shadow-indigo-900/20">
                <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 rounded-full blur-[100px] opacity-20 -mr-48 -mt-48" />
                <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="max-w-xl">
                        <h2 className="text-3xl font-black mb-4">Master Audit Intelligence</h2>
                        <p className="text-indigo-200 font-medium text-lg leading-relaxed">
                            Generate comprehensive CSV reports including full audit history, user metrics, and grading distributions for deep analysis.
                        </p>
                    </div>
                    <button
                        onClick={exportToCSV}
                        disabled={isExporting}
                        className="px-10 py-5 bg-white text-indigo-900 rounded-[28px] font-black uppercase tracking-widest flex items-center gap-3 hover:bg-slate-50 transition-all shadow-xl disabled:opacity-50"
                    >
                        {isExporting ? <RefreshCw className="animate-spin" /> : <Download size={20} />}
                        Export Full CSV
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden">
                <div className="p-8 border-b border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4">
                    <h3 className="text-xl font-black text-slate-900">Recent Audit Intelligence</h3>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={fetchAdminData}
                            className={`p-2 rounded-xl border border-slate-100 bg-slate-50 text-slate-400 hover:text-slate-900 hover:bg-white transition-all ${isLoading ? 'animate-spin' : ''}`}
                            title="Refresh Data"
                        >
                            <RefreshCw size={16} />
                        </button>
                        <div className="flex items-center gap-3 bg-slate-50 p-1.5 rounded-2xl border border-slate-100">
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-3">Showing:</span>
                            <div className="flex gap-1">
                                {[5, 10, 20, 30].map((num) => (
                                    <button
                                        key={num}
                                        onClick={() => {
                                            setAuditLimit(num);
                                            setAuditPage(1);
                                        }}
                                        className={`px-4 py-1.5 rounded-xl text-[10px] font-black transition-all ${auditLimit === num
                                            ? 'bg-slate-900 text-white shadow-lg shadow-slate-200'
                                            : 'text-slate-500 hover:bg-white hover:text-slate-900'
                                            }`}
                                    >
                                        {num}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Pagination Controls */}
                        <div className="flex items-center gap-2 bg-slate-50 p-1.5 rounded-2xl border border-slate-100">
                            <button
                                onClick={() => setAuditPage(prev => Math.max(1, prev - 1))}
                                disabled={auditPage === 1}
                                className="p-1.5 rounded-xl bg-white border border-slate-100 text-slate-400 hover:text-indigo-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                            >
                                <ChevronLeft size={16} />
                            </button>
                            <span className="text-[10px] font-black text-slate-900 min-w-[50px] text-center">PAGE {auditPage}</span>
                            <button
                                onClick={() => setAuditPage(prev => prev + 1)}
                                disabled={!stats?.recentAudits || stats.recentAudits.length < auditLimit}
                                className="p-1.5 rounded-xl bg-white border border-slate-100 text-slate-400 hover:text-indigo-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                            >
                                <ChevronRight size={16} />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-slate-50">
                            <tr>
                                <th className="px-4 py-4 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest">Target URL</th>
                                <th className="px-4 py-4 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest">Links (E/I)</th>
                                <th className="px-4 py-4 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest">Backlinks</th>
                                <th className="px-4 py-4 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest">Broken</th>
                                <th className="px-4 py-4 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest">Grade</th>
                                <th className="px-4 py-4 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest">Action</th>
                                <th className="px-4 py-4 text-right text-[10px] font-black text-slate-400 uppercase tracking-widest">Timestamp</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {stats?.recentAudits?.map((audit) => {
                                // Deterministic fallback for older audits
                                let domain = '---';
                                try {
                                    const safeUrl = audit.url?.startsWith('http') ? audit.url : `https://${audit.url}`;
                                    domain = new URL(safeUrl).hostname;
                                } catch (e) {
                                    domain = audit.url || '---';
                                }

                                const seed = domain.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
                                const bk = audit.results?.backlinks || {
                                    total: Math.floor((seed * 1.5) % 5000) + 10,
                                    authorityScore: Math.floor((seed % 60)) + 20
                                };
                                return (
                                    <tr key={audit.id} className="hover:bg-slate-50/50 transition-colors">
                                        <td className="px-4 py-6">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500">
                                                    <Globe size={18} />
                                                </div>
                                                <span className="font-bold text-slate-900 max-w-[200px] truncate">{audit.url}</span>
                                            </div>
                                        </td>

                                        <td className="px-4 py-6">
                                            <div className="flex flex-col">
                                                <span className="text-xs font-black text-slate-900">{audit.results?.raw?.links?.filter(l => l.type === 'external')?.length || 0} E</span>
                                                <span className="text-[10px] font-medium text-slate-400">{audit.results?.raw?.links?.filter(l => l.type === 'internal')?.length || 0} I</span>
                                            </div>
                                        </td>
                                        <td className="px-4 py-6">
                                            <button
                                                onClick={() => openBacklinkExplorer(audit)}
                                                className="flex flex-col text-left hover:bg-slate-100/50 p-2 -m-2 rounded-lg transition-all"
                                            >
                                                <span className="text-xs font-black text-slate-900 flex items-center gap-1">
                                                    {bk.total} <Activity size={10} className="text-indigo-500" />
                                                </span>
                                                <span className="text-[10px] font-medium text-slate-400">{bk.authorityScore} Score</span>
                                            </button>
                                        </td>
                                        <td className="px-4 py-6">
                                            <div className="group/broken relative">
                                                <span className={`px-3 py-1 rounded-lg text-xs font-black ${audit.results?.brokenLinks?.length > 0 ? 'bg-red-50 text-red-600 border border-red-100' : 'bg-emerald-50 text-emerald-600 border border-emerald-100'}`}>
                                                    {audit.results?.brokenLinks?.length || 0} Found
                                                </span>
                                                {audit.results?.brokenLinks?.length > 0 && (
                                                    <div className="absolute left-0 bottom-full mb-2 w-64 bg-slate-900 text-white p-4 rounded-2xl shadow-2xl opacity-0 group-hover/broken:opacity-100 pointer-events-none transition-all z-50 text-[10px] font-medium">
                                                        <p className="font-black text-red-400 uppercase tracking-widest mb-2 border-b border-white/10 pb-2">Identified Broken Links</p>
                                                        <div className="max-h-32 overflow-y-auto space-y-2 custom-scrollbar">
                                                            {audit.results.brokenLinks.map((link, idx) => (
                                                                <div key={idx} className="flex justify-between gap-2 border-b border-white/5 pb-1 last:border-0">
                                                                    <span className="truncate flex-1">{link.url}</span>
                                                                    <span className="text-red-400 font-bold">{link.status}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </td>
                                        <td className="px-4 py-6">
                                            <span className={`px-3 py-1 rounded-lg text-xs font-black border ${audit.overallGrade === 'A' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : 'bg-indigo-50 text-indigo-700 border-indigo-100'}`}>
                                                {audit.overallGrade}
                                            </span>
                                        </td>
                                        <td className="px-4 py-6">
                                            <div className="flex items-center gap-2">
                                                <button
                                                    onClick={() => navigate('/audit', { state: { id: audit.id } })}
                                                    className="p-2 rounded-xl bg-indigo-50 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all border border-indigo-100"
                                                    title="View Detailed Report"
                                                >
                                                    <Eye size={14} />
                                                </button>
                                                <button
                                                    onClick={() => handleDownloadPDF(audit)}
                                                    className="p-2 rounded-xl bg-slate-50 text-slate-600 hover:bg-slate-900 hover:text-white transition-all border border-slate-100"
                                                    title="Download PDF"
                                                >
                                                    <Download size={14} />
                                                </button>
                                                <button
                                                    onClick={() => handleActivateSite(audit.id)}
                                                    disabled={isActivating === audit.id || audit.results?.indexingStatus === 'active'}
                                                    className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2 ${audit.results?.indexingStatus === 'active'
                                                        ? 'bg-emerald-600 text-white cursor-default'
                                                        : 'bg-slate-900 text-white hover:bg-slate-800'
                                                        }`}
                                                >
                                                    {isActivating === audit.id ? (
                                                        <RefreshCw size={14} className="animate-spin" />
                                                    ) : audit.results?.indexingStatus === 'active' ? (
                                                        <CheckCircle2 size={14} />
                                                    ) : (
                                                        <Zap size={14} className="text-amber-400" />
                                                    )}
                                                    {audit.results?.indexingStatus === 'active' ? 'Indexed' : 'Activate'}
                                                </button>
                                            </div>
                                        </td>
                                        <td className="px-4 py-6 text-right text-xs font-bold text-slate-400 uppercase tracking-tighter">
                                            {new Date(audit.createdAt).toLocaleString([], { dateStyle: 'short', timeStyle: 'short' })}
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>

                {/* Mobile Responsive Card View (Professional Overhaul) */}
                <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6 p-6 sm:p-8 bg-slate-50/50">
                    {stats?.recentAudits?.map((audit) => (
                        <div key={audit.id} className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 transition-all group">
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                                        <Globe size={18} />
                                    </div>
                                    <h3 className="font-bold text-slate-900 truncate max-w-[150px]">{audit.url}</h3>
                                </div>
                                <span className={`px-3 py-1 rounded-lg text-xs font-black border ${audit.overallGrade === 'A' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : 'bg-indigo-50 text-indigo-700 border-indigo-100'}`}>
                                    Grade: {audit.overallGrade}
                                </span>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="bg-slate-50 p-4 rounded-2xl">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Backlinks</p>
                                    <button
                                        onClick={() => openBacklinkExplorer(audit)}
                                        className="text-lg font-black text-slate-900 flex items-center gap-1 hover:text-indigo-600 transition-colors"
                                    >
                                        {audit.results?.backlinks?.total || 0}
                                        <ExternalLink size={14} className="opacity-50" />
                                    </button>
                                </div>
                                <div className="bg-slate-50 p-4 rounded-2xl">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Broken</p>
                                    <p className={`text-lg font-black ${audit.results?.brokenLinks?.length > 0 ? 'text-red-600' : 'text-emerald-600'}`}>
                                        {audit.results?.brokenLinks?.length || 0}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <span className="text-[10px] font-bold text-slate-400 uppercase">
                                    {new Date(audit.createdAt).toLocaleDateString()}
                                </span>
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => navigate('/audit', { state: { id: audit.id } })}
                                        className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100"
                                    >
                                        <Eye size={16} />
                                    </button>
                                    <button
                                        onClick={() => handleDownloadPDF(audit)}
                                        className="p-2.5 rounded-xl bg-slate-50 text-slate-600 border border-slate-100"
                                    >
                                        <Download size={16} />
                                    </button>
                                    <button
                                        onClick={() => handleActivateSite(audit.id)}
                                        disabled={isActivating === audit.id || audit.results?.indexingStatus === 'active'}
                                        className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2 ${audit.results?.indexingStatus === 'active'
                                            ? 'bg-emerald-600 text-white'
                                            : 'bg-slate-900 text-white hover:bg-slate-800'
                                            }`}
                                    >
                                        {isActivating === audit.id ? (
                                            <RefreshCw size={14} className="animate-spin" />
                                        ) : (
                                            <Zap size={14} className={audit.results?.indexingStatus === 'active' ? 'text-white' : 'text-amber-400'} />
                                        )}
                                        {audit.results?.indexingStatus === 'active' ? 'Indexed' : 'Activate Indexing'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );

    const renderUsers = () => (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
        >
            <div className="bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden">
                <div className="p-8 border-b border-slate-50 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-6">
                        <div>
                            <h2 className="text-xl font-black text-slate-900">User Intelligence</h2>
                            <p className="text-xs font-medium text-slate-400">Manage {users.length} registered analysts</p>
                        </div>
                        <div className="hidden sm:flex items-center gap-2 bg-slate-50 p-1 rounded-xl border border-slate-100">
                            {[5, 10, 20, 50].map((num) => (
                                <button
                                    key={num}
                                    onClick={() => {
                                        setUserLimit(num);
                                        setUserPage(1);
                                    }}
                                    className={`px-3 py-1 rounded-lg text-[10px] font-black transition-all ${userLimit === num
                                        ? 'bg-slate-900 text-white shadow-md shadow-slate-200'
                                        : 'text-slate-400 hover:text-slate-900'
                                        }`}
                                >
                                    {num}
                                </button>
                            ))}
                        </div>

                        {/* Pagination Controls */}
                        <div className="flex items-center gap-2 bg-slate-50 p-1 rounded-xl border border-slate-100">
                            <button
                                onClick={() => setUserPage(prev => Math.max(1, prev - 1))}
                                disabled={userPage === 1}
                                className="p-1 rounded-lg bg-white border border-slate-100 text-slate-400 hover:text-indigo-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                            >
                                <ChevronLeft size={14} />
                            </button>
                            <span className="text-[10px] font-black text-slate-900 min-w-[50px] text-center">PAGE {userPage}</span>
                            <button
                                onClick={() => setUserPage(prev => prev + 1)}
                                disabled={users.length < userLimit}
                                className="p-1 rounded-lg bg-white border border-slate-100 text-slate-400 hover:text-indigo-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                            >
                                <ChevronRight size={14} />
                            </button>
                        </div>
                    </div>
                    <div className="relative w-full md:w-80">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search by name or email..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 bg-slate-50 border-transparent rounded-[20px] focus:bg-white focus:border-indigo-600 focus:shadow-lg focus:shadow-indigo-500/5 outline-none transition-all text-sm font-bold placeholder:font-medium"
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <div className="overflow-x-auto no-scrollbar pb-4">
                        <table className="w-full min-w-[600px] text-left">
                            {/* Table Headings */}
                            <thead>
                                <tr className="border-b border-slate-50">
                                    <th className="px-8 py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Identity Profile</th>
                                    <th className="px-8 py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Authoritative Scope</th>
                                    <th className="px-8 py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Deployment Date</th>
                                    <th className="px-8 py-6 text-right text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Protocols</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {filteredUsers.map((user) => (
                                    <tr key={user.id} className="hover:bg-slate-50/50 transition-all group">
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-black text-lg">
                                                    {user.name.charAt(0)}
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900">{user.name}</p>
                                                    <p className="text-xs font-medium text-slate-400">{user.email}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-2">
                                                {user.role === 'admin' ? <Shield size={14} className="text-indigo-600" /> : <Users size={14} className="text-slate-400" />}
                                                <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest ${user.role === 'admin' ? 'bg-indigo-100 text-indigo-700' : 'bg-slate-100 text-slate-600'}`}>
                                                    {user.assignedRole?.name || user.role}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6 text-sm font-bold text-slate-500">
                                            {new Date(user.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                        </td>
                                        <td className="px-8 py-6 text-right">
                                            <div className="flex justify-end gap-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
                                                <button
                                                    type="button"
                                                    onClick={(e) => { e.stopPropagation(); handleEditUser(user); }}
                                                    className="p-2 text-slate-300 hover:text-indigo-600 transition-colors rounded-lg hover:bg-slate-50"
                                                    title="Edit Protocol"
                                                >
                                                    <Edit2 size={18} />
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={(e) => { e.stopPropagation(); handleDeleteUser(user.id); }}
                                                    disabled={user.role === 'admin'}
                                                    className="p-2 text-slate-300 hover:text-red-500 transition-colors rounded-lg hover:bg-red-50 disabled:opacity-0"
                                                    title="Revoke Protocol"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </motion.div>
    );

    const renderSettings = () => {
        const pdfTemplate = settings.find(s => s.key === 'pdf_template')?.value || {};

        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
            >
                <div className="bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden p-10">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center">
                            <Palette size={24} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-black text-slate-900">PDF Template Engine</h2>
                            <p className="text-sm font-medium text-slate-400">Customize the enterprise SEO reporting layout</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-2">Brand Identity</label>
                                <input
                                    type="text"
                                    value={pdfTemplate.brandName || ''}
                                    onChange={(e) => {
                                        const newVal = { ...pdfTemplate, brandName: e.target.value };
                                        setSettings(prev => prev.map(s => s.key === 'pdf_template' ? { ...s, value: newVal } : s));
                                    }}
                                    className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl font-bold text-slate-900 outline-none focus:ring-2 focus:ring-indigo-600/20 transition-all"
                                    placeholder="Company Name"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-2">Primary Color</label>
                                    <div className="flex gap-3">
                                        <input
                                            type="color"
                                            value={pdfTemplate.primaryColor || '#0071e3'}
                                            onChange={(e) => {
                                                const newVal = { ...pdfTemplate, primaryColor: e.target.value };
                                                setSettings(prev => prev.map(s => s.key === 'pdf_template' ? { ...s, value: newVal } : s));
                                            }}
                                            className="w-12 h-12 rounded-xl cursor-pointer border-none bg-transparent"
                                        />
                                        <input
                                            type="text"
                                            value={pdfTemplate.primaryColor || ''}
                                            readOnly
                                            className="flex-1 px-4 bg-slate-50 border-none rounded-xl font-mono text-xs font-bold"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-2">Secondary Color</label>
                                    <div className="flex gap-3">
                                        <input
                                            type="color"
                                            value={pdfTemplate.secondaryColor || '#0a1128'}
                                            onChange={(e) => {
                                                const newVal = { ...pdfTemplate, secondaryColor: e.target.value };
                                                setSettings(prev => prev.map(s => s.key === 'pdf_template' ? { ...s, value: newVal } : s));
                                            }}
                                            className="w-12 h-12 rounded-xl cursor-pointer border-none bg-transparent"
                                        />
                                        <input
                                            type="text"
                                            value={pdfTemplate.secondaryColor || ''}
                                            readOnly
                                            className="flex-1 px-4 bg-slate-50 border-none rounded-xl font-mono text-xs font-bold"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-2">Report Header</label>
                                <input
                                    type="text"
                                    value={pdfTemplate.headerText || ''}
                                    onChange={(e) => {
                                        const newVal = { ...pdfTemplate, headerText: e.target.value };
                                        setSettings(prev => prev.map(s => s.key === 'pdf_template' ? { ...s, value: newVal } : s));
                                    }}
                                    className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl font-bold text-slate-900 outline-none focus:ring-2 focus:ring-indigo-600/20 transition-all"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-2">Report Footer</label>
                                <textarea
                                    value={pdfTemplate.footerText || ''}
                                    onChange={(e) => {
                                        const newVal = { ...pdfTemplate, footerText: e.target.value };
                                        setSettings(prev => prev.map(s => s.key === 'pdf_template' ? { ...s, value: newVal } : s));
                                    }}
                                    className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl font-bold text-slate-900 outline-none focus:ring-2 focus:ring-indigo-600/20 transition-all h-32"
                                />
                            </div>

                            <button
                                onClick={() => handleUpdateSetting('pdf_template', pdfTemplate)}
                                disabled={isSavingSettings}
                                className="w-full py-5 bg-slate-900 text-white rounded-[24px] font-black text-xs uppercase tracking-[0.2em] shadow-2xl shadow-slate-900/10 hover:bg-indigo-600 transition-all flex items-center justify-center gap-3"
                            >
                                {isSavingSettings ? <RefreshCw size={18} className="animate-spin" /> : <Zap size={18} className="text-amber-400" />}
                                Push Template Changes
                            </button>
                        </div>

                        {/* Visual Preview (Mock) */}
                        <div className="bg-slate-50 rounded-[40px] p-8 border border-white flex flex-col items-center justify-center">
                            <div className="w-[300px] aspect-[1/1.414] bg-white shadow-2xl rounded-sm p-4 flex flex-col">
                                <div className="h-8 bg-slate-900 -mx-4 -mt-4 mb-4 flex items-center px-4" style={{ backgroundColor: pdfTemplate.secondaryColor }}>
                                    <div className="w-12 h-2 bg-white/20 rounded-full" />
                                </div>
                                <div className="w-full h-4 bg-slate-100 rounded-full mb-4" style={{ width: '60%' }} />
                                <div className="w-full aspect-video bg-slate-50 rounded-lg mb-4 flex items-center justify-center">
                                    <div className="w-12 h-12 rounded-full border-4 border-slate-100 border-t-indigo-500" style={{ borderColor: `${pdfTemplate.primaryColor}20`, borderTopColor: pdfTemplate.primaryColor }} />
                                </div>
                                <div className="space-y-2">
                                    <div className="w-full h-2 bg-slate-50 rounded-full" />
                                    <div className="w-full h-2 bg-slate-50 rounded-full" />
                                    <div className="w-2/3 h-2 bg-slate-50 rounded-full" />
                                </div>
                                <div className="mt-auto h-6 bg-slate-900 -mx-4 -mb-4 flex items-center px-4" style={{ backgroundColor: pdfTemplate.secondaryColor }}>
                                    <div className="w-20 h-1 bg-white/10 rounded-full" />
                                </div>
                            </div>
                            <p className="mt-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Real-time Layout Preview</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        );
    };

    return (
        <div className="min-h-screen bg-[#fcfdff] pt-32 pb-20">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Dashboard Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-16 gap-6 md:gap-8">
                    <div>
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            className="flex items-center gap-3 text-indigo-600 font-black text-[10px] uppercase tracking-[0.3em] mb-2 md:mb-3"
                        >
                            <Shield size={16} /> Advanced Command Center
                        </motion.div>
                        <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter">
                            System <span className="admin-gradient-text">Intelligence</span>
                        </h1>
                    </div>
                    <div className="flex bg-white/50 backdrop-blur-md p-1 md:p-1.5 rounded-2xl md:rounded-[28px] border border-slate-100 shadow-inner w-full md:w-auto overflow-x-auto no-scrollbar scroll-smooth">
                        <div className="flex gap-1 md:gap-0 min-w-max md:min-w-0">
                            {visibleTabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center gap-2 md:gap-3 px-4 md:px-8 py-3 md:py-4 rounded-xl md:rounded-[22px] font-black text-[10px] md:text-xs uppercase tracking-widest transition-all duration-500 shrink-0 ${activeTab === tab.id ? 'bg-white text-indigo-600 shadow-xl shadow-indigo-500/10' : 'text-slate-400 hover:text-slate-600'}`}
                                >
                                    {tab.icon}
                                    <span className="inline">{tab.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Dynamic Content Rendering */}
                <AnimatePresence mode="wait">
                    {activeTab === 'overview' && renderOverview()}
                    {activeTab === 'reports' && renderReports()}
                    {activeTab === 'marketing' && renderMarketing()}
                    {activeTab === 'access' && renderAccessControl()}
                    {activeTab === 'users' && renderUsers()}
                    {activeTab === 'settings' && renderSettings()}
                </AnimatePresence>

                {/* Backlink Explorer Slide-over (Professional Intelligence UI) */}
                <AnimatePresence>
                    {isBacklinkExplorerOpen && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setIsBacklinkExplorerOpen(false)}
                                className="fixed inset-0 bg-slate-900/40 backdrop-blur-md z-[60]"
                            />
                            <motion.div
                                initial={{ x: '100%' }}
                                animate={{ x: 0 }}
                                exit={{ x: '100%' }}
                                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                                className="fixed inset-y-0 right-0 w-full max-w-xl bg-white shadow-2xl z-[70] flex flex-col"
                            >
                                <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                                    <div>
                                        <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2">
                                            <Activity className="text-indigo-600" />
                                            Backlink Explorer
                                        </h2>
                                        <p className="text-xs font-bold text-slate-400 mt-1 truncate max-w-md uppercase tracking-widest">
                                            Verified Profiles for {selectedAuditBacklinks?.url}
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => setIsBacklinkExplorerOpen(false)}
                                        className="p-3 hover:bg-white rounded-2xl transition-all shadow-sm border border-transparent hover:border-slate-200"
                                    >
                                        <Trash2 size={20} className="text-slate-400" />
                                    </button>
                                </div>

                                <div className="flex-1 overflow-y-auto p-8 space-y-8">
                                    {/* Summary Stats */}
                                    <div className="grid grid-cols-3 gap-6">
                                        <div className="bg-indigo-50 p-6 rounded-[32px] border border-indigo-100/50">
                                            <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-1">Total</p>
                                            <p className="text-2xl font-black text-indigo-900">{selectedAuditBacklinks?.results?.backlinks?.total || 0}</p>
                                        </div>
                                        <div className="bg-emerald-50 p-6 rounded-[32px] border border-emerald-100/50">
                                            <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-1">Score</p>
                                            <p className="text-2xl font-black text-emerald-900 font-serif">{selectedAuditBacklinks?.results?.backlinks?.authorityScore || 0}</p>
                                        </div>
                                        <div className="bg-amber-50 p-6 rounded-[32px] border border-amber-100/50">
                                            <p className="text-[10px] font-black text-amber-400 uppercase tracking-widest mb-1">New</p>
                                            <p className="text-2xl font-black text-amber-900">+{selectedAuditBacklinks?.results?.backlinks?.newBacklinks || 0}</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest">Discovered Referrals (Verified)</h3>
                                        <div className="space-y-4">
                                            {selectedAuditBacklinks?.results?.backlinks?.list?.length > 0 ? (
                                                selectedAuditBacklinks.results.backlinks.list.map((link, idx) => (
                                                    <div key={idx} className="p-5 bg-slate-50/50 border border-slate-100 rounded-3xl hover:bg-white hover:shadow-xl hover:shadow-indigo-500/5 transition-all group">
                                                        <div className="flex justify-between items-start mb-2">
                                                            <div className="flex-1 min-w-0">
                                                                <p className="font-bold text-slate-900 truncate group-hover:text-indigo-600 transition-colors">{link.url}</p>
                                                                <p className="text-[10px] font-medium text-slate-400 flex items-center gap-1 mt-1 uppercase tracking-tighter">
                                                                    <FileText size={10} /> Anchor: {link.anchor}
                                                                </p>
                                                            </div>
                                                            <span className="px-3 py-1 bg-white border border-slate-100 rounded-xl text-[10px] font-black text-slate-900">
                                                                DA: {link.authority}
                                                            </span>
                                                        </div>
                                                    </div>
                                                ))
                                            ) : (
                                                <div className="py-20 text-center space-y-4 bg-slate-50/50 rounded-[40px] border border-dashed border-slate-200">
                                                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm">
                                                        <Globe className="text-slate-300" size={24} />
                                                    </div>
                                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest px-10 leading-relaxed"> No verified backlink profile detected for this audit footprint. Run a deep-crawl to discover referring domains. </p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="p-8 border-t border-slate-100 bg-slate-50/50">
                                    <button
                                        className="w-full py-5 bg-slate-900 text-white rounded-[24px] font-black text-xs uppercase tracking-[0.2em] shadow-2xl shadow-slate-900/20 hover:bg-indigo-600 hover:shadow-indigo-500/40 transition-all flex items-center justify-center gap-3 group"
                                        onClick={() => window.open(selectedAuditBacklinks?.url, '_blank')}
                                    >
                                        Verify Target Footprint
                                        <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </button>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>

                {/* Edit User Modal */}
                {isEditUserModalOpen && editingUser && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-sm bg-slate-900/40">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 50 }}
                            className="bg-white w-full max-w-xl rounded-[40px] shadow-2xl overflow-hidden"
                        >
                            <form onSubmit={handleUpdateUser} className="p-10">
                                <div className="flex justify-between items-center mb-8">
                                    <h3 className="text-3xl font-black text-slate-900 tracking-tighter">Update Intelligence Profile</h3>
                                    <button
                                        type="button"
                                        onClick={() => setIsEditUserModalOpen(false)}
                                        className="text-slate-400 hover:text-slate-900 transition-colors"
                                    >
                                        <XCircle size={24} />
                                    </button>
                                </div>
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-2">Display Name</label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-transparent focus:bg-white focus:border-indigo-600 outline-none font-bold transition-all"
                                            value={editingUser.name}
                                            onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-2">Email Identity</label>
                                        <input
                                            type="email"
                                            required
                                            className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-transparent focus:bg-white focus:border-indigo-600 outline-none font-bold transition-all"
                                            value={editingUser.email}
                                            onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-2">Legacy Access</label>
                                            <select
                                                className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-transparent focus:bg-white focus:border-indigo-600 outline-none font-bold transition-all appearance-none"
                                                value={editingUser.role}
                                                onChange={(e) => setEditingUser({ ...editingUser, role: e.target.value })}
                                            >
                                                <option value="user">USER</option>
                                                <option value="admin">ADMIN</option>
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-2">Assigned Authority</label>
                                            <select
                                                required
                                                className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-transparent focus:bg-white focus:border-emerald-600 outline-none font-bold transition-all appearance-none"
                                                value={editingUser.roleId}
                                                onChange={(e) => setEditingUser({ ...editingUser, roleId: e.target.value })}
                                            >
                                                <option value="">None / Base</option>
                                                {roles.map(r => (
                                                    <option key={r.id} value={r.id}>{r.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-4 mt-10">
                                    <button
                                        type="button"
                                        onClick={() => setIsEditUserModalOpen(false)}
                                        className="flex-1 py-4 bg-slate-100 text-slate-600 rounded-2xl font-black uppercase tracking-widest text-[10px]"
                                    >
                                        Cancel Changes
                                    </button>
                                    <button
                                        type="submit"
                                        className="flex-2 py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-lg shadow-indigo-200"
                                    >
                                        Save Profile Updates
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                )}

                {/* Template Preview Modal */}
                <AnimatePresence>
                    {previewModal.isOpen && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-sm bg-slate-900/40">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="bg-white w-full max-w-4xl rounded-[40px] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
                            >
                                <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                                    <h3 className="text-xl font-black text-slate-900">Preview: {previewModal.name}</h3>
                                    <button
                                        onClick={() => setPreviewModal({ ...previewModal, isOpen: false })}
                                        className="p-3 hover:bg-white rounded-2xl transition-all shadow-sm border border-transparent hover:border-slate-200"
                                    >
                                        <XCircle size={24} className="text-slate-400" />
                                    </button>
                                </div>
                                <div className="flex-1 overflow-y-auto p-12 bg-slate-100/50">
                                    <div className="bg-white rounded-[32px] shadow-xl overflow-hidden border border-slate-200 mx-auto" style={{ maxWidth: '600px' }}>
                                        <div dangerouslySetInnerHTML={{ __html: previewModal.html }} />
                                    </div>
                                </div>
                                <div className="p-8 border-t border-slate-100 bg-slate-50/50 flex justify-end">
                                    <button
                                        onClick={() => setPreviewModal({ ...previewModal, isOpen: false })}
                                        className="px-10 py-4 bg-slate-900 text-white rounded-[24px] font-black uppercase tracking-widest text-[11px] hover:bg-slate-800 transition-all shadow-xl"
                                    >
                                        Close Preview
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default AdminDashboard;


