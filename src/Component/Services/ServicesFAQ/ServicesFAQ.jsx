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
    @media ${(props) => props.theme.device.laptop} {
      width: 40px;
      height: 3px;
    }
    @media ${(props) => props.theme.device.tablet} {
      width: 35px;
      height: 2px;
    }
  }

  &::before {
    left: -60px;
    @media ${(props) => props.theme.device.tablet} {
      left: -45px;
    }
  }

  &::after {
    margin-left: 10px;
    @media ${(props) => props.theme.device.mobile} {
      right: -40px;
    }
  }
  @media ${(props) => props.theme.device.desktop} {
    font-size: 2rem;
  }
  @media ${(props) => props.theme.device.laptop} {
    font-size: ${(props) => props.theme.fontSize.lg};
  }
  @media ${(props) => props.theme.device.laptop} {
    font-size: ${(props) => props.theme.fontSize.md};
  }
  @media ${(props) => props.theme.device.mobile} {
    font-size: ${(props) => props.theme.fontSize.base};
    width: 70%;
    text-align: center;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 20px 80px;
  grid-gap: 20px;
  @media ${(props) => props.theme.device.laptop} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${(props) => props.theme.device.tablet} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ServicesFAQList = styled.div`
  background: rgba(73, 69, 84, 0.6);
  padding: 40px 20px;
  border-radius: 10px;
`;

const ServicesFAQTitleBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  gap: 10px;
  @media ${(props) => props.theme.device.desktop} {
    gap: 20px;
  }
  @media ${(props) => props.theme.device.mobile} {
    flex-direction: column;
  }
`;

const ServicesFAQTitle = styled.h1`
  font-size: ${(props) => props.theme.fontSize.lg};
  font-weight: 600;
  width: 100%;
  @media ${(props) => props.theme.device.desktop} {
    font-size: ${(props) => props.theme.fontSize.md};
  }
  @media ${(props) => props.theme.device.mobile} {
    font-size: ${(props) => props.theme.fontSize.base};
    text-align: center;
  }
`;

const ServicesFAQDescription = styled.h3`
  font-size: ${(props) => props.theme.fontSize.md};
  line-height: 25px;
  @media ${(props) => props.theme.device.desktop} {
    font-size: ${(props) => props.theme.fontSize.base};
  }
  @media ${(props) => props.theme.device.mobile} {
    font-size: ${(props) => props.theme.fontSize.sm};
    text-align: center;
  }
`;

const IconContainer = styled.div`
  width: 10%;
  @media ${(props) => props.theme.device.mobile} {
    width: 100%;
    display: flex;
    justify-content: center;
  }
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
          <ServicesFAQList key={item.id}>
            <ServicesFAQTitleBox>
              <IconContainer>
                <IconCircle>
                  <FaQuestion className="icon" />
                </IconCircle>
              </IconContainer>
              <ServicesFAQTitle>{item.name}</ServicesFAQTitle>
            </ServicesFAQTitleBox>
            <ServicesFAQDescription>{item.description}</ServicesFAQDescription>
          </ServicesFAQList>
        ))}
      </Container>
    </Wrapper>
  );
};

export default ServicesFAQ;
