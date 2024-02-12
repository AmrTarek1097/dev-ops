import React from "react";

const Implementation = () => {
  return (
    <section className="container mx-auto flex flex-col-reverse md:flex-row items-center md:space-x-20 text-black py-12">
      <img src="/images/Portfolio/Hand coding-pana (5) 1.svg" alt="" />
      <div className="flex-col space-y-4">
        <h2 className="sm:text-3xl text-xl font-semibold">Implementation</h2>
        <p className="sm:text-lg text-md font-normal leading-8">
          The development process followed an agile methodology, allowing for
          iterative improvements based on continuous feedback. Challenges such
          as integrating real-time tracking data and ensuring cross-device
          compatibility were addressed through collaborative problem-solving
          sessions within the development team.
        </p>
      </div>
    </section>
  );
};

export default Implementation;
