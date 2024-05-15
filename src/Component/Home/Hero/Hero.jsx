import React from "react";
import Hero_BackgroundImage from "../../../assets/HeroBackground.jpeg";
import styled from "styled-components";

const HeroWrapper = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)),
    url(${Hero_BackgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  height: 85vh;
`;

const Hello = styled.div`
  /* padding-top: 128px; */
`;

const HeroBackgroundImg = styled.div``;

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroBackgroundImg />
    </HeroWrapper>
  );
};

export default Hero;
