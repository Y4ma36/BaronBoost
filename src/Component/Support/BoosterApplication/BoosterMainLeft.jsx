import React from "react";
import styled from "styled-components";
import Lottie from "react-lottie";
import booster_Lottie from "../../../assets/Support/application.json";

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media ${(props) => props.theme.device.desktop} {
    justify-content: center;
  }
`;

const Container = styled.div`
  width: 80%;
  height: 90%;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.purple};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 50px;
`;

const ContactImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  @media ${(props) => props.theme.device.laptop} {
    width: 60%;
  }
  @media ${(props) => props.theme.device.mobile} {
    width: 90%;
  }
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 900;
  color: ${(props) => props.theme.colors.black};
  text-align: center;
  @media ${(props) => props.theme.device.desktop} {
    font-size: 3rem;
  }
  @media ${(props) => props.theme.device.tablet} {
    font-size: 2rem;
  }
  @media ${(props) => props.theme.device.mobile} {
    font-size: ${(props) => props.theme.fontSize.md};
  }
`;

const BoosterMainLeft = () => {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: booster_Lottie,
  };
  return (
    <Wrapper>
      <Container>
        <ContactImg>
          <Lottie options={lottieOptions} />
        </ContactImg>
        <Title>Join Now!</Title>
      </Container>
    </Wrapper>
  );
};

export default BoosterMainLeft;
