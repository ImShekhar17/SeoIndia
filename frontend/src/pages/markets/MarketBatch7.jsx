import React from 'react';
import BaseTemplate from './BaseTemplate';

export const PestControlSEO = () => {
    const data = {
        industry: "Pest Control",
        heroImage: "/images/pest-control-seo-hero.png",
        heroBullets: ["Exterminate the Competition in Search", "Immediate Response Pest Leads", "Local Pro Ranking Strategy", "Drip-Feed Your Schedule with Leads"],
        introTitle: "Fixing Your Pipeline's Digital Leaks",
        introText: "Pest Control SEO is about speed and proximity. When a home is infested, customers don't scroll past the first few results. We ensure your pest control business is the first one they call by dominating local maps and high-intent 'near me' keywords.",
        stats: [
            { label: "Call Volume", value: "400+", bgColor: "bg-[#0a142f]", subLabel: "Monthly Average" },
            { label: "Local Result", value: "#1 Spot", bgColor: "bg-[#f36b21]", subLabel: "GMB Power" },
            { label: "Lead Growth", value: "190%", bgColor: "bg-[#4e6bf2]", subLabel: "Organic Success" },
            { label: "Impact Score", value: "95%", bgColor: "bg-[#00a3e0]", subLabel: "Market Share" }
        ],
        painPointTitle: "Pain Points of Pest Control Businesses",
        painPoints: [
            { title: "Invisible in Emergency Searches", description: "If you're not in the top 3 of the map pack, you are missing out on 80% of emergency residential calls." },
            { title: "Low Lead Quality", description: "Getting calls for small advice instead of full home treatments? We target the high-value pest jobs." },
            { title: "Poor Review Management", description: "One bad review can sink a local pro. We build a fortress of positive reputation through local SEO." }
        ],
        benefits: [
            { title: "Emergency Response SEO", description: "We optimize for voice and immediate local intent to capture 'pest control near me' calls instantly." },
            { title: "Pest-Specific Authority", description: "Whether it's 'termite control' or 'bed bug treatment', we rank you for your specific higher-value specializations." },
            { title: "Local Map Dominance", description: "Aggressive local SEO that puts your brand at the center of your service area." }
        ]
    };
    return <BaseTemplate {...data} />;
};

export const SalonsSEO = () => {
    const data = {
        industry: "Salons",
        heroImage: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1600",
        heroBullets: ["Style Your Way to the Top of Search", "More Bookings for Your Stylists", "Local Beauty Discovery Power", "Visual Brand Dominance Strategy"],
        introTitle: "The Secret Ingredient to Your Salon's Growth",
        introText: "Salons SEO is about local discovery and mouth-watering visibility. We help hair salons, spas, and beauty parlors show up when locals are searching for their next great style or relaxation session.",
        stats: [
            { label: "Bookings", value: "2x", bgColor: "bg-[#0a142f]", subLabel: "Direct Organic" },
            { label: "Style Views", value: "10k+", bgColor: "bg-[#f36b21]", subLabel: "Monthly Reach" },
            { label: "GMB Clicks", value: "500+", bgColor: "bg-[#4e6bf2]", subLabel: "Daily Interacts" },
            { label: "Brand Recall", value: "High", bgColor: "bg-[#00a3e0]", subLabel: "Beauty Choice" }
        ],
        painPointTitle: "Pain Points of Salons",
        painPoints: [
            { title: "Dependency on 3rd Party Apps", description: "Direct SEO bookings mean more profit stays in your salon and less in the pockets of third-party platforms." },
            { title: "Invisible in 'Near Me' Searches", description: "If you're not in the top 3 when someone searches for a hair cut nearby, you don't exist to them." },
            { title: "Poor Visual Search Presence", description: "People choose salons with their eyes. If your work photos aren't optimized and visible, they won't come in." }
        ],
        benefits: [
            { title: "Style-Specific Dominance", description: "We help you own the rankings for your specific beauty types in your city (e.g., 'best hair colorist in [City]')." },
            { title: "GMB Booking SEO", description: "Direct integration of service menus and booking links to shorten the distance from search to seat." },
            { title: "Visual Beauty Targeting", description: "We optimize your image galleries and local posts to trigger immediate desire and visits." }
        ]
    };
    return <BaseTemplate {...data} />;
};

