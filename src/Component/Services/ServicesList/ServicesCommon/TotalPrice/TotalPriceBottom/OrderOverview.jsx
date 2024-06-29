import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import {
  isCurrentDivision,
  isCurrentRank,
  isDesireDivision,
  isDesireRank,
  setCurrentPickRank,
  setDesirePickRank,
} from "../../../../../../Data/atoms";
import rankData from "../../../../RankData";
import { FaArrowRight } from "react-icons/fa6";

const Wrapper = styled.div`
  width: 100%;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;

  &::after,
  &::before {
    position: absolute;
    content: "";
    width: 10%;
    height: 10%;
    background-color: white;
    @media ${(props) => props.theme.device.tablet} {
      width: 0%;
    }
  }
  &::before {
    left: 10px;
  }
  &::after {
    right: 10px;
  }
  @media ${(props) => props.theme.device.tablet} {
    font-size: ${(props) => props.theme.fontSize.lg};
  }
`;

const OverViewRank = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.device.mobile} {
    padding: 10px 0px;
    flex-direction: column;
    gap: 15px;
  }
`;

const RankContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 100px;
    height: 100px;
    @media ${(props) => props.theme.device.mobile} {
      width: 50px;
      height: 50px;
    }
  }
`;

const RankName = styled.h3``;

const ArrowIcon = styled.div``;

const IconCircle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${(props) => props.theme.device.mobile} {
    width: 30px;
    height: 30px;
  }
  .icon {
    color: ${(props) => props.theme.colors.black};
    font-size: ${(props) => props.theme.fontSize.md};
    @media ${(props) => props.theme.device.mobile} {
      font-size: ${(props) => props.theme.fontSize.base};
    }
  }
`;

const OrderOverview = () => {
  const currentLocation = useLocation().pathname.split("/").pop();
  const currentRankImg = useRecoilValue(isCurrentRank);
  const desireRankImg = useRecoilValue(isDesireRank);
  const currentRankName = useRecoilValue(setCurrentPickRank);
  const desireRankName = useRecoilValue(setDesirePickRank);
  const currentRankDivision = useRecoilValue(isCurrentDivision);
  const desireRankDivision = useRecoilValue(isDesireDivision);

  const rankDataList = rankData;

  return (
    <Wrapper>
      <Title>
        {currentLocation === "solo"
          ? "Solo Division "
          : currentLocation === "duo"
          ? "Duo Division "
          : "NetWins "}
        Boost
      </Title>
      <OverViewRank>
        <RankContainer>
          <img src={rankDataList[currentRankImg].icon} alt="" />
          <RankName>
            {currentRankName} {currentRankDivision}
          </RankName>
        </RankContainer>
        {currentLocation === "netwins" ? null : (
          <>
            <ArrowIcon>
              <IconCircle>
                <FaArrowRight className="icon" />
              </IconCircle>
            </ArrowIcon>
            <RankContainer>
              <img src={rankDataList[desireRankImg].icon} alt="" />
              <RankName>
                {desireRankName}{" "}
                {desireRankName === "MASTER" ? null : desireRankDivision}
              </RankName>
            </RankContainer>
          </>
        )}
      </OverViewRank>
    </Wrapper>
  );
};

export default OrderOverview;
