import React from "react";
import styled from "styled-components";

import TotalPrice from "../ServicesCommon/TotalPrice";
import DuoPickRank from "./DuoPickRank";

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
      <TotalPrice />
    </Wrapper>
  );
};

export default Duo;
