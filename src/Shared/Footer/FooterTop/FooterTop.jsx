import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { color } from "framer-motion";
import FooterTopLeft from "./FooterTopLeft";
import FooterTopRight from "./FooterTopRight";

const FooterTopWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 80px 50px;
`;

// const FooterSNSIconBox = styled.div`
//   background-color: rgba(0, 0, 0, 0.1);
//   padding: 10px 10px;
//   border-radius: 5px;
//   cursor: pointer;
//   .icon {
//     font-size: 30px;
//     color: ${(props) => props.theme.colors.white};
//   }

//   &:hover {
//     background-color: rgba(0, 0, 0, 0.3);
//     .icon {
//       color: ${(props) => props.theme.colors.purple};
//     }
//   }
// `;

const FooterTop = () => {
  return (
    <FooterTopWrapper>
      <FooterTopLeft />
      <FooterTopRight />
    </FooterTopWrapper>
  );
};

export default FooterTop;
