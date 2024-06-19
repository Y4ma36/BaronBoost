import React, { useEffect, useState } from "react";
import styled from "styled-components";
import rankData from "../../../../RankData";
import { motion } from "framer-motion";
import { useRecoilState, useRecoilValue } from "recoil";
import { isCurrentRank, isDesireRank } from "../../../../../../Data/atoms";
import { useLocation } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 60%;
  gap: 10px;
`;

const CurrentRankPickContainer = styled(motion.div)`
  background: ${(props) =>
    props.isSelected ? "rgb(140, 122, 230,0.6)" : "rgba(255, 255, 255, 0.1)"};
  border-radius: 3px;
  padding: 5px 8px;
  cursor: pointer;
  transition: transform 0.3s ease;
  img {
    width: 50px;
    height: 50px;
  }
  &:hover {
    transform: translateY(-10px);
    background-color: ${(props) =>
      props.isSelected ? props.theme.colors.purple : "rgb(255, 255, 255, 0.3)"};
  }
`;

const CurrentRankPick = () => {
  const [currentRank, setCurrentRank] = useRecoilState(isCurrentRank);
  const desireRank = useRecoilValue(isDesireRank);

  useEffect(() => {
    if (currentRank > desireRank) {
      setCurrentRank(desireRank);
    }
  }, [currentRank, desireRank]);

  const clickRank = (id) => {
    if (id <= desireRank) {
      setCurrentRank(id);
    } else {
      return;
    }
  };

  const rankDataExceptLast = rankData.slice(0, rankData.length - 1);

  return (
    <Wrapper>
      {rankDataExceptLast.map((item, index) => (
        <CurrentRankPickContainer
          key={item.id}
          onClick={() => clickRank(item.id)}
          isSelected={currentRank == item.id}
        >
          <img src={item.icon} />
        </CurrentRankPickContainer>
      ))}
    </Wrapper>
  );
};

export default CurrentRankPick;
