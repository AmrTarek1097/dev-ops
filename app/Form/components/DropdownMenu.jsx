// // DropdownMenu.js
// "use client";
// import React, { useState } from "react";
// import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

// const DropdownMenu = ({ label, options, selected, setSelected }) => {


//   return (
//     <div className="relative inline-block text-left w-full space-y-2">
//       <label
//         className="block text-sm font-normal text-gray-700 mb-1"
//         htmlFor="name"
//       >
//         {label} <span className="text-[#ed4141]">*</span>
//       </label>
//       <button
//         onClick={toggleMenu}
//         type="button"
//         className="inline-flex justify-between w-full px-4 py-2 text-md font-medium text-gray-400 bg-white border border-[#98A2B3] rounded-md "
//       >
//         {selected}
//         {isOpen ? (
//           <IoMdArrowDropup className="text-xl text-black" />
//         ) : (
//           <IoMdArrowDropdown className="text-xl text-black" />
//         )}
//       </button>

//       {isOpen && (
//         <div className="absolute z-10 right-0 left-0 mt-2 origin-top-right bg-white border border-[#98A2B3] rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//           <div className="py-1">
//             {array?.map((option, index) => {
//               return (
//                 <a
//                   key={index}
//                   onClick={() => {
//                     setSelected(option);
//                     setIsOpen(false);
//                   }}
//                   className="block px-4 py-2 text-md font-medium text-gray-400 hover:bg-[#D9E6FF]"
//                 >
//                   {option}
//                 </a>
//               );
//             })}
//           </div>
//         </div>
//       )}
//       <p className="text-[#ed4141] text-xs">
//         Please complete this required field
//       </p>
//     </div>
//   );
// };

// export default DropdownMenu;
