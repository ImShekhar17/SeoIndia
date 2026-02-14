import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Globe, ArrowRight, ChevronDown } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        plan: '',
        domain: '',
        objectives: ''
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSf1sYSoPgZiHxff1yyB_cCW6xiY2BPqqz_9H_RIJE8Ab6Y2Tg/formResponse';

        // Map fields to Google Form entry IDs
        const formBody = new FormData();
        formBody.append('entry.829688332', formData.name);
        formBody.append('entry.323203849', formData.email);
        formBody.append('entry.713284079', formData.plan);
        formBody.append('entry.1752408262', formData.domain);
        formBody.append('entry.1185705936', formData.objectives);

        try {
            // Using a hidden iframe approach for compatibility with Google Forms CORS
            const iframe = document.createElement('iframe');
            iframe.name = 'hidden_iframe';
            iframe.style.display = 'none';
            document.body.appendChild(iframe);

            const form = document.createElement('form');
            form.action = GOOGLE_FORM_ACTION_URL;
            form.method = 'POST';
            form.target = 'hidden_iframe';

            for (const [key, value] of formBody.entries()) {
                const input = document.createElement('input');
                input.type = 'hidden';
                input.name = key;
                input.value = value;
                form.appendChild(input);
            }

            document.body.appendChild(form);
            form.submit();

            // Cleanup
            setTimeout(() => {
                document.body.removeChild(form);
                document.body.removeChild(iframe);
                setStatus('success');
                setFormData({ name: '', email: '', plan: '', domain: '', objectives: '' });

                // Reset success message after 5 seconds
                setTimeout(() => setStatus('idle'), 5000);
            }, 1000);
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('idle');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="bg-[#fbfbfd] min-h-screen pt-44 pb-32">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-20">

                    {/* Contact Information */}
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0071e3]/5 text-[#0071e3] text-[10px] font-black uppercase tracking-widest mb-6"
                        >
                            Strategic Ingestion
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-6xl md:text-8xl font-bold mb-8 text-[#1d1d1f] tracking-tighter"
                        >
                            Initiate <span className="text-gradient">Growth</span>
                        </motion.h1>
                        <p className="text-[#86868b] text-xl font-medium leading-relaxed mb-16 max-w-lg">
                            Our strategy team is ready to analyze your domain neural profile and
                            architect a path to dominance.
                        </p>

                        <div className="space-y-12">
                            {[
                                { icon: <Mail />, title: 'Intelligence Channel', detail: 'seoIndia@value4media.com', sub: '24-hour response protocol' },
                                { icon: <Phone />, title: 'Direct Access', detail: '+91 (800) SEO-INDIA', sub: 'Available for enterprise partners' },
                                { icon: <MapPin />, title: 'HQ Coordinates', detail: 'Sector 132, Noida', sub: 'Block B, UP 201304' }
                            ].map((item, i) => (
                                <div key={item.title} className="flex gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-[#f5f5f7] border border-black/5 flex items-center justify-center text-[#0071e3] transition-all duration-500 shrink-0">
                                        {React.cloneElement(item.icon, { size: 24 })}
                                    </div>
                                    <div>
                                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#86868b] mb-1">{item.title}</h4>
                                        <div className="text-xl font-bold text-[#1d1d1f] mb-1">{item.detail}</div>
                                        <p className="text-[#86868b] text-sm font-medium">{item.sub}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="glass-card p-12 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#0071e3]/5 blur-3xl rounded-full" />
                            <h3 className="text-3xl font-bold mb-10 tracking-tight text-[#1d1d1f]">Project Ingestion Form</h3>

                            <form className="space-y-8" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-[#86868b] ml-4">Legal Name</label>
                                        <input
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            type="text"
                                            placeholder="Your Name"
                                            required
                                            className="w-full bg-[#f5f5f7] border border-black/5 rounded-2xl px-6 py-4 text-[#1d1d1f] focus:outline-none focus:border-[#0071e3]/30 transition-all font-medium placeholder:text-gray-400"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-[#86868b] ml-4">Enterprise Email</label>
                                        <input
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            type="email"
                                            placeholder="Your Email"
                                            required
                                            className="w-full bg-[#f5f5f7] border border-black/5 rounded-2xl px-6 py-4 text-[#1d1d1f] focus:outline-none focus:border-[#0071e3]/30 transition-all font-medium placeholder:text-gray-400"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-[#86868b] ml-4">Selected Plan</label>
                                    <div className="relative">
                                        <select
                                            name="plan"
                                            value={formData.plan}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-[#f5f5f7] border border-black/5 rounded-2xl px-6 py-4 text-[#1d1d1f] focus:outline-none focus:border-[#0071e3]/30 transition-all font-medium appearance-none cursor-pointer"
                                        >
                                            <option value="" disabled>Select a strategic plan...</option>
                                            <option value="BASIC - $500/mo">BASIC - $500/mo</option>
                                            <option value="SILVER - $700/mo">SILVER - $700/mo</option>
                                            <option value="GOLD - $1000/mo">GOLD - $1000/mo</option>
                                            <option value="PREMIUM - $1800/mo">PREMIUM - $1800/mo</option>
                                            <option value="Custom / Enterprise / Unsure">Custom / Enterprise / Unsure</option>
                                        </select>
                                        <ChevronDown size={18} className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-[#86868b] ml-4">Domain URI</label>
                                    <div className="relative">
                                        <Globe size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" />
                                        <input
                                            name="domain"
                                            value={formData.domain}
                                            onChange={handleChange}
                                            type="text"
                                            placeholder="https://enterprise.com"
                                            required
                                            className="w-full bg-[#f5f5f7] border border-black/5 rounded-2xl pl-14 pr-6 py-4 text-[#1d1d1f] focus:outline-none focus:border-[#0071e3]/30 transition-all font-medium placeholder:text-gray-400"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-[#86868b] ml-4">Growth Objectives</label>
                                    <div className="relative">
                                        <MessageSquare size={18} className="absolute left-6 top-6 text-gray-400" />
                                        <textarea
                                            name="objectives"
                                            value={formData.objectives}
                                            onChange={handleChange}
                                            rows={4}
                                            placeholder="Describe your search dominance requirements..."
                                            required
                                            className="w-full bg-[#f5f5f7] border border-black/5 rounded-2xl pl-14 pr-6 py-6 text-[#1d1d1f] focus:outline-none focus:border-[#0071e3]/30 transition-all font-medium placeholder:text-gray-400"
                                        ></textarea>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="w-full premium-button-primary py-5 text-lg font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 shadow-xl shadow-indigo-500/10 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {status === 'loading' ? 'Ingesting...' : status === 'success' ? 'Protocol Success' : 'Initiate Protocol'}
                                    <Send size={20} className={status === 'loading' ? 'animate-pulse' : ''} />
                                </button>

                                {status === 'success' && (
                                    <motion.p
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-center text-green-600 text-sm font-bold uppercase tracking-widest bg-green-50 py-3 rounded-xl border border-green-100"
                                    >
                                        Analysis protocol initiated. Check your email soon.
                                    </motion.p>
                                )}

                                <p className="text-center text-[#86868b] text-[10px] font-bold uppercase tracking-widest">
                                    By submitting, you agree to our 24h response guarantee.
                                </p>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
