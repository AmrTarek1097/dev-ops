import React from 'react';
import HeroSection from './components/HeroSection';
import Overview from './components/OverView';
import ProjectObj from './components/ProjectObj';
import Architecture from './components/Architecture';
import Implementation from './components/Implementation';
import Conclusion from './components/Conclusion';

const page = () => {
  return (
    <>  
     <HeroSection/>
     <Overview/>
     <ProjectObj/>
     <Architecture/>
     <Implementation/>
     <Conclusion/>
    </>
  )
}

export default page