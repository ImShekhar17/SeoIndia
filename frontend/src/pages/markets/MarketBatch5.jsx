import React from 'react';
import BaseTemplate from './BaseTemplate';

export const FitnessSEO = () => {
    const data = {
        industry: "Fitness",
        heroImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1600",
        heroBullets: ["Power Up Your Member Growth", "Local Gym Search Dominance", "Class Booking Expansion Plan", "Fitness Authority Search Branding"],
        introTitle: "Strengthening Your Gym's Digital Presence",
        introText: "Fitness SEO helps gyms, personal trainers, and studios connect with locals looking to start their health journey. We focus on high-intent local keywords and map pack dominance to ensure your facility is the first place they visit.",
        stats: [
            { label: "New Members", value: "200+", bgColor: "bg-[#0a142f]", subLabel: "Monthly Signups" },
            { label: "Local Rank", value: "#1-2", bgColor: "bg-[#f36b21]", subLabel: "Map Pack" },
            { label: "Class Signups", value: "3x", bgColor: "bg-[#4e6bf2]", subLabel: "Organic Trend" },
            { label: "Retention Rate", value: "Medium", bgColor: "bg-[#00a3e0]", subLabel: "Market Share" }
        ],
        painPointTitle: "Pain Points of Gyms & Studios",
        painPoints: [
            { title: "Saturated Local Markets", description: "With big chains and boutiques on every corner, standing out in local search is a constant battle for memberships." },
            { title: "Seasonal Sign-up Slumps", description: "Most gyms starve after the January rush. We use SEO to maintain a steady stream of leads throughout the year." },
            { title: "Low Trial-to-Member Conversion", description: "Getting clicks is easy; getting people in the door is hard. We optimize for high-trust content and reviews." }
        ],
        benefits: [
            { title: "Local Map Presence", description: "We ensure you own the local map pack for keywords like 'gym near me' or 'yoga studio [City]'." },
            { title: "Specialized Class SEO", description: "We target niche keywords for Pilates, Crossfit, or HIIT to attract high-intent specialized members." },
            { title: "Trainer Profile Authority", description: "Build trust by ranking your individual trainers as local fitness authorities through optimized profiles." }
        ]
    };
    return <BaseTemplate {...data} />;
};

export const KitchenRemodelerSEO = () => {
    const data = {
        industry: "Kitchen Remodeler",
        heroImage: "/images/kitchen-remodeler-seo-hero.png",
        heroBullets: ["Designing Success for Luxury Kitchens", "Showcase Your High-End Portfolio", "Win More Custom Design Leads", "Local Kitchen Guru Authority"],
        introTitle: "Reimagining Your Business's Digital Future",
        introText: "Kitchen Remodeler SEO is about high-value lead generation. We help specialized kitchen designers and remodelers showcase their craftsmanship to affluent homeowners looking for their dream kitchen transformation.",
        stats: [
            { label: "Design Leads", value: "150+", bgColor: "bg-[#0a142f]", subLabel: "Monthly Growth" },
            { label: "Project Size", value: "+35%", bgColor: "bg-[#f36b21]", subLabel: "High-End Focus" },
            { label: "Visibility", value: "4x", bgColor: "bg-[#4e6bf2]", subLabel: "Local Reach" },
            { label: "ROI Ratio", value: "12x", bgColor: "bg-[#00a3e0]", subLabel: "Premium Value" }
        ],
        painPointTitle: "Pain Points of Kitchen Remodelers",
        painPoints: [
            { title: "Low-Quality Lead Overload", description: "Tired of calls for small repairs? We target people looking for $50k+ full kitchen transformations." },
            { title: "Weak Portfolio Display", description: "If your beautiful kitchen designs aren't visible on Google Image search, you're missing out on the design-conscious buyer." },
            { title: "Long Consideration Periods", description: "Kitchens are a major investment. SEO keeps your brand top-of-mind during the 6-month decision window." }
        ],
        benefits: [
            { title: "Visual-First SEO", description: "We optimize your image galleries for specific styles (e.g., 'minimalist Scandi kitchen') to attract trend-conscious buyers." },
            { title: "Affluent District Targeting", description: "We focus our SEO efforts on the zip codes and neighborhoods that can afford high-end remodeling services." },
            { title: "Trusted Advisor Status", description: "Through SEO-optimized planning guides and cost reports, we position you as the trusted local expert." }
        ]
    };
    return <BaseTemplate {...data} />;
};

