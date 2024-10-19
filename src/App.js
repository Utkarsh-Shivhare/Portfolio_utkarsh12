import React from 'react';

import Navbar from '../src/Components/Navbar';
import Hero from '../src/Components/Hero'
import Skill from '../src/Components/Skill'
import About from '../src/Components/About';
import Contact from '../src/Components/Contact';
import Footer from '../src/Components/Footer';
import Project from './Components/Project';
import Experience from './Components/Experience';
const App=()=>{
  return (
    <div >
      
      <Navbar/>
          <Hero/>
          <Skill/>
          <About/>
          <Project/>
          <Experience/>
          <Contact/>
      <Footer/>
      
     
    </div>
  )
}
export default App;