import React from 'react';
import BaseTemplate from './BaseTemplate';

export const PlumbingSEO = () => {
    const data = {
        industry: "Plumbing",
        heroImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1600",
        heroBullets: ["Flowing Leads to Your Business", "Emergency Plumbing Search Dominance", "Local Pro Ranking Strategy", "Drip-Feed Your Schedule with Leads"],
        introTitle: "Fixing Your Pipeline's Digital Leaks",
        introText: "Plumbing SEO is about speed and proximity. When a pipe bursts, customers don't scroll past the first few results. We ensure your plumbing business is the first one they call by dominating local maps and high-intent 'near me' keywords.",
        stats: [
            { label: "Call Volume", value: "400+", bgColor: "bg-[#0a142f]", subLabel: "Monthly Average" },
            { label: "Local Result", value: "#1 Spot", bgColor: "bg-[#f36b21]", subLabel: "GMB Power" },
            { label: "Lead Growth", value: "190%", bgColor: "bg-[#4e6bf2]", subLabel: "Organic Success" },
            { label: "Impact Score", value: "95%", bgColor: "bg-[#00a3e0]", subLabel: "Market Share" }
        ],
        painPointTitle: "Pain Points of Plumbing Businesses",
        painPoints: [
            { title: "Invisible in Emergency Searches", description: "If you're not in the top 3 of the map pack, you are missing out on 80% of emergency residential calls." },
            { title: "Low Lead Quality", description: "Getting calls for small drips instead of full repipes or water heater installs? We target the big jobs." },
            { title: "Poor Review Management", description: "One bad review can sink a local plumber. We build a fortress of positive reputation through local SEO." }
        ],
        benefits: [
            { title: "Emergency Response SEO", description: "We optimize for voice and immediate local intent to capture 'plumber near me' calls instantly." },
            { title: "High-Margin Service Focus", description: "We target keywords for sewer line repairs, water heaters, and filtration systems to increase your revenue per call." },
            { title: "Local Map Dominance", description: "Aggressive local SEO that puts your brand at the center of your service area." }
        ]
    };
    return <BaseTemplate {...data} />;
};

export const AviationSEO = () => {
    const data = {
        industry: "Aviation",
        heroImage: "/images/aviation-seo-hero.png",
        heroBullets: ["Elevating Your Aviation Brand", "Strategic SEO for Private Jets", "Global Flight School Visibility", "Aviation Tech Search Authority"],
        introTitle: "Taking Your Organic Reach to New Altitudes",
        introText: "Aviation SEO requires a sophisticated understanding of a niche, high-value global market. Whether you're selling private jet charters or aviation technology, we use data-driven search strategies to connect you with high-net-worth individuals and corporate decision-makers.",
        stats: [
            { label: "Charter Leads", value: "50+", bgColor: "bg-[#0a142f]", subLabel: "High Value" },
            { label: "Global Reach", value: "100%", bgColor: "bg-[#f36b21]", subLabel: "Int'l SEO" },
            { label: "Brand Impact", value: "4x", bgColor: "bg-[#4e6bf2]", subLabel: "Visibility Boost" },
            { label: "Lead Value", value: "$10k+", bgColor: "bg-[#00a3e0]", subLabel: "Avg Conversion" }
        ],
        painPointTitle: "Pain Points of Aviation Companies",
        painPoints: [
            { title: "Niche Audience Isolation", description: "Getting the right eyes on your planes or tech is difficult. Standard SEO methods fail to reach the elite traveler or corporate buyer." },
            { title: "Complex Sales Cycles", description: "Aviation sales take months. Your SEO needs to nurture leads through every stage of the funnel." },
            { title: "Global Competition", description: "Competing against massive brokerage sites for jet charter keywords is a battle for visibility." }
        ],
        benefits: [
            { title: "HNWI Targeting", description: "We use sophisticated keyword analysis to reach high-net-worth individuals and C-suite executives." },
            { title: "Technical Authority Content", description: "We build trust through deeply technical content that demonstrates your expertise in aviation safety and logistics." },
            { title: "Global Marketplace SEO", description: "Your brand is seen by travelers and buyers across the globe with our international search strategies." }
        ]
    };
    return <BaseTemplate {...data} />;
};

