import React from "react";
import PortfolioCard from "./sharedComponents/PortfolioCard";
import Button from "./sharedComponents/Button";

const Portfolio = () => {
  return (
    <section id="Portfolio" className="container mx-auto text-black my-16 xs:px-4 md:px-16">
      <div className="w-fit">
        <h1 className="section-title font-bold mb-16 text-2xl">Portfolio </h1>
      </div>
      <div className="grid md:grid-cols-2 mx-auto gap-x-12 gap-y-6 ">
        <PortfolioCard title="Code Flow Optima" img='/images/Frame 39.svg'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </PortfolioCard>
        {/* <PortfolioCard title="Code Flow Optima" img='/images/Frame 39 (1).svg'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </PortfolioCard>
        <PortfolioCard title="Code Flow Optima" img='/images/Frame 39 (2).svg'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </PortfolioCard>
        <PortfolioCard title="Code Flow Optima" img='/images/Frame 39 (3).svg'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </PortfolioCard> */}
      </div>
      {/* <div className="flex items-center justify-center gap-10	 mt-16">
          <Button className="w-56 h-12">View more</Button>
        </div> */}
    </section>
  );
};

export default Portfolio;
