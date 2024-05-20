import React from "react";
import Hero from "./Hero";
import Services from "./ServicesFile/Services";
import KeyFeatures from "./KeyFeatures/KeyFeatures";
import Policy from "./Policy/Policy";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <KeyFeatures />
      <Policy />
    </div>
  );
};

export default Home;
