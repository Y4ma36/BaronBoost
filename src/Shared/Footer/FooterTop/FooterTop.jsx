import React from "react";
import styled from "styled-components";
import FooterTopLeft from "./FooterTopLeft";
import FooterTopRight from "./FooterTopRight";

const FooterTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 80px 0px;
  @media ${(props) => props.theme.device.laptop} {
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }
`;

const FooterTop = () => {
  return (
    <FooterTopWrapper>
      <FooterTopLeft />
      <FooterTopRight />
    </FooterTopWrapper>
  );
};

export default FooterTop;
