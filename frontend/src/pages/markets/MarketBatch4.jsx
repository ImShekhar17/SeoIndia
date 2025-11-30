import React from 'react';
import BaseTemplate from './BaseTemplate';

export const EntertainmentSEO = () => {
    const data = {
        industry: "Entertainment",
        heroImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1600",
        heroBullets: ["Be the Star of the Search Page", "Sell More Tickets & Bookings", "Global Fanbase Expansion", "Influencer Search Authority"],
        introTitle: "Spotlighting Your Brand in a Crowded Market",
        introText: "Entertainment SEO is about buzz and discovery. Whether you're an artist, a venue, or a production house, we ensure you're the first thing your audience sees when they're looking for their next event, show, or media fix.",
        stats: [
            { label: "Ticket Sales", value: "3x", bgColor: "bg-[#0a142f]", subLabel: "Direct Organic" },
            { label: "Reach Share", value: "Global", bgColor: "bg-[#f36b21]", subLabel: "Viral Growth" },
            { label: "Engagement", value: "180%", bgColor: "bg-[#4e6bf2]", subLabel: "On-Page Metrics" },
            { label: "Brand Value", value: "High", bgColor: "bg-[#00a3e0]", subLabel: "Social Proof" }
        ],
        painPointTitle: "Pain Points of Entertainment Brands",
        painPoints: [
            { title: "Short Attention Spans", description: "If you're not the first result, you're forgotten. We use aggressive discovery SEO to capture interest instantly." },
            { title: "Invisible Events", description: "Great shows go empty because nobody could find them on Google. We optimize event schema to ensure you show up in rich results." },
            { title: "Crisis Management", description: "In entertainment, reputation is everything. We use SEO to control the narrative around your brand." }
        ],
        benefits: [
            { title: "Event Schema Dominance", description: "We ensure your show dates, prices, and locations appear directly on the Google search results page." },
            { title: "Viral Discovery Hooks", description: "We target trending keywords and long-tail discovery terms to put your brand in front of new audiences." },
            { title: "Fan Engagement Hubs", description: "We optimize your community pages and media galleries to keep fans on your site longer." }
        ]
    };
    return <BaseTemplate {...data} />;
};

export const LogisticSEO = () => {
    const data = {
        industry: "Logistic",
        heroImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1600",
        heroBullets: ["Ship Your Rankings to the Top", "Win More Corporate Freight Leads", "Global Supply Chain Authority", "Technical B2B Search Strategy"],
        introTitle: "Streamlining Your Digital Supply Chain",
        introText: "Logistics SEO is about trust and reliability in the B2B space. We help freight forwarders, 3PLs, and tech logistics companies rank for complex shipping and supply chain management keywords, ensuring you're seen by decision-makers.",
        stats: [
            { label: "B2B Leads", value: "120+", bgColor: "bg-[#0a142f]", subLabel: "Monthly Inquiry" },
            { label: "Search Power", value: "Nat'l", bgColor: "bg-[#f36b21]", subLabel: "Market Reach" },
            { label: "Rank Speed", value: "Consistent", bgColor: "bg-[#4e6bf2]", subLabel: "Organic Gains" },
            { label: "Lead Value", value: "Enterprise", bgColor: "bg-[#00a3e0]", subLabel: "Contract Scale" }
        ],
        painPointTitle: "Pain Points of Logistics Companies",
        painPoints: [
            { title: "Invisible to Enterprise Buyers", description: "Decision-makers search for 'reliable 3PL in [City]' or 'global freight solutions'. If you aren't there, you lose the contract." },
            { title: "Complex Service Explanations", description: "Logistics is technical. If your SEO content is too vague, it won't convert the professional buyer." },
            { title: "High Barrier to Entry", description: "Competing with DHL or FedEx for general shipping keywords is a waste of time. We win with niche B2B strategies." }
        ],
        benefits: [
            { title: "Supply Chain Authority", description: "We position your firm as an industry leader through deeply technical white papers and SEO-optimized industry reports." },
            { title: "Regional & Hub Targeting", description: "We optimize for specific shipping hubs and territories to ensure you dominate your primary lanes." },
            { title: "Strategic Lead Nurturing", description: "Our SEO funnels are designed to speak to the professional logistics manager, not just the casual searcher." }
        ]
    };
    return <BaseTemplate {...data} />;
};

