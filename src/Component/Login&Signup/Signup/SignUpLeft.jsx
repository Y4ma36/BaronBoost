import React from "react";
import styled from "styled-components";
import img from "../../../assets/LoginBaron.png";

const SignUpLeftWrappar = styled.div`
  flex: 1;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${(props) => props.theme.colors.purple};
`;

const SignUpImg = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 250px;
    height: 250px;
  }
`;

const SignUpLeft = () => {
  return (
    <SignUpLeftWrappar>
      {" "}
      <SignUpImg>
        <img src={img} alt="" />
      </SignUpImg>
    </SignUpLeftWrappar>
  );
};

export default SignUpLeft;
