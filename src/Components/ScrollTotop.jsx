// ScrollTotop.jsx
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollTotop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null; // Since this component doesn't render anything, return null
}

export default ScrollTotop;
