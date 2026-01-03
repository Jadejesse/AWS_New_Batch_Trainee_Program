import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CyberLoader from '../CyberLoader/CyberLoader';
import './PageTransition.css';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Start transition
    setIsLoading(true);
    setIsTransitioning(true);

    // Simulate loading time for smooth effect
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Keep transition effect for a bit longer
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }, 1200);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {isLoading && <CyberLoader />}
      <div className={`page-content ${isTransitioning ? 'page-transitioning' : 'page-visible'}`}>
        {children}
      </div>
    </>
  );
};

export default PageTransition;
