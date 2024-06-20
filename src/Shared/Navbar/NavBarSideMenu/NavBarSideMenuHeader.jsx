import React from "react";
import styled from "styled-components";
import { IoMdExit } from "react-icons/io";
import { isSideNavClick } from "../../../Data/atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 20px;
  min-height: 50px;
  .icon {
    color: ${(props) => props.theme.colors.white};
    font-size: 2rem;
    cursor: pointer;
    @media ${(props) => props.theme.device.mobile} {
      font-size: ${(props) => props.theme.fontSize.lg};
    }
  }
  @media ${(props) => props.theme.device.mobile} {
    font-size: ${(props) => props.theme.fontSize.md};
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSize.lg};
  font-weight: 800;
  span {
    color: ${(props) => props.theme.colors.purple};
  }
  @media ${(props) => props.theme.device.mobile} {
    font-size: ${(props) => props.theme.fontSize.md};
  }
`;

const NavBarSideMenuHeader = () => {
  const setIsSideNavShow = useSetRecoilState(isSideNavClick);

  const hanldeSideNavClick = () => {
    setIsSideNavShow((prev) => !prev);
  };
  return (
    <Wrapper>
      <Title>
        <span>B</span>aron<span>B</span>oost
      </Title>
      <IoMdExit className="icon" onClick={hanldeSideNavClick} />
    </Wrapper>
  );
};

export default NavBarSideMenuHeader;
