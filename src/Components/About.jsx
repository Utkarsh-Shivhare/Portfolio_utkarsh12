import React from 'react';
import about from '../assets/img2.jpg';

const About = () => {
  return (
    <div id='about' className='text-white mx-auto my-12 max-w-[1200px]'>
      <div className='md:grid md:grid-cols-3 sm:py-16'> {/* Change to 3 columns for layout */}
        
        <div className='md:col-span-2 flex flex-col justify-center'> {/* First two columns for text */}
      <h2 className='text-4xl font-bold mb-4 primary-color '>About Me</h2>

          
          <p className='lg:text-lg mb-4'>
            A dedicated B.Tech student in Computer Science and Engineering, graduating in 2025. Proficient in Python, C, C++, Java, and SQL, along with web development technologies like HTML, CSS, and JavaScript.
          </p>
          <p className='lg:text-lg'>
            Experienced as a Python Developer and Principal Data Scientist at TRAILYTICS, specializing in web scraping and automation, leading a team to enhance operational efficiency by 25%. As an ML IoT Engineer at AIPROFF, implemented Edge-AI on ARM boards, boosting model accuracy by 96%. Skilled in machine learning frameworks and libraries, including TensorFlow, OpenCV, and PyTorch, with hands-on experience in developing innovative AI solutions like object detection and image captioning. Familiar with Git, GitHub, and cloud platforms such as AWS and GCP. Actively involved in competitive programming, achieving over 500 solved problems on LeetCode and a 2-star rating on CodeChef. Recognized for achievements in national-level competitions, including Aerothon 2023.
          </p>
        </div>

        <div className='flex items-center justify-center'> {/* One column for image */}
          <img 
            src={about} 
            className='mx-auto rounded-3xl py-10 border-2 border-[#67e8f9]' 
            alt='About Me' 
            width={300} 
            height={300} 
          />
        </div>

      </div>
    </div>
  );
}

export default About;
