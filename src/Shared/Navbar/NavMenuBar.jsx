import React, { useState } from "react";
import menuIcon from "../../assets/menu.png";
import styled from "styled-components";

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
    display: flex;
  }
  @media ${(props) => props.theme.device.mobile} {
    img {
      width: 30px;
      height: 30px;
    }
  }
`;

const NavMenuBar = (props) => {
  const handleMenu = () => {
    props.isOpen((prev) => !prev);
  };

  return (
    <NavMenuIcon>
      <img src={menuIcon} onClick={handleMenu} alt="menu" />
    </NavMenuIcon>
  );
};

export default NavMenuBar;
