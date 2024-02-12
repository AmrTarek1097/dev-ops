import React from 'react'
import { twMerge } from "tailwind-merge";

const Button = ({ children, onClick, color, className }) => {
  return (
     <button
    className={twMerge(
      "rounded bg-[#98AB26] text-white text-md font-normal px-6 h-12", /////////////////
      
      color === "secondary" &&
        "bg-gradient-to-l from-amber-600 to-amber-500",
      
      className
    )}
    onClick={onClick}
  >
    {children}
  </button>
  )
}

export default Button