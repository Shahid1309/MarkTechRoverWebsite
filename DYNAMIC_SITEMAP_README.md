# Dynamic Sitemap Generator

## Overview

The dynamic sitemap generator automatically creates `sitemap.xml` from all public routes in your application. It updates automatically when new pages are added.

## Features

✅ **Automatic Route Discovery**
- Reads all static routes from `seo/meta-map.json`
- Extracts blog post routes from blog data files
- Extracts portfolio item routes from portfolio data

✅ **Auto-Updates**
- Runs automatically before each build (`prebuild` hook)
- Can be run manually with `npm run generate-sitemap`
- Updates when new blog posts or portfolio items are added

✅ **Smart Prioritization**
- Homepage: Priority 1.0
- Service pages: Priority 0.9
- Case studies/Portfolio: Priority 0.8
- Blog posts: Priority 0.8
- Other pages: Priority 0.6-0.7

✅ **Optimized Change Frequencies**
- Homepage & Blog: Daily
- Services: Weekly
- Portfolio/Case Studies: Monthly

## Usage

### Automatic (Recommended)
The sitemap is automatically generated before each build:
```bash
npm run build
```

### Manual Generation
Generate sitemap manually:
```bash
npm run generate-sitemap
```

## How It Works

1. **Static Routes**: Reads all routes from `seo/meta-map.json`
2. **Blog Posts**: Scans `src/data/seo-posts.ts` and `src/data/marketing-posts.ts` for blog slugs
3. **Portfolio Items**: Scans `src/utils/portfolioData.ts` for portfolio IDs
4. **Generation**: Creates XML sitemap with proper priorities and change frequencies
5. **Output**: Saves to `public/sitemap.xml`

## Adding New Pages

### Static Pages
1. Add route to `seo/meta-map.json`
2. Run `npm run generate-sitemap` (or it will auto-update on build)

### Blog Posts
1. Add blog post to `src/data/seo-posts.ts` or `src/data/marketing-posts.ts`
2. Sitemap automatically includes the new post on next generation

### Portfolio Items
1. Add portfolio item to `src/utils/portfolioData.ts`
2. Sitemap automatically includes the new item on next generation

## Output

The sitemap is saved to: `public/sitemap.xml`

**Current Statistics:**
- Total URLs: 183
- Static routes: 111
- Blog posts: 5
- Portfolio items: 67

## Verification

Check sitemap contents:
```bash
# Count URLs
grep -c "<url>" public/sitemap.xml

# View first 20 URLs
grep "<loc>" public/sitemap.xml | head -20
```

## Integration

The sitemap generator is integrated into the build process:
- Runs automatically via `prebuild` hook
- No manual intervention required
- Updates stay in sync with your content

## Notes

- Dynamic routes (e.g., `/portfolio/:id`) are handled by extracting IDs from data files
- Case study routes are excluded from portfolio items (they have dedicated routes)
- All routes are sorted by priority (highest first)
- Last modified date is set to current date on generation

