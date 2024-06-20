import React, { useState } from "react";
import Logo from "../../../assets/BaronBoostLogo.png";
import { Link } from "react-router-dom";
import styled from "styled-components";
import NavBarTopRight from "./NavBarTopRight";
import { handleLinkClick } from "../../../Utils/LinkClick";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  @media ${(props) => props.theme.device.tablet} {
    justify-content: flex-start;
  }
`;

const NavBarTopLeft = styled.div`
  a {
    display: flex;
    align-items: center;
    gap: 15px;
    text-decoration: none;
    @media ${(props) => props.theme.device.mobile} {
    }
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
      width: 90px;
      height: 80px;
    }
    p {
      font-size: 2rem;
    }
  }

  @media ${(props) => props.theme.device.mobile} {
    p {
      visibility: hidden;
    }
  }
`;

const NavBarTop = () => {
  return (
    <Wrapper>
      <NavBarTopLeft>
        <Link to="/" onClick={handleLinkClick}>
          <img src={Logo} alt="logo" />
          <p>
            <span>B</span>aron<span>B</span>oost
          </p>
        </Link>
      </NavBarTopLeft>
      <NavBarTopRight />
    </Wrapper>
  );
};

export default NavBarTop;
