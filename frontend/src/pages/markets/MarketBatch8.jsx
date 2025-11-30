import React from 'react';
import BaseTemplate from './BaseTemplate';

export const RetailSEO = () => {
    const data = {
        industry: "Retail",
        heroImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1600",
        heroBullets: ["Expand Your E-commerce Visibility", "Drive More Store Foot Traffic", "Rank for High-Value Product Terms", "Retail Brand Search Authority"],
        introTitle: "Modernizing Your Retail Digital Presence",
        introText: "Retail SEO is an omnichannel strategy that connects your products with shoppers both online and in-store. We help retail brands rank for competitive product keywords and local 'near me' searches, ensuring a seamless path from search to sale.",
        stats: [
            { label: "Sales Revenue", value: "3x", bgColor: "bg-[#0a142f]", subLabel: "Online Growth" },
            { label: "Store Visits", value: "200+", bgColor: "bg-[#f36b21]", subLabel: "Monthly Trend" },
            { label: "Conversion", value: "150%", bgColor: "bg-[#4e6bf2]", subLabel: "Search leads" },
            { label: "Brand Impact", value: "Global", bgColor: "bg-[#00a3e0]", subLabel: "Strategic Scale" }
        ],
        painPointTitle: "Pain Points of Retail Brands",
        painPoints: [
            { title: "Dominance of Amazon & Big-Box", description: "Competing with retail giants for general product terms is a major hurdle. We use niche and local strategies to win." },
            { title: "Disconnected Online/Offline Sales", description: "Many retailers struggle to track how their SEO efforts drive physical store visits. We solve this with omnichannel SEO." },
            { title: "Low Visibility for Niche Products", description: "If your unique products aren't visible on Google, you are losing out on the design-conscious buyer." }
        ],
        benefits: [
            { title: "Omnichannel SEO Strategy", description: "We ensure your online presence drives both e-commerce sales and physical store foot traffic." },
            { title: "Product Page Dominance", description: "We optimize individual product pages for long-tail, high-intent keywords that drive immediate conversions." },
            { title: "Brand Discovery Hooks", description: "We target trending keywords and visual discovery terms to put your products in front of new audiences." }
        ]
    };
    return <BaseTemplate {...data} />;
};

export const HospitalitySEO = () => {
    const data = {
        industry: "Hospitality",
        heroImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1600",
        heroBullets: ["Welcome More Guests through Search", "Bypass Expensive OTA Booking Fees", "Local Destination Dominance Power", "Luxury Brand Search Authority"],
        introTitle: "Checking Your Brand into the Top of Search",
        introText: "Hospitality SEO helps hotels, resorts, and travel destinations win more direct bookings and reduce dependency on expensive third-party platforms. We focus on local destination discovery and high-trust content to ensure your brand is the first choice.",
        stats: [
            { label: "Direct Bookings", value: "2x", bgColor: "bg-[#0a142f]", subLabel: "Organic Increase" },
            { label: "OTA Savings", value: "30%", bgColor: "bg-[#f36b21]", subLabel: "Markup Recovery" },
            { label: "Search Visibility", value: "High", bgColor: "bg-[#4e6bf2]", subLabel: "Destination Rank" },
            { label: "Retention Rate", value: "High", bgColor: "bg-[#00a3e0]", subLabel: "Guest Loyalty" }
        ],
        painPointTitle: "Pain Points of Hospitality Brands",
        painPoints: [
            { title: "Dependency on Expedia & Booking", description: "OTAs take a massive cut. Direct SEO bookings are the most profitable leads for any hotel or resort." },
            { title: "Invisible in Destination Searches", description: "If you're not in the top results for 'best hotel in [City]', you are missing out on 80% of local travel leads." },
            { title: "Seasonal Booking Satiety", description: "How do you fill rooms in the off-season? We target niche event and experience keywords to bridge the gap." }
        ],
        benefits: [
            { title: "Direct Booking Funnels", description: "We optimize your site to funnel searchers directly into your booking engine, increasing your profit margins." },
            { title: "Destination Authority Content", description: "We position your hotel as an industry leader through local guides and experience-focused SEO." },
            { title: "Local GMB Dominance", description: "We make your property the most visible and highest-rated option in your local map pack." }
        ]
    };
    return <BaseTemplate {...data} />;
};

