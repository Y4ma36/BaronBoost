import React from "react";
import styled from "styled-components";
import coachingData from "../\bCoachingData";
import { color } from "framer-motion";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 25%);
  justify-content: center;
  align-items: center;
  gap: 10px;
  @media ${(props) => props.theme.device.desktop} {
    grid-template-columns: repeat(2, 50%);
  }
  @media ${(props) => props.theme.device.tablet} {
    grid-template-columns: repeat(1, 100%);
  }
`;

const CoachingBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.purple};
  border-radius: 7px;
  padding: 20px 20px;
  text-align: center;
  gap: 10px;
`;

const CoachingNameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 30px;
  gap: 5px;
  @media ${(props) => props.theme.device.tablet} {
  }
`;

const CoachingNameImg = styled.div`
  img {
    width: 90px;
    height: 90px;
    border-radius: 50%;
  }
`;

const CoachingName = styled.h1`
  font-size: 2rem;
  font-weight: 800;
`;

const CoachingInformation = styled.div`
  display: flex;
  gap: 10px;
  font-size: ${(props) => props.theme.fontSize.md};
  h3 {
    font-weight: 700;
  }
`;

const CoachingDescription = styled.h3`
  width: 50%;
  word-wrap: break-word;
  white-space: pre-wrap;
`;

const CoachingOrderButton = styled.button`
  padding: 10px 50px;
  border: none;
  border-radius: 5px;
  transition: 0.3s ease-in-out;
  font-family: "Noto Sans KR", sans-serif;
  font-size: ${(props) => props.theme.fontSize.lg};
  font-weight: 600;
  &:hover {
    background-color: black;
    color: white;
  }
`;

const CoachingMainList = () => {
  return (
    <Wrapper>
      {coachingData.map((item, index) => (
        <CoachingBox>
          <CoachingNameContainer>
            <CoachingNameImg>
              <img src={item.img} alt="" />
            </CoachingNameImg>
            <CoachingName>{item.name}</CoachingName>{" "}
          </CoachingNameContainer>
          <CoachingInformation>
            <h3>{item.server}</h3>
            <h3>{item.role}</h3>
            <h3>{item.language}</h3>
          </CoachingInformation>
          <CoachingDescription>{item.description}</CoachingDescription>
          <CoachingOrderButton>Book Now</CoachingOrderButton>
        </CoachingBox>
      ))}
    </Wrapper>
  );
};

export default CoachingMainList;
