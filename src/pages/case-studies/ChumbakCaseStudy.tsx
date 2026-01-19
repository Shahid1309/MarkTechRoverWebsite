import { Rocket, Target, Share2, Palette } from 'lucide-react';
import CaseStudyHero from '../../components/case-studies/CaseStudyHero';
import CaseStudyMetrics from '../../components/case-studies/CaseStudyMetrics';
import CaseStudyContent from '../../components/case-studies/CaseStudyContent';

const ChumbakCaseStudy = () => {
  const metrics = [
    {
      value: '245%',
      label: 'Revenue Growth',
      description: 'Increase in online sales after platform launch'
    },
    {
      value: '67%',
      label: 'Mobile Conversion',
      description: 'Improvement in mobile conversion rate'
    },
    {
      value: '2.1M',
      label: 'Monthly Visitors',
      description: 'Average monthly active users'
    }
  ];

  const content = {
    challenge: {
      title: 'The Challenge',
      content: "Chumbak needed to transform their e-commerce platform to handle their rapid growth and expanding product line. Their existing platform struggled with performance issues during peak sales, had limited mobile optimization, and lacked sophisticated marketing integration capabilities.",
      image: '/images/case-studies/chumbak-challenge.webp'
    },
    solution: {
      title: 'Our Solution',
      content: "We developed a custom e-commerce solution using Next.js and Shopify, focusing on performance, scalability, and marketing integration. The platform was built with a headless architecture, allowing for maximum flexibility and optimal performance across all devices.",
      image: '/images/case-studies/chumbak-solution.webp'
    },
    approach: [
      {
        title: 'Platform Development',
        content: 'Built a custom headless e-commerce platform integrating Next.js for the frontend and Shopify for backend operations. Implemented advanced caching and CDN integration for optimal performance.',
        icon: <Rocket className="w-6 h-6" />
      },
      {
        title: 'Mobile Optimization',
        content: 'Developed a mobile-first interface with progressive enhancement, ensuring a seamless shopping experience across all devices. Implemented AMP pages for key landing pages.',
        icon: <Share2 className="w-6 h-6" />
      },
      {
        title: 'Marketing Integration',
        content: 'Integrated advanced marketing tools including personalization engines, email marketing automation, and social media shopping features. Implemented sophisticated product recommendation systems.',
        icon: <Target className="w-6 h-6" />
      },
      {
        title: 'Design System',
        content: "Created a comprehensive design system reflecting Chumbak's vibrant brand identity while ensuring consistent user experience across the platform.",
        icon: <Palette className="w-6 h-6" />
      }
    ],
    results: {
      title: 'The Results',
      content: "The new platform has transformed Chumbak's online presence and sales capabilities. Online revenue increased by 245% within the first year, with mobile conversion rates improving by 67%. The platform now handles over 2.1 million monthly active users with zero downtime during peak sales events. The average order value increased by 32%, and the cart abandonment rate decreased from 76% to 45%.",
      image: '/images/case-studies/chumbak-results.webp'
    }
  };

  return (
    <div>
      <CaseStudyHero
        title="Chumbak Ecommerce Growth Results"
        subtitle="Building a scalable and high-performance e-commerce platform for India's most vibrant lifestyle brand"
        category="E-commerce Development"
        services={["Platform Development", "UI/UX Design", "Marketing Integration"]}
        duration="8 months"
        heroImage="/images/case-studies/chumbak-hero.webp"
      />
      <CaseStudyMetrics metrics={metrics} />
      <CaseStudyContent {...content} />
    </div>
  );
};

export default ChumbakCaseStudy; 