import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  publishedAt?: string;
  modifiedAt?: string;
  author?: string;
  section?: string;
  tags?: string[];
  structuredData?: object;
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = [],
  image = '/images/og-default.webp',
  url,
  type = 'website',
  publishedAt,
  modifiedAt,
  author = 'Ritik Kumar Poddar',
  section,
  tags = [],
  structuredData,
  canonical,
  noindex = false,
  nofollow = false
}) => {
  const fullUrl = url ? `https://marktechrover.com${url}` : 'https://marktechrover.com';
  const fullImageUrl = image.startsWith('http') ? image : `https://marktechrover.com${image}`;
  
  // Default structured data for organization
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MarkTechRover",
    "url": "https://marktechrover.com",
    "logo": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iIzM3NDE1MSIvPgo8dGV4dCB4PSIyMCIgeT0iMjQiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkljb248L3RleHQ+Cjwvc3ZnPgo=",
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
  };

  // Article structured data
  const articleStructuredData = type === 'article' ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": fullImageUrl,
    "author": {
      "@type": "Person",
      "name": author
    },
    "publisher": {
      "@type": "Organization",
      "name": "MarkTechRover",
      "logo": {
        "@type": "ImageObject",
        "url": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iIzM3NDE1MSIvPgo8dGV4dCB4PSIyMCIgeT0iMjQiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkljb248L3RleHQ+Cjwvc3ZnPgo="
      }
    },
    "datePublished": publishedAt,
    "dateModified": modifiedAt || publishedAt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": fullUrl
    },
    "keywords": keywords.join(', '),
    "articleSection": section,
    "wordCount": description.split(' ').length
  } : null;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title} | MarkTechRover</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      
      {/* Robots Meta */}
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="MarkTechRover" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:site" content="@marktechrover" />
      <meta name="twitter:creator" content="@marktechrover" />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#7c3aed" />
      <meta name="msapplication-TileColor" content="#7c3aed" />
      
      {/* Preconnect for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      
      {/* DNS Prefetch for external resources */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
      
      {articleStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(articleStructuredData)}
        </script>
      )}
      
      {/* Breadcrumb structured data for better navigation */}
      {url && url !== '/' && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://marktechrover.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": title,
                "item": fullUrl
              }
            ]
          })}
        </script>
      )}
    </Helmet>
  );
};

export default SEO; 