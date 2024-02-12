import React from "react";
import TestimonialsCard from "./sharedComponents/TestimonialsCard";

const Testimonials = () => {
  return (
    <section className="md:w-8/12 w-10/12 mx-auto my-14 text-black">
      <div>
        <h2 className="text-4xl font-semibold text-center pb-6">Testimonials</h2>
      </div>
      <div className="flex sm:flex-row flex-col justify-center gap-12">
        <TestimonialsCard />
        <TestimonialsCard />
      </div>
    </section>
  );
};

export default Testimonials;
