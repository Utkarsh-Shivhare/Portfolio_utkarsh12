// import React from "react";
import Expcard from "./Expcard";  // Import the reusable card

const Experience = () => {
  return (
    <div id="experience" className="py-12 font-titleFont bg-black">
          <div className="flex justify-center items-center text-center">
          <h2 className='text-4xl font-bold mb-4 primary-color '>Experience/Achievements</h2>
      </div>
      <div className="w-full h-auto flex flex-col items-start justify-start max-w-6xl mx-auto">



        <div className="w-full relative">
          {/* Vertical timeline line */}
          <div className="absolute left-10 top-0 h-full border-l-4 border-blue-600"></div>

          <div className="ml-16 space-y-8">
            {/* Use the reusable `Expcard` component and pass dynamic props */}
            <Expcard
              company="TRAILYTICS | Python Developer - Principal Data Scientist"
              title="Remote"
              time=" Feb 2023 "
              description="Specialized in advancing Web Scraping, Web Automation, and Sales Prediction, boosting efficiency by 25%. Handled a team of 10-15 members. Collaborated with clients like Nivea, Mondelez, Mars, Wipro, and Himalaya."
            />

            <Expcard
              company="ATIGRO | Automation and AI Engineer"
              title="Remote"
              time=" Nov 2023"
              description="Automated 30+ web tasks efficiently. Contributed to developing AI tools optimized by 10-15%"
            />

            <Expcard
              company="AIPROFF | ML IoT Engineer"
              title="Remote"
              time="Dec 2024"
              description="Implemented Edge-AI on various ARM boards (Jetson Nano, Raspberry Pi). Worked on Computer Vision, fine-tuning models for a 96% accuracy boost. Developed efficient IoT devices, optimizing cost and performance by 20-30%."
            />

          

          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
