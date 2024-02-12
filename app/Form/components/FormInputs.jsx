"use client";
import React, { useState } from "react";
import Button from "../../../components/sharedComponents/Button";
import ServiceDD from "./ServiceDD";
import ServicePreferenceDD from "./ServicePreferenceDD";
import CountryDD from "./CountryDD";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { sendContactForm } from "./contact";
import StartFirebase from "../../Seed/firebase";
import { uid } from "uid";
import { getDatabase, ref, set } from "firebase/database";

const FormInputs = () => {
  const [selectedSP, setSelectedSP] = useState("Please Select");
  const [selectedS, setSelectedS] = useState("Please Select");
  const [selectedC, setSelectedC] = useState("Please Select");
  const [displayServiceSPError, setDisplayServiceSPError] = useState(false);
  const [displayServiceError, setDisplayServiceError] = useState(false);
  const [displayCountryError, setDisplayCountryError] = useState(false);
  
  const handleSetValue = (option) => {
    setValue("service", option, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
    // setShoices(option)
    // console.log(option)
    // console.log(shoices)
  };
  
  const form = useForm();
  const { register, control, handleSubmit, formState, setValue } = form;
  const { errors } = formState;
  // const fun =()=>{

  //   handleSubmit(onSubmit) : '';
  // }

  const onSubmit = async (data) => {
    let values;
    let values2;
    if (
      selectedSP !== "Please Select" &&
      selectedS !== "Please Select" &&
      selectedC !== "Please Select"
    ) {
      values = {
        Fname: data.firstName,
        Sname: data.secondName,
        email: data.email,
        phone: data.phone,
        servicePreference: selectedSP,
        service: selectedS,
        country: selectedC,
        message: data.message,
        file: data.file,
      };
      values2 = {
        Fname: data.firstName,
        Sname: data.secondName,
        email: data.email,
        phone: data.phone,
        servicePreference: selectedSP,
        service: selectedS,
        country: selectedC,
        message: data.message,
      };
    } else if (selectedSP === "Please Select" && selectedS === "Please Select" && selectedC === "Please Select") {
      setDisplayServiceSPError(true);
      setDisplayServiceError(true);
      setDisplayCountryError(true);
    } else if (selectedSP !== "Please Select" && selectedS === "Please Select" && selectedC === "Please Select") {
      setDisplayCountryError(true);
      setDisplayServiceError(true);
    } else if (selectedSP !== "Please Select" && selectedS !== "Please Select" && selectedC === "Please Select") {
      setDisplayCountryError(true);
    } else if (selectedSP === "Please Select" && selectedS === "Please Select" && selectedC !== "Please Select"){
      setDisplayServiceSPError(true);
      setDisplayServiceError(true);
    }else if (selectedSP === "Please Select" && selectedS !== "Please Select" && selectedC !== "Please Select"){
      setDisplayServiceSPError(true);
    }else if (selectedSP === "Please Select" && selectedS !== "Please Select" && selectedC === "Please Select"){
      setDisplayServiceSPError(true);
      setDisplayCountryError(true);
    }
    //console.log(values)
    // console.log(displayError)
    await sendContactForm(values2);
    const id = uid(8);
    const db = StartFirebase();
    await set(ref(db, 'contacts/' + id), {
      id: id,
      Fname: data.firstName,
      Sname: data.secondName,
      email: data.email,
      phone: data.phone,
      servicePreference: selectedSP,
      service: selectedS,
      country: selectedC,
      message: data.message,
      status:"Not Viewed"
  });
  alert("Sent Email Successfully");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        action="#"
        method="post"
        id="contact_us"
        className="flex flex-col md:gap-y-3 gap-y-1"
      >
        <div className="flex md:gap-x-10 gap-x-4">
          <div className="w-full space-y-1">
            <label
              className="block text-sm font-normal text-gray-700 mb-1"
              htmlFor="firstName"
            >
              First Name <span className="text-[#ed4141]">*</span>
            </label>
            <input
              className="w-full px-4 py-2 border rounded-md focus:outline-none border-[#98A2B3] focus:border-[#98AB26]"
              type="text"
              id="firstName"
              {...register("firstName", {
                required: "Please complete this required field",
              })}
              placeholder="Enter First Name"
            />
            <p className="text-[#ed4141] text-xs">
              {errors.firstName?.message}
            </p>
          </div>
          <div className="w-full space-y-1">
            <label
              className="block text-sm font-normal text-gray-700 mb-1"
              htmlFor="secondName"
            >
              Second Name <span className="text-[#ed4141]">*</span>
            </label>
            <input
              className="w-full px-4 py-2 border rounded-md focus:outline-none border-[#98A2B3] focus:border-[#98AB26]"
              type="text"
              id="secondName"
              {...register("secondName", {
                required: "Please complete this required field",
              })}
              placeholder="Enter Second Name"
            />
            <p className="text-[#ed4141] text-xs">
              {errors.secondName?.message}{" "}
            </p>
          </div>
        </div>
        <div className="w-full space-y-1">
          <label
            className="block text-sm font-normal text-gray-700 mb-1"
            htmlFor="email"
          >
            Email <span className="text-[#ed4141]">*</span>
          </label>
          <input
            className="w-full px-4 py-2 border rounded-md focus:outline-none border-[#98A2B3] focus:border-[#98AB26]"
            type="email"
            id="email"
            {...register("email", {
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Please enter valid email",
              },
              required: "Please complete this required field",
            })}
            placeholder="Enter Email Address"
          />
          <p className="text-[#ed4141] text-xs">{errors.email?.message} </p>
        </div>
        <div className="w-full space-y-1">
          <label
            className="block text-sm font-normal text-gray-700 mb-1"
            htmlFor="phone"
          >
            Phone Number <span className="text-[#ed4141]">*</span>
          </label>
          <input
            className="w-full px-4 py-2 border rounded-md focus:outline-none border-[#98A2B3] focus:border-[#98AB26]"
            type="text"
            id="phone"
            {...register("phone", {
              required: "Please complete this required field",
            })}
            placeholder="Enter Phone Number"
          />
          <p className="text-[#ed4141] text-xs">{errors.phone?.message}</p>
        </div>
        <div className="w-full space-y-1">
          <label
            className="block text-sm font-normal text-gray-700 mb-1"
            htmlFor="company"
          >
            Company Name <span className="text-[#ed4141]">*</span>
          </label>
          <input
            className="w-full px-4 py-2 border rounded-md focus:outline-none border-[#98A2B3] focus:border-[#98AB26]"
            type="text"
            id="company"
            {...register("company", {
              required: "Please complete this required field",
            })}
            placeholder="Enter Company Name"
          />
          <p className="text-[#ed4141] text-xs">{errors.company?.message}</p>
        </div>

        <ServicePreferenceDD
          selectedSP={selectedSP}
          setSelectedSP={setSelectedSP}
          handleSetValue={handleSetValue}
          displayServiceSPError={displayServiceSPError}
          setDisplayServiceSPError={setDisplayServiceSPError}
        />
        <div className="flex md:gap-x-12 gap-x-4">
          <ServiceDD
            selectedS={selectedS}
            setSelectedS={setSelectedS}
            handleSetValue={handleSetValue}
            displayServiceError={displayServiceError}
            setDisplayServiceError={setDisplayServiceError}
          />
          <CountryDD
            selectedC={selectedC}
            setSelectedC={setSelectedC}
            handleSetValue={handleSetValue}
            displayCountryError={displayCountryError}
            setDisplayCountryError={setDisplayCountryError}
          />
        </div>

        <div className="w-full space-y-1">
          <label
            className="block text-sm font-normal text-gray-700 mb-1"
            htmlFor="message"
          >
            Message (optional)
          </label>
          <textarea
            className="w-full px-4 py-2 border rounded-md focus:outline-none border-[#98A2B3] focus:border-[#98AB26]"
            type="text"
            id="message"
            {...register("message")}
            rows="5"
            cols="50"
            placeholder="Additional comments/Questions "
          />
        </div>
        <div className="w-full space-y-1">
          <label
            className="block text-sm font-normal text-gray-700 mb-1"
            htmlFor="file"
          >
            Have a file to share? (optional)
          </label>
          <input
            className="w-full px-4 py-2 border rounded-md focus:outline-none border-[#98A2B3] focus:border-[#98AB26]"
            type="file"
            id="file"
            {...register("file")}
            placeholder="Select or Drop a file here"
          />
        </div>
        <div className="flex justify-center mt-4">
          <Button className="w-4/12">Submit</Button>
        </div>
      </form>
      {/* <DevTool control={control} /> */}
    </>
  );
};

export default FormInputs;
