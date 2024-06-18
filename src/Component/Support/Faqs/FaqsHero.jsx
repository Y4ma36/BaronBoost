import React from "react";
import styled from "styled-components";
import hero_Bg from "../../../assets/Support/faqs.jpg";
import { Link } from "react-router-dom";
import { color } from "framer-motion";

const Wrapper = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)),
    url(${hero_Bg});
  background-position: 10% 40%;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 20px;
  text-align: center;
  @media ${(props) => props.theme.device.mobile} {
    background-position: center;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 10px;
  text-align: center;
  span {
    color: ${(props) => props.theme.colors.purple};
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
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.purple};
    font-size: ${(props) => props.theme.fontSize.lg};
    font-weight: 700;
  }
  @media ${(props) => props.theme.device.tablet} {
    font-size: ${(props) => props.theme.fontSize.base};
    width: 60%;
  }
`;

const FaqsHero = () => {
  return (
    <Wrapper>
      <Title>Frequently Asked Questions</Title>
      <SubTitle>
        Quick answers to questions you may have.Can't find what you're looking
        for? Check out our
        <Link to="https://discord.gg/6jmfq4AqYV"> Discord!</Link>
      </SubTitle>
    </Wrapper>
  );
};

export default FaqsHero;
