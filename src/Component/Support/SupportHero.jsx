import React from "react";
import styled from "styled-components";
import Hero_Img from "../../assets/servicesBaronLogo.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 50px;
`;

const HeroImg = styled.div`
  img {
    width: 250px;
    height: 250px;
  }
  @media ${(props) => props.theme.device.tablet} {
    img {
      width: 200px;
      height: 200px;
    }
  }
  @media ${(props) => props.theme.device.mobile} {
    img {
      width: 150px;
      height: 150px;
    }
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
  @media ${(props) => props.theme.device.laptop} {
    font-size: 3rem;
  }
  @media ${(props) => props.theme.device.tablet} {
    font-size: 2rem;
  }
  @media ${(props) => props.theme.device.mobile} {
    font-size: ${(props) => props.theme.fontSize.lg};
  }
`;

const SubTitle = styled.h3`
  font-size: ${(props) => props.theme.fontSize.md};
  opacity: 0.8;
  font-weight: 600;
  width: 35%;
  text-align: center;
  @media ${(props) => props.theme.device.mobile} {
    font-size: ${(props) => props.theme.fontSize.sm};
    font-weight: 700;
    line-height: 17px;
    width: 50%;
  }
`;

const SupportHero = () => {
  return (
    <Wrapper>
      <HeroImg>
        <img src={Hero_Img} alt="" />
      </HeroImg>
      <Title>How Can We Help You?</Title>
      <SubTitle>
        We understand that sometimes you may encounter difficulties or have
        questions while using our platform, and we're here to assist you every
        step of the way.
      </SubTitle>
    </Wrapper>
  );
};

export default SupportHero;
