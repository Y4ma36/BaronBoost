import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import OverView from "./OverView./OverView";
import styled from "styled-components";
import { motion } from "framer-motion";

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
      position: relative;
      a {
        text-transform: uppercase;
        text-decoration: none;
        color: ${(props) => props.theme.colors.white};
        font-weight: 700;
      }
    }
  }
`;

const Underline = styled(motion.div)`
  position: absolute;
  bottom: -20px;
  left: -80px;
  width: 250px;
  height: 8px;
  background-color: ${(props) => props.theme.colors.purple};
`;

const Services = () => {
  const location = useLocation();
  const currentLocation = location.pathname.split("/").pop();

  return (
    <div>
      <OverView />
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
              <Underline layoutId="underline" style={{ left: "-55px" }} />
            ) : null}
          </li>
        </ul>
      </ServicesListContainer>
      <Outlet />
    </div>
  );
};

export default Services;
