import React from "react";
import styled from "styled-components";
import DuoPickRank from "./DuoPickRank";
import DuoPrice from "./DuoPrice";

const Wrapper = styled.div`
  display: flex;
  height: 70vh;
  background-color: black;
  padding: 30px 40px;
  gap: 10px;
  box-sizing: border-box;
  min-height: 650px;
`;

const Duo = () => {
  return (
    <Wrapper>
      <DuoPickRank />
      <DuoPrice />
    </Wrapper>
  );
};

export default Duo;
