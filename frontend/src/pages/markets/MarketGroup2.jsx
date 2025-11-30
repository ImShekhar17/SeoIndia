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

export const HomeRemodelingSEO = () => (
    <MarketPageTemplate
        title="Home Remodeling SEO" headline="Upgrade Your Business with Better Rankings"
        description="Help homeowners find your remodeling expertise online."
        stats={[{ label: 'Inquiries', value: '+115%' }, { label: 'Visibility', value: '180%' }, { label: 'ROI', value: '4x' }]}
        benefits={['Niche Keyword Strategy', 'Local Citation Building', 'Visual SEO for Portfolios', 'Trust Signal Optimization']}
    />
);

export const CleaningSEO = () => (
    <MarketPageTemplate
        title="Cleaning SEO" headline="Sparkle in Search Results"
        description="Get more residential and commercial cleaning contracts."
        stats={[{ label: 'Bookings', value: '+150%' }, { label: 'Ad Spend Saving', value: '35%' }, { label: 'Market Reach', value: '2x' }]}
        benefits={['Service Area SEO', 'Recurring Contract Keywords', 'GMB Reputation Management', 'Localized Landing Pages']}
    />
);

export const FurnitureSEO = () => (
    <MarketPageTemplate
        title="Furniture SEO" headline="Sell More Furniture with Search Dominance"
        description="Drive more foot traffic to your showroom and online sales."
        stats={[{ label: 'Store Visits', value: '+90%' }, { label: 'Keyword Rank', value: 'Top 5' }, { label: 'Traffic Growth', value: '2.5x' }]}
        benefits={['Local Inventory Ads', 'Pinterest-Style SEO', 'Showroom Experience Content', 'Brand Loyalty SEO']}
    />
);

export const EntertainmentSEO = () => (
    <MarketPageTemplate
        title="Entertainment SEO" headline="Be the Star of Search"
        description="SEO for artists, venues, and media companies."
        stats={[{ label: 'Ticket Sales', value: '+130%' }, { label: 'Social Boost', value: '60%' }, { label: 'Impact', value: 'Global' }]}
        benefits={['Event Schema Markup', 'Vlog & Media SEO', 'Influencer Collaboration SEO', 'Buzz Management']}
    />
);

export const LogisticSEO = () => (
    <MarketPageTemplate
        title="Logistic SEO" headline="Streamline Your Lead Generation"
        description="SEO for freight, logistics, and supply chain companies."
        stats={[{ label: 'Corporate Leads', value: '+85%' }, { label: 'Search Authority', value: 'Top 10' }, { label: 'Traffic Expansion', value: '150%' }]}
        benefits={['B2B Supply Chain Keywords', 'Case Study SEO', 'Global Trade Authority', 'Operational Trust SEO']}
    />
);

export const ApplianceRepairSEO = () => (
    <MarketPageTemplate
        title="Appliance Repair SEO" headline="Fixed for Search Dominance"
        description="Be the first call when customers need appliance repairs."
        stats={[{ label: 'Repair Jobs', value: '+210%' }, { label: 'Local Rank', value: '#1-2' }, { label: 'Lead Cost', value: '-50%' }]}
        benefits={['Nearby Search Optimization', 'Brand-Specific Keywords', 'Quick Response SEO', 'GMB Hero Strategy']}
    />
);

export const RestaurantSEO = () => (
    <MarketPageTemplate
        title="Restaurant SEO" headline="Get More Diners to Your Table"
        description="Help locals and tourists find your restaurant first."
        stats={[{ label: 'Table Bookings', value: '+140%' }, { label: 'GMB Clicks', value: '3x' }, { label: 'Menu Views', value: '500%' }]}
        benefits={['Local Foodie Targeting', 'Menu Item SEO', 'Reservation Link Power', 'Cuisines Keyword Strategy']}
    />
);

export const AgricultureSEO = () => (
    <MarketPageTemplate
        title="Agriculture SEO" headline="Growing Your Agri-Business Online"
        description="SEO for farm equipment, supplies, and agri-tech."
        stats={[{ label: 'Sales Inquiries', value: '+95%' }, { label: 'Niche Reach', value: 'National' }, { label: 'Trust Index', value: '98%' }]}
        benefits={['Agri-Tech Keywords', 'Sustainable Supply Chain SEO', 'B2B Farm Targeting', 'Regional Market SEO']}
    />
);

export const FitnessSEO = () => (
    <MarketPageTemplate
        title="Fitness SEO" headline="Powering Your Gym's Digital Presence"
        description="More memberships and class bookings through search."
        stats={[{ label: 'New Members', value: '+180%' }, { label: 'Class Signups', value: '+90%' }, { label: 'Visibility', value: '4x' }]}
        benefits={['Local Gym SEO', 'Trainer Profile Power', 'Fitness Content Authority', 'Motivation Keyword Strategy']}
    />
);

export const KitchenRemodelerSEO = () => (
    <MarketPageTemplate
        title="Kitchen Remodeler SEO" headline="Designing Success for Kitchen Pros"
        description="Niche SEO for high-end kitchen redesign businesses."
        stats={[{ label: 'Design Leads', value: '+125%' }, { label: 'Project Size', value: '+40%' }, { label: 'ROI', value: '7x' }]}
        benefits={['High-Ticket Project Targeting', 'Kitchen Niche Content', 'Visual Portfolio SEO', 'Premium Brand Authority']}
    />
);