export const VeterinarySEO = () => {
    const data = {
        industry: "Veterinary",
        heroImage: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=1600",
        heroBullets: ["Helping Pet Owners Find the Best Care", "Emergency Vet Search Dominance", "Local Clinic Discovery Power", "Trusted Pet Authority Plan"],
        introTitle: "A Healthier Digital Future for Your Vet Practice",
        introText: "Veterinary SEO helps local animal clinics and pet hospitals connect with pet parents in their time of need. We focus on local map dominance and high-trust content to ensure your practice is the first choice for pet health.",
        stats: [
            { label: "New Patients", value: "120+", bgColor: "bg-[#0a142f]", subLabel: "Monthly Inquiry" },
            { label: "Local Rank", value: "#1 Spot", bgColor: "bg-[#f36b21]", subLabel: "Map Pack" },
            { label: "Trust Score", value: "High", bgColor: "bg-[#4e6bf2]", subLabel: "E-A-T Signal" },
            { label: "Market Share", value: "20%", bgColor: "bg-[#00a3e0]", subLabel: "Local Growth" }
        ],
        painPointTitle: "Pain Points of Veterinary Practices",
        painPoints: [
            { title: "Invisible in Emergency Searches", description: "When a pet is hurt, every second counts. If you're not the first result parents see, they go elsewhere." },
            { title: "Pet Parent Trust Gap", description: "Pet parents are wary of online health info. Building a credible online presence that converts is critical." },
            { title: "Failing to Rank for Specialists", description: "Most clinics fail to rank for their specific expertise like surgery or dental care in their city." }
        ],
        benefits: [
            { title: "Emergency Intent targeting", description: "We optimize for 'animal hospital near me' and emergency keywords to drive immediate high-intent calls." },
            { title: "Pet Authority Content", description: "We build trust through SEO-optimized pet care guides that satisfy both Google and pet parents." },
            { title: "Local GMB Dominance", description: "We make your clinic the most visible and highest-rated option in your local map pack." }
        ]
    };
    return <BaseTemplate {...data} />;
};

export const EducationSEO = () => {
    const data = {
        industry: "Education",
        heroImage: "/images/education-seo-hero.png",
        heroBullets: ["Enrolling Success in Search Results", "Global Online Class Reach", "Academic Search Authority", "Student Acquisition Growth Strategy"],
        introTitle: "Teaching the World Why Your School Matters",
        introText: "Education SEO is for schools, universities, and online learning platforms. We help you find your future students by ranking for high-intent academic keywords and educational content that answers the student's learning journey questions.",
        stats: [
            { label: "Enrolments", value: "2x", bgColor: "bg-[#0a142f]", subLabel: "Direct Organic" },
            { label: "Search Reach", value: "Global", bgColor: "bg-[#f36b21]", subLabel: "Market Share" },
            { label: "Visibility", value: "High", bgColor: "bg-[#4e6bf2]", subLabel: "Academic Rank" },
            { label: "Trust Rating", value: "98%", bgColor: "bg-[#00a3e0]", subLabel: "Student Success" }
        ],
        painPointTitle: "Pain Points of Education Brands",
        painPoints: [
            { title: "Competitive Enrolment Market", description: "Standing out from massive universities and learning platforms is a major challenge for niche schools." },
            { title: "Invisible in Course Searches", description: "If you're not in the top results for your specific course types, students don't know you exist." },
            { title: "Difficulty in Tracking ROI", description: "Not knowing which SEO efforts are driving actual enrollments prevents strategic growth." }
        ],
        benefits: [
            { title: "Academic Authority Building", description: "We position your school as an industry leader through deeply educational white papers and reports." },
            { title: "Course-Specific Targeting", description: "We ensure you rank for your specific degree and course types, bringing in the right students." },
            { title: "Global & Regional Reach", description: "Strategic SEO that puts your brand in front of students across the globe or across your city." }
        ]
    };
    return <BaseTemplate {...data} />;
};

export const JewelrySEO = () => {
    const data = {
        industry: "Jewelry",
        heroImage: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=1600",
        heroBullets: ["Shine Bright in Search Results", "Win More High-Value Luxury Sales", "Visual Gemstone Search Power", "Ethical Jewelry Search Branding"],
        introTitle: "Crafting Your Brand's Digital Brilliance",
        introText: "Jewelry SEO helps luxury retailers and custom jewelers showcase their unique pieces to shoppers looking for excellence. We focus on high-intent gifting keywords and visual search dominance to ensure your showroom or store is the final stop.",
        stats: [
            { label: "Sales Revenue", value: "3x", bgColor: "bg-[#0a142f]", subLabel: "Online Growth" },
            { label: "Store Visits", value: "150+", bgColor: "bg-[#f36b21]", subLabel: "Monthly Trend" },
            { label: "Keyword Rank", value: "Top 5", bgColor: "bg-[#4e6bf2]", subLabel: "Luxury Terms" },
            { label: "Reach Share", value: "National", bgColor: "bg-[#00a3e0]", subLabel: "Strategic Scale" }
        ],
        painPointTitle: "Pain Points of Jewelry Retailers",
        painPoints: [
            { title: "Competition with Massive Brands", description: "Competing with Tiffany's or Blue Nile is tough. We use niche style and local showroom strategies to win back buyers." },
            { title: "Visual-First Search Issues", description: "Jewelry buyers search with their eyes. If your images aren't optimized and visible, you're missing out." },
            { title: "Low Conversion for Luxury Items", description: "Custom jewelry needs a high-trust digital presence to convince buyers to spend thousands online." }
        ],
        benefits: [
            { title: "Jewelry-Specific Targeting", description: "We optimize for 'custom engagement rings' or 'luxury diamond necklaces' to capture high-intent buyers." },
            { title: "Showroom Drive Strategy", description: "Local SEO that gets people out of their browser and into your physical store to feel the quality." },
            { title: "Visual Luxury SEO", description: "We optimize your image galleries and local posts to trigger immediate desire and visits." }
        ]
    };
    return <BaseTemplate {...data} />;
};
