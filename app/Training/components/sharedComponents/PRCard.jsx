import React from "react";
import Rating from "@mui/material/Rating";

const PRCard = () => {
  return (
    <div className="w-11/12 space-y-4 text-black border-t border-gray-300 my-3">
      <div className="flex items-center py-2 gap-2">
        <img className="w-2/12" src="./images/TestmonialsImage.svg" alt="" />
        <div className="flex-col items-center justify-center ">
          <h2 className="text-xl font-semibold pt-2">Tala wick</h2>
          <div className="flex items-center gap-3">
            <Rating
              className="md:text-sm text-xs"
              name="read-only"
              value={5}
              readOnly
            />
            <p className="md:text-sm text-xs font-normal"> a month ago</p>
          </div>
        </div>
      </div>
      <div>
        <p className="md:text-md text-sm font-normal leading-8">
          Lorem ipsum dolor sit amet consectetur. Senectus vel consectetur
          commodo mauris amet.
        </p>
      </div>
    </div>
  );
};

export default PRCard;
