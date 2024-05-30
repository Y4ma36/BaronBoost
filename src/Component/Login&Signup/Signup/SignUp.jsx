import React from "react";
import styled from "styled-components";
import SignUpLeft from "./SignUpLeft";
import SignUpRight from "./SignUpRight";

const SignUpWrapper = styled.div`
  display: flex;
  height: 100vh;
`;

const SignUp = () => {
  return (
    <SignUpWrapper>
      <SignUpLeft />
      <SignUpRight />
    </SignUpWrapper>
  );
};

export default SignUp;
