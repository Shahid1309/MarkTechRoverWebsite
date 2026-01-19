import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);

/**
 * Dynamic Sitemap Generator
 * 
 * Automatically generates sitemap.xml from:
 * - All routes in meta-map.json
 * - Dynamic blog post routes
 * - Dynamic portfolio item routes
 * 
 * Updates automatically when new pages are added.
 */

const BASE_URL = 'https://marktechrover.com';
const PROJECT_ROOT = path.resolve(__dirname, '../../');

// Priority mapping based on route patterns
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

// Load blog posts dynamically
function getBlogRoutes() {
  try {
    // Try to import blog data
    const blogDataPath = path.join(PROJECT_ROOT, 'src/data/blog-data.ts');
    if (fs.existsSync(blogDataPath)) {
      // Read and parse blog posts
      const blogContent = fs.readFileSync(blogDataPath, 'utf-8');
      const blogRoutes = [];
      
      // Extract blog posts from seo-posts and marketing-posts
      const seoPostsPath = path.join(PROJECT_ROOT, 'src/data/seo-posts.ts');
      const marketingPostsPath = path.join(PROJECT_ROOT, 'src/data/marketing-posts.ts');
      
      // Extract slugs from seo-posts.ts
      if (fs.existsSync(seoPostsPath)) {
        const seoContent = fs.readFileSync(seoPostsPath, 'utf-8');
        const slugMatches = seoContent.matchAll(/slug:\s*['"]([^'"]+)['"]/g);
        for (const match of slugMatches) {
          blogRoutes.push(`/blog/${match[1]}`);
        }
      }
      
      // Extract slugs from marketing-posts.ts
      if (fs.existsSync(marketingPostsPath)) {
        const marketingContent = fs.readFileSync(marketingPostsPath, 'utf-8');
        const slugMatches = marketingContent.matchAll(/slug:\s*['"]([^'"]+)['"]/g);
        for (const match of slugMatches) {
          blogRoutes.push(`/blog/${match[1]}`);
        }
      }
      
      return blogRoutes;
    }
  } catch (error) {
    console.warn('Could not load blog routes:', error.message);
  }
  return [];
}

// Load portfolio items dynamically
function getPortfolioRoutes() {
  try {
    const portfolioDataPath = path.join(PROJECT_ROOT, 'src/utils/portfolioData.ts');
    if (fs.existsSync(portfolioDataPath)) {
      const portfolioContent = fs.readFileSync(portfolioDataPath, 'utf-8');
      const portfolioRoutes = [];
      
      // Extract portfolio IDs from the projects array
      const idMatches = portfolioContent.matchAll(/id:\s*['"]([^'"]+)['"]/g);
      for (const match of idMatches) {
        const id = match[1];
        // Only include if it's not a case study (those have their own routes)
        if (!['chumbak', 'dentinics', 'idesign'].includes(id)) {
          portfolioRoutes.push(`/portfolio/${id}`);
        }
      }
      
      return portfolioRoutes;
    }
  } catch (error) {
    console.warn('Could not load portfolio routes:', error.message);
  }
  return [];
}

async function generateSitemap() {
  try {
    console.log('🔍 Generating dynamic sitemap...');
    
    // Load meta-map.json for all static routes
    const metaMapPath = path.join(PROJECT_ROOT, 'seo/meta-map.json');
    if (!fs.existsSync(metaMapPath)) {
      throw new Error('meta-map.json not found');
    }
    
    const metaMap = JSON.parse(fs.readFileSync(metaMapPath, 'utf-8'));
    const routes = [];
    
    // Add all static routes from meta-map
    for (const [route, metadata] of Object.entries(metaMap)) {
      // Skip dynamic routes (they'll be added separately)
      if (route.includes(':id') || route.includes(':slug')) {
        continue;
      }
      
      routes.push({
        url: route,
        changefreq: getChangeFreq(route),
        priority: getPriority(route),
        lastmod: new Date().toISOString().split('T')[0]
      });
    }
    
    // Add dynamic blog routes
    const blogRoutes = getBlogRoutes();
    console.log(`  📝 Found ${blogRoutes.length} blog posts`);
    for (const blogRoute of blogRoutes) {
      routes.push({
        url: blogRoute,
        changefreq: 'weekly',
        priority: '0.7',
        lastmod: new Date().toISOString().split('T')[0]
      });
    }
    
    // Add dynamic portfolio routes
    const portfolioRoutes = getPortfolioRoutes();
    console.log(`  🎨 Found ${portfolioRoutes.length} portfolio items`);
    for (const portfolioRoute of portfolioRoutes) {
      routes.push({
        url: portfolioRoute,
        changefreq: 'monthly',
        priority: '0.6',
        lastmod: new Date().toISOString().split('T')[0]
      });
    }
    
    // Generate XML
    const sitemap = [
      '<?xml version="1.0" encoding="UTF-8"?>',
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
    ];
    
    // Sort routes by priority (highest first)
    routes.sort((a, b) => parseFloat(b.priority) - parseFloat(a.priority));
    
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
    
    console.log(`✅ Sitemap generated successfully!`);
    console.log(`   📄 Location: ${sitemapPath}`);
    console.log(`   🔗 Total URLs: ${routes.length}`);
    console.log(`   📊 Static routes: ${Object.keys(metaMap).length - Object.keys(metaMap).filter(r => r.includes(':')).length}`);
    console.log(`   📝 Blog posts: ${blogRoutes.length}`);
    console.log(`   🎨 Portfolio items: ${portfolioRoutes.length}`);
    
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  generateSitemap();
}

export default generateSitemap;
