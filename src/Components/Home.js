import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import ParticleBackground from './ParticleBackground';

const Home = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Interactive Background */}
      <ParticleBackground />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#64ffda] mb-4 text-lg"
        >
          Hi, my name is
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl sm:text-7xl font-bold text-[#ccd6f6] mb-4"
        >
          Utkarsh Shivhare.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-3xl sm:text-5xl font-bold text-[#8892b0] mb-8"
        >
          <TypeAnimation
            sequence={[
              'AI/ML Engineer',
              2000,
              'Data Scientist',
              2000,
              'Software Developer',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-[#8892b0] max-w-2xl mx-auto mb-12 text-lg"
        >
          Specializing in AI/ML solutions and Software development. 
          Currently focused on building intelligent systems and automated solutions 
          that push the boundaries of technology.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex justify-center gap-8"
        >
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/Utkarsh-Shivhare"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors"
          >
            <FaGithub size={30} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.linkedin.com/in/utkarsh-shivhare/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors"
          >
            <FaLinkedin size={30} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:utkarshshivhare26@gmail.com"
            className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors"
          >
            <FaEnvelope size={30} />
          </motion.a>
        </motion.div>

        <motion.a
          href="about"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-12 px-8 py-4 border-2 border-[#64ffda] text-[#64ffda] rounded-lg hover:bg-[#64ffda]/10 transition-colors inline-block"
        >
          Check out my work!
        </motion.a>
      </div>
    </div>
  );
};

export default Home; 