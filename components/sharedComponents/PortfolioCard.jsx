import React from "react";

const PortfolioCard = ({ title, children, img }) => {
  return (
    <>
      <a href="/Portfolio">
        <div className="flex flex-col">
          <img src={img} />

          <div className="p-6 border border-[#98AB26] rounded-b-md rounded-t bg-white ">
            <p className="text-zinc-800 text-lg font-medium">{title}</p>
            <p className="text-neutral-400 text-base font-normal py-2">
              {children}
            </p>

            <div className="flex justify-end">
              <img src="/images/Arrow 1.svg" />
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default PortfolioCard;
