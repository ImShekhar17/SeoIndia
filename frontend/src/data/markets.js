export const marketsData = {
    'automotive-seo': {
        title: 'Automotive SEO Services',
        headline: 'Drive More Sales with High-Performance Automotive SEO',
        description: 'Dominate the local automotive market and get your dealership in front of ready-to-buy customers.',
        stats: [
            { label: 'Increase in Leads', value: '150%' },
            { label: 'Search Visibility', value: '200%' },
            { label: 'Cost Per Lead', value: '-40%' }
        ],
        benefits: [
            'Localized inventory visibility',
            'Service center appointment optimization',
            'Competitive keyword targeting',
            'GMB management for dealerships'
        ]
    },
    'construction-seo': {
        title: 'Construction SEO Services',
        headline: 'Build a Strong Online Presence for Your Construction Business',
        description: 'From local contractors to large firms, we help you secure high-value projects through search.',
        stats: [
            { label: 'Project Inquiries', value: '85%' },
            { label: 'Local Rankings', value: '#1-3' },
            { label: 'Traffic Growth', value: '120%' }
        ],
        benefits: [
            'Project portfolio optimization',
            'Local service area targeting',
            'Trust-building content strategy',
            'Lead generation tracking'
        ]
    },
    // Add other 38 niches here...
    // Fallback for demonstration
    'default': {
        title: 'Industry Specialist SEO',
        headline: 'Tailored SEO Strategies for Your Unique Market',
        description: 'We specialize in deep-niche SEO that connects businesses with their specific target audience.',
        stats: [
            { label: 'Avg ROI', value: '300%' },
            { label: 'Traffic Increase', value: '110%' },
            { label: 'Conversion Rate', value: '+45%' }
        ],
        benefits: [
            'Data-driven niche research',
            'Competitor gap analysis',
            'High-conversion landing pages',
            'Ongoing performance reporting'
        ]
    }
};

export const getMarketData = (slug) => {
    return marketsData[slug] || {
        ...marketsData['default'],
        title: slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
    };
};