export const ApplianceRepairSEO = () => {
    const data = {
        industry: "Appliance Repair",
        heroImage: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=1600",
        heroBullets: ["Fixed for Search Dominance", "Immediate Response Repair Leads", "Local Neighborhood Pro Power", "GMB Map Hero Strategy"],
        introTitle: "Being the First Call When Things Break",
        introText: "Appliance Repair SEO is about dominating the 'immediate need' market. When a fridge fails, the customer calls the first reliable-looking result on their phone. We ensure that result is your business.",
        stats: [
            { label: "Repair Jobs", value: "250+", bgColor: "bg-[#0a142f]", subLabel: "Monthly Average" },
            { label: "Local Rank", value: "#1 Spot", bgColor: "bg-[#f36b21]", subLabel: "Map Pack" },
            { label: "Lead Cost", value: "-60%", bgColor: "bg-[#4e6bf2]", subLabel: "PPC Saving" },
            { label: "Market Reach", value: "3x", bgColor: "bg-[#00a3e0]", subLabel: "Visual Share" }
        ],
        painPointTitle: "Pain Points of Appliance Repair Pros",
        painPoints: [
            { title: "Invisible in Emergency Searches", description: "If your GMB isn't optimized for your city and services, you're missing 90% of your potential repair calls." },
            { title: "Low-Value Leads", description: "Tired of callers asking for simple advice instead of actual repair jobs? We target high-intent repair keywords." },
            { title: "Reputation Issues", description: "A lack of recent, high-quality reviews makes prospective customers choose your competitor." }
        ],
        benefits: [
            { title: "Hyper-Local Proximity SEO", description: "We ensure you show up for every search within your 15-mile service radius." },
            { title: "Brand-Specific Targeting", description: "We optimize for 'Samsung fridge repair' or 'Whirlpool washer fix' to capture specific high-value repair needs." },
            { title: "GMB Review Strategy", description: "We help you build a massive social proof engine that makes choosing your business a no-brainer." }
        ]
    };
    return <BaseTemplate {...data} />;
};

export const RestaurantSEO = () => {
    const data = {
        industry: "Restaurant",
        heroImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1600",
        heroBullets: ["Fill Your Tables through Search", "GMB Menu & Listing Excellence", "Local Foodie Discovery Power", "Direct Booking Growth Plan"],
        introTitle: "The Secret Ingredient to Your Digital Success",
        introText: "Restaurant SEO is about local discovery and mouth-watering visibility. We help restaurants, from fine dining to local bistros, show up when locals and tourists alike are searching for their next great meal.",
        stats: [
            { label: "Bookings", value: "2x", bgColor: "bg-[#0a142f]", subLabel: "Direct Organic" },
            { label: "Menu Views", value: "10k+", bgColor: "bg-[#f36b21]", subLabel: "Monthly Reach" },
            { label: "GMB Clicks", value: "500+", bgColor: "bg-[#4e6bf2]", subLabel: "Daily Interacts" },
            { label: "Brand Recall", value: "High", bgColor: "bg-[#00a3e0]", subLabel: "Foodie Choice" }
        ],
        painPointTitle: "Pain Points of Restaurants",
        painPoints: [
            { title: "Dependency on 3rd Party Apps", description: "Paying 30% to UberEats or Yelp? Direct SEO bookings mean more profit stays in your kitchen." },
            { title: "Invisible in 'Near Me' Searches", description: "If you're not in the top 3 when someone searches for your cuisine nearby, you don't exist to them." },
            { title: "Poor Visual Search Presence", description: "People eat with their eyes. If your food photos aren't optimized and visible, they won't come in." }
        ],
        benefits: [
            { title: "Cuisine-Specific Dominance", description: "We help you own the rankings for your specific food type in your city (e.g., 'best sushi in [City]')." },
            { title: "GMB Order & Booking SEO", description: "Direct integration of menus and reservation links to shorten the distance from search to seat." },
            { title: "Visual Foodie Targeting", description: "We optimize your image galleries and local posts to trigger immediate hunger and visits." }
        ]
    };
    return <BaseTemplate {...data} />;
};

export const AgricultureSEO = () => {
    const data = {
        industry: "Agriculture",
        heroImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1600",
        heroBullets: ["Growing Your Business Digitally", "Agri-Tech Search Authority", "B2B Farm Equipment SEO", "Sustainable Supply Search Hub"],
        introTitle: "Harvesting More Leads from Every Acre of Search",
        introText: "Agriculture SEO connects farm equipment manufacturers, agri-tech startups, and bulk suppliers with the modern farmer and industrial buyer. We use grounded, data-driven search strategies to grow your market share.",
        stats: [
            { label: "Sales Leads", value: "80+", bgColor: "bg-[#0a142f]", subLabel: "Monthly B2B" },
            { label: "Niche Reach", value: "Nat'l", bgColor: "bg-[#f36b21]", subLabel: "Industry Authority" },
            { label: "Growth Index", value: "110%", bgColor: "bg-[#4e6bf2]", subLabel: "Traffic Boost" },
            { label: "Lead Quality", value: "High", bgColor: "bg-[#00a3e0]", subLabel: "Strategic Scale" }
        ],
        painPointTitle: "Pain Points of Agriculture Businesses",
        painPoints: [
            { title: "Outdated Digital Presence", description: "The modern farmer searches online. If your brand looks like it's from 1995, they won't trust your tech or equipment." },
            { title: "Hyper-Niche Keyword Gap", description: "Ranking for 'farm equipment' is broad. We target the specific technical terms that real buyers use." },
            { title: "Long-Term Seasonal Cycles", description: "Agriculture moves in seasons. Your SEO needs to anticipate these cycles months in advance to win." }
        ],
        benefits: [
            { title: "B2B Technical Authority", description: "We build trust with industrial buyers through technical white papers and SEO-informed case studies." },
            { title: "Regional & Soil-Specific SEO", description: "We target regions and agricultural hubs where your specific products and services are most needed." },
            { title: "Sustainability Branding", description: "We highlight your green and sustainable practices, which are increasingly critical to modern buyers." }
        ]
    };
    return <BaseTemplate {...data} />;
};
