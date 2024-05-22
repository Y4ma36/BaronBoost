import React from "react";
import styled from "styled-components";
import bgImg from "../../../assets/startNow.jpg";
import { color } from "framer-motion";
import { Link } from "react-router-dom";

const StartNowWrapper = styled.div`
  height: 90vh;
  background-color: black;
  display: flex;
  justify-content: center;
`;

const StartNowContainer = styled.div`
  margin-top: 200px;
  background-image: linear-gradient(
      to left,
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.8)
    ),
    url(${bgImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  width: 80%;
  height: 300px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StartNowLeft = styled.div`
  h1 {
    font-size: 4rem;
    font-weight: 900;
    margin-bottom: 5px;
  }
  p {
    font-size: 2rem;
    font-weight: 600;
  }
`;

const StartNowRight = styled.div`
  button {
    font-size: 2rem;
    font-weight: 600;
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.purple};
    border: none;
    border-radius: 5px;
    padding: 20px 20px;
    transition: all 0.5s ease-in-out;
    &:hover {
      background-color: white;
      color: ${(props) => props.theme.colors.purple};
    }
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const StartNow = () => {
  return (
    <StartNowWrapper>
      <StartNowContainer>
        <StartNowLeft>
          <h1>Start Now</h1>
          <p>Ready to hit your desired rank?</p>
        </StartNowLeft>
        <StartNowRight>
          <button>
            <Link>Order Now</Link>
          </button>
        </StartNowRight>
      </StartNowContainer>
    </StartNowWrapper>
  );
};

export default StartNow;
