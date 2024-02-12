// HeroSection.js
"use client"
import React from 'react';
import Button from './sharedComponents/Button'
// import "../globals.css";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const router = useRouter();
  const handleClick = () => { router.push('/Form')};

  return (
    <section id='Hero' className="main_bg text-black  xs:pb-32 md:pb-22 lg:pb-10 sm:mt-28 mt-24 md:mb-16 mb-none">
    <div className="md:w-11/12 sm:ml-8 flex xs:px-12 px-none lg:px-0 md:mx-auto flex-col-reverse sm:flex-row items-center ">
      {/* Left part */}
      <div className="md:w-1/2 w-full sm:pr-8  text-center sm:text-left">
        <h1 className="lg:text-[56px] md:text-[40px] xs:text-[28px] font-bold mb-4">Welcome to CWD Solutions - Your Gateway to Digital Excellence! 🚀</h1>
        <p className="lg:text-[24px] sm:text-[20px] font-normal text-[#878787]">At CWD Solutions, we transcend traditional boundaries to deliver cutting-edge solutions in Cloud, Web Development, and DevOps.</p>
        <Button onClick={handleClick} className='mt-3 py-3'>GET IN TOUCH</Button>

        {/* Add any other content or components as needed */}
      </div>

      {/* Right part */}
      <div className="md:w-1/2 ">
        {/* Add your image or any other content for the right part */}
        <img
          className="w-full"
          src="/images/Illustration.png"
          alt="Right Content Image"
        />
      </div>
    </div>
  </section>
  );
};

export default HeroSection;
