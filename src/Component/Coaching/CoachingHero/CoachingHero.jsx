import React from "react";
import styled from "styled-components";
import heroImg from "../../../assets/coachHero.jpg";

const Wrapper = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 1)),
    url(${heroImg});
  background-size: cover;
  background-repeat: no-repeat;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CoachingHero = () => {
  return <Wrapper>CoachingHero</Wrapper>;
};

export default CoachingHero;
