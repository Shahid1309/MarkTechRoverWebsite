/**
 * Dynamic Sitemap Generator
 * 
 * Automatically generates sitemap.xml from all public routes:
 * - Static routes from meta-map.json
 * - Dynamic blog post routes (from blog data files)
 * - Dynamic portfolio item routes (from portfolio data)
 * 
 * Usage:
 *   npm run generate-sitemap
 * 
 * This script runs automatically before each build (prebuild hook).
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, '..');

const BASE_URL = 'https://marktechrover.com';

// Priority mapping
function getPriority(route) {
  if (route === '/') return '1.0';
  if (route.startsWith('/services')) return '0.9';
  if (route.startsWith('/case-studies') || route.startsWith('/portfolio')) return '0.8';
  if (route.startsWith('/blog')) return '0.8';
  if (route === '/about' || route === '/contact') return '0.7';
  if (route.startsWith('/learn')) return '0.7';
  return '0.6';
}

// Change frequency mapping
function getChangeFreq(route) {
  if (route === '/' || route.startsWith('/blog')) return 'daily';
  if (route.startsWith('/services')) return 'weekly';
  if (route.startsWith('/portfolio') || route.startsWith('/case-studies')) return 'monthly';
  return 'monthly';
}

// Extract blog post slugs from TypeScript files
function getBlogRoutes() {
  const blogRoutesSet = new Set();
  const blogFiles = [
    path.join(PROJECT_ROOT, 'src/data/seo-posts.ts'),
    path.join(PROJECT_ROOT, 'src/data/marketing-posts.ts')
  ];

  for (const filePath of blogFiles) {
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf-8');
      // Match slug: 'slug-value' or slug: "slug-value"
      const slugRegex = /slug:\s*['"]([^'"]+)['"]/g;
      let match;
      while ((match = slugRegex.exec(content)) !== null) {
        blogRoutesSet.add(`/blog/${match[1]}`);
      }
    }
  }

  return Array.from(blogRoutesSet); // Return as array, duplicates already removed
}

// Extract portfolio item IDs from TypeScript file
function getPortfolioRoutes() {
  const portfolioRoutes = [];
  const portfolioFile = path.join(PROJECT_ROOT, 'src/utils/portfolioData.ts');
  
  if (fs.existsSync(portfolioFile)) {
    const content = fs.readFileSync(portfolioFile, 'utf-8');
    // Match id: 'id-value' or id: "id-value"
    const idRegex = /id:\s*['"]([^'"]+)['"]/g;
    const caseStudyIds = ['chumbak', 'dentinics', 'idesign']; // These have dedicated case study pages
    
    let match;
    while ((match = idRegex.exec(content)) !== null) {
      const id = match[1];
      // Skip case studies (they have their own routes)
      if (!caseStudyIds.includes(id)) {
        portfolioRoutes.push(`/portfolio/${id}`);
      }
    }
  }

  return [...new Set(portfolioRoutes)]; // Remove duplicates
}

function generateSitemap() {
  try {
    console.log('🔍 Generating dynamic sitemap...\n');

    // Load meta-map.json
    const metaMapPath = path.join(PROJECT_ROOT, 'seo/meta-map.json');
    if (!fs.existsSync(metaMapPath)) {
      throw new Error('meta-map.json not found at ' + metaMapPath);
    }

    const metaMap = JSON.parse(fs.readFileSync(metaMapPath, 'utf-8'));
    const routes = [];
    const today = new Date().toISOString().split('T')[0];

    // Get dynamic routes first to avoid duplicates
    const blogRoutes = getBlogRoutes();
    const portfolioRoutes = getPortfolioRoutes();
    
    // Create sets for quick lookup
    const blogRoutesSet = new Set(blogRoutes);
    const portfolioRoutesSet = new Set(portfolioRoutes);

    // Add static routes from meta-map (excluding dynamic routes and blog/portfolio that will be added dynamically)
    let staticCount = 0;
    for (const [route, metadata] of Object.entries(metaMap)) {
      // Skip dynamic routes (they'll be added separately)
      if (route.includes(':id') || route.includes(':slug')) {
        continue;
      }
      
      // Skip blog routes that will be added dynamically
      if (route.startsWith('/blog/') && blogRoutesSet.has(route)) {
        continue;
      }
      
      // Skip portfolio routes that will be added dynamically
      if (route.startsWith('/portfolio/') && portfolioRoutesSet.has(route)) {
        continue;
      }

      routes.push({
        url: route,
        changefreq: getChangeFreq(route),
        priority: getPriority(route),
        lastmod: today
      });
      staticCount++;
    }

    // Add dynamic blog routes
    console.log(`  📝 Found ${blogRoutes.length} blog posts`);
    for (const blogRoute of blogRoutes) {
      routes.push({
        url: blogRoute,
        changefreq: 'weekly',
        priority: '0.7',
        lastmod: today
      });
    }

    // Add dynamic portfolio routes
    console.log(`  🎨 Found ${portfolioRoutes.length} portfolio items`);
    for (const portfolioRoute of portfolioRoutes) {
      routes.push({
        url: portfolioRoute,
        changefreq: 'monthly',
        priority: '0.6',
        lastmod: today
      });
    }

    // Sort by priority (highest first)
    routes.sort((a, b) => parseFloat(b.priority) - parseFloat(a.priority));

    // Generate XML
    const sitemap = [
      '<?xml version="1.0" encoding="UTF-8"?>',
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
    ];

    for (const route of routes) {
      sitemap.push('  <url>');
      sitemap.push(`    <loc>${BASE_URL}${route.url}</loc>`);
      sitemap.push(`    <lastmod>${route.lastmod}</lastmod>`);
      sitemap.push(`    <changefreq>${route.changefreq}</changefreq>`);
      sitemap.push(`    <priority>${route.priority}</priority>`);
      sitemap.push('  </url>');
    }

    sitemap.push('</urlset>');

    // Write to public directory
    const sitemapPath = path.join(PROJECT_ROOT, 'public', 'sitemap.xml');
    const publicDir = path.dirname(sitemapPath);

    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    fs.writeFileSync(sitemapPath, sitemap.join('\n'), 'utf-8');

    console.log(`\n✅ Sitemap generated successfully!`);
    console.log(`   📄 Location: ${sitemapPath}`);
    console.log(`   🔗 Total URLs: ${routes.length}`);
    console.log(`   📊 Static routes: ${staticCount}`);
    console.log(`   📝 Blog posts: ${blogRoutes.length}`);
    console.log(`   🎨 Portfolio items: ${portfolioRoutes.length}`);
    console.log(`\n✨ Sitemap will auto-update when you add new pages!\n`);

  } catch (error) {
    console.error('❌ Error generating sitemap:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

// Run if called directly
generateSitemap();
