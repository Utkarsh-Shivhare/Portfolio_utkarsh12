import React from 'react';

const TextFavicon = () => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="#0a192f"/>
      <text 
        x="50%" 
        y="50%" 
        textAnchor="middle" 
        dominantBaseline="central" 
        fill="#64ffda" 
        fontSize="16"
        fontWeight="bold"
        fontFamily="Arial"
      >
        US
      </text>
    </svg>
  );
};

export default TextFavicon; 