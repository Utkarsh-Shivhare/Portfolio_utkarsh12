import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import video from '../assets/animation.mp4'; // Import the video file
import Media from './Media';


const Hero = () => {
    return (
        <div className='relative max-w-[1200px] h-full mx-auto py-8 bg-black justify-center items-center'>
           

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div className='col-span-1 px-5 my-auto justify-center items-center p-2'>
                    <h1 className='text-white text-4xl sm:text-7xl lg:text-4xl font-bold'>
                        <span className='primary-color text-2xl'>
                            I'm a
                        </span> <br />
                        <TypeAnimation
                            sequence={[
                                "Data Analyst", 1000,
                                "Python Developer", 1000,
                                "Software Developer", 1000,
                            ]}
                            wrapper='span'
                            speed={50}
                            repeat={Infinity} />
                    </h1>
                    <p className='text-white sm:text-lg my-6 lg:text-xl'>
                        My Name is Utkarsh Shivhare. I am Keen to learn new skills and enjoy my work.
                    </p>
                    <div className='my-8 '>
                        <a href='https://drive.google.com/file/d/1sIrhHnwiYLIpgurmH_0tesGYvKWs3fPA/view' target='blank' className='px-6 text-[#fff] py-3 w-full rounded-xl mr-4 bg-gradient-to-tr from-blue-900 to-[#67e8f9] '>
                            Download CV</a>
                        <a href='#context' className='px-6 py-3 w-full rounded-xl border border-gray-400 hover:bg-gradient-to-tr from-blue-900 to-[#67e8f9] text-white hover:border-none'>Context</a>
                    </div>
                    <Media />
                </div>
                <div className='col-span-1 my-auto mx-auto justify-center items-center'>
                    <div className='w-[600px] h-[400px] lg:w-[500px] lg:h-[350px] p-3 border-2 border-[#67e8f9] rounded-lg overflow-hidden shadow-lg shadow-[#67e8f9]'>
                        <video className='mt-2 h-full w-full object-cover' autoPlay loop muted>
                            <source src={video} type='video/mp4' />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
