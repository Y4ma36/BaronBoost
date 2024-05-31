import React, { useEffect } from "react";
import styled from "styled-components";
import img from "../../../assets/LoginBaron.png";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { color } from "framer-motion";

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

const SignUpLeftTitleContainer = styled.div`
  text-align: center;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const SignUpLeftTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 5px;
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
  ::placeholder {
  }
  span {
    color: #d63031;
    font-weight: 600;
    font-family: "Noto Sans KR", sans-serif;
    margin-bottom: 10px;
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

const SignUpLeftNoAccount = styled.div`
  font-family: "Noto Sans KR", sans-serif;
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

  const onValid = (data) => {};
  return (
    <SignUpLeftWrappar>
      <SignUpImg>
        <img src={img} alt="" />
      </SignUpImg>
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
          {...register("username", { required: true, minLength: 4 })}
          placeholder="UserName"
          type="text"
        />
        <label>Password</label>
        <input
          {...register("password", { required: true })}
          placeholder="Password"
          type="password"
        />
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
          <span r>{errors.passwordConfirm.message}</span>
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
