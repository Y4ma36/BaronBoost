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
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 20px;
`;

const SubTitle = styled.h3`
  font-size: ${(props) => props.theme.fontSize.md};
  opacity: 0.8;
  font-weight: 600;
  width: 35%;
  text-align: center;
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
