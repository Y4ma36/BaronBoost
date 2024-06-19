import React from "react";
import styled from "styled-components";
import { navBarServicesData } from "../NavBarData";
import { Link } from "react-router-dom";
import { handleLinkClick } from "../../../Utils/LinkClick";
import { useRecoilState } from "recoil";
import { isNavHover } from "../../../Data/atoms";

const Wrapper = styled.div`
  display: ${(props) => (props.isnavshow ? "flex" : "none")};
  justify-content: center;
  background-color: black;
`;

const NavBarBottomList = styled.div`
  display: flex;
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

const NavBarBottom = () => {
  const [isNavShow, setIsNavShow] = useRecoilState(isNavHover);

  const handleClick = () => {
    setIsNavShow(false);
  };

  const handleMouseLeave = () => {
    setIsNavShow(false);
  };

  return (
    <Wrapper isnavshow={isNavShow} onMouseLeave={handleMouseLeave}>
      <NavBarBottomList>
        {navBarServicesData.map((item) => (
          <Link
            to={item.link}
            onClick={() => {
              handleLinkClick();
              handleClick();
            }}
            key={item.id}
          >
            <NavBarBottomItemContainer key={item.id}>
              <NavBarBottomItemTitle>{item.title}</NavBarBottomItemTitle>
              <NavBarBottomeItemSubTitle>
                {item.subtitle}
              </NavBarBottomeItemSubTitle>
            </NavBarBottomItemContainer>
          </Link>
        ))}
      </NavBarBottomList>
    </Wrapper>
  );
};

export default NavBarBottom;
