import React from "react";
import styled from "styled-components";
import FooterTop from "./FooterTop/FooterTop";
import FooterBottom from "./FooterBottom";

const FooterWrapper = styled.div`
  background: ${(props) => props.theme.colors.purple};
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterTop />
      <FooterBottom />
    </FooterWrapper>
  );
};

export default Footer;
