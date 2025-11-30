import React from 'react';
import BaseTemplate from './BaseTemplate';

export const PharmaSEO = () => {
    const data = {
        industry: "Pharma",
        heroImage: "/images/pharma-seo-hero.png",
        heroBullets: ["Ethical Search for Life Sciences", "Rank for High-Authority Medical Terms", "Compliant Biotech Search Strategy", "Global Patient Discovery Power"],
        introTitle: "Prescribing Success for Your Medical Brand",
        introText: "Pharma SEO is a highly regulated, high-stakes battle for authority. We help pharmaceutical companies, biotech firms, and medical suppliers rank for complex clinical and commercial keywords while staying strictly within global health compliance standards.",
        stats: [
            { label: "Authority Traffic", value: "2x", bgColor: "bg-[#0a142f]", subLabel: "Organic Increase" },
            { label: "Trust Score", value: "99%", bgColor: "bg-[#f36b21]", subLabel: "E-A-T Signal" },
            { label: "Search Rank", value: "Top 10", bgColor: "bg-[#4e6bf2]", subLabel: "Global Medical" },
            { label: "Compliance", value: "100%", bgColor: "bg-[#00a3e0]", subLabel: "Risk Free" }
        ],
        painPointTitle: "Pain Points of Pharma Companies",
        painPoints: [
            { title: "Strict Compliance Restrictions", description: "Navigating SEO while following FDA and global regulations is a major hurdle. We specialize in compliant search marketing." },
            { title: "Invisible in YMYL Space", description: "Google's 'Your Money Your Life' standards make it nearly impossible for medical brands to rank without extreme authority." },
            { title: "Complex Information Architecture", description: "Organizing deep clinical data for both searchers and search engines is a technical challenge we solve." }
        ],
        benefits: [
            { title: "Scientific Authority Model", description: "We build deep trust through medically-reviewed content that satisfies search algorithms and human experts." },
            { title: "Patient Education SEO", description: "We target top-of-funnel symptom and treatment searches to educate patients and drive brand awareness." },
            { title: "Global Marketplace Authority", description: "Strategic international SEO that puts your life-sciences brand in front of a global professional and patient audience." }
        ]
    };
    return <BaseTemplate {...data} />;
};

export const DaycareSEO = () => {
    const data = {
        industry: "Daycare",
        heroImage: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=1600",
        heroBullets: ["Reach More Families with Trust", "Local Neighborhood Presence", "Nurturing Your Digital Reach", "School & Daycare Search Power"],
        introTitle: "Building a Future for Your Childcare Business",
        introText: "Daycare SEO focuses on building local community trust. When parents look for childcare, they search for safety and proximity. We ensure your facility is the first thing they see and the brand they trust most in their local neighborhood.",
        stats: [
            { label: "Enrollment Leads", value: "80+", bgColor: "bg-[#0a142f]", subLabel: "Monthly Inquiry" },
            { label: "Local Rank", value: "#1 Spot", bgColor: "bg-[#f36b21]", subLabel: "GMB Power" },
            { label: "Trust Score", value: "High", bgColor: "bg-[#4e6bf2]", subLabel: "Review Signal" },
            { label: "Market Share", value: "15%", bgColor: "bg-[#00a3e0]", subLabel: "Local Growth" }
        ],
        painPointTitle: "Pain Points of Daycare Centers",
        painPoints: [
            { title: "Invisible in Local Maps", description: "If you're not in the top 3 spots for 'daycare near me', you are losing out on the majority of local family leads." },
            { title: "High Lead-to-Tour Ratio", description: "Getting parents to actually visit your facility is the hardest part. Our SEO builds the trust necessary to book tours." },
            { title: "Weak Online Reputation", description: "A lack of recent, positive reviews makes parents feel unsafe choosing your center over a more visible competitor." }
        ],
        benefits: [
            { title: "Community-Focused SEO", description: "We target the specific neighborhoods and schools within your reach to ensure you're the local favorite." },
            { title: "Safety & Trust Content", description: "We highlight your certifications, safety standards, and reviews to reassure prospective parents and search engines." },
            { title: "Integrated Tour Bookings", description: "Optimizing your site for immediate lead capture, making it easy for busy parents to schedule a visit." }
        ]
    };
    return <BaseTemplate {...data} />;
};

