import React, { useContext, useState } from "react";
import styled from "styled-components";
import img from "../../../assets/LoginBaron.png";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { LoginContext } from "../../../Context/LoginContext";

const LoginLeftWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${(props) => props.theme.colors.purple};
  h3 {
    color: ${(props) => props.theme.colors.black};
  }
  @media ${(props) => props.theme.device.tablet} {
    padding: 20px 0px;
  }
`;

const LoginLeftImg = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 250px;
    height: 250px;
    @media ${(props) => props.theme.device.mobile} {
      width: 180px;
      height: 150px;
    }
  }
`;

const LoginLeftTitleContainer = styled.div`
  text-align: center;
  margin-top: 10px;
  margin-bottom: 40px;
`;

const LoginLeftTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 5px;
  @media ${(props) => props.theme.device.mobile} {
    font-size: 2rem;
  }
`;

const LoginLeftSubTitle = styled.h2`
  font-size: ${(props) => props.theme.fontSize.base};
  opacity: 0.7;
`;

const LoginLeftForm = styled.form`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.black};
  width: 300px;
  @media ${(props) => props.theme.device.mobile} {
    width: 200px;
  }
  label {
    font-size: ${(props) => props.theme.fontSize.base};
    margin-bottom: 7px;
    color: ${(props) => props.theme.colors.black};
    font-weight: 600;
  }
  input {
    padding: 12px 10px;
    border-radius: 3px;
    border: none;
    margin-bottom: 15px;
    &:last-child {
      background: ${(props) => props.theme.colors.black};
      color: ${(props) => props.theme.colors.white};
      cursor: pointer;
    }
  }
  ::placeholder {
  }
  h3 {
    font-weight: 800;
    font-size: ${(props) => props.theme.fontSize.sm};
    margin-left: auto;
    text-decoration: underline;
    text-underline-offset: 4px;
    text-decoration-thickness: 3px;
    margin-bottom: 20px;
  }
`;

const LoginLeftNoAccount = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  @media ${(props) => props.theme.device.mobile} {
    text-align: center;
  }
  a {
    text-decoration: none;
    color: inherit;
    span {
      color: ${(props) => props.theme.colors.white};
      margin-left: 5px;
      cursor: pointer;
    }
  }
`;

const ErrorMessage = styled.span`
  color: #d63031;
  font-size: ${(props) => props.theme.fontSize.md};
  font-weight: 600;
  font-family: "Noto Sans KR", sans-serif;
  margin-top: 5px;
  margin-bottom: 15px;
`;

const LoginLeft = () => {
  const { register, handleSubmit, watch } = useForm();
  const [infoCheck, setInfoCheck] = useState("");

  const { login } = useContext(LoginContext);

  const onValid = (data) => {
    try {
      login(data);
    } catch (error) {
      setInfoCheck("Invalid login credentials");
    }
  };

  return (
    <LoginLeftWrapper>
      <Link to="/">
        <LoginLeftImg>
          <img src={img} alt="" />
        </LoginLeftImg>
      </Link>
      <LoginLeftTitleContainer>
        <LoginLeftTitle>Welcome Back</LoginLeftTitle>
        <LoginLeftSubTitle>please enter your detail</LoginLeftSubTitle>
      </LoginLeftTitleContainer>
      <LoginLeftForm onSubmit={handleSubmit(onValid)}>
        <label>Username</label>
        <input {...register("username")} placeholder="username" type="text" />
        <label>Password</label>
        <input
          {...register("password")}
          placeholder="Password"
          type="password"
        />
        <h3>Forgot Password</h3>
        <input type="submit" value="Sign In" />
      </LoginLeftForm>
      {infoCheck && <ErrorMessage>{infoCheck}</ErrorMessage>}
      <LoginLeftNoAccount>
        Don't have an account?
        <Link to="/signup">
          <span>Sign Up!</span>
        </Link>
      </LoginLeftNoAccount>
    </LoginLeftWrapper>
  );
};

export default LoginLeft;
