import React from "react";
import styled from "styled-components";
import CoachingMainSort from "./CoachingMainSort";
import CoachingMainList from "./CoachingMainList";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: black;
  padding-bottom: 50px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 90px;
  width: 70%;
  background-color: rgb(255, 255, 255, 0.3);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  border: 2px solid white;
  gap: 40px;
`;

const CoachingMain = () => {
  return (
    <Wrapper>
      <Container>
        <CoachingMainSort />
        <CoachingMainList />
      </Container>
    </Wrapper>
  );
};

export default CoachingMain;
