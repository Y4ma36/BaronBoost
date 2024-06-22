import React from "react";
import styled from "styled-components";
import hero_Img from "../../../assets/userDashboard.jpeg";

const Wrapper = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)),
    url(${hero_Img});
  background-position: 10% 40%;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 20px;
  @media ${(props) => props.theme.device.mobile} {
    background-position: center;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  text-align: center;
  span {
    color: ${(props) => props.theme.colors.purple};
  }
`;

const UserDashboardHero = () => {
  return (
    <Wrapper>
      <Title>User Dashboard</Title>
    </Wrapper>
  );
};

export default UserDashboardHero;
