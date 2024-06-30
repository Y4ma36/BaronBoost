import React from "react";
import styled from "styled-components";
import Price from "./Price";
import OrderOverview from "./OrderOverview";
import { Link, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isLoginSelector } from "../../../../../../Data/atomsLogin";
import LeagueInformation from "../../LeagueInformation/LeagueInformation";

const Wrapper = styled.div`
  width: 100%;
  height: 70%;
  background-color: ${(props) => props.theme.colors.purple};
  border-radius: 5px;
  border: 2px solid white;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  height: 100%;
  box-sizing: border-box;
  @media ${(props) => props.theme.device.desktop} {
    gap: 20px;
  }
`;

const BottonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const BuyButton = styled.button`
  width: 100%;
  padding: 10px 0px;
  font-size: ${(props) => props.theme.fontSize.lg};
  font-weight: 600;
  font-family: "Noto Sans KR", sans-serif;
  border: none;
  border-radius: 5px;
  transition: all 0.5s ease-in-out;
  &:hover {
    background-color: black;
    color: ${(props) => props.theme.colors.white};
  }
  @media ${(props) => props.theme.device.mobile} {
    font-size: ${(props) => props.theme.fontSize.md};
  }
`;

const TotalPriceBottom = () => {
  const isLogin = useRecoilValue(isLoginSelector);
  const location = useLocation();
  return (
    <Wrapper>
      <Container>
        <OrderOverview />
        <BottonContainer>
          <Price />
          <Link
            to={isLogin ? "/order/checkout" : "/login"}
            replace
            state={{ redirectFrom: location }}
          >
            <BuyButton>Get Started</BuyButton>
          </Link>
        </BottonContainer>
      </Container>
    </Wrapper>
  );
};

export default TotalPriceBottom;
