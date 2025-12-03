import { Link } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  publishedAt: string;
  category: string;
  author: {
    name: string;
    image: string;
    role: string;
  };
  coverImage: string;
  slug: string;
  readingTime: string;
}

const BlogCard = ({
  title,
  excerpt,
  publishedAt,
  category,
  author,
  coverImage,
  slug,
  readingTime,
}: BlogCardProps) => {
  return (
    <article className="group overflow-hidden h-full hover:shadow-lg transition-all duration-300 rounded-lg bg-card">
      <div className="relative overflow-hidden h-48">
        <img
          src={coverImage}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-accent text-white text-xs px-3 py-1.5 rounded-full font-medium">
          {category}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{new Date(publishedAt).toLocaleDateString('en-US', { 
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{readingTime}</span>
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors line-clamp-2">
          <Link to={`/blog/${slug}`}>{title}</Link>
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {excerpt}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={author.image}
              alt={author.name}
              className="h-8 w-8 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <span className="text-sm font-medium">{author.name}</span>
              <span className="text-xs text-muted-foreground">{author.role}</span>
            </div>
          </div>
          <Link 
            to={`/blog/${slug}`} 
            className="text-sm font-medium text-accent hover:underline"
          >
            Read More
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;