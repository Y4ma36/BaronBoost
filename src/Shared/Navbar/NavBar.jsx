import React, { useEffect, useState } from "react";
import Logo from "../../assets/BaronBoostLogo.png";
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
  height: 100%;
  z-index: 500;
  overflow-x: hidden;
`;

const NavContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  position: relative;
  padding: 16px;
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
    width: 120px;
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
`;

const NavBarBottomCover = styled.div`
  background: ${(props) =>
    props.show || props.isOpen ? "rgba(0,0,0,0.8)" : "none"};
  display: ${(props) => (props.show || props.isOpen ? "flex" : "none")};
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

  const handleMouseEnter = (item) => {
    if (item === "services") {
      setHoveredItem(true);
    } else {
      setHoveredItem(false);
    }
  };

  const handleMouseLeave = () => {
    setHoveredItem(false);
  };

  const toggleSideMenu = () => {
    setSideMenu((prev) => !prev);
  };

  const handleClick = () => {
    setHoveredItem(false);
  };

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <NavBarWrapper animate={navAnimation}>
      <NavContainer>
        <NavBarTopContainer>
          <NavBarTopLeft>
            <Link to="/" onClick={handleLinkClick}>
              <img src={Logo} alt="logo" />
              <p>
                <span>B</span>aron<span>B</span>oost
              </p>
            </Link>
          </NavBarTopLeft>
          <NavBarTopRight
            handleMouseEnter={handleMouseEnter}
            handleClick={handleClick}
          />
          <NavMenuBar isOpen={toggleSideMenu} />
        </NavBarTopContainer>
        <NavBarBottomContainer
          show={hoveredItem}
          onMouseLeave={handleMouseLeave}
        >
          <NavBarBottom nav={hoveredItem} />
        </NavBarBottomContainer>
        {/* cover & sidemenu */}
        <NavBarSideMenu isOpen={sideMenu} sideMenu={toggleSideMenu} />
      </NavContainer>
      <NavBarBottomCover
        isOpen={sideMenu}
        show={hoveredItem}
        onMouseLeave={handleMouseLeave}
      />
    </NavBarWrapper>
  );
};

export default NavBar;
