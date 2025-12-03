const { SitemapStream } = require('sitemap')
const { Readable } = require('stream')
const fs = require('fs')
const path = require('path')

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
    const data = await new Promise<string>((resolve, reject) => {
      const sitemapOutput: Buffer[] = []
      stream.on('data', (chunk: Buffer) => sitemapOutput.push(chunk))
      stream.on('end', () => resolve(Buffer.concat(sitemapOutput).toString()))
      stream.on('error', reject)
      routes.forEach(route => stream.write(route))
      stream.end()
    })

    const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml')
    fs.writeFileSync(sitemapPath, data)
    console.log('Sitemap generated successfully!')
  } catch (error) {
    console.error('Error generating sitemap:', error)
  }
}

generateSitemap() 