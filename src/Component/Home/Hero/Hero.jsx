import React from "react";
import Hero_BackgroundImage from "../../../assets/HeroBackground.jpeg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeroWrapper = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 1)),
    url(${Hero_BackgroundImage});

  /* 밑에 부분을 더 검하게 줘서 다음 색션과 자연스럽게 이어지도록  */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroDisplayContainer = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  text-align: center;
  @media ${(props) => props.theme.device.mobile} {
    width: 80%;
  }
`;

const HeroMainTitle = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  text-align: center;
  text-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
  margin-bottom: 30px;
  span {
    color: ${(props) => props.theme.colors.yellow};
  }
  @media ${(props) => props.theme.device.laptop} {
    font-size: 3rem;
  }
  @media ${(props) => props.theme.device.tablet} {
    font-size: 2.5rem;
  }

  @media ${(props) => props.theme.device.mobile} {
    font-size: ${(props) => props.theme.fontSize.lg};
  }
`;

const HeroSubTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  text-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
  span {
    color: ${(props) => props.theme.colors.purple};
  }
  @media ${(props) => props.theme.device.laptop} {
    font-size: ${(props) => props.theme.fontSize.lg};
  }
  @media ${(props) => props.theme.device.tablet} {
    font-size: ${(props) => props.theme.fontSize.md};
  }
  @media ${(props) => props.theme.device.mobile} {
    font-size: ${(props) => props.theme.fontSize.base};
  }
`;

const HeroButtonContainer = styled.div`
  margin-top: 60px;
  display: flex;
  gap: 30px;
  @media ${(props) => props.theme.device.mobile} {
    flex-direction: column;
  }
`;

const HeroButton = styled.button`
  display: inline-block;
  position: relative;
  text-align: center;
  transition: all 0.5s;
  padding: 20px 0px;
  width: 250px;
  border: none;
  border-radius: 5px;
  font-size: ${(props) => props.theme.fontSize.md};
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 600;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) =>
    props.index === 0
      ? props.theme.colors.purple
      : props.theme.colors.lightGreen};

  &:after {
    content: "»";
    position: absolute;
    opacity: 0;
    font-size: 30px;
    top: 9px;
    right: -5px;
    transition: 0.5s;
  }

  &:hover {
    padding-right: 40px;
    padding-left: 8px;
  }

  &:hover:after {
    opacity: 1;
    right: 20px;
  }

  @media ${(props) => props.theme.device.mobile} {
    width: 180px;
    font-size: ${(props) => props.theme.fontSize.base};
  }
`;

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroDisplayContainer>
        <HeroMainTitle>
          Unlock Your <span>Dream</span> Rank Today!
        </HeroMainTitle>
        <HeroSubTitle>
          Welcome to the premier destination for all your Elo boosting needs.
          <br /> At <span>B</span>aron<span>B</span>oost, we're committed to
          delivering the ultimate League of Legends experience.
        </HeroSubTitle>
        <HeroButtonContainer>
          <Link to="/services/solo">
            <HeroButton index={0}>Rank Up</HeroButton>
          </Link>
          <Link>
            <HeroButton index={1}>First Time?</HeroButton>
          </Link>
        </HeroButtonContainer>
      </HeroDisplayContainer>
    </HeroWrapper>
  );
};

export default Hero;
