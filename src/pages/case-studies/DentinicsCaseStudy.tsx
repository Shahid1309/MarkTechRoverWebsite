import { Search, Globe, BarChart3 } from 'lucide-react';
import CaseStudyHero from '../../components/case-studies/CaseStudyHero';
import CaseStudyMetrics from '../../components/case-studies/CaseStudyMetrics';
import CaseStudyContent from '../../components/case-studies/CaseStudyContent';

const DentinicsCaseStudy = () => {
  const metrics = [
    {
      value: '312%',
      label: 'Organic Traffic Growth',
      description: 'Increase in organic search traffic over 12 months'
    },
    {
      value: '89%',
      label: 'Keyword Growth',
      description: 'Increase in first-page keyword rankings'
    },
    {
      value: '156%',
      label: 'Lead Generation',
      description: 'Increase in qualified patient inquiries'
    }
  ];

  const content = {
    challenge: {
      title: "The Challenge",
      content: "Dentinics, a leading dental clinic chain, struggled to establish a strong online presence in a highly competitive market. Despite offering excellent services, they faced difficulties in attracting new patients through organic search and had limited visibility for key dental treatment keywords.",
      image: "/images/case-studies/dentinics-challenge.webp"
    },
    solution: {
      title: "Our Solution",
      content: "We developed a comprehensive SEO strategy focusing on local SEO optimization, content marketing, and technical SEO improvements. The approach included creating location-specific landing pages, developing informative dental health content, and implementing advanced schema markup for dental services.",
      image: "/images/case-studies/dentinics-solution.webp"
    },
    approach: [
      {
        title: "Local SEO Optimization",
        content: "Implemented location-specific optimization for each clinic, including Google My Business optimization, local citation building, and location-specific landing pages.",
        icon: <Globe className="w-6 h-6" />
      },
      {
        title: "Content Strategy",
        content: "Developed comprehensive content covering various dental procedures, preventive care, and patient education. Created an extensive dental health blog with expert insights.",
        icon: <Search className="w-6 h-6" />
      },
      {
        title: "Technical SEO",
        content: "Implemented advanced schema markup for dental services, optimized site structure for better crawling, and improved mobile responsiveness.",
        icon: <Search className="w-6 h-6" />
      },
      {
        title: "Performance Tracking",
        content: "Set up comprehensive tracking of key performance metrics, including keyword rankings, organic traffic, and conversion rates for different locations.",
        icon: <BarChart3 className="w-6 h-6" />
      }
    ],
    results: {
      title: "The Results",
      content: "The SEO campaign delivered exceptional results. Organic traffic increased by 312% over 12 months, with a 89% increase in first-page keyword rankings for targeted dental treatment terms. Lead generation improved by 156%, resulting in a significant increase in new patient appointments. The website now ranks in the top 3 positions for over 200 high-value dental keywords across multiple locations.",
      image: "/images/case-studies/dentinics-results.webp"
    }
  };

  return (
    <div>
      <CaseStudyHero
        title="Dentinics SEO Transformation"
        subtitle="Establishing digital dominance for a multi-location dental clinic through comprehensive SEO optimization"
        category="SEO Optimization"
        services={["Local SEO", "Content Marketing", "Technical SEO"]}
        duration="12 months"
        heroImage="/images/case-studies/dentinics-hero.webp"
      />
      <CaseStudyMetrics metrics={metrics} />
      <CaseStudyContent {...content} />
    </div>
  );
};

export default DentinicsCaseStudy; 