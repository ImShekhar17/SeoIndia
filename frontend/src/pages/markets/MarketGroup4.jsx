import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const MarketPageTemplate = ({ title, headline, description, stats, benefits }) => (
    <div className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-20">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-50 text-blue-600 font-bold text-xs uppercase tracking-widest">
                    {title}
                </motion.div>
                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
                    {headline}
                </motion.h1>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-gray-600 leading-relaxed mb-10">
                    {description}
                </motion.p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Link to="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all flex items-center gap-2 shadow-lg">
                        Get Started <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                {stats.map((stat, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-[32px] p-10 border border-gray-100 text-center">
                        <div className="text-4xl font-black text-blue-600 mb-2">{stat.value}</div>
                        <div className="text-gray-500 font-semibold uppercase text-xs tracking-widest">{stat.label}</div>
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div>
                    <h2 className="text-4xl font-bold mb-8 text-gray-900">Expert {title}</h2>
                    <div className="space-y-6">
                        {benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-start gap-4">
                                <CheckCircle2 className="text-green-600 mt-1" size={20} />
                                <p className="text-lg text-gray-700 font-medium">{benefit}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-blue-50 rounded-[40px] p-12 flex items-center justify-center">
                    <BarChart3 size={120} className="text-blue-600" />
                </div>
            </div>
        </div>
    </div>
);

export const VeterinarySEO = () => (
    <MarketPageTemplate
        title="Veterinary SEO" headline="Helping Pet Owners Find the Best Care"
        description="Rank first for vet services and emergency pet care."
        stats={[{ label: 'Vet Leads', value: '+140%' }, { label: 'Local Presence', value: '4x' }, { label: 'Engagement', value: '65%' }]}
        benefits={['Local Vet Clinic SEO', 'Pet Care Authority Content', 'Emergency Service Targeting', 'GMB Reputation Power']}
    />
);

export const EducationSEO = () => (
    <MarketPageTemplate
        title="Education SEO" headline="Enrolling Success in Search"
        description="SEO for schools, universities, and online courses."
        stats={[{ label: 'Enrolment Growth', value: '+90%' }, { label: 'Visibility', value: 'National' }, { label: 'Trust Rating', value: 'High' }]}
        benefits={['Educational Schema Power', 'Course-Specific Keywords', 'Campus Search Authority', 'Student Funnel SEO']}
    />
);

export const JewelrySEO = () => (
    <MarketPageTemplate
        title="Jewelry SEO" headline="Shining Bright in Search Results"
        description="Rank for luxury diamonds, watches, and custom jewelry."
        stats={[{ label: 'Sales Revenue', value: '+200%' }, { label: 'High-Value Leads', value: '3x' }, { label: 'Reach', value: 'Global' }]}
        benefits={['Luxury Brand SEO', 'Visual Product Rich Snippets', 'Gifting Keyword Strategy', 'Celebrity/Trend SEO']}
    />
);

export const RetailSEO = () => (
    <MarketPageTemplate
        title="Retail SEO" headline="Drive More Sales Online & In-Store"
        description="Comprehensive search strategy for retail brands."
        stats={[{ label: 'Ecom Sales', value: '+180%' }, { label: 'Store Visits', value: '+70%' }, { label: 'ROI', value: '5x' }]}
        benefits={['Omnichannel SEO Strategy', 'Product Page Power', 'Local Fulfillment SEO', 'Brand Loyalty Strategy']}
    />
);

export const HospitalitySEO = () => (
    <MarketPageTemplate
        title="Hospitality SEO" headline="Welcome More Guests Through Search"
        description="SEO for hotels, resorts, and travel destinations."
        stats={[{ label: 'Direct Bookings', value: '+155%' }, { label: 'OTA Savings', value: '30%' }, { label: 'Visibility', value: '4x' }]}
        benefits={['Direct Booking Funnels', 'Destination SEO Power', 'Luxury Experience Content', 'Guest Review Strategy']}
    />
);

export const TreeServiceSEO = () => (
    <MarketPageTemplate
        title="Tree Service SEO" headline="Growth for Your Tree Business"
        description="Get found for tree removal, pruning, and health."
        stats={[{ label: 'Tree Jobs', value: '+130%' }, { label: 'Local Rank', value: '#1' }, { label: 'Market Reach', value: '2x' }]}
        benefits={['Emergency Tree Removal SEO', 'Seasonal Service Targeting', 'Local Pro Authority', 'GMB Map Power']}
    />
);

export const PhotographySEO = () => (
    <MarketPageTemplate
        title="Photography SEO" headline="Focusing on More Client Leads"
        description="SEO for wedding, portrait, and commercial photographers."
        stats={[{ label: 'Booking Leads', value: '+160%' }, { label: 'Visual Reach', value: '5x' }, { label: 'Engagement', value: '85%' }]}
        benefits={['Visual Image SEO', 'Occasion-Specific Targeting', 'Portfolio Discovery Strategy', 'Local Client Reach']}
    />
);

export const MoversSEO = () => (
    <MarketPageTemplate
        title="Movers SEO" headline="Moving Your Business to the Top Spot"
        description="The first call for residential and commercial moves."
        stats={[{ label: 'Move Inquiries', value: '+220%' }, { label: 'Lead Quality', value: 'High' }, { label: 'Visibility', value: '3x' }]}
        benefits={['Local Moving Authority', 'Relocation Content Hubs', 'Interstate Search Strategy', 'Trust Signal SEO']}
    />
);

export const CannabisSEO = () => (
    <MarketPageTemplate
        title="Cannabis SEO" headline="Growing Your Brand in a Regulated Market"
        description="Safe, compliant, and high-performance Cannabis SEO."
        stats={[{ label: 'Dispensary Leads', value: '+110%' }, { label: 'Compliance', value: '100%' }, { label: 'Reach', value: 'National' }]}
        benefits={['Compliance-First Content', 'Niche Education SEO', 'Local Dispensary Reach', 'Brand Awareness Strategy']}
    />
);

export const TravelSEO = () => (
    <MarketPageTemplate
        title="Travel SEO" headline="Expanding Your Horizon in Search"
        description="Rank for travel agency and destination keywords."
        stats={[{ label: 'Trip Bookings', value: '+140%' }, { label: 'Organic Reach', value: 'Global' }, { label: 'Engagement', value: '4x' }]}
        benefits={['Destination Expertise Content', 'Travel Package SEO', 'Global Reach Authority', 'Itinerary Content Hubs']}
    />
);