export const HomeRemodelingSEO = () => {
    const data = {
        industry: "Home Remodeling",
        heroImage: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=1600",
        heroBullets: ["Design Your Success in Search", "Showcase High-End Remodels", "Win More Interior Design Leads", "Local Builder Authority Strategy"],
        introTitle: "Rebuilding Your Business from the Ground Up",
        introText: "Home Remodeling SEO is visual and trust-driven. We help remodelers, kitchen designers, and bathroom experts showcase their portfolios to high-intent local homeowners who are ready to invest in their property.",
        stats: [
            { label: "Design Leads", value: "200+", bgColor: "bg-[#0a142f]", subLabel: "Monthly Growth" },
            { label: "Project Value", value: "+40%", bgColor: "bg-[#f36b21]", subLabel: "Avg Increase" },
            { label: "Visibility", value: "5x", bgColor: "bg-[#4e6bf2]", subLabel: "Local Reach" },
            { label: "Trust Score", value: "98%", bgColor: "bg-[#00a3e0]", subLabel: "Client Rating" }
        ],
        painPointTitle: "Pain Points of Home Remodelers",
        painPoints: [
            { title: "Long Decision Timelines", description: "Homeowners take months to decide. If you aren't top-of-mind during that period, you lose the job." },
            { title: "Visual Content Gap", description: "If your beautiful remodels aren't optimized for search, potential clients will never see your craftsmanship." },
            { title: "Localized Trust Issues", description: "Homeowners only hire local pros they trust. SEO builds that local authority and social proof." }
        ],
        benefits: [
            { title: "Portfolio Visibility SEO", description: "We optimize your project galleries to answer specific design queries like 'modern farm kitchen' or 'luxury bath remodel'." },
            { title: "High-Ticket Lead Gen", description: "We target affluent neighborhoods and high-intent long-tail keywords to drive bigger project leads." },
            { title: "Local GMB Power", description: "We ensure you are the highest-rated and most visible remodeler in your 20-mile radius." }
        ]
    };
    return <BaseTemplate {...data} />;
};

export const CleaningSEO = () => {
    const data = {
        industry: "Cleaning",
        heroImage: "/images/cleaning-seo-hero.png",
        heroBullets: ["Sparkling Rankings for Your Company", "More Residential & Commercial Leads", "Local Service Area Dominance", "Recurring Contract Growth Strategy"],
        introTitle: "Cleaning Up the Competition in Search",
        introText: "Cleaning SEO helps residential and commercial cleaning businesses rank for high-frequency local searches. From deep-cleaning to office maintenance, we put your brand in front of customers looking for reliable, professional local cleaners.",
        stats: [
            { label: "Bookings", value: "300+", bgColor: "bg-[#0a142f]", subLabel: "Weekly Increase" },
            { label: "Contract Value", value: "2x", bgColor: "bg-[#f36b21]", subLabel: "Commercial Shift" },
            { label: "Rank Speed", value: "Quick", bgColor: "bg-[#4e6bf2]", subLabel: "Local Gains" },
            { label: "ROI Ratio", value: "8x", bgColor: "bg-[#00a3e0]", subLabel: "Organic Margin" }
        ],
        painPointTitle: "Pain Points of Cleaning Businesses",
        painPoints: [
            { title: "Invisible in Crowded Markets", description: "The cleaning industry is saturated. Without a strong SEO presence, you are just another name in the crowd." },
            { title: "One-Off vs Recurring Leads", description: "Most cleaners struggle to get high-value recurring contracts. We target businesses searching for long-term cleaning partners." },
            { title: "Poor Lead Tracking", description: "Not knowing where your best leads come from prevents growth. We build SEO with conversion tracking in mind." }
        ],
        benefits: [
            { title: "Service Area Expansion", description: "We help you rank for every suburb and neighborhood in your reach, expanding your customer base." },
            { title: "Commercial B2B Targeting", description: "Dedicated SEO for office cleaning, medical facility cleaning, and more to win high-value contracts." },
            { title: "Trust & Safety SEO", description: "We highlight your background checks, insurance, and reputation to ensure searchers feel safe hiring you." }
        ]
    };
    return <BaseTemplate {...data} />;
};

export const FurnitureSEO = () => {
    const data = {
        industry: "Furniture",
        heroImage: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1600",
        heroBullets: ["Sell More Furniture with Search", "Showroom Traffic Expansion", "High-End Designer Leads", "E-commerce Visibility Excellence"],
        introTitle: "Designing Your Digital Success Story",
        introText: "Furniture SEO is for retailers, designers, and custom makers. We connect your unique pieces with shoppers looking for specific styles, from mid-century modern to custom luxury, ensuring your showroom or online store is the final destination.",
        stats: [
            { label: "Sales Revenue", value: "3x", bgColor: "bg-[#0a142f]", subLabel: "Online Growth" },
            { label: "Store Visits", value: "150+", bgColor: "bg-[#f36b21]", subLabel: "Monthly Trend" },
            { label: "Keyword Rank", value: "Top 5", bgColor: "bg-[#4e6bf2]", subLabel: "Niche Terms" },
            { label: "Reach Share", value: "National", bgColor: "bg-[#00a3e0]", subLabel: "Strategic Scale" }
        ],
        painPointTitle: "Pain Points of Furniture Retailers",
        painPoints: [
            { title: "Competition with Huge Chains", description: "Competing with IKEA or Wayfair is tough. We use niche style and local showroom strategies to win back local buyers." },
            { title: "Visual-First Search Issues", description: "Furniture buyers search with their eyes. If your images aren't optimized for Google Image search, you're missing out." },
            { title: "Low Conversion for High-End Items", description: "Custom furniture needs a high-trust digital presence to convince buyers to spend thousands online." }
        ],
        benefits: [
            { title: "Style-Specific Targeting", description: "We optimize for 'modern farmhouse furniture' or 'luxury bespoke walnut dining table' to capture high-intent buyers." },
            { title: "Showroom Drive Strategy", description: "Local SEO that gets people out of their browser and into your physical store to feel the quality." },
            { title: "Influencer & Designer Reach", description: "We use content to attract interior designers and influencers who can multiply your reach." }
        ]
    };
    return <BaseTemplate {...data} />;
};
