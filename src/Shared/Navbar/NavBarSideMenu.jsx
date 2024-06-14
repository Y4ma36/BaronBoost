import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiFillProduct } from "react-icons/ai";
import { FaRectangleList } from "react-icons/fa6";
import { MdOutlineQuestionAnswer, MdKeyboardArrowRight } from "react-icons/md";
import { BsPersonVideo3 } from "react-icons/bs";
import { color } from "framer-motion";

const NavBarSideMenuWrapper = styled.div`
  display: none;
  width: 40%;
  height: 100vh;
  margin-left: auto;
  position: sticky;
  @media ${(props) => props.theme.device.tablet} {
    display: ${(props) => (props.show ? "flex" : "none")};
  }
  @media ${(props) => props.theme.device.mobile} {
    width: 45%;
  }
`;

const NavBarSideMenuContainer = styled.div`
  width: 100%;
  height: 50vh;
  background-color: ${(props) => props.theme.colors.purple};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    transition: all 0.3s ease-in-out;
    @media ${(props) => props.theme.device.mobile} {
      gap: 0px;
    }
  }
  li {
    width: 100%;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;

    &:hover {
      button {
        color: ${(props) => props.theme.colors.white};
      }
      .arrow_Right {
        color: ${(props) => props.theme.colors.white};
      }
      .icon {
        color: ${(props) => props.theme.colors.white};
      }
    }
  }

  a {
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: center;
    @media ${(props) => props.theme.device.mobile} {
      display: flex;
      flex-direction: column;
    }
    .icon {
      font-size: ${(props) => props.theme.fontSize.base};
      color: ${(props) => props.theme.colors.black};
      transition: all 0.3s ease-in-out;
    }
    .arrow_Right {
      font-size: ${(props) => props.theme.fontSize.base};
      color: #353b48;
      opacity: 0.7;
      transition: all 0.3s ease-in-out;
    }
  }

  button {
    font-size: ${(props) => props.theme.fontSize.md};
    font-weight: 600;
    color: ${(props) => props.theme.colors.black};
    background: inherit;
    border-radius: 5px;
    padding: 15px 15px;
    border: none;
    transition: all 0.3s ease-in-out;
    @media ${(props) => props.theme.device.mobile} {
      font-size: ${(props) => props.theme.fontSize.base};
    }
  }
`;

const UnderLine = styled.hr`
  width: 60%;

  background-color: black;
  border: 1px solid black;
  opacity: 0.2;
`;

const NavBarSideMenu = ({ isOpen, sideMenu }) => {
  const [menuOpen, setMenuOpen] = useState(isOpen);

  useEffect(() => {
    setMenuOpen(isOpen);
  }, [isOpen]);

  const handleClickMenu = () => {
    setMenuOpen(false);
    sideMenu((prev) => !prev);
  };

  return (
    <NavBarSideMenuWrapper show={menuOpen}>
      <NavBarSideMenuContainer>
        <ul>
          <li onClick={handleClickMenu}>
            <Link to="/services/solo">
              <AiFillProduct className="icon" />
              <button>Services</button>
              <MdKeyboardArrowRight className="arrow_Right" />
            </Link>
          </li>
          <UnderLine />
          <li onClick={handleClickMenu}>
            <Link to="/coaching">
              <BsPersonVideo3 className="icon" />
              <button>Coaching</button>
              <MdKeyboardArrowRight className="arrow_Right" />
            </Link>
          </li>
          <UnderLine />
          <li onClick={handleClickMenu}>
            <Link to="/orders">
              <FaRectangleList className="icon" />
              <button>Orders</button>
              <MdKeyboardArrowRight className="arrow_Right" />
            </Link>
          </li>
          <UnderLine />
          <li onClick={handleClickMenu}>
            <Link to="/support">
              <MdOutlineQuestionAnswer className="icon" />
              <button>Support</button>
              <MdKeyboardArrowRight className="arrow_Right" />
            </Link>
          </li>
        </ul>
      </NavBarSideMenuContainer>
    </NavBarSideMenuWrapper>
  );
};

export default NavBarSideMenu;
