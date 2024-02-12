import React from "react";
import Button from "../../../components/sharedComponents/Button";

const SubmitModal = ({ formSuccess, setFormSuccess }) => {
    const handleClose = () =>{
        setFormSuccess(false)
    }
  return (
    <div className={`${formSuccess ? "bg-[#000000c6]" : 'hidden'} fixed top-0 bottom-0 left-0 right-0 z-10 flex items-center justify-center`}>
      <div
        className={`${formSuccess ? "flex" : "hidden"} submit_modal rounded-lg shadow-lg p-5 z-10 bg-white text-center text-black flex-col items-center space-y-4 w-7/12 md:w-4/12 `}
      >
        {/* <div className="flex flex-col items-center space-y-4"> */}
          <img className="w-1/5" src="/images/success sign.svg" alt="" />
          <p className="font-semibold">Form has been submitted successfully </p>
          <p>We will contact you shortly </p>
          <form method="dialog">
            <Button onClick={handleClose}>Close</Button>
          </form>
        </div>
      </div>
    // </div>
  );
};

export default SubmitModal;
