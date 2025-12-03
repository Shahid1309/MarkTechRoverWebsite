import React from 'react';
import SEO from './Meta';
import PerformanceOptimizer from './PerformanceOptimizer';
import seoService from '../../services/seoService';
import { SEOConfig } from '../../services/seoService';

interface PageSEOProps {
  config: SEOConfig;
  children: React.ReactNode;
  preloadImages?: string[];
  preloadRoutes?: string[];
  enablePerformanceOptimization?: boolean;
  breadcrumbs?: Array<{ name: string; url: string }>;
  faqs?: Array<{ question: string; answer: string }>;
}

const PageSEO: React.FC<PageSEOProps> = ({
  config,
  children,
  preloadImages = [],
  preloadRoutes = [],
  enablePerformanceOptimization = true,
  breadcrumbs,
  faqs
}) => {
  // Generate structured data
  const structuredData = seoService.generateStructuredData(config);
  
  // Generate additional structured data
  const additionalStructuredData = [];
  
  if (breadcrumbs) {
    additionalStructuredData.push(seoService.generateBreadcrumbs(breadcrumbs));
  }
  
  if (faqs) {
    additionalStructuredData.push(seoService.generateFAQ(faqs));
  }

  // Preload critical resources
  React.useEffect(() => {
    if (preloadImages.length > 0) {
      seoService.preloadResources(
        preloadImages.map(image => ({
          href: image,
          as: 'image',
          type: 'image/webp'
        }))
      );
    }

    if (preloadRoutes.length > 0) {
      seoService.prefetchRoutes(preloadRoutes);
    }
  }, [preloadImages, preloadRoutes]);

  const content = (
    <>
      <SEO
        title={config.title}
        description={config.description}
        keywords={config.keywords}
        image={config.image}
        url={config.url}
        type={config.type}
        publishedAt={config.publishedAt}
        modifiedAt={config.modifiedAt}
        author={config.author}
        section={config.section}
        tags={config.tags}
        structuredData={structuredData}
        canonical={config.canonical}
        noindex={config.noindex}
        nofollow={config.nofollow}
      />
      
      {/* Additional structured data */}
      {additionalStructuredData.map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
      
      {children}
    </>
  );

  if (enablePerformanceOptimization) {
    return (
      <PerformanceOptimizer
        preloadImages={preloadImages}
        preloadRoutes={preloadRoutes}
        enableIntersectionObserver={true}
        enableResourceHints={true}
      >
        {content}
      </PerformanceOptimizer>
    );
  }

  return content;
};

export default PageSEO; 