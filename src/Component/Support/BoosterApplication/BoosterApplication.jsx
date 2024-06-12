import React from "react";
import styled from "styled-components";
import BoosterApplicationHero from "./BoosterApplicationHero";
import BoosterMain from "./BoosterMain";

const Wrapper = styled.div``;

const BoosterApplication = () => {
  return (
    <Wrapper>
      <BoosterApplicationHero />
      <BoosterMain />
    </Wrapper>
  );
};

export default BoosterApplication;
