import React from "react";
import styled from "styled-components";
import { navBarServicesData, navBarSupportData } from "./NavBarData";

const NavBarBottomList = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 30px;
  padding-bottom: 50px;
`;

const NavBarBottomItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: ${(props) => props.theme.colors.purple};
  width: 40%;
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
  return (
    <>
      <NavBarBottomList>
        {nav === "services"
          ? navBarServicesData.map((item) => (
              <NavBarBottomItemContainer>
                <NavBarBottomItemTitle>{item.title}</NavBarBottomItemTitle>
                <NavBarBottomeItemSubTitle>
                  {item.subtitle}
                </NavBarBottomeItemSubTitle>
              </NavBarBottomItemContainer>
            ))
          : navBarSupportData.map((item) => (
              <NavBarBottomItemContainer>
                <NavBarBottomItemTitle>{item.title}</NavBarBottomItemTitle>
                <NavBarBottomeItemSubTitle>
                  {item.subtitle}
                </NavBarBottomeItemSubTitle>
              </NavBarBottomItemContainer>
            ))}
      </NavBarBottomList>
    </>
  );
};

export default NavBarBottom;
