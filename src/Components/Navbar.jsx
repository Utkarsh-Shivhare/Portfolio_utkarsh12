import React,{useState} from 'react';
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai';

const Navbar=()=>{
    const [Nav,setNav]=useState(false);
    const handleNav=()=>{
        setNav(!Nav);
    }
  return (
  
        <div className='bg-black text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center'>
            <h1 className='text-3xl font-bold primary-color ml-4'>Utkarsh.ai</h1>
            <ul className='hidden md:flex'>

                <li className='p-5'><a href='#about'>About</a></li>
                <li className='p-5'><a href='#project'>Project</a></li>
                <li className='p-5'><a href='#experience'>Experience/Achievements</a></li>
                <li className='p-5'><a href='#contact'>Contact</a></li>
                
            </ul>
            <div onClick={handleNav} className='block md:hidden mr-6'>
                {Nav ?<AiOutlineClose size={20} className='text-2xl text-white'/>:<AiOutlineMenu size={20} className='txt-2xl text-white'/> }
            </div>
            <div className={Nav ? 'fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500':'fixed left-[-100%]'}>
                <h1 className='text-3xl primary-color m-4'>Utkarsh.ai</h1>
                <ul className='p-8 text-2xl'>
                    <li className='p-2'><a href='#home'>Home</a></li>
                    <li className='p-2'><a href='#about'>About</a></li>
                    <li className='p-5'><a href='#experience'>Experience/Achievements</a></li>
                   <li className='p-2'><a href='#project'>Project</a></li>
                    <li className='p-2'><a href='#contact'>Contact</a></li>
                </ul>
            </div>
         </div>

    
  )
}
export default Navbar;