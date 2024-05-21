import React from "react";
import Hero from "./Hero";
import Services from "./ServicesFile/Services";
import KeyFeatures from "./KeyFeatures/KeyFeatures";
import Policy from "./Policy/Policy";
import Footer from "../../Shared/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <KeyFeatures />
      <Footer />
    </div>
  );
};

export default Home;
