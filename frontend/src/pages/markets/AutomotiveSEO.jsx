import React from 'react';
import BaseTemplate from './BaseTemplate';

const AutomotiveSEO = () => {
    const data = {
        industry: "Automotive",
        heroImage: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1600",
        heroBullets: [
            "Boost Automotive Sales Online",
            "Attract Car Buyers Digitally",
            "Increase Dealership Traffic Fast",
            "Dominate Auto Search Rankings"
        ],
        introTitle: "Accelerate Your Showroom's Digital Potential",
        introText: "Automotive SEO (Search Engine Optimization) refers to the strategies and practices used to optimize automotive-related websites—such as car dealerships, auto repair shops, and car parts sellers—for search engines like Google. The goal is to improve the website's visibility in search results when potential customers search for related terms, such as \"car dealership near me,\" \"auto repair services,\" or \"buy car parts online.\"",
        stats: [
            { label: "Satisfied Clients", value: "5000+", bgColor: "bg-[#0a142f]", subLabel: "Experience Excellence" },
            { label: "Industries Served", value: "40+", bgColor: "bg-[#f36b21]", subLabel: "Niche Expertise" },
            { label: "Avg Project Lifespan", value: "3 Years+", bgColor: "bg-[#4e6bf2]", subLabel: "Long-term Partnerships" },
            { label: "Retention Rate", value: "93%", bgColor: "bg-[#00a3e0]", subLabel: "Achieved Reliability" }
        ],
        painPointTitle: "Pain Points of Automotive Businesses",
        painPoints: [
            {
                title: "Low Visibility in Local Searches",
                description: "Many automotive businesses fail to rank in local search results, leaving them invisible to nearby customers. Without proper local seo for auto repair shops, or effective car-dealer SEO, competitors with better visibility dominate the market."
            },
            {
                title: "Competition with Larger Brands",
                description: "Competing against well-funded, well-known brands can be daunting for smaller automotive businesses. Larger companies often work with leading automotive SEO companies and heavily invest in marketing."
            },
            {
                title: "Struggling to Attract Local Customers",
                description: "Without a focused local SEO strategy or help from an auto SEO company, businesses lose out on nearby customers who are ready to engage. Customers often prioritize convenience and proximity."
            },
            {
                title: "Poor Website Performance",
                description: "Websites that are slow, not mobile-friendly, or difficult to navigate drive potential customers away. A poor user experience not only lowers engagement but also reduces the impact of your automotive SEO services."
            },
            {
                title: "Inconsistent Reviews",
                description: "A few bad reviews or not having recent good ones can greatly harm customer trust. Many automotive businesses find it hard to collect and manage reviews regularly."
            },
            {
                title: "Limited Advertising Knowledge",
                description: "If automotive businesses don't understand digital advertising tools like Google Ads or Facebook Ads well, they waste money on campaigns that don't work well."
            }
        ],
        benefits: [
            {
                title: "Increased Visibility",
                description: "Automotive SEO helps your website stand out by ranking higher on Google for targeted keywords like \"car dealership near me\" or \"affordable auto repair\". Your business appears in local map packs, ensuring customers nearby can find you first."
            },
            {
                title: "Attracting Qualified Leads",
                description: "Automotive SEO companies focus on optimizing your website for relevant search terms, ensuring you attract people who are actively searching for your products or services. This results in higher-quality traffic."
            },
            {
                title: "Driving Local Customers",
                description: "For automotive businesses, local traffic is essential. Local SEO for auto repair shops ensures your business appears in location-based searches, targeting \"near me\" keywords and optimizing your GMB profile."
            }
        ]
    };

    return <BaseTemplate {...data} />;
};

export default AutomotiveSEO;
