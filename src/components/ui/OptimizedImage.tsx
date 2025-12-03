import React, { useState, useEffect, useRef } from 'react';
import { useLazyImage } from '../seo/PerformanceOptimizer';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'sync' | 'auto';
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  sizes = '100vw',
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2YzZjRmNiIvPjwvc3ZnPg==',
  onLoad,
  onError,
  loading = 'lazy',
  decoding = 'async'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [imageSrc, setImageSrc] = useState(priority ? src : placeholder);
  const imgRef = useRef<HTMLImageElement>(null);

  // Use lazy loading hook for non-priority images
  const { isInView } = useLazyImage(src, alt);

  useEffect(() => {
    if (priority || isInView) {
      setImageSrc(src);
    }
  }, [priority, isInView, src]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // Generate responsive srcset for different screen sizes
  const generateSrcSet = (imageSrc: string) => {
    const baseUrl = imageSrc.replace(/\.[^/.]+$/, '');
    const extension = imageSrc.split('.').pop();
    
    return [
      `${baseUrl}-320.${extension} 320w`,
      `${baseUrl}-640.${extension} 640w`,
      `${baseUrl}-1024.${extension} 1024w`,
      `${baseUrl}-1280.${extension} 1280w`,
      `${baseUrl}-1536.${extension} 1536w`
    ].join(', ');
  };

  // Calculate aspect ratio for layout stability
  const aspectRatio = width && height ? (height / width) * 100 : null;

  return (
    <div 
      className={`optimized-image-container ${className}`}
      style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#f3f4f6',
        ...(aspectRatio && {
          paddingBottom: `${aspectRatio}%`
        })
      }}
    >
      <img
        ref={imgRef}
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding={decoding}
        sizes={sizes}
        srcSet={generateSrcSet(src)}
        className={`optimized-image ${
          isLoaded ? 'loaded' : 'loading'
        } ${
          hasError ? 'error' : ''
        }`}
        style={{
          position: aspectRatio ? 'absolute' : 'relative',
          top: aspectRatio ? 0 : 'auto',
          left: aspectRatio ? 0 : 'auto',
          width: aspectRatio ? '100%' : 'auto',
          height: aspectRatio ? '100%' : 'auto',
          objectFit: 'cover',
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out',
          transform: isLoaded ? 'scale(1)' : 'scale(1.05)',
          filter: isLoaded ? 'none' : 'blur(10px)',
        }}
        onLoad={handleLoad}
        onError={handleError}
        draggable={false}
      />
      
      {/* Loading skeleton */}
      {!isLoaded && !hasError && (
        <div 
          className="image-skeleton"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#f3f4f6',
            backgroundImage: 'linear-gradient(90deg, #f3f4f6 0px, #e5e7eb 40px, #f3f4f6 80px)',
            backgroundSize: '200px 100%',
            animation: 'shimmer 1.5s infinite'
          }}
        />
      )}
      
      {/* Error fallback */}
      {hasError && (
        <div 
          className="image-error"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fef2f2',
            color: '#dc2626',
            fontSize: '14px',
            textAlign: 'center',
            padding: '20px'
          }}
        >
          <div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21,15 16,10 5,21"/>
            </svg>
            <p>Image failed to load</p>
          </div>
        </div>
      )}
      
      <style>{`
        @keyframes shimmer {
          0% {
            background-position: -200px 0;
          }
          100% {
            background-position: calc(200px + 100%) 0;
          }
        }
        
        .optimized-image {
          will-change: opacity, transform, filter;
        }
        
        .optimized-image.loaded {
          will-change: auto;
        }
      `}</style>
    </div>
  );
};

export default OptimizedImage; 