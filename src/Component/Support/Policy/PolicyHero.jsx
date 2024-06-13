import React from "react";
import styled from "styled-components";
import hero_Bg from "../../../assets/Support/policyHero.jpg";

const Wrapper = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 1)),
    url(${hero_Bg});
  background-position: 10% 30%;
  background-size: cover;
  background-repeat: no-repeat;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 10px;
  text-align: center;
  span {
    color: ${(props) => props.theme.colors.purple};
  }
`;

const PolicyHero = () => {
  return (
    <Wrapper>
      <Title>Policy</Title>
    </Wrapper>
  );
};

export default PolicyHero;
