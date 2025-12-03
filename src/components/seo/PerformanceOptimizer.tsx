import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
  preloadImages?: string[];
  preloadFonts?: string[];
  preloadRoutes?: string[];
  enableIntersectionObserver?: boolean;
  enableResourceHints?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  children,
  preloadImages = [],
  preloadFonts = [],
  preloadRoutes = [],
  enableIntersectionObserver = true,
  enableResourceHints = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Preload critical resources
    if (enableResourceHints) {
      preloadImages.forEach(image => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = image;
        document.head.appendChild(link);
      });

      preloadFonts.forEach(font => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'font';
        link.href = font;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });
    }

    // Intersection Observer for lazy loading
    if (enableIntersectionObserver && elementRef.current) {
      observerRef.current = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observerRef.current?.disconnect();
          }
        },
        {
          rootMargin: '50px 0px',
          threshold: 0.1
        }
      );

      observerRef.current.observe(elementRef.current);
    } else {
      setIsVisible(true);
    }

    // Mark as loaded after initial render
    const timer = setTimeout(() => setIsLoaded(true), 100);

    return () => {
      observerRef.current?.disconnect();
      clearTimeout(timer);
    };
  }, [enableIntersectionObserver, enableResourceHints, preloadImages, preloadFonts]);

  return (
    <>
      <Helmet>
        {/* Critical CSS inline */}
        <style>
          {`
            /* Critical CSS for above-the-fold content */
            .critical-hidden {
              opacity: 0;
              transform: translateY(20px);
              transition: opacity 0.3s ease, transform 0.3s ease;
            }
            
            .critical-visible {
              opacity: 1;
              transform: translateY(0);
            }
            
            /* Optimize for Core Web Vitals */
            .lazy-load {
              opacity: 0;
              transform: translateY(20px);
              transition: opacity 0.6s ease, transform 0.6s ease;
            }
            
            .lazy-load.loaded {
              opacity: 1;
              transform: translateY(0);
            }
            
            /* Reduce layout shift */
            img, video, iframe {
              max-width: 100%;
              height: auto;
            }
            
            /* Optimize fonts - Inter font loaded via Google Fonts if needed */
            
            /* Reduce paint complexity */
            .optimize-paint {
              will-change: auto;
              contain: layout style paint;
            }
          `}
        </style>

        {/* Resource hints for better performance */}
        {enableResourceHints && (
          <>
            {/* DNS prefetch for external domains */}
            <link rel="dns-prefetch" href="//www.google-analytics.com" />
            <link rel="dns-prefetch" href="//fonts.googleapis.com" />
            <link rel="dns-prefetch" href="//fonts.gstatic.com" />
            
            {/* Preconnect to critical origins */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link rel="preconnect" href="https://www.google-analytics.com" />
            
            {/* Preload critical fonts - removed inter-var.woff2 as file doesn't exist */}
            
            {/* Preload critical images */}
            {preloadImages.slice(0, 3).map((image, index) => (
              <link 
                key={index}
                rel="preload" 
                href={image} 
                as="image" 
                type="image/webp"
              />
            ))}
            
            {/* Prefetch routes for faster navigation */}
            {preloadRoutes.map((route, index) => (
              <link 
                key={index}
                rel="prefetch" 
                href={route}
              />
            ))}
          </>
        )}
      </Helmet>

      <div 
        ref={elementRef}
        className={`performance-optimizer ${isVisible ? 'critical-visible' : 'critical-hidden'} ${isLoaded ? 'loaded' : ''}`}
      >
        {children}
      </div>
    </>
  );
};

// Hook for lazy loading images
export const useLazyImage = (src: string, alt: string) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '50px 0px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView && imgRef.current) {
      const img = imgRef.current;
      img.onload = () => setIsLoaded(true);
      img.src = src;
    }
  }, [isInView, src]);

  return { imgRef, isLoaded, isInView };
};

// Hook for measuring Core Web Vitals
export const useCoreWebVitals = () => {
  useEffect(() => {
    // Measure Largest Contentful Paint (LCP)
    const measureLCP = () => {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.startTime);
        
        // Send to analytics
        if (window.gtag) {
          window.gtag('event', 'LCP', {
            value: Math.round(lastEntry.startTime),
            event_category: 'Web Vitals',
            event_label: 'LCP',
            non_interaction: true
          });
        }
      });
      
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    };

    // Measure First Input Delay (FID)
    const measureFID = () => {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          console.log('Fid:', entry.processingStart - entry.startTime);
          
          if (window.gtag) {
            window.gtag('event', 'FID', {
              value: Math.round(entry.processingStart - entry.startTime),
              event_category: 'Web Vitals',
              event_label: 'FID',
              non_interaction: true
            });
          }
        });
      });
      
      observer.observe({ entryTypes: ['first-input'] });
    };

    // Measure Cumulative Layout Shift (CLS)
    const measureCLS = () => {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        
        console.log('CLS:', clsValue);
        
        if (window.gtag) {
          window.gtag('event', 'CLS', {
            value: Math.round(clsValue * 1000) / 1000,
            event_category: 'Web Vitals',
            event_label: 'CLS',
            non_interaction: true
          });
        }
      });
      
      observer.observe({ entryTypes: ['layout-shift'] });
    };

    // Initialize measurements
    if ('PerformanceObserver' in window) {
      measureLCP();
      measureFID();
      measureCLS();
    }
  }, []);
};

export default PerformanceOptimizer; 