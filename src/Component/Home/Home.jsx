import React, { useContext } from "react";
import Hero from "./Hero/Hero";
import Services from "./ServicesFile/Services";
import KeyFeatures from "./KeyFeatures/KeyFeatures";
import ExperienceFlow from "./ExperienceFlow/ExperienceFlow";
import StartNow from "./StartNow/StartNow";
import { useRecoilValue } from "recoil";
import { isLoginSelector } from "../../Data/atomsLogin";

const Home = () => {
  const isLogin = useRecoilValue(isLoginSelector);

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
