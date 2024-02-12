import React from "react";
import Button from "../../../components/sharedComponents/Button";
import FormInputs from "./FormInputs";

const FormSec = () => {
  return (
    <div className="w-10/12 mx-auto flex-col space-y-24 text-black py-12 mt-20">
      <div>
        <h2 className="text-3xl font-semibold text-center py-8">Let’s talk</h2>
        <p className="text-center text-2xl font-normal leading-8">
          Just fill out this form and we will contact you shortly to discuss
          your needs.
        </p>
      </div>
      <div className="w-full flex sm:flex-row flex-col-reverse items-center justify-center lg:gap-x-32 md:gap-x-24 gap-x-6">
        <div className="bg-[#F1F3E1] md:w-5/12 w-full flex flex-col items-center rounded-lg text-center md:text-left gap-y-14 pt-28 pb-52 md:px-6 px-2 sm:mt-0 mt-10">
          <p className="text-xl text-[#333]">
            You also could book a meeting with one of our IT sales experts for
            tailored assistance.
          </p>
          <Button className='w-full'>BOOK A MEETING WITH US</Button>
          <img src="/images/Form/book a meeting.svg" alt="" />
        </div>
        <div className="md:w-7/12 w-full">
         <FormInputs/>
        </div>
      </div>
    </div>
  );
};

export default FormSec;
