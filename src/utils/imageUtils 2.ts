import { useState, useEffect } from 'react';

/**
 * Get the path to a local image
 * @param imageName - The name of the image file in the public/images directory
 * @returns The path to the image
 */
export const getImagePath = (imageName: string): string => {
  try {
    // Try to get WebP version first
    return `/images/${imageName.replace(/\.(jpg|jpeg|png)$/, '.webp')}`;
  } catch {
    // Fallback to original image
    return `/images/${imageName}`;
  }
};

interface ImageDimensions {
  width: number;
  height: number;
}

interface ImageBreakpoint {
  [key: string]: number;
}

export const getImageDimensions = (src: string): Promise<ImageDimensions> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve({
        width: img.naturalWidth,
        height: img.naturalHeight
      });
    };
    img.onerror = reject;
    img.src = src;
  });
};

export const generateSrcSet = (src: string, sizes: number[] = [320, 640, 768, 1024, 1280, 1536]): string => {
  const extension = src.split('.').pop()?.toLowerCase();
  const basePath = src.substring(0, src.lastIndexOf('.'));
  
  if (!extension) return src;

  // Generate WebP srcset
  const srcSetEntries = sizes.map(size => {
    const webpSrc = `${basePath}-${size}.webp`;
    return `${webpSrc} ${size}w`;
  });

  return srcSetEntries.join(', ');
};

export const generateSizes = (breakpoints: ImageBreakpoint): string => {
  return Object.entries(breakpoints)
    .map(([breakpoint, size]) => `(min-width: ${breakpoint}px) ${size}px`)
    .join(', ');
};

interface LazyImageResult {
  isLoaded: boolean;
  currentSrc: string;
}

export const useLazyImage = (src: string): LazyImageResult => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [currentSrc, setCurrentSrc] = useState<string>('');

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setIsLoaded(true);
      setCurrentSrc(src);
    };
  }, [src]);

  return { isLoaded, currentSrc };
};

// Function to get placeholder blur data URL
export const getPlaceholderDataUrl = async (imagePath: string): Promise<string> => {
  try {
    const response = await fetch(imagePath);
    const blob = await response.blob();
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.readAsDataURL(blob);
    });
  } catch {
    return '';
  }
};

export const getPlaceholderUrl = (imageName: string): string => {
  // Generate a tiny placeholder version of the image (e.g., 20px wide)
  return `${imageName.split('.')[0]}-placeholder.webp`;
};

export const getImageUrl = (imageName: string, size: number = 1024): string => {
  // Return the WebP version of the image at the specified size
  return `${imageName.split('.')[0]}-${size}.webp`;
}; 