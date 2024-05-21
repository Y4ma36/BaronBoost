import React from "react";
import styled from "styled-components";
import FooterTop from "./FooterTop/FooterTop";
import FooterBottom from "./FooterBottom";

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  background: ${(props) => props.theme.colors.purple};
  .line {
    width: 90%;
    opacity: 0.5;
    position: relative;
    top: -20px;
  }
`;

const FooterContainer = styled.div`
  width: 70%;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterTop />
        <hr className="line" />
        <FooterBottom />
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
