import React from "react";

const ProjectObj = () => {
  return (

    <section className="container mx-auto flex flex-col-reverse md:flex-row items-center md:space-x-20 text-black py-12">
      <img src="/images/Portfolio/Goal-rafiki 1.svg" alt="" />
      <div className="flex-col space-y-4">
        <h2 className="sm:text-3xl text-xl font-semibold">
          Project objectives
        </h2>
        <p className="sm:text-lg text-md font-normal leading-8">
          Our primary objectives included improving tracking accuracy, enhancing
          real-time monitoring capabilities, and addressing the limitations of
          existing tracking systems. The project aimed to deliver a robust
          solution capable of adapting to the dynamic nature of tracking
          requirements in Saudi Arabia.
        </p>
      </div>
    </section>
    
  );
};

export default ProjectObj;
