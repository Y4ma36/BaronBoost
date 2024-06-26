import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 95%;
  height: 80%;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FilterContainer = styled.div`
  width: 80%;
  height: 80%;
  border-radius: 20px;
  background-color: #c3bdbdeb;
  position: relative;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
  @media ${(props) => props.theme.device.tablet} {
    width: 95%;
  }
`;

const Items = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0;
  margin: 0;
  text-align: center;
  a {
    text-decoration: none;
    color: inherit;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
    border-radius: 20px;
    list-style: none;
    cursor: pointer;
    position: relative;
    z-index: 1;
  }
  @media ${(props) => props.theme.device.tablet} {
  }
`;

const Item = styled(motion.li)`
  color: black;
`;

const Background = styled(motion.div)`
  position: absolute;
  width: 20%;
  height: 100%;
  border-radius: 20px;
  background-color: white;
  z-index: 0;
`;

const items = [
  { name: "All Orders", link: "/orders/all-orders" },
  { name: "Solo Orders", link: "/orders/solo-orders" },
  { name: "Duo Orders", link: "/orders/duo-orders" },
  { name: "Net Wins Orders", link: "/orders/netwins-orders" },
  { name: "Coach Orders", link: "/orders/coach-orders" },
];

const OrderHeader = () => {
  const [isClick, setIsClick] = useState(0);

  const location = useLocation();

  useEffect(() => {
    const currentIndex = items.findIndex(
      (item) => item.link === location.pathname
    );
    setIsClick(currentIndex);
  }, [location.pathname]);

  const handleClick = (index) => {
    setIsClick(index);
  };
  return (
    <Wrapper>
      <Container>
        <FilterContainer>
          <AnimatePresence>
            <Background
              layoutId="bg-White"
              style={{ left: `${(isClick / items.length) * 100}%` }}
            />
          </AnimatePresence>
          <Items>
            {items.map((item, index) => (
              <Link to={item.link}>
                <Item
                  key={index}
                  onClick={() => handleClick(index)}
                  isClick={isClick === index}
                >
                  {item.name}{" "}
                </Item>
              </Link>
            ))}
          </Items>
        </FilterContainer>
      </Container>
    </Wrapper>
  );
};

export default OrderHeader;
