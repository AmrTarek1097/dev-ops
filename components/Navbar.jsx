"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";

const Navbar = ({ onClick }) => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/#Services" },
    { name: "Training Programs", link: "/#Training" },
    { name: "About Us", link: "/#WhoWeAre" },
    { name: "Portfolio", link: "/#Portfolio" },
  ];
  let [open, setOpen] = useState(false);
  const router = useRouter();
  const handleClick = () => { router.push('/Form')};

  return (
    <div className="shadow-lg w-full fixed top-0 left-0 z-20">
      <div className="md:flex items-center justify-between Lime-color md:px-6 px-none">
        {/* logo section */}
        <div className="font-bold text-2xl cursor-pointer flex items-center ">
          <img src="/images/T logo 1.svg" />
        </div>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-16 top-10 cursor-pointer md:hidden w-7 h-7 text-black text-4xl"
        >
          {open ? <MdClose /> : <MdMenu />}
        </div>
        {/* linke items */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-4 text-center absolute md:static z-10	left-0 w-full md:w-auto md:pl-0 transition-all duration-500 ease-in ${
            open ? "Lime-color" : "hidden"
          }`}
        >
          {Links.map((link, index) => (
            <li
              key={index}
              className=" md:my-0 my-7 me-6 mx-7 font-medium lg:text-lg text-md"
            >
              <a
                href={link.link}
                className="text-center text-stone-500 hover:text-[#98AB26]"
              >
                {link.name}
              </a>
            </li>
          ))}
          <button
            onClick={handleClick}
            className="lg:text-lg text-md bg-white border-2 text-[#98AB26] border-[#98AB26]  px-4 py-2 ms-2 rounded-md  focus:outline-none"
          >
            Contact Us
          </button>
        </ul>
        {/* button */}
      </div>
    </div>
  );
};

export default Navbar;
