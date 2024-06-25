import React from "react";
import styled from "styled-components";

import DuoPickRank from "./DuoPickRank";
import TotalPrice from "../ServicesCommon/TotalPrice/TotalPrice";

const Wrapper = styled.div`
  display: flex;
  background-color: black;
  padding: 30px 40px;
  gap: 10px;
  box-sizing: border-box;
  min-height: 650px;
  @media ${(props) => props.theme.device.desktop} {
    flex-direction: column;
  }
`;

const Duo = () => {
  return (
    <Wrapper>
      <DuoPickRank />
      <TotalPrice />
    </Wrapper>
  );
};

export default Duo;
