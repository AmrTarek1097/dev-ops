import React from "react";

const TestimonialsCard = () => {
  return (
    <div className="custom_shadow px-6 space-y-7 rounded-lg my-8 text-black">
      <div className="border-b py-8">
        <p className="text-lg font-normal leading-8">
          CWD's cloud services are expected to bolster data security through
          advanced measures, safeguarding sensitive information and ensuring
          compliance with industry standards.
        </p>
      </div>
      <div className="flex pb-4 gap-8">
        <img src="./images/TestmonialsImage.svg" alt="" />
        <div className="flex-col items-center justify-center ">
          <h2 className="text-xl font-semibold pt-2">Tala wick</h2>
          <p className="text-lg font-normal">CEO, Dunder Miflen</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
