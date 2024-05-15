import React from "react";
import styled from "styled-components";
import Logo from "../../assets/BaronBoostLogo_withoutBackground.png";
import { Link } from "react-router-dom";

const NavBarWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  width: 100%;
`;

const NavBarLogo = styled.div`
  img {
    width: 100px;
    height: 100px;
  }
`;

const NavBarList = styled.ul`
  display: flex;
  gap: 50px;
`;

const NavBarItem = styled.li`
  color: ${(props) => props.theme.colors.white};
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const NavBarLoginCart = styled.div``;

const NavBar = () => {
  return (
    <NavBarWrapper>
      <NavBarLogo>
        <img src={Logo} alt="" />
      </NavBarLogo>
      <NavBarList>
        <NavBarItem>
          <Link>Services</Link>
        </NavBarItem>
        <NavBarItem>
          <Link>Coaching</Link>
        </NavBarItem>
        <NavBarItem>
          <Link>Boosters</Link>
        </NavBarItem>
        <NavBarItem>
          <Link>Support</Link>
        </NavBarItem>
      </NavBarList>
      <NavBarLoginCart>
        <Link>
          <button>Login</button>
        </Link>
      </NavBarLoginCart>
    </NavBarWrapper>
  );
};

export default NavBar;
