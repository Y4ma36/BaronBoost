import React from "react";
import styled from "styled-components";
import CurrentRank from "../PickRank/CurrentRank/CurrentRank";
import DesireRank from "../PickRank/DesireRank/DesireRank";

const Wrapper = styled.div`
  flex: 2;
  display: flex;
  border: 5px solid white;
  border-radius: 2px;
  background-color: #011638;
`;

const DuoPickRank = () => {
  return (
    <Wrapper>
      <CurrentRank />
      <DesireRank />
    </Wrapper>
  );
};

export default DuoPickRank;
