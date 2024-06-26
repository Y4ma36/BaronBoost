import React, { useEffect, useState } from "react";
import styled from "styled-components";
import rankData from "../../../../RankData";
import { motion } from "framer-motion";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  isCurrentDivision,
  isCurrentRank,
  isDesireDivision,
  isDesireRank,
  setDesirePickRank,
} from "../../../../../../Data/atoms";
import { useLocation } from "react-router-dom";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  @media ${(props) => props.theme.device.mobile} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const DesireRankPickContainer = styled(motion.div)`
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

const DesireRankPick = () => {
  const [desireRank, setDesireRank] = useRecoilState(isDesireRank);
  const setDesireRankName = useSetRecoilState(setDesirePickRank);
  const currentRank = useRecoilValue(isCurrentRank);
  const desireDivision = useRecoilValue(isDesireDivision);
  const currentDivision = useRecoilValue(isCurrentDivision);
  const location = useLocation();
  const currentLocaiton = location.pathname.split("/").pop();

  const clickRank = (id, rank) => {
    if (id < currentRank) {
      return;
    }

    setDesireRank(id);
    setDesireRankName(rank);
  };

  if (currentLocaiton !== "duo" && currentLocaiton !== "solo") {
    setDesireRank(0);
  } else {
    setDesireRank(desireRank);
  }

  return (
    <Wrapper>
      {rankData.map((item, index) => (
        <DesireRankPickContainer
          key={index}
          onClick={() => clickRank(item.id, item.name)}
          isSelected={desireRank == item.id}
        >
          <img src={item.icon} />
        </DesireRankPickContainer>
      ))}
    </Wrapper>
  );
};

export default DesireRankPick;
