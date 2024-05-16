import React from "react";
import styled from "styled-components";
import Logo from "../../assets/sampleLogoNObg.png";
import { Link } from "react-router-dom";

const NavBarWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  width: 100%;
  padding: 16px;
`;

const NavBarLeft = styled.div`
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
`;

const NavBarRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
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
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      background-color: ${(props) => props.theme.colors.purple};
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
`;

const NavBar = () => {
  return (
    <NavBarWrapper>
      <NavBarLeft>
        <Link to="/">
          <img src={Logo} alt="" />
          <p>
            <span>B</span>aron<span>B</span>oost
          </p>
        </Link>
      </NavBarLeft>
      <NavBarRight>
        <NavBarList>
          <NavBarItem>
            <Link>
              <button>Services</button>
            </Link>
          </NavBarItem>
          <NavBarItem>
            <Link>
              <button>Coaching</button>
            </Link>
          </NavBarItem>
          <NavBarItem>
            <Link>
              <button>Boosters</button>
            </Link>
          </NavBarItem>
          <NavBarItem>
            <Link>
              <button>Support</button>
            </Link>
          </NavBarItem>
        </NavBarList>
        <NavBarLoginCart>
          <Link>
            <button>Login</button>
          </Link>
        </NavBarLoginCart>
      </NavBarRight>
    </NavBarWrapper>
  );
};

export default NavBar;
