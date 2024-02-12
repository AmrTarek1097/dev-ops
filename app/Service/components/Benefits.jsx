import React from "react";
import BenefitsCard from "./sharedComponents/BenefitsCard";

const Benefits = () => {
  return (
    <section className="container mx-auto flex-col space-y-9 text-black py-12">
      <h2 className="text-4xl font-semibold text-center">
        Benefits Our Clients Experience
        <br />
        from working with us
      </h2>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-x-12 place-content-center  ">
        <BenefitsCard icon="/images/cloud.svg" title="Enhanced Scalability">
          Adopting CWD's cloud service is theorized to allow businesses to
          easily scale their IT infrastructure, ensuring peak performance and
          adaptability to evolving demands.
        </BenefitsCard>
        <BenefitsCard icon="/images/shield.svg" title="Security Measures">
          CWD's cloud services are expected to bolster data security through
          advanced measures, safeguarding sensitive information and ensuring
          compliance with industry standards.
        </BenefitsCard>
        <BenefitsCard icon="/images/dollar-square.svg" title="Cost Efficiency">
          Businesses are anticipated to achieve cost savings and predictability
          through CWD's cloud solutions, potentially reducing the necessity for
          significant upfront investments in hardware and maintenance.
        </BenefitsCard>
        <BenefitsCard icon="/images/credit-card.svg" title="Digital Transformation">
          CWD's cloud services aim to enhance data security with advanced
          measures, protecting sensitive information and ensuring
          industry-standard compliance.
        </BenefitsCard>
      </div>
    </section>
  );
};

export default Benefits;
