import React, { useEffect, useState } from "react";
import styled from "styled-components";
import img from "../../../assets/LoginBaron.png";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import SignUp from "../../../Context/SignUpContext";
import axios from "axios";

const SignUpLeftWrappar = styled.div`
  flex: 1;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${(props) => props.theme.colors.purple};
  @media ${(props) => props.theme.device.tablet} {
    padding: 20px 0px;
  }
`;

const SignUpImg = styled.div`
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

const SignUpLeftTitleContainer = styled.div`
  text-align: center;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const SignUpLeftTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 5px;
  @media ${(props) => props.theme.device.mobile} {
    font-size: 2rem;
  }
`;

const SignUpLeftSubTitle = styled.h2`
  font-size: ${(props) => props.theme.fontSize.base};
  opacity: 0.7;
`;

const SignUpLeftForm = styled.form`
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
  }

  button {
    background: ${(props) => props.theme.colors.black};
    color: ${(props) => props.theme.colors.white};
    cursor: pointer;
    padding: 12px 10px;
    border-radius: 3px;
    border: none;
    margin-bottom: 15px;
  }
`;

const ErrorMessage = styled.span`
  color: #d63031;
  font-weight: 600;
  font-family: "Noto Sans KR", sans-serif;
  margin-bottom: 10px;
`;

const SignUpLeftNoAccount = styled.div`
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

const SignUpLeft = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const navigate = useNavigate();
  const onValid = async (data) => {
    try {
      await SignUp(data, navigate);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <SignUpLeftWrappar>
      <Link to="/">
        <SignUpImg>
          <img src={img} alt="" />
        </SignUpImg>
      </Link>
      <SignUpLeftTitleContainer>
        <SignUpLeftTitle>Welcome</SignUpLeftTitle>
        <SignUpLeftSubTitle>Join Us Today!</SignUpLeftSubTitle>
      </SignUpLeftTitleContainer>
      <SignUpLeftForm onSubmit={handleSubmit(onValid)}>
        <label>Email</label>
        <input
          {...register("email", { required: true })}
          placeholder="Email"
          type="email"
        />
        <label>UserName</label>
        <input
          {...register("username", {
            required: true,
            minLength: {
              value: 4,
              message: "Please enter at least 4 characters.",
            },
          })}
          placeholder="UserName"
          type="text"
        />
        {errors?.username ? (
          <ErrorMessage>{errors.username.message}</ErrorMessage>
        ) : null}
        <label>Password</label>
        <input
          {...register("password", {
            required: true,
            minLength: {
              value: 6,
              message: "Please enter at least 6 characters.",
            },
          })}
          placeholder="Password"
          type="password"
        />
        {errors?.password ? (
          <ErrorMessage>{errors.password.message}</ErrorMessage>
        ) : null}
        {/* {nameCheck ? <ErrorMessage>{nameCheck}</ErrorMessage> : null} */}
        <label>Confirm Password</label>
        <input
          {...register("passwordConfirm", {
            required: true,
            validate: {
              check: (val) => {
                if (getValues("password") !== val) {
                  return "The password does not match";
                }
              },
            },
          })}
          placeholder="Password"
          type="password"
        />
        {errors.passwordConfirm && (
          <ErrorMessage>{errors.passwordConfirm.message}</ErrorMessage>
        )}
        <button>Sign In</button>
      </SignUpLeftForm>
      <SignUpLeftNoAccount>
        Already Have an account?, then
        <Link to="/login">
          <span>Log In!</span>
        </Link>
      </SignUpLeftNoAccount>
    </SignUpLeftWrappar>
  );
};

export default SignUpLeft;