export const TreeServiceSEO = () => {
    const data = {
        industry: "Tree Service",
        heroImage: "https://images.unsplash.com/photo-1542332213-31f87348057f?auto=format&fit=crop&q=80&w=1600",
        heroBullets: ["Growing Your Business Digitally", "Emergency Response Tree Leads", "Local Pro Ranking Strategy", "Drip-Feed Your Schedule with Leads"],
        introTitle: "Pruning Your Way to the Top of Search",
        introText: "Tree Service SEO is about speed and proximity. When a storm hits, customers don't scroll past the first few results. We ensure your tree service business is the first one they call by dominating local maps and emergency keywords.",
        stats: [
            { label: "Call Volume", value: "300+", bgColor: "bg-[#0a142f]", subLabel: "Monthly Average" },
            { label: "Local Rank", value: "#1 Spot", bgColor: "bg-[#f36b21]", subLabel: "Map Pack" },
            { label: "Lead Growth", value: "180%", bgColor: "bg-[#4e6bf2]", subLabel: "Organic Success" },
            { label: "ROI Ratio", value: "7x", bgColor: "bg-[#00a3e0]", subLabel: "Lead Quality" }
        ],
        painPointTitle: "Pain Points of Tree Services",
        painPoints: [
            { title: "Invisible in Emergency Searches", description: "When a tree falls on a house, every second counts. If you're not the first result parents see, they go elsewhere." },
            { title: "Low-Value Trimming Leads", description: "Tired of calls for small pruning jobs? We target people looking for full removals and emergency services." },
            { title: "Poor Review Visibility", description: "In tree service, word of mouth is digital. If your reviews aren't front and center, you lose trust." }
        ],
        benefits: [
            { title: "Emergency Intent Targeting", description: "We optimize for 'tree removal near me' and storm damage keywords to drive immediate high-intent calls." },
            { title: "Local Map Dominance", description: "Aggressive local SEO that puts your brand at the center of your service area." },
            { title: "Trust Signal Building", description: "We manage local citations and reviews to ensure your business looks as professional as the work you do." }
        ]
    };
    return <BaseTemplate {...data} />;
};

export const PhotographySEO = () => {
    const data = {
        industry: "Photography",
        heroImage: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?auto=format&fit=crop&q=80&w=1600",
        heroBullets: ["Capture More Leads with Search", "Showcase Your High-End Portfolio", "Win More Wedding & Event Leads", "Local Artist Authority Power"],
        introTitle: "Focusing Your Brand on Digital Success",
        introText: "Photography SEO is about visual discovery and trust. We help photographers, from wedding specialists to commercial pros, showcase their work to locals looking for their next major event or brand shoot.",
        stats: [
            { label: "Booking Leads", value: "100+", bgColor: "bg-[#0a142f]", subLabel: "Monthly Inquiry" },
            { label: "Style Views", value: "150%", bgColor: "bg-[#f36b21]", subLabel: "Monthly Reach" },
            { label: "Visibility", value: "High", bgColor: "bg-[#4e6bf2]", subLabel: "Local Category" },
            { label: "Rank Speed", value: "Consistent", bgColor: "bg-[#00a3e0]", subLabel: "Organic Gains" }
        ],
        painPointTitle: "Pain Points of Photographers",
        painPoints: [
            { title: "Invisible in Crowded Niche", description: "Standing out from thousands of local photographers is a major challenge for niche specialists." },
            { title: "Failing to Rank for Specialty", description: "Most photographers fail to rank for their specific expertise like 'wedding' or 'product' photography in their city." },
            { title: "Poor Visual Search Presence", description: "People choose photographers with their eyes. If your work photos aren't optimized and visible, they won't come in." }
        ],
        benefits: [
            { title: "Portfolio Visibility SEO", description: "We optimize your project galleries for specific styles and occasions to attract trend-conscious buyers." },
            { title: "High-Ticket Lead Gen", description: "We focus our SEO efforts on the affluent districts and high-intent keywords that drive bigger project leads." },
            { title: "Local Map Pack Power", description: "We ensure you are the highest-rated and most visible photographer in your local map pack." }
        ]
    };
    return <BaseTemplate {...data} />;
};

export const MoversSEO = () => {
    const data = {
        industry: "Movers",
        heroImage: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80&w=1600",
        heroBullets: ["Moving Your Business to the Top", "Emergency Response Moving Leads", "Local Relocation Pro Power", "GMB Map Hero Strategy"],
        introTitle: "The First Call When Families Move",
        introText: "Movers SEO targets the high-frequency local searches for residential and commercial relocation. We help you dominate 'near me' keywords and local maps, ensuring your truck is the first one they book.",
        stats: [
            { label: "Move Leads", value: "200+", bgColor: "bg-[#0a142f]", subLabel: "Weekly average" },
            { label: "Local Rank", value: "Top 3", bgColor: "bg-[#f36b21]", subLabel: "Map Pack" },
            { label: "Lead Cost", value: "-50%", bgColor: "bg-[#4e6bf2]", subLabel: "PPC Saving" },
            { label: "ROI Ratio", value: "10x", bgColor: "bg-[#00a3e0]", subLabel: "High Reach" }
        ],
        painPointTitle: "Pain Points of Moving Companies",
        painPoints: [
            { title: "Invisible in Emergency Searches", description: "If you're not in the top 3 spots for 'movers near me', you are losing out on 90% of local relocation leads." },
            { title: "Low-Value Single-Item Leads", description: "Tired of calls for picking up a sofa? We target people looking for full home or commercial moves." },
            { title: "Poor Review Visibility", description: "In moving, word of mouth is digital. If your reviews aren't front and center, you lose trust." }
        ],
        benefits: [
            { title: "Immediate Response SEO", description: "We optimize for voice and immediate local intent to capture 'moving company near me' calls instantly." },
            { title: "Local Map Dominance", description: "Aggressive local SEO that puts your brand at the center of your service area." },
            { title: "Trust & Reputation Power", description: "We build social proof and local presence that makes choosing your moving business a no-brainer." }
        ]
    };
    return <BaseTemplate {...data} />;
};

