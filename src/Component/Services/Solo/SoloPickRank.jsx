import React from "react";
import styled from "styled-components";
import CurrentRank from "../PickRank/CurrentRank/CurrentRank";
import DesireRank from "../PickRank/DesireRank/DesireRank";

const SoloPickRankWrapper = styled.div`
  flex: 2;
  display: flex;
  border: 5px solid white;
  border-radius: 2px;
  background-color: #011638;
`;

const SoloPickRank = () => {
  return (
    <SoloPickRankWrapper>
      <CurrentRank />
      <DesireRank />
    </SoloPickRankWrapper>
  );
};

export default SoloPickRank;
