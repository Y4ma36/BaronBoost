import React from "react";
import styled from "styled-components";
import logo_Img from "../../assets/BaronBoostLogo.png";
import { Link, useLocation } from "react-router-dom";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 1)
  );
  position: absolute;
  z-index: 500;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 400px;
  height: 50%;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.purple};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  h1 {
    font-size: ${(props) => props.theme.fontSize.lg};
  }
  span {
    width: 80%;
    text-align: center;
    font-size: ${(props) => props.theme.fontSize.md};
    color: ${(props) => props.theme.colors.white};
    font-family: "Noto Sans KR", sans-serif;
  }
  button {
    background-color: ${(props) => props.theme.colors.white};
    padding: 15px 25px;
    font-size: ${(props) => props.theme.fontSize.md};
    font-weight: 600;
    color: ${(props) => props.theme.colors.purple};
    border-radius: 10px;
    border: none;
    transition: all 0.5s ease-in-out;
    &:hover {
      background-color: black;
      color: ${(props) => props.theme.colors.white};
    }
  }
`;

const LogoImg = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 150px;
    height: 130px;
  }
`;
const OrderCover = () => {
  const location = useLocation();
  return (
    <Wrapper>
      <Container>
        <LogoImg>
          <img src={logo_Img} alt="" />
        </LogoImg>
        <h1>Oops!</h1>
        <span>
          We're Sorry!, but to view this page, you need to be logged in
        </span>
        <Link to={"/login"} replace state={{ redirectFrom: location }}>
          <button>Login</button>
        </Link>
      </Container>
    </Wrapper>
  );
};

export default OrderCover;
