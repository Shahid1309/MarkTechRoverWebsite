import { BlogPost } from './blog-types';
import { seoPosts } from './seo-posts';
import { marketingPosts } from './marketing-posts';

export const blogPosts: BlogPost[] = [
  ...seoPosts,
  ...marketingPosts
];

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