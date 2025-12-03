import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AnimatedElement from './AnimatedElement';
import { getImageUrl, getPlaceholderUrl, getSrcSet } from '../../utils/portfolioData';

interface ProjectCardProps {
  title: string;
  description: string;
  imageName: string;
  category: string;
  link: string;
}

const ProjectCard = ({ title, description, imageName, category, link }: ProjectCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = getImageUrl(imageName);
    img.onload = () => setIsLoaded(true);
    img.onerror = () => setIsError(true);
  }, [imageName]);

  return (
    <AnimatedElement animation="fadeInUp" className="group">
      <Link to={link} className="block overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300">
        <div className="relative aspect-video overflow-hidden">
          {/* Placeholder image */}
          <div
            className={`absolute inset-0 bg-cover bg-center blur-lg transform scale-110 transition-opacity duration-500 ${
              isLoaded ? 'opacity-0' : 'opacity-100'
            }`}
            style={{ backgroundImage: `url(${getPlaceholderUrl(imageName)})` }}
          />
          
          {/* Main image */}
          <img
            src={getImageUrl(imageName)}
            alt={title}
            className={`w-full h-full object-cover transform transition-all duration-700 group-hover:scale-110 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            loading="lazy"
            srcSet={getSrcSet(imageName)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Category badge */}
          <div className="absolute top-4 left-4 px-3 py-1.5 bg-purple-900/90 text-white text-sm font-medium rounded-full backdrop-blur-sm capitalize">
            {category}
          </div>

          {/* Error state with better fallback */}
          {isError && (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-white text-sm">Project Image</p>
              </div>
            </div>
          )}
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-200 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-300 line-clamp-2">
            {description}
          </p>
          <div className="mt-4 flex items-center text-purple-300 font-medium">
            Learn More
            <svg
              className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </Link>
    </AnimatedElement>
  );
};

export default ProjectCard;