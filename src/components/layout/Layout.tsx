import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SEO from '../SEO';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black">
      {/* SEO component automatically reads metadata from meta-map.json based on current route */}
      <SEO />
      <Header />
      <main className="pt-0 mt-0"> {/* Removed excessive top spacing below fixed header */}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;