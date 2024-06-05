import React from "react";
import styled from "styled-components";
import master from "../../../../../../assets/Rank/master.png";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-top: 30px;
`;

const CurrentRankImg = styled.div`
  img {
    width: 100px;
    height: 100px;
  }
`;

const CurrentRankContainer = styled.div``;

const CurrentRankTitle = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 5px;
`;

const CurrentRankSubTitle = styled.h3``;

const CurrentRankHeader = () => {
  return (
    <Wrapper>
      <CurrentRankImg>
        <img src={master} alt="" />
      </CurrentRankImg>
      <CurrentRankContainer>
        <CurrentRankTitle>Current Rank</CurrentRankTitle>
        <CurrentRankSubTitle>
          Please select your Current Rank
        </CurrentRankSubTitle>
      </CurrentRankContainer>
    </Wrapper>
  );
};

export default CurrentRankHeader;
