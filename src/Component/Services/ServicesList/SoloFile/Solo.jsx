import React from "react";
import styled from "styled-components";
import SoloPickRank from "../SoloFile/SoloPickRank";
import TotalPrice from "../ServicesCommon/TotalPrice";

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
  @media ${(props) => props.theme.device.laptop} {
    height: 170vh;
  }
`;

const Solo = () => {
  return (
    <Wrapper>
      <SoloPickRank />
      <TotalPrice />
    </Wrapper>
  );
};

export default Solo;
