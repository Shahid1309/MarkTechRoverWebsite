/**
 * SEO Component Usage Examples
 * 
 * This file demonstrates how to use the SEO component in Next.js pages.
 */

import SEO from './SEO';

// ============================================
// Example 1: Basic Usage (Automatic Route Matching)
// ============================================
// The component automatically reads metadata from /seo/meta-map.json
// based on the current route. No props needed for most pages.

export default function HomePage() {
  return (
    <>
      <SEO />
      <div>Home page content</div>
    </>
  );
}

// ============================================
// Example 2: Service Page (Automatic)
// ============================================
// For routes like /services/seo-lead-generation,
// the component will automatically find and use the matching metadata.

export default function SeoServicesPage() {
  return (
    <>
      <SEO />
      <div>SEO Services page content</div>
    </>
  );
}

// ============================================
// Example 3: With Overrides
// ============================================
// You can override title and description if needed

export default function CustomPage() {
  return (
    <>
      <SEO 
        title="Custom Page Title"
        description="Custom page description for this specific page"
      />
      <div>Custom page content</div>
    </>
  );
}

// ============================================
// Example 4: Blog Post (Article Type)
// ============================================
// For blog posts, use ogType="article" and provide article metadata

export default function BlogPostPage() {
  return (
    <>
      <SEO 
        ogType="article"
        publishedTime="2024-01-15T10:00:00Z"
        modifiedTime="2024-01-20T14:30:00Z"
        author="John Doe"
        ogImage="/images/blog/post-image.jpg"
      />
      <article>
        <h1>Blog Post Title</h1>
        <p>Blog post content...</p>
      </article>
    </>
  );
}

// ============================================
// Example 5: Dynamic Route (Portfolio Item)
// ============================================
// For dynamic routes like /portfolio/:id, the component will
// match against the pattern /portfolio/:id in meta-map.json

export default function PortfolioItemPage() {
  return (
    <>
      <SEO />
      <div>Portfolio item content</div>
    </>
  );
}

// ============================================
// Example 6: Noindex Page
// ============================================
// For pages that shouldn't be indexed by search engines

export default function PrivatePage() {
  return (
    <>
      <SEO 
        noindex={true}
        nofollow={true}
      />
      <div>Private page content</div>
    </>
  );
}

// ============================================
// Example 7: Custom Canonical URL
// ============================================
// Override the canonical URL if needed

export default function RedirectedPage() {
  return (
    <>
      <SEO 
        canonicalUrl="https://marktechrover.com/correct-url"
      />
      <div>Page content</div>
    </>
  );
}

