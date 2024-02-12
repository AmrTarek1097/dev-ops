import React from "react";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import Training from "../components/Training";
import Technologies from "../components/Technologies";
import WhoWeAre from "../components/WhoWeAre";
import Portfolio from "../components/Portfolio";
// import TrainigCard from "../components/sharedComponents/TrainigCard";
// import { useNavigate } from "react-router-dom";

export default function MainPage({}) {
  // const ref = React.createRef();
  //   const navigate = useNavigate();

  // const traningSection = useRef();

  // const scrollTo = () => {

  //   window.scrollTo({ top: traningSection.current.offsetTop, behavior: 'smooth', })
  // }

  return (
    <>
      <HeroSection />
      <Services />
      <Training />
      <Technologies />
      <WhoWeAre />
      <Portfolio />
    </>
  );
}
