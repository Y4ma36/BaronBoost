import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import * as auth from "../../../../../Utils/auth.jsX";
import { LoginContext } from "../../../../../Context/LoginContext";

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  padding: 10px;
`;

const InfoBox = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid black;
`;

const Title = styled.h1`
  color: black;
  font-size: ${(props) => props.theme.fontSize.lg};
  font-weight: 800;
`;

const SubTitleBox = styled.div`
  margin-top: 30px;
  width: 90%;
  padding: 40px 10px;
  background-color: ${(props) => props.theme.colors.purple};
  border-radius: 5px;
`;

const SubTitle = styled.h3`
  color: black;
  font-size: ${(props) => props.theme.fontSize.base};
  font-weight: 600;
  text-align: center;
`;

const LoadingWrapper = styled.div`
  height: 100vh;
  background-color: black;
`;

const PasswordResetContainer = styled.div`
  form {
    display: flex;
    flex-direction: column;
  }
  label {
    color: black;
    font-size: ${(props) => props.theme.fontSize.base};
    font-weight: 600;
    margin-top: 10px;
    margin-bottom: 5px;
  }
  input {
    padding: 5px 5px;
    width: 200px;
  }
  button {
    align-self: center;
    margin-top: 10px;
    padding: 5px 50px;
    background-color: ${(props) => props.theme.colors.purple};
    border: none;
    border-radius: 3px;
    font-weight: 600;
    font-size: ${(props) => props.theme.fontSize.md};
  }
`;
const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const { isLogin, resetPassword } = useContext(LoginContext);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      setUserData(userInfo);
    };

    if (isLogin) {
      fetchData();
    }
  }, [isLogin]);

  if (!userData) {
    return <LoadingWrapper>Loading...</LoadingWrapper>;
  }

  const handleResetPassword = () => {
    resetPassword(confirmPassword);
  };

  return (
    <Wrapper>
      <InfoBox>
        <Title>Username</Title>
        <SubTitleBox>
          <SubTitle>{userData.username}</SubTitle>
        </SubTitleBox>
      </InfoBox>
      <InfoBox>
        <Title>Email</Title>
        <SubTitleBox>
          <SubTitle>{userData.email}</SubTitle>
        </SubTitleBox>
      </InfoBox>
      <InfoBox>
        <Title>Role</Title>
        <SubTitleBox>
          <SubTitle>{userData.role}</SubTitle>
        </SubTitleBox>
      </InfoBox>
      <InfoBox>
        <Title>Reset Password</Title>
        <PasswordResetContainer>
          <form action="" onSubmit={handleResetPassword}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required />
            <label htmlFor="">Confirm Password</label>
            <input
              type="text"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e)}
              required
            />

            <button type="submit">Sumbit</button>
          </form>
        </PasswordResetContainer>
      </InfoBox>
    </Wrapper>
  );
};

export default UserProfile;
