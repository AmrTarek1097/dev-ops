import React from "react";

const ContactUs = () => {
  return (
    <div className="w-10/12 mx-auto flex-col space-y-24 text-black py-12 mt-20  border-t-4 border-gray-200 ">
      <div>
        <h2 className="text-3xl font-semibold text-center py-8">Contact Us</h2>
        <p className="text-center text-2xl font-normal leading-8">
          Whether you're interested in our services or require support, feel
          free to connect with us via email, phone.
        </p>
      </div>
      <div className="flex justify-center  md:gap-64 gap-28">
        <div className="flex-col flex items-center w-2/12 gap-y-6">
          <img className="md:w-5/12 w-fit" src="/images/Form/Mail.svg" alt="" />
          <p>WCD@gmail.com</p>
        </div>
        <div className="flex-col flex items-center w-2/12 gap-y-6">
          <img className="md:w-5/12 w-fit" src="/images/Form/Call.svg" alt="" />
          <p>028678523454</p>
        </div>
        <div className="flex-col flex items-center w-2/12 gap-y-6">
          <img className="md:w-5/12 w-fit" src="/images/Form/Location.svg" alt="" />
          <p>Lorem ipsum dolor sit amet</p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-10">
        <p className="text-center text-2xl font-normal">Or through our social media channels.</p>
        <div className="flex justify-center gap-24">
            <a href=""><img  src="/images/Form/facebook-f.svg" alt="" /></a>
          

            <a href=""><img src="/images/Form/linkedin.svg" alt="" /></a>
          

            <a href=""><img src="/images/Form/twitter.svg" alt="" /></a>
          
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
