import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import * as auth from "../../../../../Utils/auth.jsX";
import { useRecoilValue } from "recoil";
import { accessToken, userInfoAtom } from "../../../../../Data/atomsLogin";
import axios from "axios";
import useAuth from "../../../../../Context/LoginContext";

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
  padding: 0px 10px;
  height: 60%;
  background-color: ${(props) => props.theme.colors.purple};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  margin-top: 30px;
  width: 90%;
  padding: 0px 10px;
  height: 60%;
  background-color: ${(props) => props.theme.colors.purple};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    width: 60%;
    padding: 15px 0px;
    border: none;
    border-radius: 5px;
    font-weight: 600;
  }
  span {
    font-family: "Noto Sans KR", sans-serif;
    font-size: ${(props) => props.theme.fontSize.sm};
    opacity: 0.7;
    margin-top: 10px;
  }
`;
const UserProfile = () => {
  const userInfo = useRecoilValue(userInfoAtom);

  useEffect(() => {
    if (!userInfo) {
      return <LoadingWrapper>Loading...</LoadingWrapper>;
    }
  }, [userInfo]);

  return (
    <Wrapper>
      <InfoBox>
        <Title>Username</Title>
        <SubTitleBox>
          <SubTitle>{userInfo.username}</SubTitle>
        </SubTitleBox>
      </InfoBox>
      <InfoBox>
        <Title>Email</Title>
        <SubTitleBox>
          <SubTitle>{userInfo.email}</SubTitle>
        </SubTitleBox>
      </InfoBox>
      <InfoBox>
        <Title>Role</Title>
        <SubTitleBox>
          <SubTitle>{userInfo.role}</SubTitle>
        </SubTitleBox>
      </InfoBox>
    </Wrapper>
  );
};

export default UserProfile;
