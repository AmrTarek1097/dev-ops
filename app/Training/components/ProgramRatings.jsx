import React from "react";
import PRCard from "./sharedComponents/PRCard";
import Button from "../../../components/sharedComponents/Button";

const ProgramRatings = () => {
  return (
    <section className="container mx-auto my-10 ">
      <h2 className="sm:text-3xl text-xl font-semibold text-black pb-4">
        Program Ratings
      </h2>
      <div className=" grid md:grid-cols-3 grid-cols-2">
        <PRCard />
        <PRCard />
        <PRCard />
        <PRCard />
        <PRCard />
        <PRCard />
      </div>
      <div className="flex flex-col justify-center items-center my-8">
        <Button className="bg-white font-semibold text-black border border-[#98AB26] py-2 px-10 cli focus:bg-[#98AB26]">
          Show all reviews
        </Button>
      </div>
    </section>
  );
};

export default ProgramRatings;
