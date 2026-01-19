# SEO Component for Next.js

A reusable SEO component that automatically reads metadata from `/seo/meta-map.json` and injects SEO tags based on the current route.

## Features

- ✅ Automatic route matching from `meta-map.json`
- ✅ Support for dynamic routes (`/portfolio/:id`, `/blog/:slug`)
- ✅ Safe fallbacks for missing routes
- ✅ Open Graph tags (Facebook, LinkedIn)
- ✅ Twitter Card tags
- ✅ Article metadata support
- ✅ Canonical URLs
- ✅ Robots meta tags (noindex, nofollow)

## Installation

This component requires Next.js. Make sure you have:

```bash
npm install next react react-dom
```

## Usage

### Basic Usage

The component automatically matches the current route to metadata in `meta-map.json`:

```tsx
import SEO from '@/components/SEO';

export default function HomePage() {
  return (
    <>
      <SEO />
      <div>Your page content</div>
    </>
  );
}
```

### With Overrides

You can override title and description if needed:

```tsx
<SEO 
  title="Custom Title"
  description="Custom description"
/>
```

### Blog Posts (Article Type)

For blog posts, use `ogType="article"`:

```tsx
<SEO 
  ogType="article"
  publishedTime="2024-01-15T10:00:00Z"
  modifiedTime="2024-01-20T14:30:00Z"
  author="John Doe"
  ogImage="/images/blog/post-image.jpg"
/>
```

### Dynamic Routes

The component automatically handles dynamic routes. For example:

- Route: `/portfolio/[id]` or `/portfolio/123`
- Matches: `/portfolio/:id` in `meta-map.json`

No special configuration needed!

## Route Matching Logic

1. **Exact Match**: Tries to find exact route in `meta-map.json`
2. **Dynamic Match**: Matches dynamic routes (e.g., `/portfolio/:id`)
3. **Parent Route**: Falls back to parent route (e.g., `/services` if `/services/seo` not found)
4. **Fallback**: Uses default metadata if no match found

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | Auto | Override page title |
| `description` | `string` | Auto | Override page description |
| `ogImage` | `string` | `/images/og-image.jpg` | Open Graph image URL |
| `ogType` | `'website' \| 'article' \| 'profile'` | `'website'` | Open Graph type |
| `canonicalUrl` | `string` | Auto | Canonical URL override |
| `keywords` | `string` | - | Additional keywords |
| `publishedTime` | `string` | - | Article published date (ISO 8601) |
| `modifiedTime` | `string` | - | Article modified date (ISO 8601) |
| `author` | `string` | - | Article author |
| `noindex` | `boolean` | `false` | Prevent search engine indexing |
| `nofollow` | `boolean` | `false` | Prevent search engine following links |

## Configuration

Edit `SITE_CONFIG` in the component to customize:

```tsx
const SITE_CONFIG = {
  name: 'MarkTechRover',
  url: 'https://marktechrover.com',
  defaultOgImage: '/images/og-image.jpg',
  twitterHandle: '@marktechrover',
  locale: 'en_US',
};
```

## File Structure

```
/
├── components/
│   └── SEO.tsx          # Main SEO component
├── seo/
│   └── meta-map.json    # Route metadata mapping
└── pages/               # Next.js pages
    └── ...
```

## Notes

- The component uses Next.js `Head` from `next/head`
- JSON imports require `resolveJsonModule: true` in `tsconfig.json` (already configured)
- Dynamic routes in `meta-map.json` use colon notation (`:id`), which matches Next.js bracket notation (`[id]`)
- All routes in `meta-map.json` should start with `/`

## Example Output

The component generates the following meta tags:

```html
<title>Hire SEO Agency India - Professional SEO Services</title>
<meta name="description" content="Hire SEO agency India for professional SEO services..." />
<meta property="og:title" content="Hire SEO Agency India - Professional SEO Services" />
<meta property="og:description" content="Hire SEO agency India for professional SEO services..." />
<meta property="og:image" content="https://marktechrover.com/images/og-image.jpg" />
<!-- ... and more -->
```

## Troubleshooting

**Route not matching?**
- Check that the route exists in `meta-map.json`
- Verify the route format (should start with `/`)
- For dynamic routes, ensure the pattern matches (e.g., `/portfolio/:id`)

**Metadata not updating?**
- Clear Next.js cache: `.next` folder
- Verify `meta-map.json` is in the correct location
- Check browser cache (hard refresh: Cmd+Shift+R)

