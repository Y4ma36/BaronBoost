import React, { useState } from "react";
import styled from "styled-components";
import CurrentRankDivision from "../CurrentRank/CurrentRankDivision";
import CurrentRankLP from "../CurrentRank/CurrentRankLP";
import CurrentRankHeader from "../CurrentRank/CurrentRankHeader";
import CurrentRankPick from "../CurrentRank/CurrentRankPick";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

const CurrentRank = () => {
  return (
    <Wrapper>
      <CurrentRankHeader />
      <CurrentRankPick />
      <CurrentRankDivision />
      <CurrentRankLP />
    </Wrapper>
  );
};

export default CurrentRank;
