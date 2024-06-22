import React, { useEffect } from "react";
import styled from "styled-components";
import menuIcon from "../../assets/menu.png";
import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import NavBarBottom from "./NavBarBottom/NavBarBottom";
import NavBarTop from "./NavBarTop/NavBarTop";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isNavHover, isSideNavClick } from "../../Data/atoms";
import NavBarSideMenu from "./NavBarSideMenu/NavBarSideMenu";

const NavBarWrapper = styled(motion.div)`
  display: flex;
  position: fixed;
  width: 100%;
  z-index: 500;
  align-items: center;
  background-color: ${(props) => (props.isnavshow ? "black" : "inherit")};
  @media ${(props) => props.theme.device.mobile} {
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  padding: 16px;

  @media ${(props) => props.theme.device.mobile} {
    width: 20%;
    padding-left: 0px;
  }
`;

const NavMenuIcon = styled.div`
  display: none;
  padding: 16px;
  cursor: pointer;
  z-index: 5;
  img {
    width: 45px;
    height: 45px;
  }
  @media ${(props) => props.theme.device.tablet} {
    display: flex;
  }
  @media ${(props) => props.theme.device.mobile} {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    img {
      width: 40px;
      height: 40px;
    }
  }
`;

const NavBar = () => {
  const { scrollY } = useScroll();
  const navAnimation = useAnimation();
  const isNavShow = useRecoilValue(isNavHover);
  const setisSideNavShow = useSetRecoilState(isSideNavClick);

  useEffect(() => {
    navAnimation.start({
      backgroundColor: isNavShow ? "black" : "inherit",
    });
  }, [isNavShow, navAnimation]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 30) {
      navAnimation.start({
        backgroundColor: "rgba(0,0,0,1)",
      });
    } else {
      navAnimation.start({
        backgroundColor: "rgba(0,0,0,0)",
      });
    }
  });

  const hanldeSideNavClick = () => {
    setisSideNavShow((prev) => !prev);
  };

  return (
    <NavBarWrapper animate={navAnimation} isnavshow={isNavShow}>
      <Container>
        <NavBarTop />
        <NavBarBottom />
      </Container>
      <NavMenuIcon>
        <img src={menuIcon} alt="menu" onClick={hanldeSideNavClick} />
      </NavMenuIcon>
      <NavBarSideMenu />
    </NavBarWrapper>
  );
};

export default NavBar;
