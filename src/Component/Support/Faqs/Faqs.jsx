import React from "react";
import styled from "styled-components";
import hero_Bg from "../../../assets/Support/faqs.jpg";
import FaqsHero from "./FaqsHero";
import FaqsMain from "./FaqsMain";

const Wrapper = styled.div``;

const Faqs = () => {
  return (
    <Wrapper>
      <FaqsHero />
      <FaqsMain />
    </Wrapper>
  );
};

export default Faqs;
