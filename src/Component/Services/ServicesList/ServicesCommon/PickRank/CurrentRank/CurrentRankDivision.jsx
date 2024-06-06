import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
`;

const DivisionContainer = styled(motion.div)`
  background-color: rgb(255, 255, 255, 0.1);
  border-radius: 3px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  h1 {
    font-size: ${(props) => props.theme.fontSize.lg};
    font-weight: 500;
  }
`;

const CurrentRankDivision = () => {
  return (
    <Wrapper>
      <DivisionContainer
        whileHover={{
          y: "-10px",
          backgroundColor: "rgb(255, 255, 255, 0.3)",
        }}
      >
        <h1>IV</h1>
      </DivisionContainer>
      <DivisionContainer
        whileHover={{
          y: "-10px",
          backgroundColor: "rgb(255, 255, 255, 0.3)",
        }}
      >
        <h1>III</h1>
      </DivisionContainer>
      <DivisionContainer
        whileHover={{
          y: "-10px",
          backgroundColor: "rgb(255, 255, 255, 0.3)",
        }}
      >
        <h1>II</h1>
      </DivisionContainer>
      <DivisionContainer
        whileHover={{
          y: "-10px",
          backgroundColor: "rgb(255, 255, 255, 0.3)",
        }}
      >
        <h1>I</h1>
      </DivisionContainer>
    </Wrapper>
  );
};

export default CurrentRankDivision;
