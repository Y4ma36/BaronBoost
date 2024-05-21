import React from "react";
import styled from "styled-components";
import { FaDiscord, FaInstagram, FaXTwitter } from "react-icons/fa6";

const FooterBottomWrapper = styled.div`
  padding: 40px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FooterBottomLeft = styled.div``;

const FooterBottomRight = styled.div`
  display: flex;
  gap: 10px;
`;

const FooterSNSIconBox = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  padding: 10px 10px;
  border-radius: 5px;

  cursor: pointer;
  .icon {
    font-size: 30px;
    color: ${(props) => props.theme.colors.white};
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
    .icon {
      color: ${(props) => props.theme.colors.purple};
    }
  }
`;

const FooterBottom = () => {
  return (
    <FooterBottomWrapper>
      <FooterBottomLeft>
        <p>CopyRight &#169; 2024 BaronBoost. All rights reserved.</p>
      </FooterBottomLeft>
      <FooterBottomRight>
        <FooterSNSIconBox>
          <FaDiscord className="icon" />
        </FooterSNSIconBox>
        <FooterSNSIconBox>
          <FaInstagram className="icon" />
        </FooterSNSIconBox>
        <FooterSNSIconBox>
          <FaXTwitter className="icon" />
        </FooterSNSIconBox>
      </FooterBottomRight>
    </FooterBottomWrapper>
  );
};

export default FooterBottom;
