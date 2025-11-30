import React from 'react';
import { motion } from 'framer-motion';
import {
    ChevronRight, Play, CheckCircle2, AlertCircle,
    ArrowRight, Star, Users, Briefcase, Award
} from 'lucide-react';
import { Link } from 'react-router-dom';
import useSEO from '../../hooks/useSEO';

const BaseTemplate = ({
    industry,
    heroImage,
    heroBullets,
    introTitle,
    introText,
    stats,
    painPoints,
    benefits,
    painPointTitle,
    benefitTitle
}) => {
    useSEO(
        `${industry} SEO Services`,
        `Professional ${industry} SEO services to help your business dominate search rankings and generate high-quality leads.`
    );

    return (
        <div className="bg-white pt-[80px] md:pt-[120px]">
            {/* Hero Section */}
            <section
                className="relative min-h-[60vh] md:min-h-[70vh] flex items-center bg-cover bg-center overflow-hidden"
                style={{ backgroundImage: `url(${heroImage})` }}
            >
                <div className="absolute inset-0 bg-black/40" />
                <div className="container mx-auto px-6 relative z-10 py-12 md:py-20">
                    <div className="max-w-2xl bg-white/95 backdrop-blur-md p-8 md:p-16 rounded-[30px] md:rounded-[40px] shadow-2xl">
                        <nav className="flex flex-wrap items-center gap-2 text-[10px] md:text-xs font-bold text-orange-500 mb-6 uppercase tracking-widest">
                            <Link to="/" className="hover:text-orange-600 transition-colors">Home</Link>
                            <ChevronRight size={12} className="shrink-0" />
                            <span className="shrink-0">SEO Market</span>
                            <ChevronRight size={12} className="shrink-0" />
                            <span className="text-gray-400 truncate">{industry} SEO</span>
                        </nav>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6 md:mb-8 leading-[1.1]">
                            {industry} SEO <br className="hidden sm:block" /> Services
                        </h1>

                        <ul className="space-y-3 mb-8 md:mb-10">
                            {heroBullets.map((bullet, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-700 font-bold text-base md:text-lg">
                                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
                                    <span>{bullet}</span>
                                </li>
                            ))}
                        </ul>

                        <Link
                            to="/contact"
                            className="inline-flex w-full sm:w-auto items-center justify-center px-8 md:px-10 py-4 md:py-5 bg-[#fea116] hover:bg-[#e68a00] text-white font-black text-base md:text-lg rounded-xl transition-all shadow-xl shadow-orange-500/20 uppercase tracking-wider"
                        >
                            Get My Free Proposal
                        </Link>
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="py-12 md:py-16 bg-white border-b">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                        {stats.map((stat, i) => (
                            <div key={i} className="flex flex-col items-center text-center">
                                <div className={`w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full flex flex-col items-center justify-center text-white mb-4 md:mb-6 shadow-lg ${stat.bgColor} transform hover:scale-105 transition-transform duration-300`}>
                                    <span className="text-2xl sm:text-3xl md:text-4xl font-black">{stat.value}</span>
                                    <span className="text-[8px] sm:text-[10px] md:text-xs font-bold uppercase tracking-tighter opacity-80 px-2">{stat.label}</span>
                                </div>
                                <p className="text-gray-500 text-[10px] md:text-sm font-bold uppercase tracking-widest leading-tight max-w-[120px]">
                                    {stat.subLabel}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-16 md:py-24 bg-[#fbfbfd]">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-12 md:gap-16 items-center">
                        <div className="w-full lg:w-1/2 relative group">
                            <div className="aspect-video rounded-[24px] md:rounded-[32px] overflow-hidden shadow-2xl relative">
                                <img
                                    src={`https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800`}
                                    alt="Analysis"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                    <div className="w-16 h-16 md:w-20 md:h-20 bg-red-600 rounded-full flex items-center justify-center text-white shadow-2xl cursor-pointer hover:scale-110 transition-transform">
                                        <Play fill="currentColor" size={24} className="md:w-8 md:h-8" />
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-24 h-24 md:w-32 md:h-32 bg-blue-600 rounded-full -z-10 blur-2xl opacity-20" />
                        </div>
                        <div className="w-full lg:w-1/2 text-center lg:text-left">
                            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 md:mb-8 leading-tight italic">
                                {introTitle}
                            </h2>
                            <p className="text-gray-600 text-base md:text-lg leading-relaxed font-medium mb-6 md:mb-8 text-justify lg:text-left">
                                {introText}
                            </p>
                            <button className="inline-flex items-center gap-2 text-blue-600 font-black hover:gap-4 transition-all uppercase tracking-widest text-sm md:text-base">
                                LEARN MORE ABOUT OUR PROCESS <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pain Points Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
                        <h2 className="text-3xl md:text-5xl font-black text-blue-500 mb-6 leading-tight">
                            {painPointTitle}
                        </h2>
                        <p className="text-gray-600 font-bold mb-4 px-4">
                            Struggling to rev up your {industry.toLowerCase()} business? Here are the key pain points you might be facing:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                        {painPoints.map((point, i) => (
                            <div key={i} className="flex flex-col sm:flex-row gap-6 p-6 rounded-3xl hover:bg-gray-50 transition-colors group border border-transparent hover:border-gray-100">
                                <div className="shrink-0 w-14 h-14 md:w-16 md:h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                                    <AlertCircle size={28} className="md:w-8 md:h-8" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg md:text-xl font-black text-gray-900 mb-2 md:mb-3">{point.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed font-medium">
                                        {point.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 md:py-24 bg-[#f8fbff]">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
                        <h2 className="text-3xl md:text-5xl font-black text-blue-500 mb-6 uppercase tracking-tight leading-tight">
                            {industry} SEO for your Business
                        </h2>
                        <p className="text-gray-600 font-bold px-4">
                            Whether searching for a local {industry.toLowerCase()} service or expert solutions, appearing prominently in search results is crucial.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                        {benefits.map((benefit, i) => (
                            <div key={i} className="text-center bg-white p-8 md:p-10 rounded-[32px] shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group">
                                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#f8fbff] rounded-2xl md:rounded-3xl shadow-sm border border-blue-100 flex items-center justify-center mx-auto mb-6 md:mb-8 text-blue-500 group-hover:scale-110 transition-transform">
                                    <CheckCircle2 size={32} className="md:w-10 md:h-10" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-3 md:mb-4">{benefit.title}</h3>
                                <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action Bar */}
            <section className="py-10 md:py-16 bg-[#0a1128] text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20 -mr-32 -mt-32" />
                <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
                    <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-6">
                        <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center shrink-0">
                            <Star fill="white" size={24} />
                        </div>
                        <div>
                            <h4 className="text-xl md:text-2xl font-black">Ready to scale your {industry} rankings?</h4>
                            <p className="text-blue-200 opacity-80 font-medium">Join 5000+ satisfied clients today.</p>
                        </div>
                    </div>
                    <Link to="/contact" className="w-full sm:w-auto px-10 md:px-12 py-4 md:py-5 bg-[#fea116] rounded-xl font-black text-base md:text-lg hover:bg-orange-600 hover:scale-105 transition-all uppercase tracking-widest whitespace-nowrap text-center">
                        Book a Free Audit
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default BaseTemplate;
