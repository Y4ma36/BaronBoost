import React from "react";
import styled from "styled-components";
import CoachingHero from "./CoachingHero/CoachingHero";
import CoachingMain from "./CoachingMaIn/CoachingMain";

const Wrapper = styled.div``;

const Coaching = () => {
  return (
    <Wrapper>
      <CoachingHero />
      <CoachingMain />
    </Wrapper>
  );
};

export default Coaching;
