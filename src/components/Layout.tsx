import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  showFooter?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, showFooter = true }) => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-onyx-950 text-neutral-900 dark:text-neutral-100 transition-colors duration-200">
      <Navbar />
      <main className="flex-grow pt-20 md:pt-24">
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  );
};

export default Layout;
