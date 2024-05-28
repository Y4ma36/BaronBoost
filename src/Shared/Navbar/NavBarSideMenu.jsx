import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { color } from "framer-motion";

const NavBarSideMenuWrapper = styled.div`
  display: none;
  @media ${(props) => props.theme.device.tablet} {
    display: ${(props) => (props.show ? "flex" : "none")};
  }

  width: 50%;
  height: 100vh;
  margin-left: auto;
`;

const NavBarSideMenuContainer = styled.div`
  width: 100%;
  height: 50vh;
  background-color: ${(props) => props.theme.colors.purple};
  border-radius: 5px;
  margin-right: 50px;
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 50px;
  }

  li {
    background-color: black;
    width: 50%;
    border-radius: 5px;
    text-align: center;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
      background: ${(props) => props.theme.colors.white};
      button {
        color: ${(props) => props.theme.colors.black};
      }
    }
  }

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
  }
`;

const NavBarSideMenu = ({ isOpen }) => {
  return (
    <NavBarSideMenuWrapper show={isOpen}>
      <NavBarSideMenuContainer>
        <ul>
          <li>
            <Link to="/services">
              <button>Services</button>
            </Link>
          </li>
          <li>
            <Link to="/coaching">
              <button>Coaching</button>
            </Link>
          </li>
          <li>
            <Link to="/orders">
              <button>Orders</button>
            </Link>
          </li>
          <li>
            <Link to="/support">
              <button>Support</button>
            </Link>
          </li>
        </ul>
      </NavBarSideMenuContainer>
    </NavBarSideMenuWrapper>
  );
};

export default NavBarSideMenu;
