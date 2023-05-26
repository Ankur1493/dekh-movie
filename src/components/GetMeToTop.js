import React, { useState, useEffect } from 'react';
import './GetMeToTop.css';

const GetMeToTop = () => {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowTopButton(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleGoToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`top ${showTopButton ? 'show' : ''}`} onClick={handleGoToTop}>
      Go Up
    </div>
  );
};

export default GetMeToTop;
