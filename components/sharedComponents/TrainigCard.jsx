"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import Button from "./Button";
// import { useRouter } from "next/navigation";

const TrainigCard = ({ className, title, children, img, training = true }) => {
  //   const router = useRouter();
  // const handleClick =()=>{
  //   router.push('/Training');
  // }

  const btn1 = (
    <div className="flex items-center justify-between">
      <a
        target="_blank"
        href="https://wa.me/+201030516117/?text= أريد أن أستفتسر عن برنامج التدريب"
      >
        <Button className="w-28 h-9 px-8 py-1.8">Apply</Button>
      </a>
      <div className="w-fit">
        <a href="/Training" className="text-[#98AB26] flex space-x-2">
          <p>Read More</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M14 18L12.6 16.55L16.15 13H4V11H16.15L12.6 7.45L14 6L20 12L14 18Z"
              fill="#98AB26"
            />
          </svg>
        </a>
      </div>
    </div>
  );

  const btn2 = (
    <div className="flex items-center justify-center">
      <Button className="h-9 py-1.8 bg-[#A0A581]">Coming Soon</Button>
    </div>
  );

  return (
    <div
      className={twMerge(
        "p-4 flex flex-col space-y-3 border border-[#98AB26] rounded-md bg-white",
        className
      )}
    >
      <img
        className="Rectangle2"
        style={{
          background: "linear-gradient(0deg, #D9D9D9 0%, #D9D9D9 100%)",
          borderRadius: 8,
        }}
        src={img}
      />

      <p className="text-zinc-800 text-lg font-medium">{title}</p>
      <p className="text-neutral-400 text-base font-normal">{children}</p>

      {training ? btn1 : btn2}
    </div>
  );
};

export default TrainigCard;
