// 

import React from "react";

const Expcard = ({ company, title, time, description }) => {
  return (
    <div className="relative group">
      {/* Left bubble for the timeline */}
      <div className="absolute -left-6 top-4 w-4 h-4 rounded-full bg-transparent border-2 border-blue-600 transition-all duration-300 group-hover:bg-blue-600"></div>

      {/* Experience card */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex justify-between items-center transition-all duration-300 group-hover:bg-gray-700">
        <div>
          {/* Company name */}
          <h3 className="text-xl font-semibold text-blue-500">{company}</h3>

          {/* Job role */}
          <p className="text-gray-300 mt-2">{title}</p>

          {/* Job description */}
          <p className="text-gray-400 mt-4">{description}</p>
        </div>

        {/* Time or Duration */}
        <span className="text-gray-400">{time}</span>
      </div>
    </div>
  );
};

export default Expcard;
