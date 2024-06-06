import React, { useEffect, useState } from "react";
import styled from "styled-components";
import rankData from "../../../../RankData";
import { motion } from "framer-motion";
import { useRecoilState, useRecoilValue } from "recoil";
import { isCurrentRank, isDesireRank } from "../../../../../../Data/atoms";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  width: 60%;
`;

const CurrentRankPickContainer = styled(motion.div)`
  background-color: rgb(255, 255, 255, 0.1);
  border-radius: 3px;
  padding: 5px 8px;
  cursor: pointer;
  img {
    width: 50px;
    height: 50px;
  }
`;

const CurrentRankPick = () => {
  const [currentRank, setCurrentRank] = useRecoilState(isCurrentRank);
  const desireRank = useRecoilValue(isDesireRank);

  useEffect(() => {
    if (currentRank > desireRank) {
      setCurrentRank(currentRank);
    }
  }, [currentRank, desireRank]);

  const clickRank = (id) => {
    if (id <= desireRank) {
      setCurrentRank(id);
    } else {
      return;
    }
  };
  return (
    <Wrapper>
      {rankData.map((item, index) => (
        <CurrentRankPickContainer
          key={item.id}
          whileHover={{
            y: "-10px",
            backgroundColor: "rgb(255, 255, 255, 0.7)",
          }}
          onClick={() => clickRank(item.id)}
        >
          <img src={item.icon} />
        </CurrentRankPickContainer>
      ))}
    </Wrapper>
  );
};

export default CurrentRankPick;
