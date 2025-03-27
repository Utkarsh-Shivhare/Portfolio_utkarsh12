import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';
import ParticleBackground from './ParticleBackground';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: 'AI DRONE CONTROLLING',
      description: [
        'Utilized Edge-AI technology in drone manufacturing',
        'Built an object detection model with YOLO framework, achieving 93.8% accuracy',
        'Developed a 30% more compact, industry-ready drone and established communication with an ARM board'
      ],
      github: '#',
      link: null,
      tech: ['Edge-AI', 'YOLO', 'ARM', 'Computer Vision'],
      image: require('../assets/Drone.jpeg'),
      color: '#64ffda'
    },
    {
      title: 'PASHUTHAM',
      description: [
        'Developed a CV model with 91% accuracy, optimized for SBCs',
        'Processed IP camera feeds with 99% fail-safe detection and alarms',
        'Integrated AWS & Firebase for efficient management and insights'
      ],
      github: null,
      link: '#',
      tech: ['Computer Vision', 'AWS', 'Firebase', 'IoT'],
      image: require('../assets/Pashutham.png'),
      color: '#ff6b6b'
    },
    {
      title: 'IMAGE CAPTIONING',
      description: [
        'Implemented Natural Language Processing (NLP)',
        'Fine-tuned Pre-trained model to extract features of an image by 98%',
        'Created 84% accurate Image Captions utilizing image features'
      ],
      github: '#',
      link: null,
      tech: ['NLP', 'Deep Learning', 'Computer Vision', 'Transfer Learning'],
      image: require('../assets/image_captioning.png'),
      color: '#ffd93d'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const projectVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative min-h-screen p-4 pt-20">
      <ParticleBackground />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-[#ccd6f6] mb-4">Featured Projects</h2>
          <p className="text-[#8892b0] text-lg max-w-2xl mx-auto">
            A showcase of my technical expertise and problem-solving abilities through innovative solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={projectVariants}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
              className="relative bg-[#112240]/80 backdrop-blur-sm rounded-lg overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-6 p-6">
                {/* Project Image */}
                <motion.div
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                  className="relative h-[300px] rounded-lg overflow-hidden"
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center transform hover:scale-110 transition-transform duration-700"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="absolute inset-0 bg-black/30 hover:bg-black/20 transition-colors duration-300" />
                </motion.div>

                {/* Project Info */}
                <div className="space-y-4">
                  <motion.h3
                    initial={{ x: -20 }}
                    animate={{ x: 0 }}
                    className="text-2xl font-bold"
                    style={{ color: project.color }}
                  >
                    {project.title}
                  </motion.h3>

                  <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-[#8892b0] space-y-2"
                  >
                    {project.description.map((desc, i) => (
                      <motion.li
                        key={i}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1 * i }}
                        className="flex items-start space-x-2"
                      >
                        <FaArrowRight className="mt-1.5 text-[#64ffda] flex-shrink-0" />
                        <span>{desc}</span>
                      </motion.li>
                    ))}
                  </motion.ul>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.tech.map((tech, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + (i * 0.1) }}
                        className="text-sm px-3 py-1 rounded-full"
                        style={{ 
                          backgroundColor: `${project.color}20`,
                          color: project.color
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex gap-4 pt-4"
                  >
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors"
                      >
                        <FaGithub size={24} />
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors"
                      >
                        <FaExternalLinkAlt size={22} />
                      </a>
                    )}
                  </motion.div>
                </div>
              </div>

              {/* Hover Effect Border */}
              <motion.div
                animate={{
                  opacity: hoveredProject === index ? 1 : 0
                }}
                className="absolute inset-0 border-2 rounded-lg pointer-events-none"
                style={{ borderColor: project.color }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects; 