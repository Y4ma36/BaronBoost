import React, { useState } from "react";
import styled from "styled-components";
import DesireRankHeader from "../DesireRank/DesireRankHeader";
import DesireRankPick from "../DesireRank/DesireRankPick";
import DesireRankDivision from "../DesireRank/DesireRankDivision";
import DesireRankLp from "../DesireRank/DesireRankLp";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
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
