import React from "react";
import styled from "styled-components";
import servicesFAQData from "./\bServicesData";
import { FaQuestion } from "react-icons/fa6";
import { color } from "framer-motion";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: black;
  gap: 30px;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-top: 100px;
  position: relative;
  &::before,
  &::after {
    content: "";
    top: 60%;
    width: 50px;
    height: 4px;
    background-color: white;
    position: absolute;
  }

  &::before {
    left: -60px;
  }

  &::after {
    margin-left: 10px;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 20px 80px;
  grid-gap: 20px;
`;

const ServicesFAQList = styled.div`
  background: rgba(73, 69, 84, 0.6);
  padding: 40px 20px;
  border-radius: 10px;
  h3 {
    font-size: ${(props) => props.theme.fontSize.md};
    line-height: 25px;
  }
`;

const ServicesFAQTitleBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  gap: 10px;
  h1 {
    font-size: ${(props) => props.theme.fontSize.lg};
    font-weight: 600;
    width: 100%;
  }
`;

const IconContainer = styled.div`
  width: 10%;
`;

const IconCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.purple};

  .icon {
    color: ${(props) => props.theme.colors.white};
    font-size: 20px;
    vertical-align: middle;
  }
`;

const ServicesFAQ = () => {
  return (
    <Wrapper>
      <Title>League of Legends Boosting Quick FAQs</Title>
      <Container>
        {servicesFAQData.map((item, index) => (
          <ServicesFAQList>
            <ServicesFAQTitleBox>
              <IconContainer>
                <IconCircle>
                  <FaQuestion className="icon" />
                </IconCircle>
              </IconContainer>
              <h1>{item.name}</h1>
            </ServicesFAQTitleBox>
            <h3>{item.description}</h3>
          </ServicesFAQList>
        ))}
      </Container>
    </Wrapper>
  );
};

export default ServicesFAQ;
