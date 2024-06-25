import React, { useState } from "react";
import styled from "styled-components";
import Lottie from "react-lottie";
import forgotPassword_Lotti from "../../../assets/forgotpassword.json";
import { FaArrowLeft } from "react-icons/fa6";
import { color } from "framer-motion";
import { Link } from "react-router-dom";
import useAuth from "../../../Context/LoginContext";

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
  @media ${(props) => props.theme.device.tablet} {
    width: 80%;
  }
`;

const ForgotPasswordPopContainer = styled.div`
  width: 70%;
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

const ForgotPasswordForm = styled.form`
  display: flex;
  align-items: center;
  label {
    font-size: ${(props) => props.theme.fontSize.lg};
    font-weight: 800;
    margin-right: 5px;
  }
  input {
    padding: 5px 0px;
    width: 250px;
    font-size: ${(props) => props.theme.fontSize.md};
    border: none;
    border-radius: 5px;
  }
  button {
    background-color: ${(props) => props.theme.colors.purple};
    padding: 5px 10px;
    font-size: ${(props) => props.theme.fontSize.md};
    font-weight: 600;
    color: ${(props) => props.theme.colors.white};
    border-radius: 5px;
    border: none;
    transition: all 0.5s ease-in-out;
    margin-left: 5px;
    &:hover {
      background-color: white;
      color: ${(props) => props.theme.colors.purple};
    }
  }
`;

const GoBackHome = styled.div`
  margin-top: 50px;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;

    &:hover {
      h1 {
        color: ${(props) => props.theme.colors.purple};
      }
      .icon {
        color: ${(props) => props.theme.colors.white};
      }
    }
  }
  h1 {
    font-size: 2rem;
    font-weight: 800;
    transition: all 0.3s ease-in-out;
  }
  .icon {
    font-size: ${(props) => props.theme.fontSize.md};
    font-weight: 800;
    color: ${(props) => props.theme.colors.purple};
    margin-left: 5px;
    transition: all 0.3s ease-in-out;
  }
`;

const ForgotPassword = () => {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: forgotPassword_Lotti,
  };

  const [username, setUsername] = useState("");

  const { updatePassword } = useAuth();

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username) {
      updatePassword({ username: username });
    }
  };
  return (
    <Wrapper>
      <Container>
        <ForgotPasswordPopContainer>
          <Lottie options={lottieOptions}></Lottie>
        </ForgotPasswordPopContainer>
        <Title>Forgot Password?</Title>
        <SubTitle>
          Don't worry! Enter your username and click the button. We will send
          you an email with instructions to reset your password.
        </SubTitle>
        <ForgotPasswordForm onSubmit={handleSubmit}>
          <label htmlFor="username">User Name: </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Submit</button>
        </ForgotPasswordForm>
        <GoBackHome>
          <Link to="/">
            <h1>Home</h1>
            <FaArrowLeft className="icon" />
          </Link>
        </GoBackHome>
      </Container>
    </Wrapper>
  );
};

export default ForgotPassword;
