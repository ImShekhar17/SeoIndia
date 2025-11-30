import React from 'react';
import BaseTemplate from './BaseTemplate';

export const ConstructionSEO = () => {
    const data = {
        industry: "Construction",
        heroImage: "/images/construction-seo-hero.png",
        heroBullets: ["Win More Commercial Contracts", "Build a Strong Online Foundation", "Showcase Your Recent Projects", "Local SEO for Contractors"],
        introTitle: "Pave the Way to Digital Dominance",
        introText: "Construction SEO focuses on helping contractors, construction firms, and builders rank for high-value projects in their service area. By optimizing for specific trades and commercial keywords, we ensure your firm is found by the right project managers and developers.",
        stats: [
            { label: "Project Leads", value: "300+", bgColor: "bg-[#0a142f]", subLabel: "Monthly Growth" },
            { label: "Search Share", value: "25%", bgColor: "bg-[#f36b21]", subLabel: "Local Market" },
            { label: "Keyword Rankings", value: "#1", bgColor: "bg-[#4e6bf2]", subLabel: "Commercial SEO" },
            { label: "ROI Achieved", value: "5x", bgColor: "bg-[#00a3e0]", subLabel: "Lead Quality" }
        ],
        painPointTitle: "Pain Points of Construction Businesses",
        painPoints: [
            { title: "Invisible in Local Map Packs", description: "If your firm doesn't appear in local searches, you are losing out on hundreds of nearby residential and commercial project inquiries." },
            { title: "Seasonal Lead Fluctuations", description: "Most contractors struggle with inconsistent lead flow during off-seasons. SEO ensures a steady pipeline year-round." },
            { title: "Weak Portfolio Visibility", description: "Your best work is hidden on an old website. If searchers can't see your projects, they won't trust your firm." }
        ],
        benefits: [
            { title: "Commercial Lead Generation", description: "We target B2B keywords that connect your firm with project managers and developers searching for reliable contractors." },
            { title: "Local Authority Building", description: "We establish your firm as the premier builder in your service area through local citations and neighborhood-specific SEO." },
            { title: "Trust & Portfolio SEO", description: "Visual optimization ensures your project gallery converts visitors into long-term clients." }
        ]
    };
    return <BaseTemplate {...data} />;
};

export const HVACSEO = () => {
    const data = {
        industry: "HVAC",
        heroImage: "/images/hvac-seo-hero.png",
        heroBullets: ["Fastest Emergency Lead Flow", "Cool Down the Competition", "Heat Up Your Local Rankings", "Precision HVAC Search Strategy"],
        introTitle: "Keep Your Leads Flowing All Year Round",
        introText: "HVAC SEO is about being there exactly when a customer's AC fails or their heater stops working. We specialize in high-intent, immediate-need keyword targeting that drives phone calls during peak seasons and service-contract leads during the off-season.",
        stats: [
            { label: "Service Calls", value: "500+", bgColor: "bg-[#0a142f]", subLabel: "Monthly Average" },
            { label: "Local Rank", value: "Top 3", bgColor: "bg-[#f36b21]", subLabel: "Map Pack" },
            { label: "CPC Savings", value: "45%", bgColor: "bg-[#4e6bf2]", subLabel: "Organic ROI" },
            { label: "Client Growth", value: "150%", bgColor: "bg-[#00a3e0]", subLabel: "Market Reach" }
        ],
        painPointTitle: "Pain Points of HVAC Businesses",
        painPoints: [
            { title: "Emergency Call Invisibility", description: "When an AC breaks, customers call the first result. If you're not in the top 3, you are invisible during emergencies." },
            { title: "High Ad Costs", description: "Buying leads from LSA or PPC is getting too expensive. Organic SEO provides a much lower cost-per-acquisition." },
            { title: "Off-Season Slumps", description: "Most HVAC companies starve for work in spring/fall. We target maintenance and tune-up keywords to bridge the gap." }
        ],
        benefits: [
            { title: "Immediate Response SEO", description: "We optimize for voice search and mobile-first local intent to capture emergency repair calls instantly." },
            { title: "Seasonal Content Strategy", description: "We align your SEO with the weather, ensuring you rank for 'heating repair' in winter and 'AC service' in summer." },
            { title: "Reputation Dominance", description: "We help you manage local reviews to ensure you're the most trusted provider in your city." }
        ]
    };
    return <BaseTemplate {...data} />;
};

