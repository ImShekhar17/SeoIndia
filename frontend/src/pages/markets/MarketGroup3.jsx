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

export const TherapistSEO = () => (
    <MarketPageTemplate
        title="Therapist SEO" headline="Caring Online Visibility for Your Practice"
        description="Connect with those who need your clinical expertise."
        stats={[{ label: 'Patient Leads', value: '+105%' }, { label: 'Trust Rating', value: 'High' }, { label: 'Conversion', value: '45%' }]}
        benefits={['Mental Health Authority Content', 'Local Practitioner SEO', 'Discreet Patient Funnels', 'Clinical Expertise SEO']}
    />
);

export const CateringSEO = () => (
    <MarketPageTemplate
        title="Catering SEO" headline="Fresh Leads for Your Catering Events"
        description="Dominate corporate and wedding catering searches."
        stats={[{ label: 'Event Inquiries', value: '+160%' }, { label: 'Local Visibility', value: '3x' }, { label: 'Quote Requests', value: '75/mo' }]}
        benefits={['Event-Specific Keywords', 'Visual Menu SEO', 'Corporate Client Targeting', 'Local Partner SEO']}
    />
);

export const YogaSEO = () => (
    <MarketPageTemplate
        title="Yoga SEO" headline="Flow Your Way to More Students"
        description="Help yogis find your studio or online classes."
        stats={[{ label: 'New Signups', value: '+120%' }, { label: 'Rank Growth', value: 'Top 3' }, { label: 'Engagement', value: '70%' }]}
        benefits={['Studio Location SEO', 'Mindfulness Content Strategy', 'Class Schedule Visibility', 'Yoga Community SEO']}
    />
);

export const PharmaSEO = () => (
    <MarketPageTemplate
        title="Pharma SEO" headline="Compliant SEO for the Pharma Sector"
        description="Ethical and high-performance SEO for medications and biotech."
        stats={[{ label: 'Authority Traffic', value: '+80%' }, { label: 'Compliance Score', value: '100%' }, { label: 'Visibility', value: 'National' }]}
        benefits={['YMYL Authority Strategy', 'Medical Verification SEO', 'Safe Search Targeting', 'Publication SEO']}
    />
);

export const DaycareSEO = () => (
    <MarketPageTemplate
        title="Daycare SEO" headline="Reach More Families with Trust"
        description="Helping parents find the best care for their children."
        stats={[{ label: 'Enrollment Leads', value: '+95%' }, { label: 'Map Visibility', value: '180%' }, { label: 'Trust Index', value: '99%' }]}
        benefits={['Parent Community SEO', 'Local Proximity Search', 'Safety & Trust Content', 'School Schema Power']}
    />
);

export const ContractorsSEO = () => (
    <MarketPageTemplate
        title="Contractors SEO" headline="Get More Hard-Hitting Jobs"
        description="Niche SEO for general and specialized contractors."
        stats={[{ label: 'Project Quotes', value: '+200%' }, { label: 'Visibility', value: '4x' }, { label: 'Market Share', value: '20%' }]}
        benefits={['Trade-Specific Keywords', 'Local Service Power', 'License Verification SEO', 'Contractor Brand SEO']}
    />
);

export const FireProtectionSEO = () => (
    <MarketPageTemplate
        title="Fire Protection SEO" headline="Safety Search Dominance"
        description="Rank for fire safety equipment and services."
        stats={[{ label: 'Corporate Leads', value: '+135%' }, { label: 'Authority Rank', value: '#1' }, { label: 'Lead Growth', value: '3x' }]}
        benefits={['Safety Standard Keywords', 'B2B Fire Protection SEO', 'Regional Authority Content', 'Compliance SEO']}
    />
);

export const FinancialSEO = () => (
    <MarketPageTemplate
        title="Financial SEO" headline="Investing in Your Online Authority"
        description="SEO for advisors, banks, and fintech companies."
        stats={[{ label: 'Asset Growth', value: '+110%' }, { label: 'Trust Flow', value: 'High' }, { label: 'Impact', value: 'National' }]}
        benefits={['Fintech Keyword Strategy', 'Financial Compliance SEO', 'Wealth Management Authority', 'E-A-T Signal Power']}
    />
);

export const PestControlSEO = () => (
    <MarketPageTemplate
        title="Pest Control SEO" headline="Exterminate the Competition in Search"
        description="Get found first when pest emergencies happen."
        stats={[{ label: 'Emergency Calls', value: '+240%' }, { label: 'Local Top Spot', value: 'Always' }, { label: 'Lead Cost', value: '-60%' }]}
        benefits={['Quick Response Targeting', 'Pest-Specific Authority', 'Localized Treatment SEO', 'Neighborhood Pro Power']}
    />
);

export const SalonsSEO = () => (
    <MarketPageTemplate
        title="Salons SEO" headline="Style Your Way to the Top"
        description="More bookings for your hair and beauty salon."
        stats={[{ label: 'Appt Growth', value: '+170%' }, { label: 'GMB Reviews', value: '500+' }, { label: 'Visibility', value: '3x' }]}
        benefits={['Localized Beauty Search', 'Stylist Feature SEO', 'Service Menu Power', 'Visual Brand Dominance']}
    />
);
