export const getImagePath = (imageName: string): string => {
  return `/images/${imageName}`;
};

export const getOptimizedImageUrl = (imageName: string, width?: number, height?: number): string => {
  let url = `/images/${imageName}`;
  if (width || height) {
    const params = new URLSearchParams();
    if (width) params.append('w', width.toString());
    if (height) params.append('h', height.toString());
    url += `?${params.toString()}`;
  }
  return url;
};

export const getSrcSet = (imageName: string, sizes: number[] = [400, 800, 1200]): string => {
  return sizes
    .map(size => `${getOptimizedImageUrl(imageName, size)} ${size}w`)
    .join(', ');
};

export const getPlaceholderImage = (width: number = 400, height: number = 300): string => {
  return `https://via.placeholder.com/${width}x${height}/1a1a1a/ffffff?text=Loading...`;
};

export const useLazyImage = (src: string, placeholder?: string) => {
  return {
    src,
    placeholder: placeholder || getPlaceholderImage(),
    loading: 'lazy' as const
  };
};

export const generateSrcSet = (baseName: string, sizes: number[] = [400, 800, 1200]): string => {
  return sizes
    .map(size => `${getOptimizedImageUrl(baseName, size)} ${size}w`)
    .join(', ');
};
