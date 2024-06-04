import React from "react";
import styled from "styled-components";
import CurrentRankHeader from "./CurrentRankHeader";
import CurrentRankPick from "./CurrentRankPick";
import CurrentRankDivision from "./CurrentRankDivision";
import CurrentRankLP from "./CurrentRankLP";

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
