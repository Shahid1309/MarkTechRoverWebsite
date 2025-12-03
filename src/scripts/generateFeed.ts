import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface BlogPost {
  title: string;
  description: string;
  date: string;
  author: string;
  slug: string;
  content: string;
}

const generateRSSFeed = (posts: BlogPost[]) => {
  const feedItems = posts
    .map(
      post => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.description}]]></description>
      <link>https://marktechrover.com/blog/${post.slug}</link>
      <guid>https://marktechrover.com/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <author>${post.author}</author>
      <content:encoded><![CDATA[${post.content}]]></content:encoded>
    </item>`
    )
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>MarkTechRover Blog</title>
    <link>https://marktechrover.com/blog</link>
    <description>Latest insights on digital marketing, SEO, and web development</description>
    <language>en</language>
    <atom:link href="https://marktechrover.com/rss.xml" rel="self" type="application/rss+xml"/>
    ${feedItems}
  </channel>
</rss>`;
};

const generateAtomFeed = (posts: BlogPost[]) => {
  const feedItems = posts
    .map(
      post => `
    <entry>
      <title><![CDATA[${post.title}]]></title>
      <link href="https://marktechrover.com/blog/${post.slug}"/>
      <id>https://marktechrover.com/blog/${post.slug}</id>
      <updated>${new Date(post.date).toISOString()}</updated>
      <summary><![CDATA[${post.description}]]></summary>
      <author>
        <name>${post.author}</name>
      </author>
      <content type="html"><![CDATA[${post.content}]]></content>
    </entry>`
    )
    .join('');

  return `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>MarkTechRover Blog</title>
  <link href="https://marktechrover.com/blog"/>
  <link href="https://marktechrover.com/atom.xml" rel="self"/>
  <updated>${new Date().toISOString()}</updated>
  <id>https://marktechrover.com/blog</id>
  <author>
    <name>MarkTechRover</name>
  </author>
  ${feedItems}
</feed>`;
};

const generateFeeds = async () => {
  try {
    // In a real application, you would fetch this data from your CMS or database
    const posts: BlogPost[] = [
      {
        title: 'Getting Started with SEO',
        description: 'Learn the basics of Search Engine Optimization',
        date: '2024-03-20',
        author: 'MarkTechRover Team',
        slug: 'getting-started-with-seo',
        content: 'Full content here...',
      },
      // Add more posts here
    ];

    const projectRoot = path.resolve(__dirname, '../../');
    const publicDir = path.join(projectRoot, 'public');

    // Create public directory if it doesn't exist
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    // Generate and save RSS feed
    const rssFeed = generateRSSFeed(posts);
    fs.writeFileSync(path.join(publicDir, 'rss.xml'), rssFeed);

    // Generate and save Atom feed
    const atomFeed = generateAtomFeed(posts);
    fs.writeFileSync(path.join(publicDir, 'atom.xml'), atomFeed);

    console.log('RSS and Atom feeds generated successfully!');
  } catch (error) {
    console.error('Error generating feeds:', error);
  }
};

generateFeeds(); 