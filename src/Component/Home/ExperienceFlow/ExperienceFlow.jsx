import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import experienceFlowData from "./ExperienceFlowData";
import {
  motion,
  useAnimation,
  useInView,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

const ExperienceFlowWrapper = styled.div`
  background: black;
  display: flex;
  justify-content: center;
  padding-bottom: 50px;
`;

const ExperienceFlowBoxContainer = styled.div`
  width: 100%;
  min-height: 670px;
  margin: 100px 130px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  @media ${(props) => props.theme.device.laptop} {
    grid-template-columns: repeat(2, auto);
  }
  @media ${(props) => props.theme.device.tablet} {
    grid-template-columns: repeat(1, minmax(300px, auto));
    gap: 20px;
  }
`;

const ExperienceFlowBox = styled(motion.div)`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${(props) => props.bgImg});
  background-position: center center;
  background-size: cover;

  @media ${(props) => props.theme.device.laptop} {
    height: 60vh;
  }
`;

const ExperienceFlowBoxStep = styled.div`
  font-size: ${(props) => props.theme.fontSize.lg};
  font-weight: 800;
  background-color: ${(props) => props.theme.colors.purple};
  margin-top: 100px;
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
  @media ${(props) => props.theme.device.laptop} {
    font-size: ${(props) => props.theme.fontSize.md};
  }
`;

const ExperienceFlowBoxSubTitle = styled.h3`
  font-weight: 600;
  line-height: 23px;
  @media ${(props) => props.theme.device.tablet} {
    font-size: ${(props) => props.theme.fontSize.sm};
  }
`;

const ExperienceFlow = () => {
  const { scrollY } = useScroll();
  const showBox = useAnimation();
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 1900) {
      showBox.start({
        opacity: 1,
      });
    }
  });

  return (
    <ExperienceFlowWrapper>
      <ExperienceFlowBoxContainer>
        {experienceFlowData.map((item, index) => (
          <ExperienceFlowBox
            bgImg={item.img}
            key={item.id}
            animate={showBox}
            initial={{ opacity: 0 }}
          >
            <ExperienceFlowBoxStep first={index}>
              <h1>Step {item.step}</h1>
            </ExperienceFlowBoxStep>
            <ExperienceFlowBoxTitle>{item.title}</ExperienceFlowBoxTitle>
            <ExperienceFlowBoxSubTitle>
              {item.subtitle}
            </ExperienceFlowBoxSubTitle>
          </ExperienceFlowBox>
        ))}
      </ExperienceFlowBoxContainer>
    </ExperienceFlowWrapper>
  );
};

export default ExperienceFlow;
