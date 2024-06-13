import React from "react";
import styled from "styled-components";
import { color } from "framer-motion";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 80%;
  border-radius: 10px;
  padding: 15px 30px;
  background-color: ${(props) => props.theme.colors.purple};
  border: 5px solid white;
  text-align: center;
  gap: 15px;

  @media ${(props) => props.theme.device.laptop} {
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  span {
    color: ${(props) => props.theme.colors.black};
  }
`;

const SubTitle = styled.h2`
  font-size: ${(props) => props.theme.fontSize.md};
  font-weight: 700;
  color: ${(props) => props.theme.colors.black};
`;

const Benefit = styled.div`
  ul {
    display: flex;
    gap: 10px;
    @media ${(props) => props.theme.device.mobile} {
      flex-direction: column;
    }
    li {
      background-color: black;
      padding: 15px 10px;
      border-radius: 5px;
      h1 {
      }
    }
  }
`;

const GoogleForm = styled.div`
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.white};
    button {
      padding: 10px 20px;
      font-size: ${(props) => props.theme.fontSize.lg};
      border: none;
      border-radius: 5px;
      background-color: ${(props) => props.theme.colors.white};
    }
  }
`;

const Conclusion = styled.h1``;

const BoosterMainRight = () => {
  return (
    <Wrapper>
      <Container>
        <Title>
          Welcome to <span>B</span>aron <span>B</span>oost
        </Title>
        <SubTitle>
          We're excited that you're interested in joining our team of
          professional League of Legends boosters. Our mission is to provide
          top-notch boosting services, and we need skilled and dedicated players
          to help us achieve that goal.
        </SubTitle>
        <Benefit>
          <ul>
            <li>
              <h1>Competitive compensation</h1>
            </li>
            <li>
              <h1>Flexible working hours</h1>
            </li>
            <li>
              <h1>Be part of a professional and supportive community</h1>
            </li>
          </ul>
        </Benefit>
        <GoogleForm>
          <Link to="https://forms.gle/TbJcDVZg7QWjCccH9">
            <button>Apply Now</button>
          </Link>
        </GoogleForm>
        <Conclusion>
          Please fill out the google form and attach any necessary documents. We
          aim to respond to all applications within a 2~3days.
        </Conclusion>
      </Container>
    </Wrapper>
  );
};

export default BoosterMainRight;
