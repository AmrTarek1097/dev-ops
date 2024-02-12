import React from "react";

const HeroSection = () => {
  return (
    <section
      id="Hero"
      className="portfolio_hero bg-[#ecefd699] text-black mx-auto xs:pb-32 md:pb-22 lg:pb-10 sm:mt-28 mt-24 md:mb-16 mb-none relative overflow-hidden"
    >
       <img
            className="w-3/12 absolute -top-20 left-1/3 hidden lg:flex"
            src="/images/Portfolio/Vector-1.svg"
            alt="Right Content Image"
          />
          <img
            className="w-3/12 absolute -bottom-0 left-1/3 hidden lg:flex"
            src="/images/Portfolio/Vector.svg"
            alt="Right Content Image"/>

      <div className="sm:ml-8 flex sm:px-12 px-2 lg:px-0 mx-auto flex-col sm:flex-row items-center ">
        {/* Left part */}
        <div className="md:w-8/12 w-8/12 sm:pr-8 xs:mt-20 sm:mt-0 text-center sm:text-left">
          <p className="lg:text-[34px] xs:text-[18px] font-normal ">
            Portfolio
          </p>
          <h1 className="lg:text-[56px] md:text-[40px] xs:text-[20px] font-bold mb-4">
            The innovative solution for managing your own company{" "}
          </h1>
          <p className="lg:text-[24px] xs:text-[16px] font-normal text-[#878787]">
            Mdawm is your way to get rid of the time of the traditional
            fingerprint device and follow your company in the easiest way
            possible
          </p>

          {/* Add any other content or components as needed */}
        </div>
        {/* <div className="right-1/3 z-0 absolute"> */}
         
        {/* </div> */}
        {/* Right part */}
        <div className="md:w-6/12 ">
          {/* Add your image or any other content for the right part */}
          <img
            className="w-full"
            src="/images/Portfolio/mdawm-logo 1.svg"
            alt="Right Content Image"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
