import React from "react";
import Button from "./sharedComponents/Button";

const WhoWeAre = () => {
  return (
    <>
      <section id="WhoWeAre" className="bg-[#F5F7E9] py-16 ">
        <div className="container mx-auto text-black xs:px-6 md:px-16">
          <div className="w-fit">
            <h1 className="section-title font-bold mb-10 text-2xl">
              Who We Are
            </h1>
          </div>
          <div>
            <p className="text-xl leading-loose">
              <span className="font-bold">Welcome to CWD</span>, At CWD
              Solutions, we are more than a tech company; we are innovators,
              problem-solvers, and your dedicated partner in navigating the
              ever-evolving digital landscape. Our team of seasoned
              professionals brings a wealth of experience to every project,
              ensuring excellence in execution. We believe in building lasting
              relationships and driving success through collaboration.
            </p>
          </div>
          <div className="my-10">
            <h1 className="font-medium text-2xl mb-10">Why choosing us?</h1>

            <div className="sm:grid sm:grid-cols-3 space-y-4 sm:space-y-0 my-10 ">
              <div className="flex justify-center items-center  text-white text-lg font-light sm:w-11/12 w-12/12 h-[56px] rounded-lg bg-gradient-to-l from-amber-600 to-amber-500 shadow-md">
                <p>Tailored Solutions</p>
              </div>
              <p className="text-xl col-span-2 sm:text-left text-center">
                We understand that every business is unique. Our solutions are
                meticulously crafted to meet your specific needs, ensuring a
                perfect fit for your goals.
              </p>
            </div>

            <div className="sm:grid sm:grid-cols-3  space-y-4 sm:space-y-0 my-10 ">
              <div className="flex justify-center items-center text-white text-lg font-light  sm:w-11/12 w-12/12 h-[56px] rounded-lg bg-gradient-to-l from-amber-600 to-amber-500 shadow-md">
                <p>Innovation at the Core</p>
              </div>
              <p className="text-xl col-span-2 sm:text-left text-center">
                We don't just follow trends; we set them. Our commitment to
                innovation ensures that your business stays ahead in a rapidly
                changing digital landscape.
              </p>
            </div>

            <div className="sm:grid sm:grid-cols-3  space-y-4 sm:space-y-0 my-10">
              <div className="flex justify-center items-center  text-white text-lg font-light  sm:w-11/12 w-12/12 h-[56px] rounded-lg bg-gradient-to-l from-amber-600 to-amber-500 shadow-md">
                <p>Expertise That Matters</p>
              </div>
              <p className="text-xl col-span-2 sm:text-left text-center">
                Our team consists of seasoned professionals with a proven track
                record. We bring a wealth of experience to every project,
                ensuring excellence in execution.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoWeAre;
