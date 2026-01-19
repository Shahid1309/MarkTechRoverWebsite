import { Search, Target } from 'lucide-react';
import CaseStudyHero from '../../components/case-studies/CaseStudyHero';
import CaseStudyMetrics from '../../components/case-studies/CaseStudyMetrics';
import CaseStudyContent from '../../components/case-studies/CaseStudyContent';

const IDesignCaseStudy = () => {
  const metrics = [
    {
      value: '187%',
      label: 'Organic Traffic Growth',
      description: 'Increase in organic search traffic over 6 months'
    },
    {
      value: '4.2s',
      label: 'Page Load Speed',
      description: 'Reduced from 8.7s after optimization'
    },
    {
      value: '82%',
      label: 'User Engagement',
      description: 'Increase in time spent on platform'
    }
  ];

  const content = {
    challenge: {
      title: 'The Challenge',
      content: 'iDesign.market faced significant challenges with their digital presence. Their website suffered from slow load times, poor SEO performance, and a complex user interface that resulted in high bounce rates. Additionally, their organic search visibility was limited, affecting their ability to reach potential customers.',
      image: '/images/case-studies/idesign-challenge.webp'
    },
    solution: {
      title: 'Our Solution',
      content: 'We implemented a comprehensive development and SEO strategy. This included a complete platform rebuild using Next.js for better performance, a redesigned user interface focusing on user experience, and an extensive SEO optimization plan targeting relevant keywords in the interior design market.',
      image: '/images/case-studies/idesign-solution.webp'
    },
    approach: [
      {
        title: 'Technical SEO Implementation',
        content: 'Conducted thorough technical SEO audit and implemented fixes including XML sitemaps, robots.txt optimization, and structured data markup. Improved site architecture and internal linking structure.',
        icon: <Search className="w-6 h-6" />
      },
      {
        title: 'Performance Optimization',
        content: 'Implemented lazy loading, image optimization, and caching strategies. Utilized Next.js features for server-side rendering and static generation where appropriate.',
        icon: <Search className="w-6 h-6" />
      },
      {
        title: 'Content Strategy',
        content: 'Developed a comprehensive content strategy targeting long-tail keywords. Created optimized landing pages for different design services and locations.',
        icon: <Target className="w-6 h-6" />
      },
      {
        title: 'User Experience Enhancement',
        content: 'Redesigned the platform with a focus on intuitive navigation and clear call-to-actions. Implemented advanced search and filtering capabilities.',
        icon: <Target className="w-6 h-6" />
      }
    ],
    results: {
      title: 'The Results',
      content: 'The improvements led to significant gains in both technical performance and business metrics. The website now loads in under 4.2 seconds, achieving a 95+ score on Google PageSpeed Insights. Organic traffic increased by 187% within 6 months, leading to a 43% increase in lead generation. The bounce rate decreased from 65% to 32%, and the average session duration increased by 82%.',
      image: '/images/case-studies/idesign-results.webp'
    }
  };

  return (
    <div>
      <CaseStudyHero
        title="iDesign Website Traffic and Conversion Results"
        subtitle="Revolutionizing the digital presence of India's leading interior design marketplace through development and SEO optimization"
        category="Development & SEO"
        services={['Web Development', 'SEO Optimization', 'UI/UX Design']}
        duration="6 months"
        heroImage="/images/case-studies/idesign-hero.webp"
      />
      <CaseStudyMetrics metrics={metrics} />
      <CaseStudyContent {...content} />
    </div>
  );
};

export default IDesignCaseStudy; 