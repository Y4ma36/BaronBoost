import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import UserDashboardHero from "./UserDashboardHero";
import UserDashboardMain from "./UserDashboardMain/UserDashboardMain";
import { LoginContext } from "../../../Context/LoginContext";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Container = styled.div``;

const UserDashboard = () => {
  const { isLogin } = useContext(LoginContext);

  return isLogin ? (
    <Wrapper>
      <UserDashboardHero />
      <UserDashboardMain />
    </Wrapper>
  ) : (
    <Navigate to="/login" />
  );
};

export default UserDashboard;
