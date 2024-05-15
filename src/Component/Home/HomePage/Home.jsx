import React from "react";
import styled from "styled-components";
import Hero_BackgroundImage from "../../../assets/HeroBackground.jpeg";

const HomeWrapper = styled.div`
  background-image: url(${Hero_BackgroundImage});
  height: 100vh;
  background-size: cover;
`;

const Home = () => {
  return <HomeWrapper>Home</HomeWrapper>;
};

export default Home;
