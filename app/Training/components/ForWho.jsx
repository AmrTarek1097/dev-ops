import React from "react";

const ForWho = () => {
  return (
    <section className="container mx-auto flex-col space-y-4 text-black py-12">
      <h2 className="sm:text-3xl text-xl font-semibold">
        Who this program is for
      </h2>
      <div>
        <ul className="sm:text-lg text-md list-disc	leading-loose	ml-5">
          <li className="mb-2">
            Aspiring DevOps Trailblazers: Kickstart your DevOps career with a
            program that covers the essentials and beyond.{" "}
          </li>
          <li className="mb-2">
            Tech Enthusiasts: Whether you're a seasoned IT pro or just
            passionate about tech, dive into the heart of DevOps methodologies.
          </li>
          <li className="mb-2">
            Collaborative Teams: Arm your development and operations teams with
            the skills to work seamlessly and deliver faster, reliable results.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ForWho;
