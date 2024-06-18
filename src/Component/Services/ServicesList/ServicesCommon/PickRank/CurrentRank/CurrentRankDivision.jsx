import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import {
  isCurrentDivision,
  isCurrentRank,
  isDesireDivision,
  isDesireRank,
} from "../../../../../../Data/atoms";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
`;

const DivisionContainer = styled(motion.div)`
  background: ${(props) =>
    props.isSelected ? props.theme.colors.purple : "rgba(255, 255, 255, 0.1)"};
  border-radius: 3px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s ease;
  h1 {
    font-size: ${(props) => props.theme.fontSize.lg};
    font-weight: 500;
  }
  &:hover {
    transform: translateY(-10px);
    background-color: ${(props) =>
      props.isSelected ? props.theme.colors.purple : "rgb(255, 255, 255, 0.3)"};
  }
`;

const CurrentRankDivision = () => {
  const [selectedDivision, setSelectedDivision] = useState();
  const setCurrentRankDivision = useSetRecoilState(isCurrentDivision);
  const desireRankDivision = useRecoilValue(isDesireDivision);
  const currentRank = useRecoilValue(isCurrentRank);
  const desireRank = useRecoilValue(isDesireRank);

  const handleClick = (division, index) => {
    if (desireRankDivision !== null) {
      const currentDivisionIndex = divisionList.indexOf(division);
      const desiredDivisionIndex = divisionList.indexOf(desireRankDivision);

      if (
        currentRank === desireRank &&
        currentDivisionIndex >= desiredDivisionIndex
      ) {
        return;
      }
    }
    setSelectedDivision(division);
    setCurrentRankDivision(division);
  };

  const divisionList = ["IV", "III", "II", "I"];

  return (
    <Wrapper>
      {divisionList.map((division, index) => (
        <DivisionContainer
          onClick={() => handleClick(division, index)}
          isSelected={selectedDivision == division}
          key={index}
        >
          <h1>{division}</h1>
        </DivisionContainer>
      ))}
    </Wrapper>
  );
};

export default CurrentRankDivision;
