import { SitemapStream } from 'sitemap'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Add your website routes here
const routes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/services', changefreq: 'weekly', priority: 0.9 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
  { url: '/blog', changefreq: 'daily', priority: 0.9 },
  { url: '/testimonials', changefreq: 'weekly', priority: 0.8 },
]

async function generateSitemap() {
  try {
    const stream = new SitemapStream({ hostname: 'https://marktechrover.com' })
    
    // Create sitemap
    const data = await new Promise((resolve, reject) => {
      let sitemap = ''
      stream.on('data', chunk => {
        sitemap += chunk.toString()
      })
      stream.on('end', () => resolve(sitemap))
      stream.on('error', reject)
      routes.forEach(route => stream.write(route))
      stream.end()
    })

    const projectRoot = path.resolve(__dirname, '../../')
    const sitemapPath = path.join(projectRoot, 'public', 'sitemap.xml')
    
    // Create public directory if it doesn't exist
    if (!fs.existsSync(path.join(projectRoot, 'public'))) {
      fs.mkdirSync(path.join(projectRoot, 'public'), { recursive: true })
    }
    
    fs.writeFileSync(sitemapPath, data)
    console.log('Sitemap generated successfully!')
  } catch (error) {
    console.error('Error generating sitemap:', error)
  }
}

generateSitemap() 