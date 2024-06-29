import React from "react";
import styled from "styled-components";
import LoginLeft from "./LoginLeft";
import LoginRIght from "./LoginRIght";

const LoginWrapper = styled.div`
  display: flex;
  height: 100vh;
  @media ${(props) => props.theme.device.tablet} {
    flex-direction: column;
    width: 100%;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }
`;

const Login = () => {
  return (
    <LoginWrapper>
      <LoginLeft />
      <LoginRIght />
    </LoginWrapper>
  );
};

export default Login;
