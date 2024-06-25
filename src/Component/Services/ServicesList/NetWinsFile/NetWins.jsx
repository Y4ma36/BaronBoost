import React from "react";
import styled from "styled-components";
import NetWinsPickRank from "./NetWinsPickRank";
import TotalPrice from "../ServicesCommon/TotalPrice/TotalPrice";

const Wrapper = styled.div`
  display: flex;
  background-color: black;
  padding: 30px 40px;
  gap: 10px;
  box-sizing: border-box;
  min-height: 650px;
  @media ${(props) => props.theme.device.laptop} {
    flex-direction: column;
  }
`;

const NetWins = () => {
  return (
    <Wrapper>
      <NetWinsPickRank />
      <TotalPrice />
    </Wrapper>
  );
};

export default NetWins;
