import React from "react";
import Button from "../../../components/sharedComponents/Button";

const HeroSection = () => {
  return (
    <section
      id="Hero"
      className="bg-[#ecefd699] text-black mx-auto xs:pb-32 md:pb-22 lg:pb-10 sm:mt-28 mt-24 md:mb-16 mb-none"
    >
      <div className="sm:ml-8 flex sm:px-12 px-2 lg:px-0 mx-auto flex-col-reverse sm:flex-row items-center ">
        {/* Left part */}
        <div className="md:w-1/2 w-full sm:pr-8  text-center sm:text-left">
          <p className="lg:text-[34px] xs:text-[18px] font-normal ">
            CLOUD SERVICES
          </p>
          <h1 className="lg:text-[56px] md:text-[40px] xs:text-[20px] font-bold mb-4">
          Scalable Solutions, Secure Infrastructure.
          </h1>
          <p className="lg:text-[24px] xs:text-[16px] font-normal text-[#878787]">
          Navigate the Cloud with Confidence. Leverage the power of leading cloud platforms with our comprehensive cloud services.
          </p>
          <div className="lg:flex hidden items-center justify-center sm:gap-10 gap-4 mt-16">
            <Button className="w-56">Request Demo</Button>
            <Button className="w-56">Request Consultation</Button>
          </div>

          {/* Add any other content or components as needed */}
        </div>

        {/* Right part */}
        <div className="md:w-6/12 ">
          {/* Add your image or any other content for the right part */}
          <img
            className="w-full"
            src="/images/Server-bro 1.svg"
            alt="Right Content Image"
          />
        </div>
      </div>
      <div className="flex lg:hidden items-center justify-center sm:gap-10 gap-4 mt-16">
        <Button className="w-56">Request Demo</Button>
        <Button className="w-56">Request Consultation</Button>
      </div>
    </section>
  );
};

export default HeroSection;