export const TherapistSEO = () => {
    const data = {
        industry: "Therapist",
        heroImage: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1600",
        heroBullets: ["Caring Visibility for Your Practice", "Connect with Patients Who Need You", "Build Lasting Clinical Trust", "Ethical Therapist Search Experts"],
        introTitle: "Opening More Doors to Mental Wellness",
        introText: "Therapist SEO requires a delicate, trust-first approach. We help mental health professionals build an online presence that feels safe, professional, and authoritative, ensuring patients find you in their time of need.",
        stats: [
            { label: "Patient Leads", value: "100+", bgColor: "bg-[#0a142f]", subLabel: "Monthly Booking" },
            { label: "Trust Score", value: "High", bgColor: "bg-[#f36b21]", subLabel: "On-Page Signal" },
            { label: "Search Rank", value: "#1 Spot", bgColor: "bg-[#4e6bf2]", subLabel: "Local Category" },
            { label: "Visibility", value: "150%", bgColor: "bg-[#00a3e0]", subLabel: "Reach Boost" }
        ],
        painPointTitle: "Pain Points of Therapists",
        painPoints: [
            { title: "Difficult Patient Conversion", description: "Health queries are sensitive. If your content doesn't project safety and trust, patients will move on to the next practice." },
            { title: "Invisible in Local Niche", description: "Specialized therapists (e.g., CBT, Marriage Counseling) often fail to rank for their specific expertise in their city." },
            { title: "Ethical Content Barriers", description: "Writing about mental health requires precision. We ensure your SEO content is both helpful and compliant." }
        ],
        benefits: [
            { title: "Empathy-Driven SEO", description: "We create content that answers patient questions with compassion while satisfying search engine algorithms." },
            { title: "Niche Expertise Targeting", description: "We ensure you rank for your specific treatments and specializations, bringing in the right patient for your practice." },
            { title: "GMB Trust Engine", description: "We build social proof and local presence that makes choosing your therapy practice a safe, easy decision." }
        ]
    };
    return <BaseTemplate {...data} />;
};

export const CateringSEO = () => {
    const data = {
        industry: "Catering",
        heroImage: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=1600",
        heroBullets: ["Fresh Leads for Your Events", "Dominate Corporate Catering", "Visual Food SEO for Weddings", "Local Party Search Hub"],
        introTitle: "Serving Your Success on a Silver Platter",
        introText: "Catering SEO helps event planners, corporate offices, and wedding couples find your services. We focus on visual food discovery and event-specific keywords to ensure you're the first choice for their next big gathering.",
        stats: [
            { label: "Quotes Done", value: "120+", bgColor: "bg-[#0a142f]", subLabel: "Monthly Average" },
            { label: "Event Reach", value: "2x", bgColor: "bg-[#f36b21]", subLabel: "Category Grow" },
            { label: "Visibility", value: "High", bgColor: "bg-[#4e6bf2]", subLabel: "Local Search" },
            { label: "Trust Rating", value: "97%", bgColor: "bg-[#00a3e0]", subLabel: "Client Rating" }
        ],
        painPointTitle: "Pain Points of Catering Companies",
        painPoints: [
            { title: "Invisible for Big Events", description: "Wedding and corporate planners search months in advance. If you're not visible during the research phase, you lose the contract." },
            { title: "Low Lead-to-Sale Ratio", description: "Attracting casual shoppers instead of serious event hosts? We target high-intent 'catering services for [Event]' terms." },
            { title: "Poor Review Visibility", description: "In catering, word of mouth is digital. If your Google reviews aren't front and center, you lose trust." }
        ],
        benefits: [
            { title: "Event-Specific Funnels", description: "We build SEO silos for Wedding, Corporate, and Private party catering to capture every segment of the market." },
            { title: "Visual Appetite SEO", description: "We optimize your menu galleries to trigger immediate visual appeal in Google Images and local search results." },
            { title: "Regional Catering Power", description: "We help you dominate searches not just in your city, but across all the surrounding service areas." }
        ]
    };
    return <BaseTemplate {...data} />;
};

export const YogaSEO = () => {
    const data = {
        industry: "Yoga",
        heroImage: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1600",
        heroBullets: ["Flow into More Student Leads", "Mindful Search Dominance", "Studio Location Ranking Power", "Global Online Class Reach"],
        introTitle: "Aligning Your Studio with Search Success",
        introText: "Yoga SEO is about building a community. We help yoga studios and individual teachers find their students by ranking for local studio keywords and mindful content that answers the student's health and wellness questions.",
        stats: [
            { label: "New Students", value: "150+", bgColor: "bg-[#0a142f]", subLabel: "Monthly Flow" },
            { label: "Search Rank", value: "#1 Spot", bgColor: "bg-[#f36b21]", subLabel: "Local Category" },
            { label: "Engagement", value: "200%", bgColor: "bg-[#4e6bf2]", subLabel: "Traffic Boost" },
            { label: "Lead Clarity", value: "High", bgColor: "bg-[#00a3e0]", subLabel: "Market Share" }
        ],
        painPointTitle: "Pain Points of Yoga Studios",
        painPoints: [
            { title: "Invisibility in Crowded Niche", description: "With so many studios and gyms offering yoga, standing out for 'yoga near me' is a major challenge." },
            { title: "Low Student Retention", description: "SEO isn't just for new students. We help you rank for community content that keeps students engaged with your brand." },
            { title: "Failing to Rank for Online Classes", description: "Most studios struggle to compete with global apps for online class keywords. We help you find your niche." }
        ],
        benefits: [
            { title: "Holistic Content Model", description: "We build trust through SEO-optimized mindful content that speaks to the student's journey from beginner to advanced." },
            { title: "Studio GMB Dominance", description: "We make your studio the most visible and highest-rated option in your local map pack." },
            { title: "Niche Style Targeting", description: "We ensure you rank for specific styles (Hatha, Vinyasa, Bikram) to attract the right type of student." }
        ]
    };
    return <BaseTemplate {...data} />;
};
