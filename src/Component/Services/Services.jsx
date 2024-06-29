import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Overview from "./ServicesHero/OverView";
import styled from "styled-components";
import { motion } from "framer-motion";
import ServicesFAQ from "./ServicesFAQ/ServicesFAQ";
import ExperienceFlow from "../Home/ExperienceFlow/ExperienceFlow";
import StartNow from "../Home/StartNow/StartNow";

const Wrapper = styled.div``;

const ServicesListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  background-color: black;

  ul {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    li {
      font-size: 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 8px;
      width: 33%;
      a {
        text-transform: uppercase;
        text-decoration: none;
        color: ${(props) => props.theme.colors.white};
        font-weight: 700;
      }
      @media ${(props) => props.theme.device.laptop} {
        font-size: ${(props) => props.theme.fontSize.lg};
      }
      @media ${(props) => props.theme.device.mobile} {
        font-size: ${(props) => props.theme.fontSize.md};
      }
    }
  }
`;

const Underline = styled(motion.div)`
  width: 250px;
  height: 8px;
  background-color: ${(props) => props.theme.colors.purple};
  @media ${(props) => props.theme.device.laptop} {
    width: 180px;
    height: 6px;
  }
  @media ${(props) => props.theme.device.mobile} {
    width: 100px;
    height: 4px;
  }
`;

const Services = () => {
  const location = useLocation();
  const currentLocation = location.pathname.split("/").pop();

  return (
    <Wrapper>
      <Overview />
      <ServicesListContainer>
        <ul>
          <li>
            <Link to="solo">Solo</Link>
            {currentLocation === "solo" ? (
              <Underline layoutId="underline" />
            ) : null}
          </li>

          <li>
            <Link to="duo">Duo</Link>
            {currentLocation === "duo" ? (
              <Underline layoutId="underline" />
            ) : null}
          </li>
          <li>
            <Link to="netwins">Net Wins</Link>
            {currentLocation === "netwins" ? (
              <Underline layoutId="underline" />
            ) : null}
          </li>
        </ul>
      </ServicesListContainer>
      <Outlet />
      <ServicesFAQ />
      <ExperienceFlow />
      <StartNow />
    </Wrapper>
  );
};

export default Services;
