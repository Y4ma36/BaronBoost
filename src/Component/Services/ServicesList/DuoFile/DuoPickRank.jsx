import React from "react";
import styled from "styled-components";
import CurrentRank from "../ServicesCommon/PickRank/CurrentRank/CurrentRank";
import DesireRank from "../ServicesCommon/PickRank/DesireRank/DesireRank";

const Wrapper = styled.div`
  flex: 2;
  display: flex;
  border: 5px solid white;
  border-radius: 2px;
  background-color: #011638;
  @media ${(props) => props.theme.device.laptop} {
    flex-direction: column;
  }
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
