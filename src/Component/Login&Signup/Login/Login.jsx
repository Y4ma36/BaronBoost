import React from "react";
import styled from "styled-components";
import LoginLeft from "./LoginLeft";
import LoginRIght from "./LoginRIght";

const LoginWrapper = styled.div`
  display: flex;
  height: 100vh;
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
