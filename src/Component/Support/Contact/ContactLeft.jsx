import React from "react";
import styled from "styled-components";
import Lottie from "react-lottie";
import contact_Lotti from "../../../assets/Support/contactus.json";

const Wrapper = styled.div`
  flex: 1;
  background-color: ${(props) => props.theme.colors.white};
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

const SubTitle = styled.h3`
  font-size: ${(props) => props.theme.fontSize.lg};
  font-weight: 500;
  opacity: 0.7;
  color: ${(props) => props.theme.colors.black};
  text-align: center;
  margin-top: 10px;
  @media ${(props) => props.theme.device.desktop} {
    font-size: ${(props) => props.theme.fontSize.md};
  }
  @media ${(props) => props.theme.device.laptop} {
    font-size: ${(props) => props.theme.fontSize.base};
  }
  @media ${(props) => props.theme.device.mobile} {
    font-size: ${(props) => props.theme.fontSize.sm};
  }
`;

const ContactLeft = () => {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: contact_Lotti,
  };
  return (
    <Wrapper>
      <Container>
        <ContactImg>
          <Lottie options={lottieOptions} />
        </ContactImg>
        <Title>Get In Touch</Title>
        <SubTitle>
          We'd love to chat about how you plan to use our platform
        </SubTitle>
      </Container>
    </Wrapper>
  );
};

export default ContactLeft;
