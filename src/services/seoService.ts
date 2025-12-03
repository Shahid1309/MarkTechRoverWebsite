// SEO Service for managing meta tags, structured data, and Core Web Vitals

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  image: string;
  url: string;
  type: 'website' | 'article' | 'profile';
  publishedAt?: string;
  modifiedAt?: string;
  author?: string;
  section?: string;
  tags?: string[];
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

export interface CoreWebVitals {
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  fcp: number;
}

class SEOService {
  private static instance: SEOService;
  private analyticsQueue: CoreWebVitals[] = [];

  private constructor() {
    this.initializeCoreWebVitals();
  }

  static getInstance(): SEOService {
    if (!SEOService.instance) {
      SEOService.instance = new SEOService();
    }
    return SEOService.instance;
  }

  // Initialize Core Web Vitals tracking
  private initializeCoreWebVitals(): void {
    if (typeof window === 'undefined') return;

    // Measure Largest Contentful Paint (LCP)
    this.measureLCP();
    
    // Measure First Input Delay (FID)
    this.measureFID();
    
    // Measure Cumulative Layout Shift (CLS)
    this.measureCLS();
    
    // Measure Time to First Byte (TTFB)
    this.measureTTFB();
    
    // Measure First Contentful Paint (FCP)
    this.measureFCP();
  }

  private measureLCP(): void {
    if (!('PerformanceObserver' in window)) return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      
      this.recordMetric('lcp', lastEntry.startTime);
    });
    
    observer.observe({ entryTypes: ['largest-contentful-paint'] });
  }

  private measureFID(): void {
    if (!('PerformanceObserver' in window)) return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        this.recordMetric('fid', entry.processingStart - entry.startTime);
      });
    });
    
    observer.observe({ entryTypes: ['first-input'] });
  }

  private measureCLS(): void {
    if (!('PerformanceObserver' in window)) return;

    let clsValue = 0;
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      
      this.recordMetric('cls', clsValue);
    });
    
    observer.observe({ entryTypes: ['layout-shift'] });
  }

  private measureTTFB(): void {
    if (!('PerformanceObserver' in window)) return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (entry.entryType === 'navigation') {
          this.recordMetric('ttfb', entry.responseStart - entry.requestStart);
        }
      });
    });
    
    observer.observe({ entryTypes: ['navigation'] });
  }

  private measureFCP(): void {
    if (!('PerformanceObserver' in window)) return;

    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
            this.recordMetric('fcp', entry.startTime);
          }
        });
      });
      
      observer.observe({ entryTypes: ['paint'] });
    } catch (error) {
      // PerformanceObserver may not support paint entries in all browsers
      console.warn('FCP measurement not supported:', error);
    }
  }

  private recordMetric(metric: keyof CoreWebVitals, value: number): void {
    const vitals: Partial<CoreWebVitals> = { [metric]: value };
    
    // Send to Google Analytics
    if (window.gtag) {
      window.gtag('event', metric.toUpperCase(), {
        value: Math.round(value),
        event_category: 'Web Vitals',
        event_label: metric.toUpperCase(),
        non_interaction: true
      });
    }

    // Store locally for analysis
    this.analyticsQueue.push(vitals as CoreWebVitals);
    
    // Log for development
    if (process.env.NODE_ENV === 'development') {
      console.log(`${metric.toUpperCase()}:`, Math.round(value));
    }
  }

  // Generate structured data for different content types
  generateStructuredData(config: SEOConfig): object {
    const baseUrl = 'https://marktechrover.com';
    
    switch (config.type) {
      case 'article':
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": config.title,
          "description": config.description,
          "image": config.image.startsWith('http') ? config.image : `${baseUrl}${config.image}`,
          "author": {
            "@type": "Person",
            "name": config.author || "Ritik Kumar Poddar"
          },
          "publisher": {
            "@type": "Organization",
            "name": "MarkTechRover",
            "logo": {
              "@type": "ImageObject",
              "url": `${baseUrl}/favicon.svg`
            }
          },
          "datePublished": config.publishedAt,
          "dateModified": config.modifiedAt || config.publishedAt,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${baseUrl}${config.url}`
          },
          "keywords": config.keywords.join(', '),
          "articleSection": config.section,
          "wordCount": config.description.split(' ').length
        };

      case 'website':
      default:
        return {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": config.title,
          "description": config.description,
          "url": `${baseUrl}${config.url}`,
          "mainEntity": {
            "@type": "Organization",
            "name": "MarkTechRover",
            "url": baseUrl,
            "logo": `${baseUrl}/favicon.svg`,
            "description": "Leading digital marketing and SEO agency specializing in lead generation and web development",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "email": "contact@marktechrover.com"
            },
            "sameAs": [
              "https://www.linkedin.com/company/marktechrover",
              "https://twitter.com/marktechrover",
              "https://www.facebook.com/marktechrover"
            ]
          }
        };
    }
  }

  // Generate breadcrumb structured data
  generateBreadcrumbs(paths: Array<{ name: string; url: string }>): object {
    const baseUrl = 'https://marktechrover.com';
    
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": paths.map((path, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": path.name,
        "item": `${baseUrl}${path.url}`
      }))
    };
  }

  // Generate FAQ structured data
  generateFAQ(faqs: Array<{ question: string; answer: string }>): object {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
  }

  // Generate Local Business structured data
  generateLocalBusiness(): object {
    return {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "MarkTechRover",
      "description": "Leading digital marketing and SEO agency specializing in lead generation and web development",
      "url": "https://marktechrover.com",
      "telephone": "+91-XXXXXXXXXX",
      "email": "contact@marktechrover.com",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "YOUR_LATITUDE",
        "longitude": "YOUR_LONGITUDE"
      },
      "openingHours": "Mo-Fr 09:00-18:00",
      "priceRange": "$$",
      "serviceArea": {
        "@type": "Country",
        "name": "India"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Digital Marketing Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "SEO Services"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Web Development"
            }
          }
        ]
      }
    };
  }

  // Get Core Web Vitals data
  getCoreWebVitals(): CoreWebVitals[] {
    return this.analyticsQueue;
  }

  // Clear analytics queue
  clearAnalytics(): void {
    this.analyticsQueue = [];
  }

  // Preload critical resources
  preloadResources(resources: Array<{ href: string; as: string; type?: string }>): void {
    if (typeof window === 'undefined') return;

    resources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      if (resource.type) {
        link.type = resource.type;
      }
      document.head.appendChild(link);
    });
  }

  // Prefetch routes for faster navigation
  prefetchRoutes(routes: string[]): void {
    if (typeof window === 'undefined') return;

    routes.forEach(route => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = route;
      document.head.appendChild(link);
    });
  }
}

export default SEOService.getInstance(); 