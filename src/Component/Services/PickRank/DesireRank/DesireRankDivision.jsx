import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
`;

const DivisionContainer = styled.div`
  background-color: rgb(255, 255, 255, 0.1);
  border-radius: 3px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: ${(props) => props.theme.fontSize.lg};
    font-weight: 500;
  }
`;

const DesireRankDivision = () => {
  return (
    <Wrapper>
      <DivisionContainer>
        <h1>IV</h1>
      </DivisionContainer>
      <DivisionContainer>
        <h1>III</h1>
      </DivisionContainer>
      <DivisionContainer>
        <h1>II</h1>
      </DivisionContainer>
      <DivisionContainer>
        <h1>I</h1>
      </DivisionContainer>
    </Wrapper>
  );
};

export default DesireRankDivision;
