import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black">
      <Header />
      <main className="pt-0 mt-0"> {/* Removed excessive top spacing below fixed header */}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;