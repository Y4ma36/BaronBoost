import React from "react";
import Hero from "./Hero";
import Services from "./ServicesFile/Services";
import KeyFeatures from "./KeyFeatures/KeyFeatures";
import Footer from "../../Shared/Footer/Footer";
import ExperienceFlow from "./ExperienceFlow/ExperienceFlow";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <KeyFeatures />
      <ExperienceFlow />
    </div>
  );
};

export default Home;
