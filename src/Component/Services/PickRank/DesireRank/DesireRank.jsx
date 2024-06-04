import React from "react";
import styled from "styled-components";
import DesireRankHeader from "./DesireRankHeader";
import DesireRankPick from "./DesireRankPick";
import DesireRankDivision from "./DesireRankDivision";
import DesireRankLp from "./DesireRankLp";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

const DesireRank = () => {
  return (
    <Wrapper>
      <DesireRankHeader />
      <DesireRankPick />
      <DesireRankDivision />
      <DesireRankLp />
    </Wrapper>
  );
};

export default DesireRank;
