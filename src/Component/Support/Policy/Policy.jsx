import React from "react";
import styled from "styled-components";
import PolicyHero from "./PolicyHero";
import PolicyMain from "./PolicyMain";

const Wrapper = styled.div``;

const Policy = () => {
  return (
    <Wrapper>
      <PolicyHero />
      <PolicyMain />
    </Wrapper>
  );
};

export default Policy;
