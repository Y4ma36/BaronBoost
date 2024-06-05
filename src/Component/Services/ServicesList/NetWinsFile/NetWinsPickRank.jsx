import React from "react";
import styled from "styled-components";
import CurrentRank from "../ServicesCommon/PickRank/CurrentRank/CurrentRank";

const Wrapper = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  border: 5px solid white;
  border-radius: 2px;
  background-color: #011638;
`;

const NetWinsPickRank = () => {
  return (
    <Wrapper>
      <CurrentRank />
    </Wrapper>
  );
};

export default NetWinsPickRank;
