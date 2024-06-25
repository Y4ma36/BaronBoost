import React from "react";

import styled from "styled-components";
import UserDashboardHero from "./UserDashboardHero";
import UserDashboardMain from "./UserDashboardMain/UserDashboardMain";
import { accessToken, isLoginSelector } from "../../../Data/atomsLogin";
import { useRecoilValue } from "recoil";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Container = styled.div``;

const UserDashboard = () => {
  return (
    <Wrapper>
      <UserDashboardHero />
      <UserDashboardMain />
    </Wrapper>
  );
};

export default UserDashboard;
