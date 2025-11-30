import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const userData = await login({ email, password });
        setIsLoading(false);
        if (userData) {
            // Professional role-based routing
            if (userData.role === 'admin' || (typeof userData === 'object' && userData.role === 'admin')) {
                navigate('/admin');
            } else {
                navigate('/audit');
            }
        }
    };

    return (
        <div className="min-h-screen bg-[#f5f5f7] flex items-center justify-center p-4 md:p-6 pt-24 md:pt-32 pb-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-[32px] md:rounded-[40px] shadow-2xl p-8 md:p-12 w-full max-w-md border border-white/50"
            >
                <div className="text-center mb-8 md:mb-10">
                    <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-blue-50 text-blue-600 mb-4 md:mb-6">
                        <User size={24} className="md:w-8 md:h-8" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">Welcome Back</h2>
                    <p className="text-gray-500 font-medium text-sm md:text-base">Sign in to access your dashboard</p>
                </div>
                <form onSubmit={handleLogin} className="space-y-4 md:space-y-6">
                    <div>
                        <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2 ml-1">Email Address</label>
                        <div className="relative group">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors" size={18} />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 md:py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-blue-500 focus:bg-white outline-none transition-all font-bold text-gray-900 text-sm md:text-base"
                                placeholder="name@company.com"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2 ml-1">Password</label>
                        <div className="relative group">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors" size={18} />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 md:py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-blue-500 focus:bg-white outline-none transition-all font-bold text-gray-900 text-sm md:text-base"
                                placeholder="••••••••"
                                required
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-3 md:py-4 bg-[#0071e3] hover:bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs md:text-sm shadow-xl shadow-blue-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoading ? 'Signing In...' : (
                            <>
                                Sign In <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </>
                        )}
                    </button>
                    <div className="flex justify-center">
                        <Link to="/forgot-password" size="sm" className="text-xs font-black text-blue-600 hover:text-blue-700">Forgot Password?</Link>
                    </div>
                </form>
                <div className="mt-8 text-center text-xs md:text-sm font-bold text-gray-400">
                    Don't have an account? <Link to="/signup" className="text-blue-600 hover:text-blue-700">Create one for free</Link>
                </div>
            </motion.div>
        </div>
    );
};

export default Login;
