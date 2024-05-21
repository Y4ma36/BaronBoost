import React from "react";
import styled from "styled-components";
import experienceFlowData from "./ExperienceFlowData";

const ExperienceFlowWrapper = styled.div`
  height: 90vh;
  background: black;
  display: flex;
  justify-content: center;
  padding-bottom: 50px;
`;

const ExperienceFlowBoxContainer = styled.div`
  width: 100%;
  margin: 100px 130px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;

const ExperienceFlowBox = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  border-radius: 10px;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${(props) => props.bgImg});
  background-position: center center;
  background-size: cover;
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translate(0%, 10%);

  text-align: center;
  padding: 20px;
  color: white;
`;

const ExperienceFlowBoxStep = styled.div`
  font-size: ${(props) => props.theme.fontSize.lg};
  font-weight: 800;
  background-color: ${(props) => props.theme.colors.purple};
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: ${(props) => (props.first === 0 ? "hidden" : "visible")};
  width: 90px;
  height: 40px;
  border-radius: 5px;
`;

const ExperienceFlowBoxTitle = styled.h1`
  font-size: ${(props) => props.theme.fontSize.lg};
  font-weight: 900;
  margin-bottom: 20px;
`;

const ExperienceFlowBoxSubTitle = styled.h3`
  font-weight: 600;
  line-height: 23px;
`;

const ExperienceFlow = () => {
  return (
    <ExperienceFlowWrapper>
      <ExperienceFlowBoxContainer>
        {experienceFlowData.map((item, index) => (
          <ExperienceFlowBox key={item.id}>
            <BackgroundImage bgImg={item.img} />
            <ContentContainer>
              <ExperienceFlowBoxStep first={index}>
                <h1>Step {item.step}</h1>
              </ExperienceFlowBoxStep>
              <ExperienceFlowBoxTitle>{item.title}</ExperienceFlowBoxTitle>
              <ExperienceFlowBoxSubTitle>
                {item.subtitle}
              </ExperienceFlowBoxSubTitle>
            </ContentContainer>
          </ExperienceFlowBox>
        ))}
      </ExperienceFlowBoxContainer>
    </ExperienceFlowWrapper>
  );
};

export default ExperienceFlow;
