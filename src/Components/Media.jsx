import React from 'react';
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode, SiCodeforces, SiCodechef } from 'react-icons/si'; // Importing icons from react-icons

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between text-white">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4 text-bold">
          Find me in
        </h2>
        <div className="flex gap-4">
          <a href="https://github.com/Utkarsh-Shivhare">
            <span className="bannerIcon">
              <BsGithub size={28} /> {/* Increased size */}
            </span>
          </a>
          <a href="https://www.linkedin.com/in/utkarsh-shivhare/">
            <span className="bannerIcon">
              <FaLinkedinIn size={28} /> {/* Increased size */}
            </span>
          </a>
          <a href="https://leetcode.com/u/aspirers04/"> {/* Replace with your LeetCode profile link */}
            <span className="bannerIcon">
              <SiLeetcode size={28} /> {/* Increased size and added color */}
            </span>
          </a>
          <a href="https://codeforces.com/profile/aspirers04"> {/* Replace with your Codeforces profile link */}
            <span className="bannerIcon">
              <SiCodeforces size={28}/> {/* Increased size and added color */}
            </span>
          </a>
          <a href="https://www.codechef.com/users/aspirers04"> {/* Replace with your CodeChef profile link */}
            <span className="bannerIcon">
              <SiCodechef size={28} /> {/* Increased size and added color */}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Media;
