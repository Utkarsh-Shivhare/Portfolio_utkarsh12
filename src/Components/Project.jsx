// 

import React from 'react';
import p1 from "../assets/img1.1.jpeg"
import p2 from "../assets/img1.2.jpeg"
import p3 from "../assets/img1.3.jpeg"
import ProjectCard from './ProjectCard';

const Project = () => {
  return (
    <section
      id="project"
      className="w-full border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <h2 className='text-4xl font-bold my-4 p-2 primary-color'>My Projects</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
      <ProjectCard
          title="CARS PRICE PREDICTION"
          des="Created a machine learning model to predict car prices based on 20+ features. Used Linear Regression to achieve 82% prediction accuracy. Conducted data formatting and analysis with 50+ graphs."
          src={p1}
          git="https://github.com/Utkarsh-Shivhare/Cars-Prediction"
        />
        <ProjectCard
          title="AI DRONE CONTROLLING"
          des="Utilized Edge-AI technology to manufacture drones. Built an object detection model using the YOLO framework with 93.8% accuracy. Developed a compact, industry-ready drone and established communication with an ARM board."
          src={p2}
          git="https://github.com/Utkarsh-Shivhare/AI-Drone-Controlling"
        />
        <ProjectCard
          title="IMAGE CAPTIONING"
          des=" Implemented Natural Language Processing (NLP) techniques. Fine-tuned a pre-trained model to extract image features with 98% accuracy. Generated image captions with 84% accuracy using extracted features."
          src={p3}
          git="https://github.com/Utkarsh-Shivhare/Image_Captioning"
        />
      </div>
    </section>
  );
}

export default Project