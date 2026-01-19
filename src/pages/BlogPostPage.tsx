import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, Share2, ChevronLeft } from 'lucide-react';
import { getPostBySlug, getRelatedPosts } from '../data/blog-data';
import BlogCard from '../components/ui/BlogCard';
import { renderBlogContentWithLinks } from '../components/blog/BlogContentRenderer';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getPostBySlug(slug || '');
  const relatedPosts = post ? getRelatedPosts(post) : [];

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold">Post not found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] w-full">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-16">
            <Link to="/blog" className="inline-flex items-center text-white mb-6 hover:text-accent transition-colors">
              <ChevronLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
            <div className="bg-accent text-white text-sm px-4 py-1.5 rounded-full inline-block mb-4">
              {post.category}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-white">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{post.readingTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Author Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <img
            src={post.author.image}
            alt={post.author.name}
            className="h-16 w-16 rounded-full object-cover"
          />
          <div>
            <h3 className="text-xl font-semibold">{post.author.name}</h3>
            <p className="text-muted-foreground">{post.author.role}</p>
          </div>
          <button
            onClick={() => {
              navigator.share({
                title: post.title,
                text: post.excerpt,
                url: window.location.href,
              }).catch(() => {
                navigator.clipboard.writeText(window.location.href);
              });
            }}
            className="ml-auto flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Share2 className="h-5 w-5" />
            Share
          </button>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="lead">{renderBlogContentWithLinks(post.content.introduction)}</p>
          
          {post.content.sections.map((section, index) => (
            <div key={index} className="my-12">
              <div className="flex items-center gap-3 mb-4">
                {section.icon && <section.icon className="h-6 w-6 text-accent" />}
                <h2 className="text-2xl font-semibold">{section.title}</h2>
              </div>
              {section.image && (
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full rounded-lg my-6"
                />
              )}
              <div className="mt-4">{renderBlogContentWithLinks(section.content)}</div>
            </div>
          ))}

          <div className="my-12">
            <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
            <p>{renderBlogContentWithLinks(post.content.conclusion)}</p>
          </div>

          {/* Keywords */}
          <div className="flex flex-wrap gap-2 mt-8">
            {post.keywords.map((keyword, index) => (
              <span
                key={index}
                className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <BlogCard
                  key={relatedPost.id}
                  title={relatedPost.title}
                  excerpt={relatedPost.excerpt}
                  publishedAt={relatedPost.publishedAt}
                  category={relatedPost.category}
                  author={relatedPost.author}
                  coverImage={relatedPost.coverImage}
                  slug={relatedPost.slug}
                  readingTime={relatedPost.readingTime}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPostPage;