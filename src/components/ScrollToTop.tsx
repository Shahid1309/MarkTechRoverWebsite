import React from 'react';

import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isNearFooter, setIsNearFooter] = useState(false);

  // Show button when page is scrolled up to given distance and hide when near footer
  const toggleVisibility = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const footerOffset = 400; // Distance from footer to hide button
    
    if (scrollY > 300 && (scrollY + windowHeight) < (documentHeight - footerOffset)) {
      setIsVisible(true);
      setIsNearFooter(false);
    } else if ((scrollY + windowHeight) >= (documentHeight - footerOffset)) {
      setIsVisible(false);
      setIsNearFooter(true);
    } else {
      setIsVisible(false);
      setIsNearFooter(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-32 right-8 p-4 bg-gradient-to-br from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-110 z-50 border border-purple-500/30"
          style={{
            opacity: isVisible ? '1' : '0',
            visibility: isVisible ? 'visible' : 'hidden',
          }}
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
}; 