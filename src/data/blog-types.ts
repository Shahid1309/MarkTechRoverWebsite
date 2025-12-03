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