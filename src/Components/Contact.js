import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import ParticleBackground from './ParticleBackground';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log(formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

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
          <h2 className="text-4xl font-bold text-[#ccd6f6] mb-4">Get In Touch</h2>
          <p className="text-[#8892b0] text-lg max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            I'll do my best to get back to you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#112240]/80 backdrop-blur-sm p-6 rounded-lg"
          >
            <h3 className="text-2xl font-bold text-[#ccd6f6] mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-[#8892b0] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#0a192f] border border-[#233554] rounded-lg p-3 text-[#ccd6f6] focus:outline-none focus:border-[#64ffda] transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-[#8892b0] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#0a192f] border border-[#233554] rounded-lg p-3 text-[#ccd6f6] focus:outline-none focus:border-[#64ffda] transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-[#8892b0] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full bg-[#0a192f] border border-[#233554] rounded-lg p-3 text-[#ccd6f6] focus:outline-none focus:border-[#64ffda] transition-colors"
                ></textarea>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-6 py-3 bg-transparent border-2 border-[#64ffda] text-[#64ffda] rounded-lg hover:bg-[#64ffda]/10 transition-colors"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-[#112240]/80 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-[#ccd6f6] mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <FaEnvelope className="text-[#64ffda] text-xl mt-1" />
                  <div>
                    <h4 className="text-[#ccd6f6] font-semibold">Email</h4>
                    <a href="mailto:your.email@example.com" className="text-[#8892b0] hover:text-[#64ffda] transition-colors">
                      your.email@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <FaLinkedin className="text-[#64ffda] text-xl mt-1" />
                  <div>
                    <h4 className="text-[#ccd6f6] font-semibold">LinkedIn</h4>
                    <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="text-[#8892b0] hover:text-[#64ffda] transition-colors">
                      linkedin.com/in/your-linkedin
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <FaGithub className="text-[#64ffda] text-xl mt-1" />
                  <div>
                    <h4 className="text-[#ccd6f6] font-semibold">GitHub</h4>
                    <a href="https://github.com/aspirers04" target="_blank" rel="noopener noreferrer" className="text-[#8892b0] hover:text-[#64ffda] transition-colors">
                      github.com/aspirers04
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <FaMapMarkerAlt className="text-[#64ffda] text-xl mt-1" />
                  <div>
                    <h4 className="text-[#ccd6f6] font-semibold">Location</h4>
                    <p className="text-[#8892b0]">Gorakhpur, Uttar Pradesh, India</p>
                  </div>
                </div>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-[#112240]/80 backdrop-blur-sm p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold text-[#ccd6f6] mb-4">Let's Connect</h3>
              <p className="text-[#8892b0] mb-4">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/aspirers04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors"
                >
                  <FaGithub size={24} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://linkedin.com/in/your-linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors"
                >
                  <FaLinkedin size={24} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 