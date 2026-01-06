import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, User, ArrowRight, Check } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const { signup } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target; // Fixed: Destructure name and value correctly
        setFormData(prev => ({ ...prev, [name]: value })); // Fixed: computed property name
    };

    // Explicitly handle each input change to avoid any event pooling issues if that was a concern, 
    // though the above generic handler is fine in React 18+.
    // Keeping it simple with inline arrow functions in the inputs below is also an option but 
    // the generic handler is cleaner.

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        setIsLoading(true);
        const success = await signup({
            name: formData.name,
            email: formData.email,
            password: formData.password
        });
        setIsLoading(false);
        if (success) {
            navigate('/audit');
        }
    };

    return (
        <div className="min-h-screen pt-24 md:pt-32 pb-20 bg-gray-50 flex items-center justify-center px-4 md:px-6">
            <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 bg-white rounded-[32px] md:rounded-[40px] shadow-2xl shadow-blue-900/5 border border-white overflow-hidden">
                {/* Left Side: Info */}
                <div className="hidden lg:flex flex-col justify-center p-16 bg-[#0a1128] text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20 -mr-32 -mt-32" />
                    <div className="relative z-10">
                        {/* 
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-xl mb-8 font-black text-xl">Si</div>
                        */}
                        <img
                            src="/images/v4m-logo-icon.png"
                            alt="Value4Media"
                            className="h-10 md:h-12 w-auto object-contain mb-8 filter brightness-0 invert"
                        />
                        <h2 className="text-4xl font-black mb-6 leading-tight">Start Your Journey to <span className="text-blue-400">SEO Excellence</span></h2>
                        <div className="space-y-6">
                            {[
                                'Free comprehensive SEO Audits',
                                'Real-time performance tracking',
                                'Competitor analysis tools',
                                'Professional PDF reporting'
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                                        <Check size={14} />
                                    </div>
                                    <span className="font-medium text-gray-300">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Side: Form */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="p-8 md:p-12 lg:p-16"
                >
                    <div className="mb-8 md:mb-10 text-center lg:text-left">
                        <h1 className="text-3xl font-black text-gray-900 mb-2">Join Value4Media</h1>
                        <p className="text-gray-500 font-medium lg:hidden">Create your account to get started</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                            <div className="relative group">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors" size={18} />
                                <input
                                    type="text"
                                    name="name" // Added name attribute
                                    required
                                    value={formData.name}
                                    onChange={handleChange} // Use generic handler
                                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-blue-600 outline-none transition-all font-medium text-sm"
                                    placeholder="John Doe"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                            <div className="relative group">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors" size={18} />
                                <input
                                    type="email"
                                    name="email" // Added name attribute
                                    required
                                    value={formData.email}
                                    onChange={handleChange} // Use generic handler
                                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-blue-600 outline-none transition-all font-medium text-sm"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Password</label>
                                <div className="relative group">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors" size={18} />
                                    <input
                                        type="password"
                                        name="password" // Added name attribute
                                        required
                                        value={formData.password}
                                        onChange={handleChange} // Use generic handler
                                        className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-blue-600 outline-none transition-all font-medium text-sm"
                                        placeholder="••••••••"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Confirm</label>
                                <div className="relative group">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors" size={18} />
                                    <input
                                        type="password"
                                        name="confirmPassword" // Added name attribute
                                        required
                                        value={formData.confirmPassword}
                                        onChange={handleChange} // Use generic handler
                                        className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-blue-600 outline-none transition-all font-medium text-sm"
                                        placeholder="••••••••"
                                    />
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full mt-4 py-4 bg-[#0071e3] text-white rounded-2xl font-black uppercase tracking-widest text-xs md:text-sm hover:bg-blue-600 transition-all shadow-xl shadow-blue-500/20 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? 'Creating Account...' : (
                                <>
                                    Create My Account <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>

                    <p className="mt-8 text-center text-xs md:text-sm font-medium text-gray-500">
                        Already have an account? <Link to="/login" className="text-blue-600 font-black">Log in here</Link>
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Signup;
