import React from "react";
import HeroSection from "./components/HeroSection";
import ProgramDesc from "./components/ProgramDesc";
import ForWho from "./components/ForWho";
import CourseContent from "./components/CourseContent";
import ProgramHighlights from "./components/ProgramHighlights";

const Training = () => {
  return (
    <>
      <HeroSection/>
      <ProgramDesc/>
      <ForWho/>
      <CourseContent />
      <ProgramHighlights />
      {/* <ProgramRatings/> */}
    </>
  );
};

export default Training;
