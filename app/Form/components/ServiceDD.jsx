"use client";
import React,{ useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import {ref, onValue} from 'firebase/database';
import StartFirebase from "../../Seed/firebase";

const ServiceDD = ({selectedS, setSelectedS, handleSetValue, displayServiceError, setDisplayServiceError}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const db = StartFirebase();
  const dbRef = ref(db, "services");
  var services = [];
  onValue(dbRef, (snapshot)=>{
  snapshot.forEach(childSnapshot =>{
          var data = childSnapshot.val();
          if(data.status == "Available"){
            services.push(data.name);
          }
      });
  });

  const arr = [
    "Cloud Service",
    "Web Development",
    "DevOps solution",
    "Hiring",
    "Training",
  ];
  return (
    <div className="relative inline-block text-left w-full space-y-1">
    <label
      className="block text-sm font-normal text-gray-700 mb-1"
      htmlFor="name"
    >
      Select a Service <span className="text-[#ed4141]">*</span>
    </label>
    <button
      onClick={toggleMenu}
      type="button"
      className="inline-flex justify-between w-full px-4 py-2 text-md font-medium text-gray-400 bg-white border border-[#98A2B3] rounded-md "
    >
      {selectedS}
      {isOpen ? (
        <IoMdArrowDropup className="text-xl text-black" />
      ) : (
        <IoMdArrowDropdown className="text-xl text-black" />
      )}
    </button>

    {isOpen && (
      <div className="absolute z-10 right-0 left-0 mt-2 origin-top-right bg-white border border-[#98A2B3] rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="py-1">
          {services?.map((option, index) => {
            return (
              <a
                key={index}
                onClick={() => {
                  setSelectedS(option);
                  setIsOpen(false);
                  handleSetValue(option);
                  setDisplayServiceError(false)
                }}
                className="block px-4 py-2 text-md font-medium text-gray-400 hover:bg-[#D9E6FF] hover:cursor-pointer"
              >
                {option}
              </a>
            );
          })}
        </div>
      </div>
    )}
     {displayServiceError === true && <p className="text-[#ed4141] text-xs">Please select an option </p>}
  </div>
  )
}

export default ServiceDD