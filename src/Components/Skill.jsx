import React from 'react';
import { FaHtml5, FaCss3Alt, FaJava, FaJsSquare, FaGitAlt, FaLinux, FaAws, FaRaspberryPi,} from 'react-icons/fa';
import { SiCplusplus, SiC, SiTensorflow, SiMysql,SiFlask, SiPytorch, SiMongodb, SiScrapy, SiOpencv, SiAutodesk, SiSelenium } from 'react-icons/si';
import { GiJetFighter } from 'react-icons/gi';
import { MdFlightTakeoff } from 'react-icons/md'; 

const Skill = () => {
  return (
    <div className='text-gray-400 max-w-[1200px] mx-auto py-12'>
      {/* Heading */}
      <h2 className='text-white text-center text-3xl md:text-4xl font-bold mb-8'>
        I am Proficient In...
      </h2>

      {/* Icon Grid */}
      <div className='flex flex-wrap justify-center'>
        {/* Icon Components */}
        <div className='flex flex-col items-center m-4 w-[80px] md:w-[100px]'>
          <SiC className='text-6xl text-[#A8B9CC]' />
          <p className='mt-2'>C</p>
        </div>
        <div className='flex flex-col items-center m-4 w-[80px] md:w-[100px]'>
          <SiCplusplus className='text-6xl text-[#00599C]' />
          <p className='mt-2'>C++</p>
        </div>
        <div className='flex flex-col items-center m-4 w-[80px] md:w-[100px]'>
          <FaJava className='text-6xl text-[#007396]' />
          <p className='mt-2'>Java</p>
        </div>
        <div className='flex flex-col items-center m-4 w-[80px] md:w-[100px]'>
          <SiMysql className='text-6xl text-[#4479A1]' />
          <p className='mt-2'>SQL</p>
        </div>
        <div className='flex flex-col items-center m-4 w-[80px] md:w-[100px]'>
          <FaHtml5 className='text-6xl text-[#E34F26]' />
          <p className='mt-2'>HTML</p>
        </div>
        <div className='flex flex-col items-center m-4 w-[80px] md:w-[100px]'>
          <FaCss3Alt className='text-6xl text-[#1572B6]' />
          <p className='mt-2'>CSS</p>
        </div>
        <div className='flex flex-col items-center m-4 w-[80px] md:w-[100px]'>
          <FaJsSquare className='text-6xl text-[#F7DF1E]' />
          <p className='mt-2'>JavaScript</p>
        </div>
        <div className='flex flex-col items-center m-4 w-[80px] md:w-[100px]'>
          <SiTensorflow className='text-6xl text-[#FF6F00]' />
          <p className='mt-2'>TensorFlow</p>
        </div>
        <div className='flex flex-col items-center m-4 w-[80px] md:w-[100px]'>
          <SiFlask className='text-6xl text-[#e9e5e5]' />
          <p className='mt-2'>Flask</p>
        </div>
        <div className='flex flex-col items-center m-4 w-[80px] md:w-[100px]'>
          <SiPytorch className='text-6xl text-[#EE4C2C]' />
          <p className='mt-2'>PyTorch</p>
        </div>
        <div className='flex flex-col items-center m-4 w-[80px] md:w-[100px]'>
          <SiMongodb className='text-6xl text-[#47A248]' />
          <p className='mt-2'>MongoDB</p>
        </div>
        <div className='flex flex-col items-center m-4 w-[80px] md:w-[100px]'>
          <SiScrapy className='text-6xl text-[#7F7F7F]' />
          <p className='mt-2'>Scrapy</p>
        </div>
        <div className='flex flex-col items-center m-4 w-[80px] md:w-[100px]'>
          <SiOpencv className='text-6xl text-[#5C3EE8]' />
          <p className='mt-2'>OpenCV</p>
        </div>
        <div className='flex flex-col items-center m-4 w-[80px] md:w-[100px]'>
          <SiSelenium className='text-6xl text-[#43B02A]' />
          <p className='mt-2'>Selenium</p>
        </div>
        <div className='flex flex-col items-center m-4 w-[80px] md:w-[100px]'>
          <FaAws className='text-6xl text-[#FF9900]' />
          <p className='mt-2'>AWS</p>
        </div>
        <div className='flex flex-col items-center m-4 w-[80px] md:w-[100px]'>
          <FaRaspberryPi className='text-6xl text-[#A22846]' />
          <p className='mt-2'>Raspberry Pi</p>
        </div>
       
        <div className='flex flex-col items-center m-4 w-[80px] md:w-[100px]'>
          <SiAutodesk className='text-6xl text-[#0696D7]' />
          <p className='mt-2'>Autodesk Fusion 360</p>
        </div>
        <div className='flex flex-col items-center m-4 w-[80px] md:w-[100px]'>
          <MdFlightTakeoff className='text-6xl text-[#607D8B]' />
          <p className='mt-2'>Mission Planner</p>
        </div>
        <div className='flex flex-col items-center m-4 w-[80px] md:w-[100px]'>
          <GiJetFighter className='text-6xl text-[#1C3D72]' />
          <p className='mt-2'>Fixed Wing</p>
        </div>
        <div className='flex flex-col items-center m-4 w-[80px] md:w-[100px]'>
          <FaGitAlt className='text-6xl text-[#F05032]' />
          <p className='mt-2'>Git</p>
        </div>
        <div className='flex flex-col items-center m-4 w-[80px] md:w-[100px]'>
          <FaLinux className='text-6xl text-[#FCC624]' />
          <p className='mt-2'>Linux</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
