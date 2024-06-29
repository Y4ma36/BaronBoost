import React, { useEffect } from "react";

import styled from "styled-components";
import useAllPriceData from "../AllPriceData";
import TotalPriceTop from "./TotalPriceTop";
import TotalPriceBottom from "./TotalPriceBottom/TotalPriceBottom";

const Wrapper = styled.div`
  flex: 1;
  border: 5px solid white;
  border-radius: 2px;
  background-color: #2e294e;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 80%;
  height: 90%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  @media ${(props) => props.theme.device.desktop} {
    height: 100%;
    padding: 20px;
  }
`;

const TotalPrice = () => {
  return (
    <Wrapper>
      <Container>
        <TotalPriceTop />
        <TotalPriceBottom />
      </Container>
    </Wrapper>
  );
};

export default TotalPrice;
