import React from "react";
import Button from "../../../components/sharedComponents/Button";
import Rating from "@mui/material/Rating";
const HeroSection = () => {
  return (
    <section
      id="Hero"
      className="bg-[#ecefd699] text-black mx-auto xs:pb-32 md:pb-22 lg:pb-10 py-8 sm:mt-28 mt-24 md:mb-16 mb-none"
    >
      <div className="w-full  flex justify-center sm:px-14 md:px-0 mx-auto flex-col sm:flex-row items-center ">
        {/* Left part */}
        <div className="md:w-7/12 w-full sm:pr-8 text-center sm:text-left">
          <p className="lg:text-[34px] sm:text-[28px] font-normal ">
            Training Programs
          </p>
          <h1 className="lg:text-[56px] md:text-[40px] xs:text-[28px] font-bold mb-4">
            DevOps Mastery Program
          </h1>
          <p className="lg:text-[24px] sm:text-[20px] font-normal text-[#878787]">
            Embark on this transformative journey and unlock the full potential
            of DevOps mastery!
          </p>

          {/* <div className="flex justify-center sm:justify-start">
            <div className="flex gap-2 mt-4">
              <p className="font-semibold text-lg text-[#F69C08]">4.0</p>
              <Rating name="read-only" value={3} readOnly />
              <a href="" className="underline text-[#6C74EA]">
                (5 rating)
              </a>
            </div>
          </div> */}

          <div className="flex flex-col sm:items-start items-center md:flex-row my-5 gap-8 ">
            <p className="font-normal text-lg ">
              {" "}
              Created by <span className="text-[#777777]">CWD’s Team</span>{" "}
            </p>

            <p className="flex gap-1 font-normal text-lg">
              {" "}
              <img src="/images/Traning/globe.svg" alt="" />
              English
            </p>
          </div>
        </div>

        {/* Right part */}
        <div className="w-11/12 md:w-3/12">
          {/* Add your image or any other content for the right part */}
          <div className="custom_shadow flex flex-col gap-4 w-full p-4 bg-white">
            <img className="w-full" src="/images/Training 1.png" alt="" />
            <h3 className="font-semibold text-lg">This Program includes:</h3>
            <p className="flex gap-3 font-normal text-sm">
              {" "}
              <img src="/images/Traning/time-past.svg" alt="" />3 month
              on-demand{" "}
            </p>
            <p className="flex gap-3 font-normal text-sm">
              {" "}
              <img src="/images/Traning/clipboard-list.svg" alt="" />
              Assignments
            </p>
            <p className="flex gap-3 font-normal text-sm">
              {" "}
              <img src="/images/Traning/download.svg" alt="" />
              Downloadable resources{" "}
            </p>
            <p className="flex gap-3 font-normal text-sm">
              {" "}
              <img src="/images/Traning/certificate.svg" alt="" />
              Certificate of completion
            </p>
            <a
              target="_blank"
              href="https://wa.me/+201030516117/?text= أريد أن أستفتسر عن برنامج التدريب"
            >
              <Button className="w-full h-10  text-center">Apply</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
