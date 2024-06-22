import React from "react";
import styled from "styled-components";
import img from "../../../assets/SignUpPage1.jpg";
import { FaDiscord, FaHeadset, FaUsers, FaTrello } from "react-icons/fa6";
import { color, motion } from "framer-motion";
import { Link } from "react-router-dom";

const SignUpRightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  a {
    text-decoration: none;
    color: inherit;
  }
  @media ${(props) => props.theme.device.tablet} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${(props) => props.theme.device.mobile} {
    grid-template-columns: repeat(1, 1fr);
    padding: 10px 20px;
  }
`;

const SignUpRightList = styled(motion.div)`
  display: flex;
  width: 100%;
  height: 60px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  background-color: rgb(255, 255, 255, 0.1);
  position: relative;
  cursor: pointer;
  &:after {
    content: "»";
    position: absolute;
    opacity: 0;
    font-size: 30px;
    top: 9px;
    right: -5px;

    color: ${(props) => props.theme.colors.white};
  }

  &:hover:after {
    opacity: 1;
    right: 20px;
  }
`;

const SignUpRightItemIcon = styled.div`
  background-color: rgb(255, 255, 255, 0.5);
  padding: 25px 20px;
  display: flex;
  align-items: center;

  .icon {
    font-size: 30px;
    color: ${(props) => props.theme.colors.white};
  }
`;

const SignUpRightItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 30px;
  margin-left: 5px;
  color: ${(props) => props.theme.colors.white};
  font-family: "Noto Sans KR", sans-serif;
  h3 {
    margin-bottom: 10px;
    font-weight: 700;
    @media ${(props) => props.theme.device.tablet} {
      margin-bottom: 0px;
    }
  }
  span {
    opacity: 0.7;
    @media ${(props) => props.theme.device.tablet} {
      display: none;
    }
  }
`;

const SignUpRight = () => {
  return (
    <SignUpRightWrapper>
      <SignUpContainer>
        <Link to="https://discord.gg/WnBcfvc9bJ">
          <SignUpRightList whileHover={{ scale: 1.1 }}>
            <SignUpRightItemIcon>
              <FaDiscord className="icon" />
            </SignUpRightItemIcon>
            <SignUpRightItem>
              <h3>Join our Discord</h3>
              <span>Connect with our community for updates and support.</span>
            </SignUpRightItem>
          </SignUpRightList>
        </Link>
        <Link to="/support">
          <SignUpRightList whileHover={{ scale: 1.1 }}>
            <SignUpRightItemIcon>
              <FaHeadset className="icon" />
            </SignUpRightItemIcon>
            <SignUpRightItem>
              <h3>Visit our Support Center</h3>
              <span>Get help and find answers to common questions.</span>
            </SignUpRightItem>
          </SignUpRightList>
        </Link>
        <Link to="/services/solo">
          <SignUpRightList whileHover={{ scale: 1.1 }}>
            <SignUpRightItemIcon>
              <FaTrello className="icon" />
            </SignUpRightItemIcon>
            <SignUpRightItem>
              <h3>Check out Our Services</h3>
              <span>Explore our range of boosting and coaching services.</span>
            </SignUpRightItem>
          </SignUpRightList>
        </Link>
        <Link to="/support/booster-application">
          <SignUpRightList whileHover={{ scale: 1.1 }}>
            <SignUpRightItemIcon>
              <FaUsers className="icon" />
            </SignUpRightItemIcon>
            <SignUpRightItem>
              <h3>Want to be Booster?</h3>
              <span>Apply now to join our team.</span>
            </SignUpRightItem>
          </SignUpRightList>
        </Link>
      </SignUpContainer>
    </SignUpRightWrapper>
  );
};

export default SignUpRight;
