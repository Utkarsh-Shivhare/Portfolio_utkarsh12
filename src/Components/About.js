import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaLaptopCode, FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import ParticleBackground from './ParticleBackground';

const About = () => {
  return (
    <div className="relative min-h-screen p-4 pt-20">
      <ParticleBackground />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-[#ccd6f6] mb-4">About Me</h2>
          <h3 className="text-2xl text-[#64ffda] mb-8">Utkarsh Shivhare</h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#8892b0] space-y-4"
          >
            <p className="text-lg">
              I'm Utkarsh Shivhare, a passionate Computer Science student at Madan Mohan Malaviya University of Technology, 
              specializing in AI/ML, Data Science, and Full-stack Development. With a strong academic foundation 
              and hands-on industry experience, I bridge the gap between theoretical knowledge and practical applications.
            </p>

            <p className="text-lg">
              As a Principal Data Scientist at Trailytics, I've improved efficiency by 25% through advanced 
              Web Scraping and ML models, collaborating with major clients like Nivea and Mondelez. At Aiproff, 
              I achieved 96% accuracy in Computer Vision models and optimized Edge-AI solutions by 20-30%.
            </p>

            <p className="text-lg">
              My technical expertise spans Python, C++, Machine Learning, and IoT solutions. I've demonstrated 
              this through projects like AI Drone Control (93.8% accuracy) and PashuTham's computer vision system 
              (91% accuracy). I'm constantly pushing the boundaries of what's possible with AI and automation.
            </p>
          </motion.div>

          {/* Highlights Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Education */}
            <div className="bg-[#112240]/80 backdrop-blur-sm p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <FaGraduationCap className="text-[#64ffda] text-2xl" />
                <h3 className="text-xl font-bold text-[#ccd6f6]">Education</h3>
              </div>
              <div className="text-[#8892b0]">
                <p className="font-semibold">B.Tech in Computer Science and Engineering</p>
                <p>MMMUT Gorakhpur | 7.2 CGPA</p>
                <p className="mt-2">Intermediate (96.8%) | High School (92.2%)</p>
                <p>Chinmaya Vidyalaya School</p>
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-[#112240]/80 backdrop-blur-sm p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <FaAward className="text-[#64ffda] text-2xl" />
                <h3 className="text-xl font-bold text-[#ccd6f6]">Key Achievements</h3>
              </div>
              <ul className="text-[#8892b0] list-disc list-inside space-y-2">
                <li>Aerothon 2023: Phase-1 AIR-10 and National Finals AIR-9</li>
                <li>E-Yantra 2023-24 (IITB): Qualified Phase-2</li>
                <li>500+ problems solved on LeetCode</li>
                <li>2⭐ on CodeChef (max rating 1457)</li>
              </ul>
            </div>

            {/* Industrial Experience */}
            <div className="bg-[#112240]/80 backdrop-blur-sm p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <FaBriefcase className="text-[#64ffda] text-2xl" />
                <h3 className="text-xl font-bold text-[#ccd6f6]">Industrial Impact</h3>
              </div>
              <ul className="text-[#8892b0] list-disc list-inside space-y-2">
                <li>Led AI/ML initiatives at Trailytics, improving efficiency by 25%</li>
                <li>Developed 96% accurate CV models at Aiproff</li>
                <li>Automated 30+ web tasks at Atigro</li>
                <li>Collaborated with industry leaders like Nivea, Mondelez, and Mars</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 bg-[#112240]/80 backdrop-blur-sm p-6 rounded-lg"
        >
          <div className="flex items-center gap-3 mb-4">
            <FaLaptopCode className="text-[#64ffda] text-2xl" />
            <h3 className="text-xl font-bold text-[#ccd6f6]">Technical Expertise</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-[#8892b0]">
            <div>
              <h4 className="text-[#64ffda] font-semibold mb-2">Core Skills</h4>
              <p>Python, C++, Machine Learning, Deep Learning, Computer Vision</p>
            </div>
            <div>
              <h4 className="text-[#64ffda] font-semibold mb-2">Frameworks</h4>
              <p>TensorFlow, PyTorch, Scikit-learn, OpenCV</p>
            </div>
            <div>
              <h4 className="text-[#64ffda] font-semibold mb-2">Tools & Platforms</h4>
              <p>AWS, MongoDB, Git, Linux, Apache Spark</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 