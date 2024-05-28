import React, { useState } from "react";
import Logo from "../../assets/sampleLogoNObg.png";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import NavBarBottom from "./NavBarBottom";
import NavMenuBar from "./NavMenuBar";
import NavBarSideMenu from "./NavBarSideMenu";
import NavBarTopRight from "./NavBarTopRight";

const NavBarWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  padding: 16px;
  z-index: 500;
  overflow-x: hidden;
`;

const NavBarTopContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  @media ${(props) => props.theme.device.tablet} {
    justify-content: space-between;
  }
`;

const NavBarTopLeft = styled.div`
  a {
    display: flex;
    align-items: center;
    gap: 15px;
    text-decoration: none;
  }
  img {
    width: 100px;
    height: 100px;
  }
  p {
    font-size: 2.5rem;
    font-weight: 800;
    color: ${(props) => props.theme.colors.white};
  }
  span {
    color: ${(props) => props.theme.colors.purple};
  }
  @media ${(props) => props.theme.device.laptop} {
    img {
      width: 80px;
      height: 80px;
    }
    p {
      font-size: 2rem;
    }
  }

  @media ${(props) => props.theme.device.mobile} {
    img {
      width: 40px;
      height: 40px;
    }
    p {
      font-size: ${(props) => props.theme.fontSize.lg};
    }
  }
`;

const NavBarBottomContainer = styled.div`
  display: ${(props) => (props.show ? "flex" : "none")};
  justify-content: center;
  background-color: black;
`;

const NavBarBottomCover = styled.div`
  background: ${(props) => (props.show || props.isOpen ? "black" : "none")};
  display: ${(props) => (props.show || props.isOpen ? "flex" : "none")};
  opacity: 0.7;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
  transition: opacity 0.3s ease-in-out;
`;

const NavBar = () => {
  const { scrollY } = useScroll();
  const navAnimation = useAnimation();
  const [hoveredItem, setHoveredItem] = useState(false);
  const [sideMenu, setSideMenu] = useState(false);
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

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(false);
  };

  const handleMenu = (value) => {
    setSideMenu(value);
  };

  return (
    <NavBarWrapper animate={navAnimation} isOpen={sideMenu}>
      <NavBarTopContainer>
        <NavBarTopLeft>
          <Link to="/">
            <img src={Logo} alt="" />
            <p>
              <span>B</span>aron<span>B</span>oost
            </p>
          </Link>
        </NavBarTopLeft>
        <NavBarTopRight />
        <NavMenuBar isOpen={handleMenu} />
      </NavBarTopContainer>
      <NavBarBottomContainer show={hoveredItem} onMouseLeave={handleMouseLeave}>
        <NavBarBottom nav={hoveredItem} />
      </NavBarBottomContainer>
      {/* cover & menu */}
      <NavBarBottomCover
        isOpen={sideMenu}
        show={hoveredItem}
        onMouseLeave={handleMouseLeave}
      />
      <NavBarSideMenu isOpen={sideMenu} />
      {/*------------------*/}
    </NavBarWrapper>
  );
};

export default NavBar;
