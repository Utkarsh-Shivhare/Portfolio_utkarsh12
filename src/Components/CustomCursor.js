import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    
    const moveCursor = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    const growCursor = () => {
      cursor.style.width = '50px';
      cursor.style.height = '50px';
      cursor.style.background = 'rgba(100, 255, 218, 0.15)';
    };

    const shrinkCursor = () => {
      cursor.style.width = '32px';
      cursor.style.height = '32px';
      cursor.style.background = 'rgba(100, 255, 218, 0.2)';
    };

    // Add event listeners
    window.addEventListener('mousemove', moveCursor);
    
    // Add hover effect for interactive elements
    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
      link.addEventListener('mouseenter', growCursor);
      link.addEventListener('mouseleave', shrinkCursor);
    });
    
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      links.forEach(link => {
        link.removeEventListener('mouseenter', growCursor);
        link.removeEventListener('mouseleave', shrinkCursor);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="hidden md:block fixed w-8 h-8 pointer-events-none"
      style={{
        background: 'rgba(100, 255, 218, 0.2)',
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)',
        transition: 'width 0.3s, height 0.3s, background 0.3s',
        zIndex: 9999,
        mixBlendMode: 'difference'
      }}
    />
  );
};

export default CustomCursor; 