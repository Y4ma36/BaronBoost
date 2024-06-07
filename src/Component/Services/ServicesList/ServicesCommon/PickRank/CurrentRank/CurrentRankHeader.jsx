import React from "react";
import styled from "styled-components";
import rankData from "../../../../RankData";
import { useRecoilValue } from "recoil";
import { isCurrentRank } from "../../../../../../Data/atoms";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 30px;
  @media ${(props) => props.theme.device.mobile} {
    flex-direction: column;
  }
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
  @media ${(props) => props.theme.device.mobile} {
    text-align: center;
    font-size: ${(props) => props.theme.fontSize.lg};
  }
`;

const CurrentRankSubTitle = styled.h3`
  @media ${(props) => props.theme.device.mobile} {
    text-align: center;
    font-size: ${(props) => props.theme.fontSize.sm};
  }
`;

const CurrentRankHeader = () => {
  const rankDataList = rankData;
  const currentRank = useRecoilValue(isCurrentRank);
  return (
    <Wrapper>
      <CurrentRankImg>
        <img src={rankDataList[currentRank].img} alt="" />
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
