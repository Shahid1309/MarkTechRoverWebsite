import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Import the blog posts from their respective files
import { seoPosts } from '../src/data/seo-posts.js';
import { marketingPosts } from '../src/data/marketing-posts.js';

// Combine all blog posts
const blogPosts = [...seoPosts, ...marketingPosts];

const generateTypeScriptInterface = () => `
import { LucideIcon } from 'lucide-react';

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
      icon?: LucideIcon;
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

export const getAllPosts = (): BlogPost[] => {
  return blogPosts;
};
`;

const generateBlogDataFile = () => {
  const content = [
    'import { BlogPost } from \'./blog-types\';\n',
    'import { seoPosts } from \'./seo-posts\';\n',
    'import { marketingPosts } from \'./marketing-posts\';\n\n',
    'export const blogPosts: BlogPost[] = [...seoPosts, ...marketingPosts];\n\n',
    generateUtilityFunctions(),
  ].join('');

  const outputPath = path.join(process.cwd(), 'src', 'data', 'blog-data.ts');
  fs.writeFileSync(outputPath, content, 'utf8');
  console.log('Blog data file generated successfully!');
};

generateBlogDataFile(); 