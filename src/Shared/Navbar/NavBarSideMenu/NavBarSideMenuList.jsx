import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiFillProduct } from "react-icons/ai";
import { FaRectangleList } from "react-icons/fa6";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import { BsPersonVideo3 } from "react-icons/bs";
import { handleLinkClick } from "../../../Utils/LinkClick";
import { useSetRecoilState } from "recoil";
import { isSideNavClick } from "../../../Data/atoms";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  padding-top: 30px;
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.3s ease-in-out;
    gap: 30px;
    @media ${(props) => props.theme.device.mobile} {
      gap: 10px;
    }
  }
  li {
    width: 100%;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: ${(props) => props.theme.colors.purple};
      button {
        color: ${(props) => props.theme.colors.black};
      }
      .icon {
        color: ${(props) => props.theme.colors.black};
      }
    }
  }
  a {
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: center;
    padding: 15px 50px;
    @media ${(props) => props.theme.device.mobile} {
      display: flex;
      flex-direction: column;
      padding: 8px 18px;
    }
    .icon {
      font-size: ${(props) => props.theme.fontSize.lg};
      color: ${(props) => props.theme.colors.white};
      transition: all 0.3s ease-in-out;

      @media ${(props) => props.theme.device.mobile} {
        font-size: ${(props) => props.theme.fontSize.lg};
        margin-bottom: 5px;
      }
    }
  }

  button {
    font-size: ${(props) => props.theme.fontSize.md};
    font-weight: 600;
    color: ${(props) => props.theme.colors.white};
    background: inherit;
    border-radius: 5px;
    border: none;
    transition: all 0.3s ease-in-out;
    @media ${(props) => props.theme.device.mobile} {
      font-size: ${(props) => props.theme.fontSize.base};
    }
  }
`;

const UnderLine = styled.hr`
  width: 40%;
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.white};
  opacity: 1;
  @media ${(props) => props.theme.device.mobile} {
    width: 20%;
  }
`;

const NavBarSideMenuList = () => {
  const isSideNavShow = useSetRecoilState(isSideNavClick);

  const handleSideNavShow = () => {
    isSideNavShow(false);
  };
  return (
    <Wrapper>
      <ul>
        <li
          onClick={() => {
            handleLinkClick();
            handleSideNavShow();
          }}
        >
          <Link to="/services/solo">
            <AiFillProduct className="icon" />
            <button>Services</button>
          </Link>
        </li>
        <UnderLine />
        <li
          onClick={() => {
            handleLinkClick();
            handleSideNavShow();
          }}
        >
          <Link to="/coaching">
            <BsPersonVideo3 className="icon" />
            <button>Coaching</button>
          </Link>
        </li>
        <UnderLine />
        <li
          onClick={() => {
            handleLinkClick();
            handleSideNavShow();
          }}
        >
          <Link to="/orders">
            <FaRectangleList className="icon" />
            <button>Orders</button>
          </Link>
        </li>
        <UnderLine />
        <li
          onClick={() => {
            handleLinkClick();
            handleSideNavShow();
          }}
        >
          <Link to="/support">
            <MdOutlineQuestionAnswer className="icon" />
            <button>Support</button>
          </Link>
        </li>
      </ul>
    </Wrapper>
  );
};

export default NavBarSideMenuList;
