import React from 'react';
import BaseTemplate from './BaseTemplate';

const DentalSEO = () => {
    const data = {
        industry: "Dental",
        heroImage: "/images/dental-seo-hero.png",
        heroBullets: [
            "Fill Your Schedule with New Patients",
            "Dominate Local Dental Searches",
            "Build Trust with Patient Reviews",
            "Expert SEO for Dental Practices"
        ],
        introTitle: "Brighten Your Practice's Online Presence",
        introText: "Dental SEO is the process of optimizing your dental practice's website to rank higher in search engine results for keywords related to oral health services. In an era where most patients look for a local dentist on Google, having a high-ranking website is essential for attracting new patient leads and maintaining a competitive edge in your local area.",
        stats: [
            { label: "Satisfied Patients", value: "10k+", bgColor: "bg-[#0a142f]", subLabel: "Trust in Health" },
            { label: "Practice Growth", value: "180%", bgColor: "bg-[#f36b21]", subLabel: "Revenue Uplift" },
            { label: "Search Ranking", value: "#1", bgColor: "bg-[#4e6bf2]", subLabel: "Local Category" },
            { label: "Lead Quality", value: "98%", bgColor: "bg-[#00a3e0]", subLabel: "High Intent" }
        ],
        painPointTitle: "Pain Points of Dental Practices",
        painPoints: [
            {
                title: "Oversaturated Local Market",
                description: "With a dentist on every corner, standing out in local search is incredibly difficult without a specialized dental SEO strategy. Most practices struggle to break past page 2 of Google."
            },
            {
                title: "Lack of Patient Trust Signals",
                description: "Prospective patients often choose competitors because they have better visibility and more consistent Google reviews. A weak online reputation leads to lost consultations."
            },
            {
                title: "Ineffective High-Value Lead Gen",
                description: "Many practices attract low-value leads for cleanings but fail to rank for high-revenue services like implants, veneers, or invisalign."
            },
            {
                title: "Outdated Website UX",
                description: "A slow, non-responsive website that doesn't allow for easy appointment booking or mobile navigation will cause potential patients to bounce to a competitor."
            },
            {
                title: "Poor Local Map Pack Presence",
                description: "If your practice doesn't show up in the top 3 spots of the local map pack, you are losing over 70% of potential local patient clicks."
            },
            {
                title: "Compliance & Educational Content",
                description: "Providing accurate, HIPAA-compliant, and informative content that answers patient questions is a major hurdle for busy dental offices."
            }
        ],
        benefits: [
            {
                title: "Local Patient Acquisition",
                description: "We optimize your GMB profile and local keywords to ensure your practice is the first one people see when searching for \"dentist near me\" or \"emergency dental care\"."
            },
            {
                title: "Authority in Specialty Services",
                description: "Our SEO targets high-value procedures like cosmetic dentistry and orthodontics, bringing in more revenue-per-patient for your practice."
            },
            {
                title: "Improved Patient Experience",
                description: "By optimizing site speed and mobile accessibility, we make it easier for patients to find information and book appointments directly from their phones."
            }
        ]
    };

    return <BaseTemplate {...data} />;
};

export default DentalSEO;
