import Head from 'next/head';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import metaMap from '../seo/meta-map.json';

interface MetaData {
  title: string;
  description: string;
}

interface SEOProps {
  /**
   * Override title (optional)
   * If not provided, will use title from meta-map.json
   */
  title?: string;
  
  /**
   * Override description (optional)
   * If not provided, will use description from meta-map.json
   */
  description?: string;
  
  /**
   * Override Open Graph image (optional)
   * Defaults to site default OG image
   */
  ogImage?: string;
  
  /**
   * Open Graph type (optional)
   * Defaults to 'website'
   */
  ogType?: 'website' | 'article' | 'profile';
  
  /**
   * Canonical URL (optional)
   * If not provided, will use current route
   */
  canonicalUrl?: string;
  
  /**
   * Additional keywords (optional)
   */
  keywords?: string;
  
  /**
   * Article published date (optional, for article type)
   */
  publishedTime?: string;
  
  /**
   * Article modified date (optional, for article type)
   */
  modifiedTime?: string;
  
  /**
   * Article author (optional, for article type)
   */
  author?: string;
  
  /**
   * Noindex flag (optional)
   */
  noindex?: boolean;
  
  /**
   * Nofollow flag (optional)
   */
  nofollow?: boolean;
}

/**
 * Default site configuration
 */
const SITE_CONFIG = {
  name: 'MarkTechRover',
  url: 'https://marktechrover.com',
  defaultOgImage: '/images/og-image.jpg',
  twitterHandle: '@marktechrover',
  locale: 'en_US',
};

/**
 * Fallback metadata for routes not found in meta-map.json
 */
const FALLBACK_META: MetaData = {
  title: 'MarkTechRover - Digital Marketing Agency India',
  description: 'MarkTechRover is a leading growth marketing agency in India. We help startups and businesses achieve digital transformation with proven results.',
};

/**
 * Normalize route path for matching
 * Handles trailing slashes, query parameters, and Next.js bracket notation
 */
function normalizeRoute(path: string): string {
  // Remove query parameters and hash
  const cleanPath = path.split('?')[0].split('#')[0];
  
  // Convert Next.js bracket notation to colon notation for matching
  // e.g., /portfolio/[id] -> /portfolio/:id
  const bracketToColon = cleanPath.replace(/\[([^\]]+)\]/g, ':$1');
  
  // Ensure leading slash
  const normalized = bracketToColon.startsWith('/') ? bracketToColon : `/${bracketToColon}`;
  
  // Remove trailing slash (except for root)
  return normalized === '/' ? '/' : normalized.replace(/\/$/, '');
}

/**
 * Match dynamic routes (e.g., /portfolio/:id, /blog/:slug)
 * Returns the pattern route if found, otherwise null
 */
