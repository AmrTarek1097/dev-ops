"use client"
import React from "react";
import ServicesCard from "./sharedComponents/ServicesCard";
import Button from "./sharedComponents/Button";
import { useRouter } from "next/navigation";

const Services = () => {
  const router = useRouter();
  const handleClick = () => { router.push('/Form')};
  return (
    <>
      <section  id='Services' className="xl:container mx-auto text-black mb-10 xs:px-4 md:px-16">
        <div className="w-fit">
          <h1 className="section-title font-bold mb-16 text-2xl">
            What Services We Provide
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto gap-x-8 gap-y-6 ">
          <ServicesCard title="Cloud Services">
            Scalable, secure, and innovative cloud solutions designed for
            maximum flexibility and performance. Your digital journey starts in
            the cloud with CWD Solutions.{" "}
          </ServicesCard>
          <ServicesCard title="Web Development">
            Crafting beautiful and functional websites that reflect your brand
            identity. From front-end aesthetics to back-end efficiency, we
            ensure a seamless user experience.{" "}
          </ServicesCard>
          <ServicesCard title="DevOps Solutions">
            Accelerate your development and deployment processes with our DevOps
            expertise. Automation, optimization, and reliability at every step.{" "}
          </ServicesCard>
          <ServicesCard title="Hiring">
            {" "}
            Strategic hiring solutions tailored to your business needs.{" "}
          </ServicesCard>
          <ServicesCard title="Training">
            {" "}
            At CWD Solutions, we not only provide top-notch DevOps services but
            also empower individuals through specialized programs tailored For
            DevOps enthusiasts.{" "}
          </ServicesCard>
        </div>
        <div className="flex items-center justify-center sm:gap-10 gap-4 mt-16">
          <Button onClick={handleClick} className="w-56 h-12 ">Request Demo</Button>

          <Button onClick={handleClick} className="w-56 h-12 px-2 ">Request Consultation</Button>
        </div>
      </section>
    </>
  );
};

export default Services;
