import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { isNavHover } from "../../../Data/atoms";

const NavBarRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  @media ${(props) => props.theme.device.tablet} {
    display: none;
  }
`;

const NavBarList = styled.ul`
  display: flex;
  gap: 20px;
`;

const NavBarItem = styled.li`
  position: relative;
  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    font-size: ${(props) => props.theme.fontSize.md};
    font-weight: 600;
    color: ${(props) => props.theme.colors.white};
    background: inherit;
    border-radius: 5px;
    padding: 15px 15px;
    border: none;
    transition: all 0.3s ease-in-out;
    &:hover {
      background-color: ${(props) => props.theme.colors.purple};
    }
  }

  @media ${(props) => props.theme.device.laptop} {
    button {
      font-size: ${(props) => props.theme.fontSize.base};
    }
  }

  &:not(:last-child)::after {
    content: "";
    display: block;
    position: absolute;
    height: 20px;
    border-right: 2px solid white;
    right: -10px;
    bottom: 15px;
  }
`;

const NavBarLoginCart = styled.div`
  button {
    background-color: ${(props) => props.theme.colors.purple};
    padding: 15px 25px;
    font-size: ${(props) => props.theme.fontSize.md};
    font-weight: 600;
    color: ${(props) => props.theme.colors.white};
    border-radius: 10px;
    border: none;
    transition: all 0.5s ease-in-out;
    &:hover {
      background-color: white;
      color: ${(props) => props.theme.colors.purple};
    }
  }
  @media ${(props) => props.theme.device.laptop} {
    button {
      font-size: ${(props) => props.theme.fontSize.base};
    }
  }
`;

const NavBarTopRight = () => {
  const setHoveredItem = useSetRecoilState(isNavHover);

  const handleMouseEnter = (item) => {
    if (item === "services") {
      setHoveredItem(true);
    } else {
      setHoveredItem(false);
    }
  };

  const handleClick = () => {
    setHoveredItem(false);
  };
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <NavBarRight>
      <NavBarList>
        <NavBarItem
          onMouseEnter={() => handleMouseEnter("services")}
          onClick={() => handleClick()}
        >
          <Link to="/services/solo" onClick={handleLinkClick}>
            <button>Services</button>
          </Link>
        </NavBarItem>
        <NavBarItem onMouseEnter={() => handleMouseEnter("false")}>
          <Link to="/coaching" onClick={handleLinkClick}>
            <button>Coaching</button>
          </Link>
        </NavBarItem>
        <NavBarItem onMouseEnter={() => handleMouseEnter("false")}>
          <Link to="/orders" onClick={handleLinkClick}>
            <button>Orders</button>
          </Link>
        </NavBarItem>
        <NavBarItem onMouseEnter={() => handleMouseEnter("false")}>
          <Link to="/support" onClick={handleLinkClick}>
            <button>Support</button>
          </Link>
        </NavBarItem>
      </NavBarList>
      <NavBarLoginCart>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </NavBarLoginCart>
    </NavBarRight>
  );
};

export default NavBarTopRight;
