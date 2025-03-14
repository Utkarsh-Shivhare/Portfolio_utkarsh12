import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

// Import a placeholder profile image - you should replace this with your actual photo
const profileImage = require('../assets/Profile.jpg');

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { id: 1, text: 'Home', link: '/' },
    { id: 2, text: 'About', link: '/about' },
    { id: 3, text: 'Experience', link: '/experience' },
    { id: 4, text: 'Projects', link: '/projects' },
    { id: 5, text: 'Skills', link: '/skills' },
    { id: 6, text: 'Contact', link: '/contact' },
  ];

  return (
    <nav className={`fixed w-full h-20 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0a192f]/95 backdrop-blur-md shadow-lg' : 'bg-[#0a192f]/90 backdrop-blur-sm'
    }`}>
      <div className="flex justify-between items-center w-full h-full max-w-screen-xl mx-auto px-4">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <Link to="/" className="flex items-center">
            <div className="relative w-12 h-12 overflow-hidden rounded-full border-2 border-[#64ffda] group">
              <img 
                src={profileImage} 
                alt="Utkarsh Shivhare" 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#64ffda]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className="ml-3 text-xl font-bold text-[#ccd6f6] hidden sm:block">
              Utkarsh Shivhare
            </span>
          </Link>
        </motion.div>

        <div className="hidden md:flex">
          {links.map(({ id, text, link }) => (
            <motion.div
              key={id}
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: id * 0.1 }}
            >
              <Link
                to={link}
                className={`relative ml-10 text-lg font-medium cursor-pointer group ${
                  location.pathname === link ? 'text-[#64ffda]' : 'text-gray-300'
                }`}
              >
                {text}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#64ffda] transition-all duration-300 ${
                  location.pathname === link ? 'w-full' : 'group-hover:w-full'
                }`}></span>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="md:hidden cursor-pointer z-20" onClick={() => setNav(!nav)}>
          {nav ? (
            <FaTimes size={30} className="text-[#64ffda]" />
          ) : (
            <FaBars size={30} className="text-gray-300 hover:text-[#64ffda] transition-colors" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: nav ? 1 : 0,
          y: nav ? 0 : -20,
          display: nav ? 'flex' : 'none'
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden flex-col absolute w-full bg-[#112240] py-4 shadow-lg"
      >
        {links.map(({ id, text, link }) => (
          <Link
            key={id}
            to={link}
            onClick={() => setNav(false)}
            className={`px-6 py-4 text-lg font-medium cursor-pointer transition-all duration-200 ${
              location.pathname === link 
                ? 'text-[#64ffda] bg-[#0a192f]/50' 
                : 'text-gray-300 hover:text-[#64ffda] hover:bg-[#0a192f]/30'
            }`}
          >
            {text}
          </Link>
        ))}
      </motion.div>
    </nav>
  );
};

export default Navbar; 