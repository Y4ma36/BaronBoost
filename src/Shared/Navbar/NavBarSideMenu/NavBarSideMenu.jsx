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
  width: 300px;
  position: absolute;
  height: ${(props) => props.height};
  overflow-y: scroll;
  right: 0px;
  top: 0px;
  bottom: 0px;
  z-index: 500;
  background-color: ${(props) => props.theme.colors.black};
  @media ${(props) => props.theme.device.tablet} {
    display: flex;
    flex-direction: column;
  }
  @media ${(props) => props.theme.device.mobile} {
    width: 200px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
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

  const [height, setHeight] = useState(window.innerHeight + "px");

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight + "px");
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <AnimatePresence>
      {isSideNavShow && (
        <NavBarSideMenuWrapper
          variants={variants}
          initial="close"
          animate="open"
          exit="close"
          height={height}
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
