import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { navBarServicesData } from "./NavBarData";
import { Link } from "react-router-dom";

const NavBarBottomList = styled.div`
  display: ${(props) => (props.show ? "flex" : "none")};
  justify-content: center;
  width: 100%;
  margin-top: 30px;
  padding-bottom: 50px;
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const NavBarBottomItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: ${(props) => props.theme.colors.purple};

  height: 250px;
  border-radius: 10px;
  margin: 0px 30px;
  cursor: pointer;
`;

const NavBarBottomItemTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 900;
  margin-bottom: 10px;
  @media ${(props) => props.theme.device.laptop} {
    font-size: 1.5rem;
  }
`;

const NavBarBottomeItemSubTitle = styled.h3`
  font-size: ${(props) => props.theme.fontSize.md};
  margin: 0px 10px;
  @media ${(props) => props.theme.device.laptop} {
    font-size: ${(props) => props.theme.fontSize.base};
  }
`;

const NavBarBottom = ({ nav }) => {
  const [isNav, setIsNav] = useState(true);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (title) => {
    if (title) {
      setIsClicked(true);
    }
  };

  useEffect(() => {
    if (isClicked) {
      setIsNav(false);
      setTimeout(() => {
        setIsNav(true);
        setIsClicked(false);
      }, 100);
    }
  }, [isClicked]);

  return (
    <>
      <NavBarBottomList show={isNav}>
        {navBarServicesData.map((item) => (
          <Link to={item.link} onClick={() => handleClick(item.title)}>
            <NavBarBottomItemContainer key={item.id}>
              <NavBarBottomItemTitle>{item.title}</NavBarBottomItemTitle>
              <NavBarBottomeItemSubTitle>
                {item.subtitle}
              </NavBarBottomeItemSubTitle>
            </NavBarBottomItemContainer>
          </Link>
        ))}
      </NavBarBottomList>
    </>
  );
};

export default NavBarBottom;
