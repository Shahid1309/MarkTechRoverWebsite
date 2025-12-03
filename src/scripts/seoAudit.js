import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class SEOAuditor {
  constructor() {
    this.issues = [];
    this.warnings = [];
    this.successes = [];
  }

  // Check if sitemap exists and is valid
  checkSitemap() {
    const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
    
    if (fs.existsSync(sitemapPath)) {
      const content = fs.readFileSync(sitemapPath, 'utf8');
      
      if (content.includes('<?xml version="1.0"')) {
        this.successes.push('✅ Sitemap exists and is valid XML');
        
        // Count URLs
        const urlCount = (content.match(/<url>/g) || []).length;
        this.successes.push(`✅ Sitemap contains ${urlCount} URLs`);
        
        // Check for required elements
        if (content.includes('<loc>') && content.includes('<changefreq>') && content.includes('<priority>')) {
          this.successes.push('✅ Sitemap contains all required elements (loc, changefreq, priority)');
        } else {
          this.warnings.push('⚠️ Sitemap missing some recommended elements');
        }
      } else {
        this.issues.push('❌ Sitemap is not valid XML');
      }
    } else {
      this.issues.push('❌ Sitemap not found');
    }
  }

  // Check if robots.txt exists and is valid
  checkRobotsTxt() {
    const robotsPath = path.join(process.cwd(), 'public', 'robots.txt');
    
    if (fs.existsSync(robotsPath)) {
      const content = fs.readFileSync(robotsPath, 'utf8');
      
      if (content.trim()) {
        this.successes.push('✅ Robots.txt exists and is not empty');
        
        if (content.includes('Sitemap:')) {
          this.successes.push('✅ Robots.txt includes sitemap reference');
        } else {
          this.warnings.push('⚠️ Robots.txt missing sitemap reference');
        }
        
        if (content.includes('User-agent:')) {
          this.successes.push('✅ Robots.txt has proper user-agent directives');
        } else {
          this.warnings.push('⚠️ Robots.txt missing user-agent directives');
        }
      } else {
        this.issues.push('❌ Robots.txt is empty');
      }
    } else {
      this.issues.push('❌ Robots.txt not found');
    }
  }

  // Check if manifest.json exists and is valid
  checkManifest() {
    const manifestPath = path.join(process.cwd(), 'public', 'manifest.json');
    
    if (fs.existsSync(manifestPath)) {
      try {
        const content = fs.readFileSync(manifestPath, 'utf8');
        const manifest = JSON.parse(content);
        
        this.successes.push('✅ Manifest.json exists and is valid JSON');
        
        // Check required fields
        const requiredFields = ['name', 'short_name', 'start_url', 'display'];
        requiredFields.forEach(field => {
          if (manifest[field]) {
            this.successes.push(`✅ Manifest contains ${field}`);
          } else {
            this.warnings.push(`⚠️ Manifest missing ${field}`);
          }
        });
        
        // Check icons
        if (manifest.icons && manifest.icons.length > 0) {
          this.successes.push(`✅ Manifest contains ${manifest.icons.length} icons`);
        } else {
          this.warnings.push('⚠️ Manifest missing icons');
        }
      } catch (error) {
        this.issues.push('❌ Manifest.json is not valid JSON');
      }
    } else {
      this.warnings.push('⚠️ Manifest.json not found (PWA features disabled)');
    }
  }

  // Check if service worker exists
  checkServiceWorker() {
    const swPath = path.join(process.cwd(), 'public', 'sw.js');
    
    if (fs.existsSync(swPath)) {
      const content = fs.readFileSync(swPath, 'utf8');
      
      if (content.includes('addEventListener') && content.includes('fetch')) {
        this.successes.push('✅ Service worker exists and appears functional');
      } else if (content.includes('serviceWorker')) {
        this.successes.push('✅ Service worker exists and appears functional');
      } else {
        this.warnings.push('⚠️ Service worker exists but may not be properly configured');
      }
    } else {
      this.warnings.push('⚠️ Service worker not found (caching disabled)');
    }
  }

  // Check if RSS feed exists
  checkRSSFeed() {
    const rssPath = path.join(process.cwd(), 'public', 'rss.xml');
    
    if (fs.existsSync(rssPath)) {
      const content = fs.readFileSync(rssPath, 'utf8');
      
      if (content.includes('<rss version="2.0"')) {
        this.successes.push('✅ RSS feed exists and is valid');
        
        // Count items
        const itemCount = (content.match(/<item>/g) || []).length;
        this.successes.push(`✅ RSS feed contains ${itemCount} items`);
      } else {
        this.issues.push('❌ RSS feed is not valid RSS 2.0');
      }
    } else {
      this.warnings.push('⚠️ RSS feed not found');
    }
  }

  // Check build configuration for SEO optimizations
  checkBuildConfig() {
    const viteConfigPath = path.join(process.cwd(), 'vite.config.ts');
    
    if (fs.existsSync(viteConfigPath)) {
      const content = fs.readFileSync(viteConfigPath, 'utf8');
      
      if (content.includes('sourcemap: false')) {
        this.successes.push('✅ Source maps disabled for production (security)');
      } else {
        this.warnings.push('⚠️ Source maps enabled (consider disabling for production)');
      }
      
      if (content.includes('minify: \'terser\'')) {
        this.successes.push('✅ Code minification enabled');
      } else {
        this.warnings.push('⚠️ Code minification not configured');
      }
      
      if (content.includes('drop_console: true')) {
        this.successes.push('✅ Console logs removed in production');
      } else {
        this.warnings.push('⚠️ Console logs not removed in production');
      }
    }
  }

  // Check package.json for SEO-related scripts
  checkPackageJson() {
    const packagePath = path.join(process.cwd(), 'package.json');
    
    if (fs.existsSync(packagePath)) {
      const content = fs.readFileSync(packagePath, 'utf8');
      const packageJson = JSON.parse(content);
      
      if (packageJson.scripts && packageJson.scripts['generate-sitemap']) {
        this.successes.push('✅ Sitemap generation script configured');
      } else {
        this.warnings.push('⚠️ Sitemap generation script not found');
      }
      
      if (packageJson.scripts && packageJson.scripts['generate-rss']) {
        this.successes.push('✅ RSS generation script configured');
      } else {
        this.warnings.push('⚠️ RSS generation script not found');
      }
      
      if (packageJson.scripts && packageJson.scripts['prebuild']) {
        this.successes.push('✅ Prebuild scripts configured');
      } else {
        this.warnings.push('⚠️ Prebuild scripts not configured');
      }
    }
  }

  // Run all checks
  runAudit() {
    console.log('🔍 Starting SEO Audit...\n');
    
    this.checkSitemap();
    this.checkRobotsTxt();
    this.checkManifest();
    this.checkServiceWorker();
    this.checkRSSFeed();
    this.checkBuildConfig();
    this.checkPackageJson();
    
    // Print results
    console.log('📊 SEO Audit Results:\n');
    
    if (this.successes.length > 0) {
      console.log('✅ Successes:');
      this.successes.forEach(success => console.log(`  ${success}`));
      console.log('');
    }
    
    if (this.warnings.length > 0) {
      console.log('⚠️ Warnings:');
      this.warnings.forEach(warning => console.log(`  ${warning}`));
      console.log('');
    }
    
    if (this.issues.length > 0) {
      console.log('❌ Issues:');
      this.issues.forEach(issue => console.log(`  ${issue}`));
      console.log('');
    }
    
    // Summary
    const totalChecks = this.successes.length + this.warnings.length + this.issues.length;
    const score = Math.round((this.successes.length / totalChecks) * 100);
    
    console.log(`📈 SEO Score: ${score}% (${this.successes.length}/${totalChecks} checks passed)`);
    
    if (score >= 80) {
      console.log('🎉 Excellent SEO setup!');
    } else if (score >= 60) {
      console.log('👍 Good SEO setup with room for improvement');
    } else {
      console.log('⚠️ SEO setup needs attention');
    }
    
    return {
      score,
      successes: this.successes.length,
      warnings: this.warnings.length,
      issues: this.issues.length,
      total: totalChecks
    };
  }
}

// Run the audit
const auditor = new SEOAuditor();
auditor.runAudit(); 