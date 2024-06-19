import React, { useEffect, useState } from "react";
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
import { useRecoilState, useRecoilValue } from "recoil";
import { isNavHover, isSideNavClick } from "../../Data/atoms";
import NavBarSideMenu from "./NavBarSideMenu/NavBarSideMenu";

const NavBarWrapper = styled(motion.div)`
  display: flex;
  position: fixed;
  width: 100%;
  z-index: 500;
  align-items: center;
  background-color: ${(props) => (props.isnavshow ? "black" : "inherit")};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  padding: 16px;
`;

const NavMenuIcon = styled.div`
  display: none;
  margin-right: 40px;
  margin-top: 5px;
  cursor: pointer;
  img {
    width: 45px;
    height: 45px;
  }
  @media ${(props) => props.theme.device.tablet} {
    display: block;
  }
  @media ${(props) => props.theme.device.mobile} {
    img {
      width: 30px;
      height: 30px;
    }
  }
`;

const NavBar = () => {
  const { scrollY } = useScroll();
  const navAnimation = useAnimation();
  const [sideMenu, setSideMenu] = useState(false);
  const isNavShow = useRecoilValue(isNavHover);
  const [isSideNavShow, setisSideNavShow] = useRecoilState(isSideNavClick);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 30) {
      navAnimation.start({
        backgroundColor: "rgba(0,0,0,1)",
      });
      if (sideMenu) {
        navAnimation.start({
          backgroundColor: "rgba(0,0,0,0)",
        });
      }
    } else {
      navAnimation.start({
        backgroundColor: "rgba(0,0,0,0)",
      });
    }
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSideMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
