import React from "react";
import styled from "styled-components";
import rankData from "../../../../RankData";
import { useRecoilValue } from "recoil";
import { isDesireRank } from "../../../../../../Data/atoms";

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

const DesireRankImg = styled.div`
  img {
    width: 100px;
    height: 100px;
  }
`;

const DesireRankContainer = styled.div``;

const DesireRankTitle = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 5px;
  @media ${(props) => props.theme.device.mobile} {
    text-align: center;
    font-size: ${(props) => props.theme.fontSize.lg};
  }
`;

const DesireRankSubTitle = styled.h3`
  @media ${(props) => props.theme.device.mobile} {
    text-align: center;
    font-size: ${(props) => props.theme.fontSize.sm};
  }
`;

const DesireRankHeader = () => {
  const rankDataList = rankData;
  const desireRank = useRecoilValue(isDesireRank);
  return (
    <Wrapper>
      <DesireRankImg>
        <img src={rankDataList[desireRank].img} alt="" />
      </DesireRankImg>
      <DesireRankContainer>
        <DesireRankTitle>Desire Rank</DesireRankTitle>
        <DesireRankSubTitle>Please select your Desire Rank</DesireRankSubTitle>
      </DesireRankContainer>
    </Wrapper>
  );
};

export default DesireRankHeader;
