import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
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
  flex-wrap: wrap;
  gap: 15px;
`;

const DivisionContainer = styled(motion.div)`
  background: ${(props) =>
    props.isSelected ? props.theme.colors.purple : "rgba(255, 255, 255, 0.1)"};
  border-radius: 3px;
  width: 50px;
  height: 50px;
  display: ${(props) => (props.isCurrent ? "none" : "flex")};
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

const DesireRankDivision = () => {
  const [selectedDivision, setSelectedDivision] = useState("I");
  const setDesireRankDivision = useSetRecoilState(isDesireDivision);
  const currentRankDivision = useRecoilValue(isCurrentDivision);
  const [currentRank, setCurrentRank] = useRecoilState(isCurrentRank);
  const desireRank = useRecoilValue(isDesireRank);

  useEffect(() => {
    if (desireRank > currentRank) {
      setSelectedDivision("I");
    }
  }, [desireRank, currentRank]);

  const handleClick = (division, index) => {
    const divisionIndex = divisionList.indexOf(division);
    const currentDivisionIndex = divisionList.indexOf(currentRankDivision);

    if (desireRank <= currentRank && divisionIndex <= currentDivisionIndex) {
      return;
    }

    setSelectedDivision(division);
    setDesireRankDivision(division);
  };

  const divisionList = ["IV", "III", "II", "I"];

  return (
    <Wrapper>
      {divisionList.map((division, index) => (
        <DivisionContainer
          onClick={() => handleClick(division, index)}
          isSelected={selectedDivision === division}
          isCurrent={desireRank === 7}
          key={index}
        >
          <h1>{division}</h1>
        </DivisionContainer>
      ))}
    </Wrapper>
  );
};

export default DesireRankDivision;
