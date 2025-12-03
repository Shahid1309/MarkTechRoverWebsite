import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Blog posts data (same as in sitemap generator)
const blogPosts = [
  {
    "id": "react-seo-optimization",
    "title": "How to Optimize React Websites for SEO",
    "slug": "how-to-optimize-react-websites-for-seo",
    "excerpt": "Learn the best practices for optimizing React websites for search engines, including server-side rendering, meta tags, and performance optimization.",
    "publishedAt": "2024-03-20",
    "keywords": [
      "React SEO optimization",
      "SEO-friendly React website",
      "React SSR for SEO",
      "React meta tags",
      "React performance optimization"
    ]
  }
];

function generateRSS() {
  const baseUrl = 'https://marktechrover.com';
  const currentDate = new Date().toUTCString();

  const rssContent = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>MarkTechRover Blog</title>
    <link>${baseUrl}</link>
    <description>Leading digital marketing and SEO agency specializing in lead generation and web development</description>
    <language>en-US</language>
    <lastBuildDate>${currentDate}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${baseUrl}/favicon.svg</url>
      <title>MarkTechRover</title>
      <link>${baseUrl}</link>
    </image>
    ${blogPosts.map(post => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid>${baseUrl}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      <description><![CDATA[${post.excerpt}]]></description>
      <content:encoded><![CDATA[${post.excerpt}]]></content:encoded>
      <category>SEO</category>
      <category>Digital Marketing</category>
    </item>`).join('')}
  </channel>
</rss>`;

  const projectRoot = path.resolve(__dirname, '../../');
  const rssPath = path.join(projectRoot, 'public', 'rss.xml');
  
  // Create public directory if it doesn't exist
  if (!fs.existsSync(path.join(projectRoot, 'public'))) {
    fs.mkdirSync(path.join(projectRoot, 'public'), { recursive: true });
  }
  
  fs.writeFileSync(rssPath, rssContent);
  console.log('RSS feed generated successfully!');
}

generateRSS(); 