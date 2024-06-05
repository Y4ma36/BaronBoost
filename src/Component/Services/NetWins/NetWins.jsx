import React from "react";
import styled from "styled-components";
import NetWinsPickRank from "./NetWinsPickRank";
import NetWinsPrice from "./NetWinsPrice";

const Wrapper = styled.div`
  display: flex;
  height: 70vh;
  background-color: black;
  padding: 30px 40px;
  gap: 10px;
  box-sizing: border-box;
  min-height: 650px;
`;

const NetWins = () => {
  return (
    <Wrapper>
      <NetWinsPickRank />
      <NetWinsPrice />
    </Wrapper>
  );
};

export default NetWins;