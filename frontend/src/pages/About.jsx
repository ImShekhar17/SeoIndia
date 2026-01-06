import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Award, Shield, Globe, Cpu, BarChart3, Zap, Rocket, CheckCircle2, Server, Search, Layers } from 'lucide-react';

const About = () => {
    const highlights = [
        { label: 'Executive Team', value: '45+', icon: <Users size={20} /> },
        { label: 'Industries Mastered', value: '18+', icon: <Globe size={20} /> },
        { label: 'Success Velocity', value: '5.2x', icon: <Zap size={20} /> },
        { label: 'Data Sovereignty', value: 'Strict', icon: <Shield size={20} /> },
    ];

    const pillars = [
        {
            title: 'Neural SEO Protocols',
            icon: <Cpu />,
            desc: 'We utilize proprietary predictive models to anticipate search engine algorithm shifts before they happen. Our neural auditing process analyzes over 2,000 ranking factors in real-time.',
            color: 'indigo'
        },
        {
            title: 'Strategic Velocity',
            icon: <Rocket />,
            desc: 'Search dominance isn\'t just about quality; it\'s about speed. Our engineering team builds automated deployment pipelines for technical SEO that execute in hours, not weeks.',
            color: 'cyan'
        },
        {
            title: 'Semantic Dominance',
            icon: <Layers />,
            desc: 'Moving beyond keywords into "Entity Intelligence." We map your brand across the global knowledge graph to ensure maximum authority in AI-driven search environments.',
            color: 'blue'
        }
    ];

    const leadership = [
        { name: 'Dr. Aryan Sharma', role: 'Chief Systems Architect', bio: 'Former Data Science lead at Meta with a focus on neural network search patterns.' },
        { name: 'Sarah Jenkins', role: 'Head of Global Strategy', bio: '15 years of experience scaling Fortune 500 digital footprints across 4 continents.' },
        { name: 'Shekhar K.', role: 'Founder & CEO', bio: 'Visionary engineer dedicated to bridging the gap between high-performance code and digital marketing.' }
    ];

    return (
        <div className="bg-[#fbfbfd] min-h-screen pt-44 pb-32 overflow-hidden selection:bg-indigo-100">
            {/* Cinematic Background Elements */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] bg-[#0071e3]/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-indigo-500/5 blur-[100px] rounded-full" />
            </div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                {/* Hero Section */}
                <div className="flex flex-col lg:flex-row gap-20 items-center mb-48">
                    <div className="lg:w-3/5">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/5 text-[#86868b] text-[10px] font-black uppercase tracking-[0.2em] mb-10 border border-black/5"
                        >
                            <span className="w-2 h-2 rounded-full bg-[#0071e3] animate-pulse" />
                            Establishing Search Sovereignty
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="text-6xl md:text-8xl font-black mb-10 text-[#1d1d1f] tracking-tighter leading-[0.9]"
                        >
                            The Future of <br />
                            <span className="text-gradient">Search Intelligence.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-[#86868b] text-xl md:text-2xl font-medium leading-relaxed mb-12 max-w-2xl"
                        >
                            Founded in 2024 at the intersection of extreme data science and creative engineering, Value4Media was built to redefine how high-growth enterprises command digital visibility.
                        </motion.p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {highlights.map((h, i) => (
                                <motion.div
                                    key={h.label}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.4 + (i * 0.1) }}
                                    className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 transition-all group"
                                >
                                    <div className="text-indigo-600 mb-4 group-hover:scale-110 transition-transform">{h.icon}</div>
                                    <div className="text-3xl font-black text-slate-900 mb-1 tracking-tighter">{h.value}</div>
                                    <div className="text-slate-400 text-[9px] font-black uppercase tracking-widest">{h.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-2/5 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                            className="relative aspect-square flex items-center justify-center"
                        >
                            {/* Neural Grid Background */}
                            <div className="absolute inset-0 bg-blue-500/5 rounded-[64px] blur-3xl animate-pulse" />

                            <div className="relative w-full h-full glass-card rounded-[64px] border-white/20 overflow-hidden shadow-2xl flex items-center justify-center p-12 bg-white/40 backdrop-blur-3xl">
                                {/* The Neural Network Visualization */}
                                <div className="absolute inset-0 flex items-center justify-center scale-110">
                                    <div className="relative w-full h-full opacity-20">
                                        {[...Array(6)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                animate={{
                                                    rotate: 360,
                                                    scale: [1, 1.1, 1],
                                                }}
                                                transition={{
                                                    rotate: { duration: 20 + (i * 5), repeat: Infinity, ease: "linear" },
                                                    scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                                                }}
                                                className="absolute inset-0 border border-indigo-500/30 rounded-full"
                                                style={{ margin: `${i * 15}%` }}
                                            />
                                        ))}
                                    </div>

                                    <div className="relative z-10 flex flex-col items-center">
                                        {/* Core Interaction Node */}
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            className="w-24 h-24 bg-gradient-to-tr from-indigo-600 to-blue-500 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(79,70,229,0.5)] relative group cursor-pointer"
                                        >
                                            <Cpu size={32} className="text-white relative z-10 group-hover:rotate-90 transition-transform duration-500" />
                                            {/* Pulse Rings */}
                                            <motion.div
                                                animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                                className="absolute inset-0 bg-indigo-500 rounded-full"
                                            />
                                        </motion.div>

                                        {/* Floating Intelligence Nodes */}
                                        <div className="absolute inset-0 pointer-events-none">
                                            {[
                                                { icon: <Globe size={14} />, x: -80, y: -60, delay: 0 },
                                                { icon: <Zap size={14} />, x: 80, y: -50, delay: 0.5 },
                                                { icon: <BarChart3 size={14} />, x: 60, y: 70, delay: 1 },
                                                { icon: <Shield size={14} />, x: -70, y: 60, delay: 1.5 }
                                            ].map((node, i) => (
                                                <motion.div
                                                    key={i}
                                                    animate={{
                                                        y: [0, -10, 0],
                                                        opacity: [0.4, 1, 0.4]
                                                    }}
                                                    transition={{
                                                        duration: 3,
                                                        repeat: Infinity,
                                                        delay: node.delay
                                                    }}
                                                    className="absolute p-3 rounded-xl bg-white shadow-xl border border-slate-100 text-indigo-600 flex items-center justify-center"
                                                    style={{ left: `calc(50% + ${node.x}px)`, top: `calc(50% + ${node.y}px)` }}
                                                >
                                                    {node.icon}
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute bottom-10 left-0 right-0 text-center px-10">
                                    <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400 mb-2">Neural Link Active</p>
                                    <h4 className="text-xl font-black text-slate-900 tracking-tight">Intelligence Matrix v4.2</h4>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Detailed Story Section */}
                <div className="mb-48">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-8 text-slate-900 leading-tight">Beyond Traditional <br /> SEO Architectures</h2>
                            <div className="space-y-6 text-slate-500 text-lg leading-relaxed font-medium">
                                <p>
                                    In a world where AI-powered search engines are fundamentally changing the ranking landscape, traditional link building and keyword stuffing are obsolete. We view SEO as a high-fidelity engineering problem.
                                </p>
                                <p>
                                    Our proprietary "Neural Audit" system explores the latent relationships between your content and technical infrastructure, building an authority profile that search engines perceive as the definitive source of truth.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { title: '85%', label: 'Avg. Retention Rate', icon: <CheckCircle2 className="text-emerald-500" /> },
                                { title: '24/7', label: 'Crawl Intelligence', icon: <Server className="text-indigo-500" /> },
                                { title: '12k+', label: 'Daily Analysis', icon: <Search className="text-cyan-500" /> },
                                { title: '4.8x', label: 'Speed Multiplier', icon: <Zap className="text-amber-500" /> },
                            ].map((item, i) => (
                                <div key={i} className="p-8 rounded-[40px] bg-[#f5f5f7] border border-black/5 flex flex-col justify-between hover:bg-white hover:shadow-2xl transition-all h-full min-h-[220px]">
                                    <div className="mb-4">{item.icon}</div>
                                    <div>
                                        <div className="text-4xl font-black text-slate-900 mb-1">{item.title}</div>
                                        <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">{item.label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Pillars Section */}
                <div className="mb-48">
                    <div className="text-center mb-24">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-[#0071e3] text-[10px] font-black uppercase tracking-[0.4em] block mb-6"
                        >
                            The Infrastructure
                        </motion.span>
                        <h2 className="text-5xl md:text-6xl font-black mb-6 text-[#1d1d1f] tracking-tighter">Our Executive Protocols</h2>
                        <p className="text-[#86868b] text-xl max-w-3xl mx-auto font-medium">
                            We don't just "perform SEO." We engineer dominance through three absolute layers of strategic execution.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {pillars.map((pillar, i) => (
                            <motion.div
                                key={pillar.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                                viewport={{ once: true }}
                                className="glass-card p-12 group hover:bg-white hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-700 bg-white/50 border-slate-100 flex flex-col h-full"
                            >
                                <div className={`mb-10 w-16 h-16 rounded-2xl flex items-center justify-center text-indigo-600 bg-indigo-50 transition-colors duration-500 group-hover:bg-indigo-600 group-hover:text-white`}>
                                    {React.cloneElement(pillar.icon, { size: 32 })}
                                </div>
                                <h3 className="text-2xl font-black mb-6 text-slate-900">{pillar.title}</h3>
                                <p className="text-slate-500 font-medium leading-relaxed">{pillar.desc}</p>
                                <div className="mt-auto pt-10">
                                    <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest group-hover:translate-x-2 transition-transform inline-block">Learn Protocol →</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Leadership Section */}
                <div className="mb-32">
                    <div className="text-center mb-24">
                        <h2 className="text-5xl font-black mb-6 text-slate-900 tracking-tighter">Enterprise Visionaries</h2>
                        <p className="text-slate-400 text-lg font-medium">The engineers and strategists behind the world's most visible brands.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {leadership.map((member, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className="group"
                            >
                                <div className="relative mb-8 aspect-video rounded-[32px] overflow-hidden bg-slate-100 border border-slate-200">
                                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-[0.05] grayscale select-none pointer-events-none">
                                        <Users size={120} />
                                    </div>
                                    <div className="absolute bottom-6 left-6 flex gap-2">
                                        <div className="w-8 h-8 rounded-full bg-white/50 backdrop-blur-md flex items-center justify-center hover:bg-white transition-colors cursor-pointer">
                                            <Globe size={14} />
                                        </div>
                                    </div>
                                </div>
                                <h4 className="text-xl font-black text-slate-900 mb-1">{member.name}</h4>
                                <p className="text-indigo-600 text-xs font-black uppercase tracking-widest mb-4">{member.role}</p>
                                <p className="text-slate-500 font-medium text-sm leading-relaxed">{member.bio}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Final CTA Strip */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="p-16 rounded-[48px] bg-[#f8fafc] border border-indigo-100/50 text-center relative overflow-hidden shadow-[0_32px_120px_-20px_rgba(79,70,229,0.08)] group"
                >
                    {/* Highlight Theme Background Elements */}
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-white to-cyan-50/30 opacity-70" />
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[130px] rounded-full translate-x-1/2 -translate-y-1/2 animate-pulse" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-400/10 blur-[110px] rounded-full -translate-x-1/2 translate-y-1/2 animate-pulse" style={{ animationDelay: '1s' }} />

                    <div className="relative z-10">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-indigo-600 text-[10px] font-black uppercase tracking-[0.6em] block mb-6"
                        >
                            Next Generation Deployment
                        </motion.span>
                        <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter text-slate-900 leading-[1.1]">
                            Ready to engineer your <br />
                            <span className="text-gradient">dominant search position?</span>
                        </h2>
                        <button className="px-12 py-5 bg-slate-900 text-white rounded-full font-black uppercase tracking-widest text-[11px] hover:bg-indigo-600 transition-all transform hover:scale-105 active:scale-95 shadow-2xl shadow-indigo-500/20">
                            Initialize Growth Sequence
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;

