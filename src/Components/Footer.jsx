import React from "react";
import { FaLinkedin, FaGithub, FaCode } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="  border-t-2 border-blue-900 text-white py-6">
      <div className="container max-auto flex flex-col md:flex-row  justify-between items-center">
        {/* Portfolio Section */}
        <div className="mb-4  p-12  md:mb-0">
          <h1 className="text-bold text-4xl primary-color text-center">
           Utkarsh Shivhare
          </h1>
          <h2 className="text-xl font-semibold">My Portfolio</h2>
          <p className="text-gray-400 mt-2">Python Developer</p>
          <p className="text-gray-400">Contact: utkarshivhare26@gmail.com</p>
          <p className="text-gray-400">Location: Lucknow, Uttar Pradesh</p>
        </div>
        {/* Social Icons Section */}
        <div className="p-12">
          <h2 className="text-4xl font-bold mb-2 primary-color">Important Links</h2>
          <div className="flex flex-col space-y-2">
            <a
              href="https://www.linkedin.com/in/utkarsh-shivhare/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:hover:text-blue-500 transition-colors duration-300"
            >
              <FaLinkedin size={30} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/Utkarsh-Shivhare"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-pink-500 transition-colors duration-300"
            >
              <FaGithub size={30} />
              <span>GitHub</span>
            </a>

            <a
              href="https://leetcode.com/u/aspirers04/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-yellow-400  transition-colors duration-300"
            >
              <FaCode size={30} />
              <span>LeetCode</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
