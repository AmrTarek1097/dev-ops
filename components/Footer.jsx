import React from "react";
import {
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialTwitter,
} from "react-icons/sl";
// import "../app/globals.css";

export default function Footer() {
  return (
    <div className="footer bg-[#617262] py-20">
      <div className="flex-1 flex justify-around flex-col sm:flex-row px-10">
        <div className="">
          {/* Logo on the left */}
          <img loading="lazy loading" src="/images/T logo 2.svg" />
        </div>

        <div className="px-10 lg:px-1 ">
          <h3 className=" text-xl  text-white mb-5 font-semibold">Services</h3>
          <ul className="text-white text-base font-light flex flex-col gap-3">
            <li className="mb-2 ">Cloud Services</li>
            <li className="mb-2 ">Web Development</li>
            <li className="mb-2">DevOps Solutions</li>
            <li className="mb-2">Hiring </li>
            <li className="mb-2">Training</li>
          </ul>
        </div>

        <div className="px-10 lg:px-1 sm:pt-0 pt-10">
          <h3 className="text-xl  text-white mb-5 font-semibold">
            Talk to us{" "}
          </h3>
          <ul className="text-white text-base font-light flex flex-col gap-5">
            <li className="mb-2">Email: sales@cwd-solutions.com </li>
            <li className="mb-2">Number: +971 55 256 8756 </li>
            <li className="mb-2">
              Address: D131 kenz compound, Hadayek October, 6th of October,
              Giza, Egypt{" "}
            </li>
          </ul>
        </div>

        <div className="text-white px-10 lg:px-1 sm:pt-0 pt-10 justify-center  items-center">
          <p className="sm:flex hidden mb-5 font-semibold">Social</p>
          <div>
            <ul className=" text-white text-2xl flex sm:flex-col sm:space-y-6 text-center">
              <li>
                <a target="_blank" href="https://www.linkedin.com/company/cwd-solutions/" className="text-white hover:underline">
                  <SlSocialLinkedin />
                </a>
              </li>
              <li className="sm:ml-0 ml-6">
                <a target="_blank" href="https://www.facebook.com/people/CWD-Solutions/61552121903140/?mibextid=9R9pXO" className="text-white hover:underline">
                  <SlSocialFacebook />
                </a>
              </li>
              {/* <li className="sm:ml-0 ml-6">
                <a href="#" className="text-white hover:underline">
                  <SlSocialTwitter />
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
