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

const DesireRankPickContainer = styled(motion.div)`
  background-color: rgb(255, 255, 255, 0.1);
  border-radius: 3px;
  padding: 5px 8px;
  cursor: pointer;
  img {
    width: 50px;
    height: 50px;
  }
`;

const DesireRankPick = () => {
  const [desireRank, setDesireRank] = useRecoilState(isDesireRank);
  const currentRank = useRecoilValue(isCurrentRank);

  const clickRank = (id) => {
    if (id < currentRank) {
      return;
    }
    setDesireRank(id);
  };

  return (
    <Wrapper>
      {rankData.map((item, index) => (
        <DesireRankPickContainer
          key={index}
          whileHover={{
            y: "-10px",
            backgroundColor: "rgb(255, 255, 255, 0.7)",
          }}
          onClick={() => clickRank(item.id)}
        >
          <img src={item.icon} />
        </DesireRankPickContainer>
      ))}
    </Wrapper>
  );
};

export default DesireRankPick;
