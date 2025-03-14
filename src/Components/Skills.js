import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, FaDatabase, FaTools, FaRobot, FaServer, FaMicrochip,
  FaPython, FaJava, FaGitAlt, FaLinux, FaAws, FaReact, FaHdd
} from 'react-icons/fa';
import { 
  SiCplusplus, SiC, SiR, SiTensorflow, SiPytorch, SiScikitlearn, 
  SiOpencv, SiMongodb, SiApachespark, SiRaspberrypi,
  SiArduino, SiNvidia
} from 'react-icons/si';
import ParticleBackground from './ParticleBackground';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('languages');

  const categories = [
    { id: 'languages', name: 'Languages', icon: <FaCode /> },
    { id: 'ml', name: 'ML & Data Science', icon: <FaRobot /> },
    { id: 'tools', name: 'Tools', icon: <FaTools /> },
    { id: 'bigdata', name: 'Big Data & Others', icon: <FaDatabase /> },
    { id: 'development', name: 'Development', icon: <FaServer /> },
    { id: 'hardware', name: 'Hardware Integration', icon: <FaMicrochip /> }
  ];

  const skillsData = {
    languages: [
      { name: 'Python', icon: <FaPython /> },
      { name: 'C++', icon: <SiCplusplus /> },
      { name: 'C', icon: <SiC /> },
      { name: 'R', icon: <SiR /> },
      { name: 'SQL', icon: <FaDatabase /> },
      { name: 'Java', icon: <FaJava /> }
    ],
    ml: [
      { name: 'Neural Networks', icon: <FaRobot /> },
      { name: 'Machine Learning', icon: <FaServer /> },
      { name: 'Statistical Analysis', icon: <FaDatabase /> },
      { name: 'Hypothesis Testing', icon: <FaTools /> },
      { name: 'A/B Testing', icon: <FaCode /> },
      { name: 'Deep Learning', icon: <FaMicrochip /> }
    ],
    tools: [
      { name: 'TensorFlow', icon: <SiTensorflow /> },
      { name: 'PyTorch', icon: <SiPytorch /> },
      { name: 'Scikit-learn', icon: <SiScikitlearn /> },
      { name: 'Matplotlib', icon: <FaPython /> },
      { name: 'OpenCV', icon: <SiOpencv /> }
    ],
    bigdata: [
      { name: 'Apache Spark', icon: <SiApachespark /> },
      { name: 'Hadoop', icon: <FaHdd /> },
      { name: 'Redshift', icon: <FaDatabase /> },
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'AWS', icon: <FaAws /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'Linux', icon: <FaLinux /> }
    ],
    development: [
      { name: 'Web Scraping', icon: <FaCode /> },
      { name: 'Web Automation', icon: <FaServer /> },
      { name: 'Computer Vision', icon: <SiOpencv /> },
      { name: 'RESTful APIs', icon: <FaServer /> },
      { name: 'Full Stack Development', icon: <FaReact /> }
    ],
    hardware: [
      { name: 'ARM Boards', icon: <FaMicrochip /> },
      { name: 'Raspberry Pi', icon: <SiRaspberrypi /> },
      { name: 'Jetson Nano', icon: <SiNvidia /> },
      { name: 'IoT Integration', icon: <FaServer /> },
      { name: 'Embedded Systems', icon: <SiArduino /> },
      { name: 'Hardware-Software Interface', icon: <FaMicrochip /> }
    ]
  };

  const codingPlatforms = [
    {
      name: 'LeetCode',
      username: 'aspirers04',
      stats: 'Solved: 500+ questions',
      icon: '🏆',
      color: '#FFA116'
    },
    {
      name: 'CodeForces',
      username: 'aspirers04',
      stats: 'Max Rating: 1044 (Newbie)',
      icon: '⭐',
      color: '#318CE7'
    },
    {
      name: 'CodeChef',
      username: 'aspirers04',
      stats: 'Max Rating: 1457 (2⭐)',
      icon: '👨‍🍳',
      color: '#745D0B'
    }
  ];

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
          <h2 className="text-4xl font-bold text-[#ccd6f6] mb-4">Skills & Expertise</h2>
          <p className="text-[#8892b0] text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical skills across various domains.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-[#64ffda] text-[#0a192f] font-medium'
                  : 'bg-[#112240]/80 text-[#8892b0] hover:text-[#ccd6f6]'
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </motion.button>
          ))}
        </div>

        {/* Skills Visualization */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#112240]/80 backdrop-blur-sm p-8 rounded-lg mb-10"
        >
          <h3 className="text-2xl font-bold text-[#ccd6f6] mb-6 flex items-center gap-3">
            {categories.find(c => c.id === activeCategory).icon}
            <span>{categories.find(c => c.id === activeCategory).name}</span>
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {skillsData[activeCategory].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center justify-center bg-[#233554]/50 p-5 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#64ffda]/10"
              >
                <div className="text-[#64ffda] text-3xl mb-3">
                  {skill.icon}
                </div>
                <span className="text-[#ccd6f6] text-center font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Coding Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#112240]/80 backdrop-blur-sm p-8 rounded-lg"
        >
          <h3 className="text-2xl font-bold text-[#ccd6f6] mb-6">Competitive Programming</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {codingPlatforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-[#1a1a1a]/50 p-6 rounded-lg border-t-4 flex flex-col items-center text-center"
                style={{ borderColor: platform.color }}
              >
                <div className="text-4xl mb-3">{platform.icon}</div>
                <h4 className="text-xl font-bold text-[#ccd6f6] mb-1">{platform.name}</h4>
                <p className="text-[#64ffda] mb-2">{platform.username}</p>
                <p className="text-[#8892b0]">{platform.stats}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications & Courses */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-10 bg-[#112240]/80 backdrop-blur-sm p-8 rounded-lg"
        >
          <h3 className="text-2xl font-bold text-[#ccd6f6] mb-6">Relevant Coursework</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xl font-bold text-[#64ffda] mb-4">Undergraduate</h4>
              <ul className="space-y-2 text-[#8892b0]">
                <li className="flex items-start gap-2">
                  <span className="text-[#64ffda]">▹</span>
                  <span>Programming Fundamentals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#64ffda]">▹</span>
                  <span>Data Structures and Algorithms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#64ffda]">▹</span>
                  <span>Object Oriented Programming</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-[#64ffda] mb-4">Other Courses</h4>
              <ul className="space-y-2 text-[#8892b0]">
                <li className="flex items-start gap-2">
                  <span className="text-[#64ffda]">▹</span>
                  <span>Machine Learning and Deep Learning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#64ffda]">▹</span>
                  <span>C++ as a Competitive Programming</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills; 