import React from "react";
import styled from "styled-components";
import SoloPrice from "./SoloPrice/SoloPrice";
import SoloPickRank from "./SoloPickRank/SoloPickRank";

const SoloWrapper = styled.div`
  display: flex;
  height: 70vh;
  background-color: black;
  padding: 30px 40px;
  gap: 10px;
  box-sizing: border-box;
  min-height: 650px;
`;

const Solo = () => {
  return (
    <SoloWrapper>
      <SoloPickRank />
      <SoloPrice />
    </SoloWrapper>
  );
};

export default Solo;
