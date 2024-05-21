import React from "react";
import styled from "styled-components";
import FooterTopLeft from "./FooterTopLeft";
import FooterTopRight from "./FooterTopRight";

const FooterTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 80px 0px;
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
