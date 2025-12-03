import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const blogPosts = [
  // SEO Posts
  {
    id: 'react-seo-optimization',
    title: 'How to Optimize React Websites for SEO',
    slug: 'how-to-optimize-react-websites-for-seo',
    excerpt: 'Learn the best practices for optimizing React websites for search engines, including server-side rendering, meta tags, and performance optimization.',
    category: 'SEO',
    coverImage: '/images/blog/react-seo-cover.webp',
    author: {
      name: 'Ritik Kumar Poddar',
      image: '/images/team/ritik.jpg',
      role: 'SEO Specialist'
    },
    publishedAt: '2024-03-20',
    readingTime: '8 min read',
    content: {
      introduction: "React has revolutionized web development, but its client-side rendering nature can pose challenges for SEO. In this comprehensive guide, we'll explore proven strategies to make your React website more search engine friendly while maintaining its dynamic capabilities.",
      sections: [
        {
          title: 'Understanding React SEO Challenges',
          content: "React's client-side rendering can make it difficult for search engines to crawl and index your content effectively. Search engines primarily see an empty HTML shell before JavaScript loads, which can impact your rankings. We'll explore why this happens and how to overcome these limitations.",
          iconName: 'Search'
        },
        {
          title: 'Server-Side Rendering (SSR) Implementation',
          content: "Implementing SSR with Next.js or similar frameworks can significantly improve your website's crawlability and initial load time. We'll walk through the setup process, configuration options, and best practices for optimal SEO performance.",
          iconName: 'Code'
        },
        {
          title: 'Meta Tags and Structured Data',
          content: "Learn how to implement dynamic meta tags and structured data in your React application. We'll cover React Helmet, dynamic OpenGraph tags, and JSON-LD implementation for better search engine understanding.",
          iconName: 'Target'
        },
        {
          title: 'Performance Optimization',
          content: "Discover techniques to optimize your React application's performance, including code splitting, lazy loading, and image optimization. We'll also explore how to measure and improve Core Web Vitals for better search rankings.",
          iconName: 'Zap'
        }
      ],
      conclusion: "By implementing these SEO strategies, you can significantly improve your React website's search engine visibility while maintaining its dynamic and interactive nature. Remember to regularly monitor your performance metrics and adjust your optimization strategies as search engine algorithms evolve.",
    },
    keywords: ['React SEO optimization', 'SEO-friendly React website', 'React SSR for SEO', 'React meta tags', 'React performance optimization']
  },
  // Add more posts here...
];

const generateTypeScriptInterface = () => `
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: 'SEO' | 'Marketing' | 'Web Development';
  coverImage: string;
  author: {
    name: string;
    image: string;
    role: string;
  };
  publishedAt: string;
  readingTime: string;
  content: {
    introduction: string;
    sections: {
      title: string;
      content: string;
      image?: string;
      iconName?: string;
    }[];
    conclusion: string;
  };
  relatedPosts?: string[];
  keywords: string[];
}
`;

const generateUtilityFunctions = () => `
export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getRelatedPosts = (currentPost: BlogPost): BlogPost[] => {
  if (!currentPost.relatedPosts) return [];
  return blogPosts.filter(post => currentPost.relatedPosts?.includes(post.id));
};

export const getPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => post.category === category);
};
`;

const generateIconImports = () => {
  const icons = new Set();
  blogPosts.forEach(post => {
    post.content.sections.forEach(section => {
      if (section.iconName) {
        icons.add(section.iconName);
      }
    });
  });
  return `import { ${Array.from(icons).join(', ')} } from 'lucide-react';`;
};

const generateBlogPostsData = () => {
  return `export const blogPosts: BlogPost[] = ${JSON.stringify(blogPosts, null, 2)};`;
};

const generateTypeScriptFile = () => {
  const projectRoot = path.resolve(__dirname, '..');
  const outputDir = path.join(projectRoot, 'src', 'data');
  
  // Create the output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const content = [
    generateIconImports(),
    generateTypeScriptInterface(),
    generateBlogPostsData(),
    generateUtilityFunctions(),
  ].join('\n\n');

  const outputPath = path.join(outputDir, 'blog-posts.ts');
  fs.writeFileSync(outputPath, content, 'utf8');
  console.log('Blog posts data generated successfully!');
};

generateTypeScriptFile(); 