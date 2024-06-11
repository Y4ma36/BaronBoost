import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import SupportHero from "./SupportHero";
import SupportMain from "./SupportMain";
import SupportFooter from "./SupportFooter";

const Wrapper = styled.div`
  padding-top: 125px;
  background-color: #353b48;
`;

const Support = () => {
  return (
    <Wrapper>
      <SupportHero />
      <SupportMain />
      <SupportFooter />
    </Wrapper>
  );
};

export default Support;
