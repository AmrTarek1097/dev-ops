import React from "react";
import { twMerge } from "tailwind-merge";
import { useRouter } from "next/navigation";

const ServicesCard = ({ className, title, children }) => {

  const router = useRouter();
  
  const handleClick =()=>{
    router.push('/Service');
  }

  return (
    <div className={twMerge("p-6 flex flex-col space-y-2", className)}>
      <p className="text-zinc-800 text-lg font-semibold">{title}</p>
      <p className="text-neutral-400 text-base font-normal">{children}</p>

      <div className="w-fit">
       
          <button onClick={handleClick} className="text-[#98AB26] flex space-x-2">
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
              </button>
       
      </div>
    </div>
  );
};

export default ServicesCard;
