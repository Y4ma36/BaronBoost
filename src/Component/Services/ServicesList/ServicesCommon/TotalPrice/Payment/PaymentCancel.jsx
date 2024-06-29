import React, { useEffect } from "react";
import styled from "styled-components";
import Lottie from "react-lottie";
import success_Lotti from "../../../../../../assets/cancel.json";
import { Link, useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.purple};
`;

const Container = styled.div`
  width: 40%;
  height: 80%;
  border-radius: 15px;
  background-color: rgb(255, 255, 255, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
  @media ${(props) => props.theme.device.tablet} {
    width: 80%;
  }
`;

const SuccessPopContainer = styled.div`
  width: 80%;
`;
const Title = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 10px;
  @media ${(props) => props.theme.device.tablet} {
    font-size: 3.5rem;
  }
  @media ${(props) => props.theme.device.mobile} {
    font-size: 2.5rem;
  }
`;

const SubTitle = styled.h1`
  font-size: ${(props) => props.theme.fontSize.lg};
  font-weight: 500;
  width: 85%;
  text-align: center;
  margin-bottom: 50px;
  line-height: 30px;
  @media ${(props) => props.theme.device.tablet} {
    font-size: ${(props) => props.theme.fontSize.md};
  }
`;

const LoginButton = styled.button`
  background-color: ${(props) => props.theme.colors.purple};
  padding: 30px 50px;
  font-size: ${(props) => props.theme.fontSize.md};
  font-weight: 600;
  color: ${(props) => props.theme.colors.white};
  border-radius: 10px;
  border: none;
  transition: all 0.5s ease-in-out;
  &:hover {
    background-color: white;
    color: ${(props) => props.theme.colors.purple};
  }

  @media ${(props) => props.theme.device.laptop} {
    button {
      font-size: ${(props) => props.theme.fontSize.base};
    }
  }
`;

const PaymentCancel = () => {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: success_Lotti,
  };

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 15000);
    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <Wrapper>
      <Container>
        <SuccessPopContainer>
          <Lottie options={lottieOptions}></Lottie>
        </SuccessPopContainer>
        <Title>Failed</Title>
        <SubTitle>
          Your payment could not be processed at this time. Please check your
          payment details and try again. If the problem persists, contact our
          support team for assistance.
        </SubTitle>
        <Link to="/">
          <LoginButton>Back to Home</LoginButton>
        </Link>
      </Container>
    </Wrapper>
  );
};

export default PaymentCancel;
