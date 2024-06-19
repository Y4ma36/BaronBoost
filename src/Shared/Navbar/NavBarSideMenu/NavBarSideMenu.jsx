import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NavBarSideMenuList from "./NavBarSideMenuList";
import NavBarSideMenuHeader from "./NavBarSideMenuHeader";
import NavBarSideMenuFooter from "./NavBarSideMenuFooter";
import { useRecoilValue } from "recoil";
import { isSideNavClick } from "../../../Data/atoms";
import { AnimatePresence, motion } from "framer-motion";

const NavBarSideMenuWrapper = styled(motion.div)`
  display: none;
  width: 45%;
  position: absolute;
  height: 100vh;
  right: 0px;
  top: 0px;
  background-color: ${(props) => props.theme.colors.black};
  @media ${(props) => props.theme.device.tablet} {
    display: flex;
    flex-direction: column;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  height: 100%;
  @media ${(props) => props.theme.device.mobile} {
    padding: 0px;
  }
`;

const variants = {
  close: {
    x: "100%",
    transition: { type: "tween", duration: 0.5, ease: "easeInOut" },
  },
  open: {
    x: "0",
    transition: { type: "tween", duration: 0.5, ease: "easeInOut" },
  },
};

const NavBarSideMenu = () => {
  const isSideNavShow = useRecoilValue(isSideNavClick);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <AnimatePresence>
      {isSideNavShow && (
        <NavBarSideMenuWrapper
          variants={variants}
          initial="close"
          animate="open"
          exit="close"
        >
          <Container>
            <NavBarSideMenuHeader />
            <NavBarSideMenuList />
            <NavBarSideMenuFooter />
          </Container>
        </NavBarSideMenuWrapper>
      )}
    </AnimatePresence>
  );
};

export default NavBarSideMenu;
