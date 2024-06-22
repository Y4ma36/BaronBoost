import React, { useContext } from "react";
import Hero from "./Hero/Hero";
import Services from "./ServicesFile/Services";
import KeyFeatures from "./KeyFeatures/KeyFeatures";
import ExperienceFlow from "./ExperienceFlow/ExperienceFlow";
import StartNow from "./StartNow/StartNow";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <KeyFeatures />
      <ExperienceFlow />
      <StartNow />
    </div>
  );
};

export default Home;
