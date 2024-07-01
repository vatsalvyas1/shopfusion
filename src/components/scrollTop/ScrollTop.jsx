import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Ensure smooth scrolling behavior
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]); // Re-scroll on pathname change

  return null;
};

export default ScrollTop;
