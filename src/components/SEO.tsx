import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string;
  author?: string;
  publishedDate?: string;
  modifiedDate?: string;
  category?: string;
  imageAlt?: string;
}

export const SEO = ({
  title,
  description,
  canonicalUrl = 'https://marktechrover.com',
  ogImage = '/src/assets/favicon-96x96-3.png',
  ogType = 'website',
  keywords = 'digital marketing agency, SEO services, web development company, PPC management, social media marketing',
  author = 'MarkTechRover',
  publishedDate,
  modifiedDate,
  category,
  imageAlt = 'MarkTechRover Logo',
}: SEOProps) => {
  const siteTitle = `${title} | MarkTechRover`;
  const currentUrl = typeof window !== 'undefined' ? window.location.href : canonicalUrl;

  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph meta tags */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:site_name" content="MarkTechRover" />
      {category && <meta property="article:section" content={category} />}
      {publishedDate && <meta property="article:published_time" content={publishedDate} />}
      {modifiedDate && <meta property="article:modified_time" content={modifiedDate} />}

      {/* Twitter meta tags */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@marktechrover" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={imageAlt} />

      {/* Additional SEO meta tags */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      
      {/* JSON-LD for Article (if category is present) */}
      {category && publishedDate && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": title,
            "description": description,
            "image": ogImage,
            "author": {
              "@type": "Organization",
              "name": author
            },
            "publisher": {
              "@type": "Organization",
              "name": "MarkTechRover",
              "logo": {
                "@type": "ImageObject",
                "url": "/src/assets/favicon-96x96-3.png"
              }
            },
            "datePublished": publishedDate,
            "dateModified": modifiedDate || publishedDate,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": currentUrl
            }
          })}
        </script>
      )}
    </Helmet>
  );
}; 