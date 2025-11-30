import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, BarChart3, Star, TrendingUp } from 'lucide-react';
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

export const AutomotiveSEO = () => (
    <MarketPageTemplate
        title="Automotive SEO"
        headline="Drive Your Dealership to the Top of Search"
        description="Dominate local rankings and get more car buyers to your showroom."
        stats={[{ label: 'Lead Growth', value: '140%' }, { label: 'Local Traffic', value: '+200%' }, { label: 'ROI', value: '5x' }]}
        benefits={['Inventory Search Optimization', 'VDP & SRP Enhancement', 'Local Map Dominance', 'Service Dept. Keywords']}
    />
);

export const ConstructionSEO = () => (
    <MarketPageTemplate
        title="Construction SEO"
        headline="Build a Solid Online Foundation"
        description="We help contractors and construction firms land bigger projects through organic search."
        stats={[{ label: 'Project Leads', value: '+85%' }, { label: 'Visibility', value: '180%' }, { label: 'Growth', value: '3x' }]}
        benefits={['Service Area SEO', 'Trust Link Building', 'Project Portfolio SEO', 'Commercial Keyword Strategy']}
    />
);

export const DentalSEO = () => (
    <MarketPageTemplate
        title="Dental SEO"
        headline="Fill Your Calendar with High-Value Patients"
        description="Proven SEO strategies for dentists to win more local patient leads."
        stats={[{ label: 'New Patients', value: '60/mo' }, { label: 'Ranking', value: '#1' }, { label: 'Engagement', value: '+45%' }]}
        benefits={['Local SEO for Practices', 'Patient Trust Content', 'Appointment Funnel SEO', 'Emergency Dental Targeting']}
    />
);

export const HVACSEO = () => (
    <MarketPageTemplate
        title="HVAC SEO"
        headline="Heating & Cooling Search Dominance"
        description="Get found by homeowners when they need your services most."
        stats={[{ label: 'Service Calls', value: '+220%' }, { label: 'CPC Saving', value: '40%' }, { label: 'Market Share', value: '25%' }]}
        benefits={['Emergency Dispatch SEO', 'Seasonal Keyword Campaigns', 'Customer Review Systems', 'Area Dominance']}
    />
);

export const HealthcareSEO = () => (
    <MarketPageTemplate
        title="Healthcare SEO"
        headline="Health Industry Authority & Visibility"
        description="Patient-centric SEO for hospitals, clinics, and specialists."
        stats={[{ label: 'Online Appts', value: '+110%' }, { label: 'Trust Score', value: '99%' }, { label: 'Visibility', value: '4x' }]}
        benefits={['HIPAA-Compliant Content', 'Provider Profile SEO', 'Health Topic Authority', 'Mobile Patient UX']}
    />
);

export const InsuranceSEO = () => (
    <MarketPageTemplate
        title="Insurance SEO"
        headline="Insuring Your Success in Search"
        description="Rank for competitive insurance keywords and grow your book of business."
        stats={[{ label: 'Policy Leads', value: '+95%' }, { label: 'Traffic Growth', value: '150%' }, { label: 'Cost/Lead', value: '-30%' }]}
        benefits={['Policy-Specific Keywords', 'Local Agent SEO', 'Authority Branding', 'Comparison Tool SEO']}
    />
);

export const LawyerSEO = () => (
    <MarketPageTemplate
        title="Lawyer SEO"
        headline="Legal Search Experts for Law Firms"
        description="Securing the top spot for high-value legal cases and consultations."
        stats={[{ label: 'Case Inquiries', value: '+130%' }, { label: 'Google Map Pack', value: 'Top 3' }, { label: 'Web ROI', value: '6x' }]}
        benefits={['Practice Area Landing Pages', 'Legal Authority Content', 'Local Citation Power', 'Case-Specific Targeting']}
    />
);

export const RealEstateSEO = () => (
    <MarketPageTemplate
        title="Real Estate SEO"
        headline="Unlock Your Market's Real Estate Potential"
        description="Helping realtors and agencies capture more buyer and seller leads."
        stats={[{ label: 'Listing Views', value: '300%' }, { label: 'Lead Gen', value: '+80%' }, { label: 'Search Reach', value: '5x' }]}
        benefits={['IDX Listing Optimization', 'Neighborhood Specialist Pages', 'Lead Magnet SEO', 'Zillow Competitor SEO']}
    />
);

export const PlumberSEO = () => (
    <MarketPageTemplate
        title="Plumber SEO"
        headline="Reliable SEO for Plumbers"
        description="Flowing leads directly to your business with emergency-focused SEO."
        stats={[{ label: 'Call Volume', value: '+190%' }, { label: 'Search Rank', value: '#1' }, { label: 'Market Reach', value: '3x' }]}
        benefits={['Emergency Service SEO', 'Local Pro Visibility', 'Google My Business Power', 'Fix-it Content Strategy']}
    />
);

export const AviationSEO = () => (
    <MarketPageTemplate
        title="Aviation SEO"
        headline="Elevate Your Aviation Brand Visibility"
        description="Strategic SEO for private jet charters, flight schools, and MROs."
        stats={[{ label: 'Charter Leads', value: '+75%' }, { label: 'Traffic Growth', value: '120%' }, { label: 'Brand Reach', value: 'Global' }]}
        benefits={['Niche Aircraft Keywords', 'High-Net-Worth Targeting', 'Technical Aviation Content', 'Global Hub SEO']}
    />
);
