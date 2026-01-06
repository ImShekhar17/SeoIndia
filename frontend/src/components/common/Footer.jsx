import React from 'react';
import { NavLink } from 'react-router-dom';
import { Twitter, Instagram, Linkedin, Github, ArrowUpRight, Mail, Phone, MapPin, Loader2 } from 'lucide-react';
import api from '../../services/api';
import toast from 'react-hot-toast';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const [email, setEmail] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    const handleSubscribe = async (e) => {
        e.preventDefault();
        if (!email) return;

        setLoading(true);
        try {
            const response = await api.post('/newsletter/subscribe', {
                email,
                source: 'footer'
            });

            if (response.data.success) {
                toast.success('System updated: Subscription confirmed.');
                setEmail('');
            }
        } catch (error) {
            const message = error.response?.data?.message || 'Subscription failed. System error.';
            toast.error(message);
        } finally {
            setLoading(false);
        }
    };

    const links = {
        services: [
            { name: 'Technical SEO', path: '/services' },
            { name: 'Neural Analysis', path: '/services' },
            { name: 'Link Strategy', path: '/services' },
            { name: 'Content Engine', path: '/services' },
        ],
        company: [
            { name: 'Our Story', path: '/about' },
            { name: 'Case Studies', path: '/case-studies' },
            { name: 'Enterprise Plans', path: '/pricing' },
            { name: 'Contact Strategy', path: '/contact' },
        ],
        social: [
            { icon: <Twitter size={18} />, name: 'Twitter' },
            { icon: <Linkedin size={18} />, name: 'LinkedIn' },
            { icon: <Github size={18} />, name: 'GitHub' },
            { icon: <Instagram size={18} />, name: 'Instagram' },
        ]
    };

    return (
        <footer className="bg-[#f5f5f7] border-t border-black/5 pt-20 md:pt-32 pb-12 relative overflow-hidden">
            {/* Subtle Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full md:w-[800px] h-32 md:h-[300px] bg-[#0071e3]/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 md:gap-16 lg:gap-8 mb-20 md:mb-24">

                    {/* Brand Identity */}
                    <div className="lg:col-span-4">
                        <NavLink to="/" className="flex items-center gap-3 mb-6 md:mb-8">
                            {/* Previous Branding
                            <div className="w-8 h-8 bg-[#0071e3] text-white rounded-full flex items-center justify-center font-black text-sm">
                                S
                            </div>
                            <span className="text-xl font-bold tracking-tighter text-[#1d1d1f]">SeoIndia</span>
                            */}
                            <img
                                src="/images/v4m-logo-full.png"
                                alt="Value4Media"
                                className="h-12 md:h-16 w-auto object-contain hover:scale-105 transition-transform duration-300"
                            />
                        </NavLink>
                        <p className="text-[#86868b] text-base md:text-lg leading-relaxed mb-8 md:mb-10 max-w-sm font-medium">
                            We build the search engines of tomorrow, today. Engineering digital dominance for the next generation of industry leaders.
                        </p>
                        <div className="flex gap-4 md:gap-5">
                            {links.social.map((soc) => (
                                <a
                                    key={soc.name}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white border border-black/5 flex items-center justify-center text-[#86868b] hover:text-white hover:bg-[#0071e3] hover:border-[#0071e3] hover:scale-110 transition-all duration-500 shadow-sm"
                                >
                                    {soc.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#86868b] mb-8 md:mb-10">Capabilities</h4>
                        <ul className="space-y-4 md:space-y-5">
                            {links.services.map(link => (
                                <li key={link.name}>
                                    <NavLink to={link.path} className="text-[#86868b] hover:text-[#0071e3] text-[13px] font-bold transition-colors uppercase tracking-widest">{link.name}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#86868b] mb-8 md:mb-10">Intelligence</h4>
                        <ul className="space-y-4 md:space-y-5">
                            {links.company.map(link => (
                                <li key={link.name}>
                                    <NavLink to={link.path} className="text-[#86868b] hover:text-[#0071e3] text-[13px] font-bold transition-colors uppercase tracking-widest">{link.name}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact / Newsletter */}
                    <div className="lg:col-span-4">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#86868b] mb-8 md:mb-10">Join the Collective</h4>
                        <p className="text-[#86868b] text-sm mb-6 md:mb-8 font-medium">Get exclusive SEO blueprints and data models delivered monthly.</p>
                        <form onSubmit={handleSubscribe} className="relative group">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="system@enterprise.com"
                                required
                                className="w-full bg-white border border-black/5 rounded-2xl px-6 py-4 text-sm text-[#1d1d1f] focus:outline-none focus:border-[#0071e3]/30 transition-all duration-500 shadow-sm pr-14"
                            />
                            <button
                                type="submit"
                                disabled={loading}
                                className="absolute right-2 top-2 p-2.5 bg-[#0071e3] text-white rounded-xl hover:bg-[#0077ed] shadow-lg shadow-indigo-500/10 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? <Loader2 size={18} className="animate-spin" /> : <ArrowUpRight size={18} />}
                            </button>
                        </form>
                        <div className="mt-8 md:mt-12 space-y-4">
                            <div className="flex items-center gap-3 text-[#86868b] text-[11px] md:text-sm font-bold tracking-widest uppercase truncate">
                                <Mail size={16} className="text-[#0071e3] shrink-0" /> seoIndia@value4media.com
                            </div>
                            <div className="flex items-center gap-3 text-[#86868b] text-[11px] md:text-sm font-bold tracking-widest uppercase">
                                <MapPin size={16} className="text-[#0071e3] shrink-0" /> Block B, Sector 132, Noida, Uttar Pradesh 201304
                            </div>
                        </div>
                    </div>
                </div>

                {/* Legal Bottom */}
                <div className="border-t border-black/5 pt-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                    <p className="text-[9px] font-black text-[#86868b] uppercase tracking-[0.2em]">
                        © {currentYear} Value4Media. All Rights Reserved.
                    </p>
                    <div className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-10">
                        {['Privacy Protocol', 'Service Agreement', 'Cookie Engine'].map(item => (
                            <span key={item} className="text-[9px] font-black text-[#86868b] uppercase tracking-[0.2em] hover:text-[#0071e3] cursor-pointer transition-colors">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