export const HealthcareSEO = () => {
    const data = {
        industry: "Healthcare",
        heroImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1600",
        heroBullets: ["Patient-Centric Search Experts", "Build Multi-Channel Authority", "Increase Appointment Bookings", "Ethical & Compliant SEO"],
        introTitle: "Connect Patients to the Care They Need",
        introText: "Healthcare SEO requires a delicate balance of authority, empathy, and technical excellence. We help medical practices, hospitals, and specialists build lasting trust with patients by providing accurate information and appearing at the top of healthcare search queries.",
        stats: [
            { label: "Online Appts", value: "2k+", bgColor: "bg-[#0a142f]", subLabel: "Monthly Booking" },
            { label: "Patient Trust", value: "99%", bgColor: "bg-[#f36b21]", subLabel: "E-A-T Score" },
            { label: "Visibility", value: "Top 10", bgColor: "bg-[#4e6bf2]", subLabel: "Search Category" },
            { label: "Lead Growth", value: "120%", bgColor: "bg-[#00a3e0]", subLabel: "Organic Results" }
        ],
        painPointTitle: "Pain Points of Healthcare Providers",
        painPoints: [
            { title: "YMYL Authority Bars", description: "Google's 'Your Money Your Life' standards are extremely high for health sites. Without expert SEO, your medical advice won't rank." },
            { title: "Patient Privacy & Trust", description: "Patients are wary of online health info. Building a credible online presence that converts requires specialized healthcare content." },
            { title: "Complex Service Funnels", description: "Healthcare clients often require multi-touch journeys. Capturing leads from initial symptom search to final booking is complex." }
        ],
        benefits: [
            { title: "Authority Content Model", description: "We build deep clinical authority through medically-reviewed content that satisfies Google's E-A-T requirements." },
            { title: "Provider Profile Power", description: "We optimize individual doctor profiles to ensure they rank for specialist searches in their local area." },
            { title: "Integrated Appointment Bookings", description: "SEO optimization that funnels searchers directly into your booking platform or patient portal." }
        ]
    };
    return <BaseTemplate {...data} />;
};

export const InsuranceSEO = () => {
    const data = {
        industry: "Insurance",
        heroImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1600",
        heroBullets: ["Insuring Your Success in Search", "Rank for High-Value Policy Terms", "Bypass Expensive Lead Portals", "Authority Branding for Agents"],
        introTitle: "Secure the Top Spot for Policy Searches",
        introText: "Insurance SEO is a high-stakes competition for visibility. Whether you're an independent agent or a large firm, we help you rank for complex coverage terms and local agent keywords to ensure you're the first choice for prospective policyholders.",
        stats: [
            { label: "Policy Leads", value: "1k+", bgColor: "bg-[#0a142f]", subLabel: "Monthly Leads" },
            { label: "Traffic Growth", value: "140%", bgColor: "bg-[#f36b21]", subLabel: "Yearly Increase" },
            { label: "Lead Cost", value: "-40%", bgColor: "bg-[#4e6bf2]", subLabel: "Lower than PPC" },
            { label: "Market Reach", value: "Nat'l", bgColor: "bg-[#00a3e0]", subLabel: "Strategic Scale" }
        ],
        painPointTitle: "Pain Points of Insurance Agencies",
        painPoints: [
            { title: "Highly Competitive CPC", description: "Insurance keywords are among the most expensive in PPC. SEO is the only sustainable way to get leads at scale." },
            { title: "Local vs National Conflict", description: "Agencies often struggle to rank locally against massive national brands. We use hyper-local niche strategies to win." },
            { title: "Complex Information Overload", description: "Insurance is complicated. If your SEO content doesn't simplify the choice, searchers won't convert." }
        ],
        benefits: [
            { title: "Policy-Specific Targeting", description: "We create dedicated silos for Auto, Home, Life, and Business insurance to capture high-intent multi-line leads." },
            { title: "Agent Authority Branding", description: "We establish individual agents as thought leaders through local content and community-focused SEO." },
            { title: "Lead Magnet Utility", description: "We optimize quote tools and comparison guides to ensure your SEO traffic turns into actionable policy inquiries." }
        ]
    };
    return <BaseTemplate {...data} />;
};

export const LawyerSEO = () => {
    const data = {
        industry: "Lawyer",
        heroImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1600",
        heroBullets: ["Win High-Value Legal Cases", "Practice Area Authority Building", "Legal Reputation Excellence", "Aggressive Local Map Dominance"],
        introTitle: "Securing the Future of Your Law Firm",
        introText: "Lawyer SEO is about more than just traffic—it's about qualified case leads. We specialize in ranking law firms for specific practice areas, from personal injury to criminal defense, ensuring you attract clients when life's most critical legal needs arise.",
        stats: [
            { label: "Case Inquiries", value: "150+", bgColor: "bg-[#0a142f]", subLabel: "Monthly Record" },
            { label: "Map Placement", value: "Top 3", bgColor: "bg-[#f36b21]", subLabel: "Practice Area" },
            { label: "Lead Growth", value: "160%", bgColor: "bg-[#4e6bf2]", subLabel: "Organic Reach" },
            { label: "ROI Ratio", value: "10x", bgColor: "bg-[#00a3e0]", subLabel: "High Case Value" }
        ],
        painPointTitle: "Pain Points of Law Firms",
        painPoints: [
            { title: "Extreme Market Competition", description: "Legal search is the most competitive niche in SEO. Without an aggressive, technical strategy, your firm will stay buried." },
            { title: "Client Trust & E-A-T", description: "Legal clients need absolute trust. If your site doesn't demonstrate extreme authority and case results, you won't get the call." },
            { title: "Local Map Pack Wars", description: "Being 4th in the map pack is the same as being invisible. We use specialized citation and review strategies to win the top 3 spots." }
        ],
        benefits: [
            { title: "Practice Area Siloing", description: "We build dedicated authority for each area of your practice, ensuring you rank for 'Car Accident Lawyer' just as well as 'Divorce Attorney'." },
            { title: "High-Intent Content Model", description: "Our legal content answers specific legal questions that indicate a high-value case is imminent." },
            { title: "Aggressive Link Authority", description: "We build enterprise-grade backlink profiles that help law firms bypass older, established competitors." }
        ]
    };
    return <BaseTemplate {...data} />;
};