export const CannabisSEO = () => {
    const data = {
        industry: "Cannabis",
        heroImage: "/images/cannabis-seo-hero.png",
        heroBullets: ["Compliant Search Growth Experts", "Drive More Dispensary Traffic", "Ethical Search Authority Strategy", "Local Niche Search Dominance"],
        introTitle: "Growing Your Brand in a Regulated Market",
        introText: "Cannabis SEO requires a strictly compliant, high-stakes balance of authority and local reach. We help dispensaries and cannabis brands rank for high-intent product keywords while navigating the complex global legality landscape.",
        stats: [
            { label: "Traffic growth", value: "2x", bgColor: "bg-[#0a142f]", subLabel: "Organic Boost" },
            { label: "Visible Share", value: "High", bgColor: "bg-[#f36b21]", subLabel: "Local Category" },
            { label: "Conversion", value: "150%", bgColor: "bg-[#4e6bf2]", subLabel: "Store Leads" },
            { label: "Compliance", value: "100%", bgColor: "bg-[#00a3e0]", subLabel: "Risk Free" }
        ],
        painPointTitle: "Pain Points of Cannabis Brands",
        painPoints: [
            { title: "Strict Search Compliance", description: "Marketing cannabis requires strict adherence to global and local laws. We build effective, compliant strategies." },
            { title: "Invisible in Mainstream search", description: "Competing with massive platforms for product terms is a challenge. We use niche and local strategies to win." },
            { title: "Trust & Authority Gap", description: "Building a credible online presence in a new industry is critical for long-term category growth." }
        ],
        benefits: [
            { title: "Dispensary Discovery SEO", description: "We ensure your local dispensary is the first thing shoppers see when looking for product nearby." },
            { title: "Product Authority Content", description: "We build trust through educational content that answers searcher questions about quality and effects." },
            { title: "Compliant Reach Strategy", description: "Strategic SEO that puts your brand in front of new audiences without risking legal or platform bans." }
        ]
    };
    return <BaseTemplate {...data} />;
};

export const TravelSEO = () => {
    const data = {
        industry: "Travel",
        heroImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=1600",
        heroBullets: ["Expand Your Global Reach", "Win More Direct Bookings", "Local Destination Authority Hub", "Adventure Brand Search Strategy"],
        introTitle: "Expediting Your Brand's Digital Journey",
        introText: "Travel SEO helps agencies, tour operators, and destinations win more direct bookings and reduce dependency on third-party OTAs. We focus on local destination discovery and high-trust experience content to ensure your brand is the first choice.",
        stats: [
            { label: "Trip Bookings", value: "2x", bgColor: "bg-[#0a142f]", subLabel: "Direct Organic" },
            { label: "OTA Savings", value: "30%", bgColor: "bg-[#f36b21]", subLabel: "Markup Recovery" },
            { label: "Search Share", value: "Global", bgColor: "bg-[#4e6bf2]", subLabel: "Reach Boost" },
            { label: "Engagement", value: "High", bgColor: "bg-[#00a3e0]", subLabel: "Target metrics" }
        ],
        painPointTitle: "Pain Points of Travel Companies",
        painPoints: [
            { title: "Dependency on Tripadvisor & Booking", description: "OTAs take a massive cut. Direct SEO bookings are the most profitable leads for any travel agency or tour operator." },
            { title: "Invisible in Trip Research", description: "If you're not visible when travelers are researching their next destination, you've already lost the booking." },
            { title: "Seasonal Demand Spikes", description: "How do you fill tours in the off-season? We target niche experience and 'low season' keywords to bridge the gap." }
        ],
        benefits: [
            { title: "Destination Authority Hubs", description: "We position your agency as the leading expert on destinations through local guides and experience-focused SEO." },
            { title: "Direct Booking Funnels", description: "We optimize your site to funnel searchers directly into your booking engine, increasing your profit margins." },
            { title: "Global & Regional Reach", description: "Strategic SEO that puts your brand in front of travelers across the globe or across your city." }
        ]
    };
    return <BaseTemplate {...data} />;
};
