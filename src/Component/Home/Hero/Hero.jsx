import React from "react";
import Hero_BackgroundImage from "../../../assets/HeroBackground.jpeg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeroWrapper = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)),
    url(${Hero_BackgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroDisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroMainTitle = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  text-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
  margin-bottom: 30px;
  span {
    color: ${(props) => props.theme.colors.yellow};
  }
`;

const HeroSubTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  text-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
  span {
    color: ${(props) => props.theme.colors.purple};
  }
`;

const HeroButtonContainer = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 30px;
`;

const HeroButton = styled.button`
  padding: 20px 0px;
  width: 300px;
  border: none;
  font-size: ${(props) => props.theme.fontSize.md};
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 600;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.purple};
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
          <Link>
            <HeroButton>Rank Up</HeroButton>
          </Link>
          <Link>
            <HeroButton>First Time?</HeroButton>
          </Link>
        </HeroButtonContainer>
      </HeroDisplayContainer>
    </HeroWrapper>
  );
};

export default Hero;
