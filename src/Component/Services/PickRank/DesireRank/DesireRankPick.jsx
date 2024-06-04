import React from "react";
import styled from "styled-components";
import rankData from "../../RankData";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  width: 60%;
`;

const DesireRankPickContainer = styled.div`
  background-color: rgb(255, 255, 255, 0.1);

  border-radius: 3px;
  padding: 5px 8px;
  img {
    width: 50px;
    height: 50px;
  }
`;

const DesireRankPick = () => {
  return (
    <Wrapper>
      {rankData.map((item, index) => (
        <DesireRankPickContainer key={index}>
          <img src={item.icon} />
        </DesireRankPickContainer>
      ))}
    </Wrapper>
  );
};

export default DesireRankPick;
