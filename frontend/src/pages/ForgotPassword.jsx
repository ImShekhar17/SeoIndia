import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { KeyRound, ArrowRight, CheckCircle2, AlertCircle, ChevronLeft } from 'lucide-react';
import api from '../services/api';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        setMessage('');

        try {
            const res = await api.post('/auth/forgotpassword', { email });
            if (res.data.success) {
                setStatus('success');
                setMessage('Reset link sent! Please check your inbox.');
            }
        } catch (err) {
            setStatus('error');
            setMessage(err.response?.data?.message || 'Something went wrong. Please try again.');
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 pt-32 md:pt-40">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-xl shadow-blue-500/20">
                        <KeyRound size={32} />
                    </div>
                    <h2 className="text-3xl font-black text-gray-900 tracking-tight">Forgot Password?</h2>
                    <p className="mt-2 text-sm text-gray-600 font-medium">
                        No worries, we'll send you reset instructions.
                    </p>
                </div>

                <div className="bg-white py-10 px-6 shadow-2xl shadow-blue-900/5 rounded-[40px] border border-white sm:px-12 relative overflow-hidden">
                    {/* Background Decoration */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-[50px] opacity-50 -mr-10 -mt-10" />

                    {status === 'success' ? (
                        <div className="text-center py-8">
                            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500 animate-bounce">
                                <CheckCircle2 size={40} />
                            </div>
                            <h3 className="text-xl font-black text-gray-900 mb-2">Check Your Email</h3>
                            <p className="text-gray-500 mb-8 font-medium">
                                We've sent a password reset link to <br />
                                <span className="text-gray-900 font-bold">{email}</span>
                            </p>
                            <Link to="/login" className="inline-flex items-center justify-center w-full px-4 py-4 border border-transparent rounded-2xl shadow-sm text-xs font-black uppercase tracking-widest text-blue-600 bg-blue-50 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all">
                                Back to Login
                            </Link>
                        </div>
                    ) : (
                        <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email" className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">
                                    Email Address
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="appearance-none block w-full px-5 py-4 border border-gray-200 rounded-2xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent sm:text-sm font-bold transition-all bg-gray-50 focus:bg-white"
                                        placeholder="Enter your registered email"
                                    />
                                </div>
                            </div>

                            <AnimatePresence>
                                {status === 'error' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="bg-red-50 text-red-600 px-4 py-3 rounded-xl text-sm font-bold flex items-center gap-2"
                                    >
                                        <AlertCircle size={16} />
                                        {message}
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div>
                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className={`w-full flex justify-center py-4 px-4 border border-transparent rounded-2xl shadow-xl text-xs font-black uppercase tracking-widest text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all ${status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''}`}
                                >
                                    {status === 'loading' ? (
                                        <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                                    ) : (
                                        <span className="flex items-center gap-2">Send Reset Link <ArrowRight size={16} /></span>
                                    )}
                                </button>
                            </div>

                            <div className="flex items-center justify-center">
                                <Link to="/login" className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-gray-900 transition-colors">
                                    <ChevronLeft size={16} /> Back to Login
                                </Link>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

import { AnimatePresence } from 'framer-motion';

export default ForgotPassword;
