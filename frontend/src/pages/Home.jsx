import React from 'react';
import {
    motion, useInView, useMotionValue, useTransform, animate
} from 'framer-motion';
import { ArrowRight, Sparkles, BarChart3, Globe, ShieldCheck, Zap, Layers, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import AuditTool from '../components/seo/AuditTool';
import useSEO from '../hooks/useSEO';

const LogoMarquee = () => {
    const logos = [
        'META', 'APPLE', 'STRIPE', 'ADOBE', 'VERCEL', 'OPENAI',
        'NVIDIA', 'MICROSOFT', 'AMAZON', 'GOOGLE', 'TESLA', 'NETFLIX'
    ];

    return (
        <div className="overflow-hidden whitespace-nowrap mask-marquee py-12">
            <div className="flex gap-24 w-fit animate-marquee">
                {/* Double the logos for seamless looping */}
                {[...logos, ...logos].map((logo, i) => (
                    <span
                        key={`${logo}-${i}`}
                        className="text-2xl md:text-3xl font-black tracking-tighter text-[#1d1d1f]/30 hover:text-[#0071e3] transition-colors cursor-default select-none"
                    >
                        {logo}
                    </span>
                ))}
            </div>
        </div>
    );
};

const Counter = ({ value }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // Extract numbers and suffixes
    const numberMatch = value.match(/(\d+\.?\d*)/);
    const suffixMatch = value.match(/[^\d.]+/);

    const targetNumber = numberMatch ? parseFloat(numberMatch[0]) : 0;
    const suffix = suffixMatch ? suffixMatch[0] : '';

    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => {
        // Handle decimals if the target has them
        return targetNumber % 1 !== 0 ? latest.toFixed(1) : Math.round(latest);
    });

    React.useEffect(() => {
        if (isInView) {
            animate(count, targetNumber, {
                duration: 2,
                ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for "Apple-style" smoothness
                delay: 0.1
            });
        }
    }, [isInView, targetNumber, count]);

    return (
        <span ref={ref}>
            <motion.span>{rounded}</motion.span>
            {suffix}
        </span>
    );
};

const Home = () => {
    useSEO(
        "Organic SEO Service in India",
        "Scale your digital empire with SEO India. We engineer search dominance for high-growth tech companies using data-driven enterprise SEO strategies."
    );

    const stats = [
        { label: 'Organic Traffic Growth', value: '250%', icon: <BarChart3 className="text-indigo-600" /> },
        { label: 'Keywords Ranked #1', value: '12k+', icon: <Globe className="text-cyan-500" /> },
        { label: 'Revenue Generated', value: '45Cr+', icon: <Zap className="text-indigo-600" /> },
        { label: 'Client Retention', value: '98%', icon: <ShieldCheck className="text-cyan-500" /> },
    ];

    return (
        <div className="bg-[#fbfbfd] text-[#1d1d1f] selection:bg-indigo-100">
            {/* Hero Section */}
            <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-20">
                {/* Advanced Background System */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-indigo-500/5 blur-[150px] rounded-full" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/5 blur-[120px] rounded-full" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-6xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/5 border border-black/5 text-[#86868b] text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] mb-8 md:mb-12">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3] animate-pulse" />
                            Advanced SEO Intelligence for 2026
                        </div>

                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2, ease: [0, 0.55, 0.45, 1] }}
                            className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 md:mb-10 text-[#1d1d1f]"
                        >
                            Scale Your Digital <br />
                            <span className="text-gradient">Empire with SeoIndia</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-[#86868b] text-base md:text-xl lg:text-2xl mb-10 md:mb-16 max-w-3xl mx-auto leading-relaxed font-medium"
                        >
                            We engineer search dominance for high-growth tech companies.
                            Our data-driven strategies transform your search visibility into enterprise revenue.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
                        >
                            <Link to="/contact" className="premium-button-primary w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 text-base md:text-lg shadow-2xl flex items-center justify-center gap-2">
                                Start Growing Now <ArrowRight size={20} />
                            </Link>
                            <Link to="/pricing" className="premium-button-secondary w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 text-base md:text-lg flex items-center justify-center">
                                View Enterprise Plans
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SEO Audit Section */}
            <AuditTool />

            {/* Dynamic Stats Branding */}
            <section className="py-32 border-y border-black/5 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-slate-50/50" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                viewport={{ once: true, margin: "-100px" }}
                                className="text-center group"
                            >
                                <div className="mb-8 inline-flex p-5 rounded-[24px] bg-white shadow-sm border border-black/5 transition-all duration-500 group-hover:border-indigo-500/30 group-hover:shadow-xl group-hover:shadow-indigo-500/10 group-hover:scale-110">
                                    {React.cloneElement(stat.icon, { size: 36 })}
                                </div>
                                <h3 className="text-6xl font-black mb-3 tracking-tighter text-slate-900 flex items-center justify-center">
                                    <Counter value={stat.value} />
                                </h3>
                                <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Feature Showcase */}
            <section className="py-32 container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-20">
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-6"
                        >
                            <Layers size={14} /> Our Philosophy
                        </motion.div>
                        <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight text-[#1d1d1f]">
                            Beyond Traditional <br />
                            <span className="text-[#0071e3]">Search Marketing</span>
                        </h2>
                        <p className="text-[#86868b] text-lg mb-10 leading-relaxed font-medium">
                            In a world dominated by AI search, traditional SEO is no longer enough.
                            We utilize proprietary data models and deep neural network analysis to
                            ensure your brand remains at the pinnacle of digital authority.
                        </p>
                        <ul className="space-y-6">
                            {[
                                { title: 'Neural SEO Analysis', desc: 'Predictive ranking models based on AI behavior.' },
                                { title: 'Hyper-Authority Building', desc: 'Enterprise-grade link acquisition strategies.' },
                                { title: 'Technical Excellence', desc: 'Server-level performance and schema dominance.' }
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4 p-4 rounded-2xl transition-all duration-300 hover:bg-[#f5f5f7] border border-transparent hover:border-black/5">
                                    <div className="w-10 h-10 rounded-full bg-[#0071e3]/10 flex items-center justify-center shrink-0">
                                        <Rocket size={18} className="text-[#0071e3]" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1 text-[#1d1d1f]">{item.title}</h4>
                                        <p className="text-[#86868b] text-sm font-medium">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="lg:w-1/2 relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-blue-400/10 blur-[100px] rounded-full" />
                        <div className="relative glass-card aspect-video flex items-center justify-center overflow-hidden border-black/5 p-2">
                            <div className="w-full h-full bg-white rounded-xl border border-black/5 flex items-center justify-center">
                                {/* Abstract Data Visualization Mockup */}
                                <div className="w-full h-full p-8 flex items-end gap-2">
                                    {[40, 60, 45, 90, 65, 80, 55, 95, 75, 100].map((h, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ height: 0 }}
                                            whileInView={{ height: `${h}%` }}
                                            transition={{ delay: i * 0.1, duration: 1 }}
                                            className="flex-grow bg-gradient-to-t from-indigo-600 to-cyan-400 rounded-t-sm"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Bar */}
            <section className="pb-32 container mx-auto px-6">
                <div className="text-center">
                    <p className="text-[#86868b] text-[10px] font-black uppercase tracking-[0.3em] mb-4">Global Enterprise Partners</p>
                    <LogoMarquee />
                </div>
            </section>
        </div>
    );
};

export default Home;
