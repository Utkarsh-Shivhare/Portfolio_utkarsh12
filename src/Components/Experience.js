import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';
import ParticleBackground from './ParticleBackground';

const Experience = () => {
  const experiences = [
    {
      company: 'Aiproff',
      title: 'ML IoT Engineer',
      date: 'Dec 2023 - Present',
      location: 'Remote',
      description: [
        'Boosted PashuTham efficiency with Deep Learning models for Computer Vision, achieving 96% accuracy and improved field coverage.',
        'Designed and fine-tuned Large Language Model (LLM) chatbots, improving user interaction and engagement for Session Mate and PashuTham.',
        'Deployed Edge-AI solutions on ARM boards (Jetson Nano, Raspberry Pi), optimizing cost and performance by 20-30%.',
        'Delivered impactful Machine Learning model implementations, driving efficiency in AI-powered IoT devices.'
      ],
      color: '#ff6b6b',
      logo: 'https://aiproff.ai/dist/assets/logo-e9bcf11e.png',
      website: 'https://www.aiproff.ai/'
    },
    {
      company: 'Trailytics',
      title: 'Python Developer - Principal Data Scientist',
      date: 'Feb 2023 - June 2024',
      location: 'Remote',
      description: [
        'Specialized in advancing Web Scraping, Web Automation, and Sales Prediction ML models boosting efficiency by 25%.',
        'Executed A/B tests using SQL, Python, and R for model validation and insights.',
        'Collaborated with clients like Nivea, Mondelez, Mars, Wipro, Himalaya.'
      ],
      color: '#64ffda',
      logo: 'https://trailytics.com/wp-content/uploads/2021/01/cropped-trailytics.png',
      website: 'https://trailytics.com/'
    },
    {
      company: 'Atigro',
      title: 'Automation and AI Engineer',
      date: 'Nov 2023 - May 2024',
      location: 'Remote',
      description: [
        'Automated 30+ web tasks with efficiency.',
        'Contributed to the development of a variety of AI tools optimized by 10-15%.'
      ],
      color: '#ffd93d',
      logo: 'https://www.atigro.com/wp-content/uploads/2021/02/atigro-logo-color.png',
      website: 'https://www.atigro.com/'
    }
  ];

  return (
    <div className="relative min-h-screen p-4 pt-20">
      <ParticleBackground />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-[#ccd6f6] mb-12 text-center"
        >
          Professional Experience
        </motion.h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#112240]/80 backdrop-blur-sm p-8 rounded-lg hover:shadow-lg hover:shadow-[#64ffda]/10 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-8">
                {/* Company Logo */}
                <div className="flex-shrink-0 flex items-start justify-center">
                  <a 
                    href={exp.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative"
                  >
                    <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center p-2 overflow-hidden transition-transform duration-300 group-hover:scale-105">
                      <img 
                        src={exp.logo} 
                        alt={`${exp.company} logo`} 
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                      <FaExternalLinkAlt className="text-white" />
                    </div>
                  </a>
                </div>

                {/* Experience Details */}
                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-2xl font-bold text-[#ccd6f6]">
                      {exp.title}
                    </h3>
                    <span className="text-xl" style={{ color: exp.color }}>
                      @ <a 
                          href={exp.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:underline inline-flex items-center gap-1"
                        >
                          {exp.company}
                          <FaExternalLinkAlt className="text-xs" />
                        </a>
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-6 mt-2 text-[#8892b0] mb-6">
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="text-[#64ffda]" />
                      <span>{exp.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-[#64ffda]" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.description.map((desc, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * i }}
                        className="flex items-start gap-3 text-[#8892b0]"
                      >
                        <div className="mt-1.5 text-[#64ffda]">▹</div>
                        <div>{desc}</div>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Bottom Border with Company Color */}
              <div 
                className="h-1 w-full mt-6 rounded-full" 
                style={{ background: `linear-gradient(90deg, ${exp.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 bg-[#112240]/80 backdrop-blur-sm p-8 rounded-lg"
        >
          <div className="flex items-center gap-3 mb-6">
            <FaBriefcase className="text-[#64ffda] text-2xl" />
            <h3 className="text-2xl font-bold text-[#ccd6f6]">Positions of Responsibility</h3>
          </div>
          
          <div className="bg-[#1a1a1a]/50 p-6 rounded-lg hover:bg-[#1a1a1a]/70 transition-colors duration-300">
            <h4 className="text-[#ccd6f6] font-bold text-lg mb-2">SAE COLLEGIATE CLUB MMMUT CHAPTER</h4>
            <p className="text-[#8892b0]">Executive Member</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience; 