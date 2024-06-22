import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import { ImProfile, ImHistory } from "react-icons/im";

const Wrapper = styled.div`
  display: flex;
  height: 80vh;
  background-color: black;
  padding: 30px 20px;
  gap: 10px;
`;

const DashBoardList = styled.div`
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.purple};
  border-radius: 13px;
  ul {
    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: inherit;

      font-size: ${(props) => props.theme.fontSize.md};
      font-weight: 600;
      .icon {
        margin-right: 10px;
        font-size: ${(props) => props.theme.fontSize.lg};
      }
    }
    li {
      margin-top: 50px;
      padding: 20px 30px;
      border-radius: 10px;
      width: 100%;
      transition: 0.3s ease-in-out;
      cursor: pointer;
      background-color: ${(props) => props.theme.colors.black};
      &:hover {
        background-color: ${(props) => props.theme.colors.white};
        color: ${(props) => props.theme.colors.black};
      }
    }
  }
`;

const MainContainer = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  background-color: ${(props) => props.theme.colors.purple};
  border-radius: 13px;
`;

const TitleContainer = styled.div`
  margin-top: 20px;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 800;
`;

const UserDashboardMain = () => {
  const location = useLocation();
  const currentLocation = location.pathname.split("/").pop();
  return (
    <Wrapper>
      <DashBoardList>
        <TitleContainer>
          {currentLocation === "profile" ? (
            <Title>Profile</Title>
          ) : (
            <Title>Order History</Title>
          )}
        </TitleContainer>
        <ul>
          <Link to="profile">
            <li>
              <ImProfile className="icon" />
              User Profile
            </li>
          </Link>
          <Link to="order-history">
            <li>
              <ImHistory className="icon" />
              Order History
            </li>
          </Link>
        </ul>
      </DashBoardList>
      <MainContainer>
        <Outlet />
      </MainContainer>
    </Wrapper>
  );
};

export default UserDashboardMain;
