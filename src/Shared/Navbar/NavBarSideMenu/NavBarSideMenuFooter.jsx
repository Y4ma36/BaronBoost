import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { FaRegUser } from "react-icons/fa";
import { isLoginSelector } from "../../../Data/atomsLogin";
import { useRecoilValue } from "recoil";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.purple};
  height: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  @media ${(props) => props.theme.device.mobile} {
    min-height: 100px;
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSize.lg};
  font-weight: 700;
  margin-top: 10px;
  text-align: center;
  @media ${(props) => props.theme.device.mobile} {
    font-size: ${(props) => props.theme.fontSize.base};
  }
`;

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0px;

  .icon {
    transition: all 0.5s ease-in-out;
    font-size: 2.5rem;
    color: ${(props) => props.theme.colors.white};
    margin-left: 10px;
    &:hover {
      color: ${(props) => props.theme.colors.black};
    }
  }
`;

const LoginButton = styled.button`
  background-color: ${(props) => props.theme.colors.black};
  padding: 15px 25px;
  font-size: ${(props) => props.theme.fontSize.md};
  font-weight: 600;
  color: ${(props) => props.theme.colors.white};
  border-radius: 10px;
  border: none;
  transition: all 0.5s ease-in-out;
  &:hover {
    background-color: white;
    color: ${(props) => props.theme.colors.purple};
  }

  @media ${(props) => props.theme.device.mobile} {
    font-size: ${(props) => props.theme.fontSize.base};
  }
`;

const NavBarSideMenuFooter = () => {
  const isLogin = useRecoilValue(isLoginSelector);
  return (
    <Wrapper>
      <Title>Login to Your Account</Title>
      {isLogin ? (
        <LoginContainer>
          <LoginButton onClick={() => logout()}>Log Out</LoginButton>
          <Link to="/user-dashboard/profile">
            <FaRegUser className="icon" />
          </Link>
        </LoginContainer>
      ) : (
        <Link to="/login">
          <LoginButton>Login</LoginButton>
        </Link>
      )}
    </Wrapper>
  );
};

export default NavBarSideMenuFooter;
