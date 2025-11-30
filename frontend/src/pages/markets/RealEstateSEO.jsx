import React from 'react';
import BaseTemplate from './BaseTemplate';

const RealEstateSEO = () => {
    const data = {
        industry: "Real Estate",
        heroImage: "/images/real-estate-seo-hero.png",
        heroBullets: [
            "Capture More Buyer & Seller Leads",
            "Dominate Local Neighborhood Searches",
            "Rank Higher for Property Listings",
            "Strategic Real Estate Marketing"
        ],
        introTitle: "Unlock Your Market's Full Digital Potential",
        introText: "Real Estate SEO is specifically designed to help realtors, agencies, and property management firms rank for highly competitive geographic search terms. By optimizing for local neighborhoods, school districts, and property types, we ensure that your listings and expertise are seen by active buyers and sellers in your target market.",
        stats: [
            { label: "Listings Ranked", value: "25k+", bgColor: "bg-[#0a142f]", subLabel: "Property Reach" },
            { label: "Lead Growth", value: "+210%", bgColor: "bg-[#f36b21]", subLabel: "Organic Success" },
            { label: "Market Share", value: "15%", bgColor: "bg-[#4e6bf2]", subLabel: "Local Dominance" },
            { label: "Trust Score", value: "99%", bgColor: "bg-[#00a3e0]", subLabel: "Client Satisfaction" }
        ],
        painPointTitle: "Pain Points of Real Estate Businesses",
        painPoints: [
            {
                title: "Competition with Zillow and Redfin",
                description: "Larger portals dominate the general search results, making it nearly impossible for individual agents to rank for broad terms without a hyper-local niche strategy."
            },
            {
                title: "Ephemeral Listing Rankings",
                description: "Standard property listings often get indexed and then expire, causing SEO efforts to be wasted. Constant maintenance is required for long-term authority."
            },
            {
                title: "Difficulty in Seller Lead Gen",
                description: "While buyer leads are easier to get, seller leads are much more competitive and require a high-authority brand presence and trust-driven content."
            },
            {
                title: "Poor Geographic Targeting",
                description: "Many agencies rank for broad city names but fail to capture the high-intent traffic from specific neighborhoods or luxury districts."
            },
            {
                title: "Legacy Website Constraints",
                description: "Using old IDX feeds or slow templated websites can hurt your rankings and provide a poor user experience for property hunters."
            },
            {
                title: "Mobile Search Dominance",
                description: "Real estate search happens primarily on the go. If your site isn't perfectly optimized for mobile, you are losing the majority of your potential leads."
            }
        ],
        benefits: [
            {
                title: "Neighborhood Authority",
                description: "We help you become the go-to expert for specific zip codes and neighborhoods through targeted content and local landing pages."
            },
            {
                title: "IDX Integration & Optimization",
                description: "We ensure your property search is lightning fast and SEO-friendly, allowing search engines to index your individual listings effectively."
            },
            {
                title: "Seller Lead Capture",
                description: "By creating 'What is my home worth?' funnels and high-authority area guides, we drive high-intent sellers directly to your inbox."
            }
        ]
    };

    return <BaseTemplate {...data} />;
};

export default RealEstateSEO;
