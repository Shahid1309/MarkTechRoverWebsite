import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import Section from '../components/ui/Section';
import BlogCard from '../components/ui/BlogCard';
import { blogPosts } from '../data/blog-data';

const categories = ['All', 'SEO', 'Marketing', 'Web Development'];

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero Section */}
      <Section className="pt-32 bg-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="mb-4">Digital Marketing Blog India</h1>
            <p className="text-muted-foreground text-lg">
              Discover insights, tutorials, and best practices about SEO, marketing, and web development
              to help grow your business online.
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-lg mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-accent text-white'
                    : 'bg-background hover:bg-secondary-foreground/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </Section>
      
      {/* Blog Posts Grid */}
      <Section className="bg-background pt-8">
        <div className="container">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogCard
                  key={post.id}
                  title={post.title}
                  excerpt={post.excerpt}
                  publishedAt={post.publishedAt}
                  category={post.category}
                  author={post.author}
                  coverImage={post.coverImage}
                  slug={post.slug}
                  readingTime={post.readingTime}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No posts found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </Section>
      
      {/* Newsletter Section */}
      <Section className="bg-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Stay updated with our latest articles, insights, and digital marketing trends.
              We'll send you valuable content straight to your inbox.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <button className="btn-accent btn-md whitespace-nowrap">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </motion.div>
  );
};

export default BlogPage;