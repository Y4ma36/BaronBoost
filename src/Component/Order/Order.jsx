import React, { useEffect } from "react";
import styled from "styled-components";
import OrderHero from "./OrderHero";
import OrderMain from "./OrderMain/OrderMain";
import OrderCover from "./OrderCover";
import { useRecoilValue } from "recoil";
import { isLoginSelector } from "../../Data/atomsLogin";

const Wrapper = styled.div`
  position: relative;
`;

const Order = () => {
  const isLogin = useRecoilValue(isLoginSelector);

  useEffect(() => {
    if (!isLogin) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // 컴포넌트가 언마운트될 때 스크롤 복구
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isLogin]);

  return (
    <Wrapper>
      {!isLogin && <OrderCover />}
      <OrderHero />
      <OrderMain />
    </Wrapper>
  );
};

export default Order;
