// Add type definition for gtag
declare global {
  interface Window {
    gtag: (
      command: string,
      eventName: string,
      eventParams: {
        event_category: string;
        event_label: string;
        value: number;
        non_interaction: boolean;
      }
    ) => void;
  }
}

// Performance optimization utilities for Core Web Vitals

// Intersection Observer for lazy loading
export const createIntersectionObserver = (
  callback: IntersectionObserverCallback,
  options: IntersectionObserverInit = {}
) => {
  return new IntersectionObserver(callback, {
    rootMargin: '50px',
    threshold: 0.1,
    ...options
  });
};

// Debounce function for performance
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle function for performance
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Preload critical resources
export const preloadResource = (href: string, as: string) => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  document.head.appendChild(link);
};

// Prefetch non-critical resources
export const prefetchResource = (href: string) => {
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = href;
  document.head.appendChild(link);
};

// Optimize images with lazy loading
export const optimizeImage = (src: string, alt: string, className?: string) => {
  const img = new Image();
  img.loading = 'lazy';
  img.decoding = 'async';
  img.src = src;
  img.alt = alt;
  if (className) img.className = className;
  return img;
};

// Performance monitoring
export const measurePerformance = (name: string, fn: () => void) => {
  const start = performance.now();
  fn();
  const end = performance.now();
  console.log(`${name} took ${end - start}ms`);
};

// Core Web Vitals monitoring with error handling
export const monitorCoreWebVitals = () => {
  try {
    // LCP (Largest Contentful Paint)
    if ('PerformanceObserver' in window) {
      try {
        new PerformanceObserver((entryList) => {
          for (const entry of entryList.getEntries()) {
            console.log('LCP:', entry.startTime);
          }
        }).observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (error) {
        console.log('LCP monitoring not supported');
      }

      // FID (First Input Delay)
      try {
        new PerformanceObserver((entryList) => {
          for (const entry of entryList.getEntries()) {
            const fidEntry = entry as PerformanceEventTiming;
            console.log('FID:', fidEntry.processingStart - fidEntry.startTime);
          }
        }).observe({ entryTypes: ['first-input'] });
      } catch (error) {
        console.log('FID monitoring not supported');
      }

      // CLS (Cumulative Layout Shift) - only if supported
      try {
        new PerformanceObserver((entryList) => {
          let cls = 0;
          for (const entry of entryList.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              cls += (entry as any).value;
            }
          }
          console.log('CLS:', cls);
        }).observe({ entryTypes: ['layout-shift'] });
      } catch (error) {
        console.log('CLS monitoring not supported');
      }
    }
  } catch (error) {
    console.log('Performance monitoring not available');
  }
};

// Optimize animations for performance
export const optimizeAnimations = () => {
  // Use transform and opacity for better performance
  const style = document.createElement('style');
  style.textContent = `
    .optimized-animation {
      will-change: transform, opacity;
      transform: translateZ(0);
    }
  `;
  document.head.appendChild(style);
};

// Service Worker registration for caching
export const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      console.log('SW registered: ', registration);
    } catch (registrationError) {
      console.log('SW registration failed: ', registrationError);
    }
  }
}; 