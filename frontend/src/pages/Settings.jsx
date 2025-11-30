import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Lock, Save, Camera, Info, ShieldCheck } from 'lucide-react';
import api from '../services/api';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

const Settings = () => {
    const { user } = useAuth();
    const [activeTab, setActiveTab] = useState('general');
    const [isLoading, setIsLoading] = useState(false);

    const [generalData, setGeneralData] = useState({
        name: user?.name || '',
        email: user?.email || '',
    });

    const [passwordData, setPasswordData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    const handleGeneralChange = (e) => {
        setGeneralData({ ...generalData, [e.target.name]: e.target.value });
    };

    const handlePasswordChange = (e) => {
        setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
    };

    const updateGeneral = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const res = await api.put('/auth/updatedetails', generalData);
            if (res.data.success) {
                toast.success('Profile updated successfully!');
            }
        } catch (error) {
            toast.error(error.response?.data?.message || 'Update failed');
        } finally {
            setIsLoading(false);
        }
    };

    const updatePassword = async (e) => {
        e.preventDefault();
        if (passwordData.newPassword !== passwordData.confirmPassword) {
            return toast.error('New passwords do not match');
        }
        setIsLoading(true);
        try {
            const res = await api.put('/auth/updatepassword', {
                currentPassword: passwordData.currentPassword,
                newPassword: passwordData.newPassword
            });
            if (res.data.success) {
                toast.success('Password updated successfully!');
                setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
            }
        } catch (error) {
            toast.error(error.response?.data?.message || 'Password update failed');
        } finally {
            setIsLoading(false);
        }
    };

    const fileInputRef = React.useRef(null);

    const handlePhotoClick = () => {
        fileInputRef.current.click();
    };

    const handlePhotoChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // Validation based on implementation plan (2MB)
        if (file.size > 2 * 1024 * 1024) {
            return toast.error('Image size must be less than 2MB');
        }

        const formData = new FormData();
        formData.append('file', file);

        const loadingToast = toast.loading('Uploading photo...');

        try {
            // We need to use standard axios or fetch for formData if the api instance enforces JSON
            // But usually axios handles formData correctly if we don't manually set Content-Type to JSON
            // Let's assume api instance handles it, or we explicitly perform the request.

            const res = await api.post('/auth/uploadphoto', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (res.data.success) {
                toast.success('Profile photo updated!', { id: loadingToast });
                // We'd ideally update the global user context here. 
                // Since useAuth provides `user`, we might need a `refreshUser` or manual update method.
                // For now, we'll reload the page to fetch fresh user data or assume AuthContext creates a persistent session.
                window.location.reload();
            }
        } catch (error) {
            toast.error(error.response?.data?.message || 'Upload failed', { id: loadingToast });
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-32 pb-20">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="mb-10">
                    <h1 className="text-4xl font-black text-gray-900 mb-2">Account Settings</h1>
                    <p className="text-gray-500 font-medium">Manage your personal information and security preferences.</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar Tabs */}
                    <div className="lg:w-1/4">
                        <div className="bg-white rounded-[30px] p-4 border border-gray-100 shadow-sm sticky top-32">
                            <nav className="space-y-2">
                                <button
                                    onClick={() => setActiveTab('general')}
                                    className={`w-full flex items-center gap-3 px-6 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all ${activeTab === 'general' ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' : 'text-gray-500 hover:bg-gray-50'
                                        }`}
                                >
                                    <User size={18} /> General
                                </button>
                                <button
                                    onClick={() => setActiveTab('security')}
                                    className={`w-full flex items-center gap-3 px-6 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all ${activeTab === 'security' ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' : 'text-gray-500 hover:bg-gray-50'
                                        }`}
                                >
                                    <Lock size={18} /> Security
                                </button>
                            </nav>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="lg:w-3/4">
                        <div className="bg-white rounded-[40px] border border-gray-100 shadow-sm overflow-hidden p-8 md:p-12">
                            {activeTab === 'general' && (
                                <motion.form
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    onSubmit={updateGeneral}
                                    className="space-y-8"
                                >
                                    <div className="flex items-center gap-6 mb-8 pb-8 border-b border-gray-100">
                                        <div className="w-24 h-24 rounded-3xl bg-blue-600 text-white flex items-center justify-center text-4xl font-black shadow-xl shadow-blue-500/20 overflow-hidden">
                                            {user.profileImage && user.profileImage !== 'default_profile.png' ? (
                                                <img
                                                    src={user.profileImage.startsWith('http') ? user.profileImage : `${import.meta.env.VITE_BASE_URL}/public/${user.profileImage}`}
                                                    alt={user.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                user?.name?.charAt(0)
                                            )}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-black text-gray-900 mb-1">Profile Photo</h3>
                                            <p className="text-sm text-gray-500 mb-4">Upload a new avatar or remove the current one.</p>
                                            <div className="flex gap-3">
                                                <input
                                                    type="file"
                                                    ref={fileInputRef}
                                                    onChange={handlePhotoChange}
                                                    className="hidden"
                                                    accept="image/jpeg,image/png,image/webp"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={handlePhotoClick}
                                                    className="px-5 py-2.5 bg-gray-100 text-gray-700 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-gray-200 transition-all flex items-center gap-2"
                                                >
                                                    <Camera size={14} /> Upload New
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={generalData.name}
                                                onChange={handleGeneralChange}
                                                className="w-full h-14 px-6 bg-gray-50 border-2 border-transparent rounded-2xl font-bold text-gray-900 focus:bg-white focus:border-blue-600 focus:outline-none transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={generalData.email}
                                                onChange={handleGeneralChange}
                                                className="w-full h-14 px-6 bg-gray-50 border-2 border-transparent rounded-2xl font-bold text-gray-900 focus:bg-white focus:border-blue-600 focus:outline-none transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div className="pt-6 border-t border-gray-100 flex justify-end">
                                        <button
                                            type="submit"
                                            disabled={isLoading}
                                            className="px-10 py-4 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 flex items-center gap-3 disabled:opacity-70"
                                        >
                                            {isLoading ? 'Saving...' : <><Save size={16} /> Save Changes</>}
                                        </button>
                                    </div>
                                </motion.form>
                            )}

                            {activeTab === 'security' && (
                                <motion.form
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    onSubmit={updatePassword}
                                    className="space-y-8"
                                >
                                    <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100 flex items-start gap-4">
                                        <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 shrink-0">
                                            <ShieldCheck size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-black text-orange-900 text-sm uppercase tracking-wide mb-1">Security Recommendation</h4>
                                            <p className="text-xs font-medium text-orange-800/70 leading-relaxed">
                                                For your safety, we recommend using a password with at least 12 characters, including numbers, symbols, and mixed-case letters.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="space-y-6 max-w-lg">
                                        <div className="space-y-2">
                                            <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Current Password</label>
                                            <input
                                                type="password"
                                                name="currentPassword"
                                                value={passwordData.currentPassword}
                                                onChange={handlePasswordChange}
                                                className="w-full h-14 px-6 bg-gray-50 border-2 border-transparent rounded-2xl font-bold text-gray-900 focus:bg-white focus:border-blue-600 focus:outline-none transition-all"
                                                placeholder="••••••••••••"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">New Password</label>
                                            <input
                                                type="password"
                                                name="newPassword"
                                                value={passwordData.newPassword}
                                                onChange={handlePasswordChange}
                                                className="w-full h-14 px-6 bg-gray-50 border-2 border-transparent rounded-2xl font-bold text-gray-900 focus:bg-white focus:border-blue-600 focus:outline-none transition-all"
                                                placeholder="••••••••••••"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Confirm New Password</label>
                                            <input
                                                type="password"
                                                name="confirmPassword"
                                                value={passwordData.confirmPassword}
                                                onChange={handlePasswordChange}
                                                className="w-full h-14 px-6 bg-gray-50 border-2 border-transparent rounded-2xl font-bold text-gray-900 focus:bg-white focus:border-blue-600 focus:outline-none transition-all"
                                                placeholder="••••••••••••"
                                            />
                                        </div>
                                    </div>

                                    <div className="pt-6 border-t border-gray-100 flex justify-end">
                                        <button
                                            type="submit"
                                            disabled={isLoading}
                                            className="px-10 py-4 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 flex items-center gap-3 disabled:opacity-70"
                                        >
                                            {isLoading ? 'Updating...' : <><Lock size={16} /> Update Password</>}
                                        </button>
                                    </div>
                                </motion.form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