export const ContractorsSEO = () => {
    const data = {
        industry: "Contractors",
        heroImage: "/images/contractors-seo-hero.png",
        heroBullets: ["Get More Hard-Hitting Jobs", "Local Trade Authority Strategy", "Win More Commercial Tenders", "Project Portfolio SEO Power"],
        introTitle: "Building a Solid Online Foundation for Your Trade",
        introText: "Contractors SEO targets the high-value projects that drive your business. Whether you're in roofing, electrical, or general contracting, we help you dominate local search results and connect with both homeowners and commercial developers.",
        stats: [
            { label: "Project Quotes", value: "150+", bgColor: "bg-[#0a142f]", subLabel: "Monthly Record" },
            { label: "Local Rank", value: "Top 3", bgColor: "bg-[#f36b21]", subLabel: "Trade Map" },
            { label: "Lead Growth", value: "2x", bgColor: "bg-[#4e6bf2]", subLabel: "Yearly Rise" },
            { label: "ROI Ratio", value: "9x", bgColor: "bg-[#00a3e0]", subLabel: "Lead Quality" }
        ],
        painPointTitle: "Pain Points of Contractors",
        painPoints: [
            { title: "Low Visibility for Core Trades", description: "You're getting calls for the wrong jobs. We target the specific high-value projects you want to win." },
            { title: "Inconsistent Lead Quality", description: "Most contractors waste time on leads that aren't serious. Our SEO targets the 'ready-to-buy' project manager." },
            { title: "Poor Project Showcase", description: "Your best work is hidden on your phone. We put your portfolio on the front page of Google to build trust." }
        ],
        benefits: [
            { title: "Hyper-Local Reach", description: "We ensure you are the most visible trade professional in your specific city and surrounding suburbs." },
            { title: "Trade Expertise Targeting", description: "Whether it's 'industrial electrical' or 'custom deck building', we rank you for your specific specializations." },
            { title: "Trust Signal Building", description: "We manage local citations and reviews to ensure your business looks as professional as the work you do." }
        ]
    };
    return <BaseTemplate {...data} />;
};

export const FireProtectionSEO = () => {
    const data = {
        industry: "Fire Protection",
        heroImage: "/images/fire-protection-seo-hero.png",
        heroBullets: ["Safety Search Dominance", "Win More Corporate Safety Leads", "Authority Branding for Experts", "Local Fire Safety Ranking Hub"],
        introTitle: "Securing the Future of Fire Safety in Search",
        introText: "Fire Protection SEO is about reliability and compliance in the industrial space. We help fire safety companies rank for critical maintenance and installation keywords, ensuring you're seen by facility managers and developers.",
        stats: [
            { label: "Corporate Leads", value: "50+", bgColor: "bg-[#0a142f]", subLabel: "Monthly Inquiries" },
            { label: "Search Rank", value: "#1 Spot", bgColor: "bg-[#f36b21]", subLabel: "Safety Category" },
            { label: "Authority Growth", value: "180%", bgColor: "bg-[#4e6bf2]", subLabel: "B2B Reach" },
            { label: "Lead Quality", value: "High", bgColor: "bg-[#00a3e0]", subLabel: "Market Share" }
        ],
        painPointTitle: "Pain Points of Fire Protection Firms",
        painPoints: [
            { title: "Invisible to Facility Managers", description: "When a building needs a fire audit, they search locally. If you're not in the top results, you don't exist to them." },
            { title: "Technical Compliance Chaos", description: "Communicating complex fire codes through search is hard. We make your expertise easy to find and understand." },
            { title: "Low-Volume Niche Keywords", description: "Standard SEO fails in low-volume niches. We target the specific high-intent terms facility managers use." }
        ],
        benefits: [
            { title: "B2B Authority SEO", description: "We position your firm as the leading regional expert on fire safety codes and installation through clinical content." },
            { title: "Commercial Lead Focus", description: "Targeting developers and building owners searching for new installations and long-term maintenance contracts." },
            { title: "Local Safety Dominance", description: "We ensure your business is the first choice for every fire protection search in your service territory." }
        ]
    };
    return <BaseTemplate {...data} />;
};

export const FinancialSEO = () => {
    const data = {
        industry: "Financial",
        heroImage: "/images/financial-seo-hero.png",
        heroBullets: ["Investing in Your Search Authority", "Rank for High-Trust Finance Terms", "Bypass Complex Market Satiety", "Ethical Client Acquisition Plan"],
        introTitle: "Securing Your Firm's Digital Asset Growth",
        introText: "Financial SEO is built on the foundation of trust and technical authority. In a world of YMYL (Your Money Your Life) standards, we help advisors, banks, and fintech firms build lasting credibility and rank for competitive wealth-management keywords.",
        stats: [
            { label: "Asset Growth", value: "3x", bgColor: "bg-[#0a142f]", subLabel: "Organic Source" },
            { label: "Trust Flow", value: "High", bgColor: "bg-[#f36b21]", subLabel: "E-A-T Signal" },
            { label: "Search Rank", value: "Top 5", bgColor: "bg-[#4e6bf2]", subLabel: "Wealth Target" },
            { label: "Conversion", value: "150%", bgColor: "bg-[#00a3e0]", subLabel: "Lead Impact" }
        ],
        painPointTitle: "Pain Points of Financial Firms",
        painPoints: [
            { title: "Extreme Regulatory Hurdles", description: "Marketing financial services requires strict adherence to compliance. We build SEO strategies that are both effective and safe." },
            { title: "Invisible to High-Net-Worth Leads", description: "Affluent clients don't just search; they search with intent for qualified advisors. We ensure you're in their path." },
            { title: "Dominance of Large Institutions", description: "How does a boutique firm outrank a massive bank? Through hyper-specialized niche authority and local SEO." }
        ],
        benefits: [
            { title: "Expertise-Driven SEO", description: "We build deep clinical authority through white papers and financial guides that satisfy both Google and your clients." },
            { title: "Local Wealth Presence", description: "We target the specific high-net-worth zip codes and neighborhoods where your ideal clients live and work." },
            { title: "Transparency & Trust Signals", description: "Optimizing your site for clear, ethical communication that converts the modern searcher into a long-term client." }
        ]
    };
    return <BaseTemplate {...data} />;
};
