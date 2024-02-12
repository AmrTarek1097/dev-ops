import React from "react";
import TrainigCard from "./sharedComponents/TrainigCard";

const Training = () => {
  // const Training = forwardRef ((ref))

  return (
    <>
      <section id="Training" className="bg-[#F5F7E9] py-16">
        <div className="container mx-auto text-black xs:px-4 md:px-16">
          <div className="w-fit">
            <h1 className="section-title font-bold mb-16 text-2xl">
              Training Programs
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 mx-auto lg:gap-x-16 md:gap-x-8 gap-y-6">
            <TrainigCard
              title="DevOps Practices Program"
              img="/images/Training 1.png"
            >
              Dive into the world of DevOps with a focus on principles,
              practices, and essential tools such as Docker, Jenkins,
              Kubernetes, and Terraform.
            </TrainigCard>
            <TrainigCard
              className="bg-[rgba(255,255,255,0.3)]"
              title="DevOps Security Best Practices"
              img="/images/Training 2.png"
              training={false}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </TrainigCard>

            <TrainigCard
              className="bg-[rgba(255,255,255,0.3)]"
              title="DevOps Security Best Practices"
              img="/images/Training 3.png"
              training={false}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </TrainigCard>
          </div>
        </div>
      </section>
    </>
  );
};

export default Training;
