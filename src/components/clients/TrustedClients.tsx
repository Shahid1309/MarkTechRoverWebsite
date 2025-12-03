import { useRef, useEffect } from 'react';
import { useLazyImage, generateSrcSet } from '../../utils/imageUtils';
import AnimatedElement from '../ui/AnimatedElement';

const TrustedClients = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  // Load all images lazily
  const logos = Array.from({ length: 20 }, (_, i) => {
    const { isLoaded, currentSrc } = useLazyImage(`/ClientLogos/company${i + 1}.png`);
    return { id: i + 1, isLoaded, src: currentSrc };
  });

  // Split logos into two rows
  const firstRowLogos = logos.slice(0, 10);
  const secondRowLogos = logos.slice(10);

  // Smooth infinite scroll animation
  useEffect(() => {
    const row1 = row1Ref.current;
    const row2 = row2Ref.current;
    
    if (!row1 || !row2) return;

    const scrollFirstRow = () => {
      if (row1.scrollLeft >= row1.scrollWidth / 2) {
        row1.scrollLeft = 0;
      } else {
        row1.scrollLeft += 1;
      }
    };

    const scrollSecondRow = () => {
      if (row2.scrollLeft <= 0) {
        row2.scrollLeft = row2.scrollWidth / 2;
      } else {
        row2.scrollLeft -= 1;
      }
    };

    const animation1 = setInterval(scrollFirstRow, 30);
    const animation2 = setInterval(scrollSecondRow, 30);

    // Pause animation on hover
    const container = containerRef.current;
    if (container) {
      const pauseAnimation = () => {
        clearInterval(animation1);
        clearInterval(animation2);
      };

      const resumeAnimation = () => {
        clearInterval(animation1);
        clearInterval(animation2);
        setInterval(scrollFirstRow, 30);
        setInterval(scrollSecondRow, 30);
      };

      container.addEventListener('mouseenter', pauseAnimation);
      container.addEventListener('mouseleave', resumeAnimation);

      return () => {
        container.removeEventListener('mouseenter', pauseAnimation);
        container.removeEventListener('mouseleave', resumeAnimation);
        clearInterval(animation1);
        clearInterval(animation2);
      };
    }
  }, []);

  return (
    <AnimatedElement animation="fadeIn" className="overflow-hidden py-12" ref={containerRef}>
      <h2 className="text-2xl font-bold text-center mb-8 text-white dark:text-white">
        Trusted by Leading Companies
      </h2>
      
      {/* First row - moving left */}
      <div 
        ref={row1Ref}
        className="flex space-x-8 mb-8 overflow-hidden whitespace-nowrap"
      >
        {[...firstRowLogos, ...firstRowLogos].map((logo, index) => (
          <div
            key={`${logo.id}-${index}`}
            className="w-[200px] h-[100px] flex items-center justify-center bg-white/5 rounded-lg transition-all duration-300 hover:bg-white/10 filter grayscale hover:grayscale-0"
          >
            {logo.isLoaded && (
              <picture>
                <source srcSet={logo.src.replace('.png', '.webp')} type="image/webp" />
              <img
                src={logo.src}
                alt={`Client Logo ${logo.id}`}
                className="max-w-[150px] max-h-[60px] object-contain"
                srcSet={generateSrcSet(logo.src)}
                sizes="(max-width: 200px) 100vw, 200px"
                  width={200}
                  height={100}
                  loading="lazy"
              />
              </picture>
            )}
          </div>
        ))}
      </div>

      {/* Second row - moving right */}
      <div 
        ref={row2Ref}
        className="flex space-x-8 overflow-hidden whitespace-nowrap"
      >
        {[...secondRowLogos, ...secondRowLogos].map((logo, index) => (
          <div
            key={`${logo.id}-${index}`}
            className="w-[200px] h-[100px] flex items-center justify-center bg-white/5 rounded-lg transition-all duration-300 hover:bg-white/10 filter grayscale hover:grayscale-0"
          >
            {logo.isLoaded && (
              <picture>
                <source srcSet={logo.src.replace('.png', '.webp')} type="image/webp" />
              <img
                src={logo.src}
                alt={`Client Logo ${logo.id}`}
                className="max-w-[150px] max-h-[60px] object-contain"
                srcSet={generateSrcSet(logo.src)}
                sizes="(max-width: 200px) 100vw, 200px"
                  width={200}
                  height={100}
                  loading="lazy"
              />
              </picture>
            )}
          </div>
        ))}
      </div>
    </AnimatedElement>
  );
};

export default TrustedClients; 