function matchDynamicRoute(
  currentPath: string,
  metaMapKeys: string[]
): string | null {
  // Check for exact match first
  if (metaMapKeys.includes(currentPath)) {
    return currentPath;
  }
  
  // Try to match dynamic routes
  for (const route of metaMapKeys) {
    // Check if route contains dynamic segments
    if (route.includes(':id') || route.includes(':slug')) {
      // Convert route pattern to regex
      const pattern = route
        .replace(/:[^/]+/g, '[^/]+') // Replace :param with regex
        .replace(/\//g, '\\/'); // Escape slashes
      
      const regex = new RegExp(`^${pattern}$`);
      
      if (regex.test(currentPath)) {
        return route;
      }
    }
  }
  
  return null;
}

/**
 * Get metadata for current route
 */
function getRouteMetadata(
  pathname: string,
  metaMap: Record<string, MetaData>
): MetaData {
  const normalizedPath = normalizeRoute(pathname);
  const metaMapKeys = Object.keys(metaMap);
  
  // Try exact match first
  if (metaMap[normalizedPath]) {
    return metaMap[normalizedPath];
  }
  
  // Try dynamic route matching
  const dynamicRoute = matchDynamicRoute(normalizedPath, metaMapKeys);
  if (dynamicRoute && metaMap[dynamicRoute]) {
    return metaMap[dynamicRoute];
  }
  
  // Try parent route (e.g., if /services/seo doesn't exist, try /services)
  const pathSegments = normalizedPath.split('/').filter(Boolean);
  for (let i = pathSegments.length - 1; i > 0; i--) {
    const parentPath = '/' + pathSegments.slice(0, i).join('/');
    if (metaMap[parentPath]) {
      return metaMap[parentPath];
    }
  }
  
  // Return fallback
  return FALLBACK_META;
}

/**
 * SEO Component for Next.js
 * 
 * Automatically reads metadata from /seo/meta-map.json based on current route.
 * Supports dynamic routes and has safe fallbacks for missing routes.
 * 
 * @example
 * ```tsx
 * // Basic usage - automatically uses route-based metadata
 * <SEO />
 * 
 * // With overrides
 * <SEO 
 *   title="Custom Title"
 *   description="Custom description"
 *   ogImage="/custom-image.jpg"
 * />
 * 
 * // For blog posts
 * <SEO 
 *   ogType="article"
 *   publishedTime="2024-01-01"
 *   author="John Doe"
 * />
 * ```
 */
export default function SEO({
  title,
  description,
  ogImage,
  ogType = 'website',
  canonicalUrl,
  keywords,
  publishedTime,
  modifiedTime,
  author,
  noindex = false,
  nofollow = false,
}: SEOProps = {}) {
  const router = useRouter();
  
  // Get metadata from meta-map.json based on current route
  // Use asPath for actual URL, but fall back to pathname for file-based routes
  const routeMeta = useMemo(() => {
    // Try asPath first (actual URL like /portfolio/123)
    const asPathMeta = getRouteMetadata(router.asPath.split('?')[0], metaMap as Record<string, MetaData>);
    
    // Check if we got fallback by comparing title
    const isFallback = asPathMeta.title === FALLBACK_META.title;
    
    // If we got fallback and pathname is different, try pathname (file-based route like /portfolio/[id])
    if (isFallback && router.pathname !== router.asPath) {
      const pathnameMeta = getRouteMetadata(router.pathname, metaMap as Record<string, MetaData>);
      // Only use pathname meta if it's not also a fallback
      if (pathnameMeta.title !== FALLBACK_META.title) {
        return pathnameMeta;
      }
    }
    
    return asPathMeta;
  }, [router.asPath, router.pathname]);
  
  // Use provided values or fall back to route metadata
  const finalTitle = title || routeMeta.title;
  const finalDescription = description || routeMeta.description;
  
  // Build canonical URL
  const finalCanonicalUrl = canonicalUrl || `${SITE_CONFIG.url}${router.asPath.split('?')[0]}`;
  
  // Build full OG image URL
  const finalOgImage = ogImage 
    ? (ogImage.startsWith('http') ? ogImage : `${SITE_CONFIG.url}${ogImage}`)
    : `${SITE_CONFIG.url}${SITE_CONFIG.defaultOgImage}`;
  
  // Build robots meta
  const robotsContent = [
    noindex ? 'noindex' : 'index',
    nofollow ? 'nofollow' : 'follow',
    'max-snippet:-1',
    'max-image-preview:large',
    'max-video-preview:-1',
  ].join(', ');
  
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="title" content={finalTitle} />
      <meta name="description" content={finalDescription} />
      
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Robots */}
      <meta name="robots" content={robotsContent} />
      <meta name="googlebot" content={robotsContent} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={finalCanonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={finalCanonicalUrl} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={SITE_CONFIG.name} />
      <meta property="og:locale" content={SITE_CONFIG.locale} />
      
      {/* Article-specific Open Graph tags */}
      {ogType === 'article' && (
        <>
          {author && <meta property="article:author" content={author} />}
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
        </>
      )}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={finalCanonicalUrl} />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalOgImage} />
      <meta name="twitter:site" content={SITE_CONFIG.twitterHandle} />
      <meta name="twitter:creator" content={SITE_CONFIG.twitterHandle} />
      
      {/* Additional Meta Tags */}
      <meta name="author" content={SITE_CONFIG.name} />
      <meta name="theme-color" content="#7c3aed" />
      <meta name="msapplication-TileColor" content="#7c3aed" />
    </Head>
  );
}

/**
 * Export types for use in other components
 */
export type { SEOProps, MetaData };

