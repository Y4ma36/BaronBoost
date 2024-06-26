import React from "react";
import styled from "styled-components";
import { FaDiscord, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const FooterBottomWrapper = styled.div`
  padding: 40px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media ${(props) => props.theme.device.mobile} {
    text-align: center;
    flex-direction: column;
    gap: 50px;
  }
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
        <Link to="https://discord.gg/6jmfq4AqYV">
          <FooterSNSIconBox>
            <FaDiscord className="icon" />
          </FooterSNSIconBox>
        </Link>
        <Link to="https://www.instagram.com/baronboostservice/">
          {" "}
          <FooterSNSIconBox>
            <FaInstagram className="icon" />
          </FooterSNSIconBox>
        </Link>
        <Link to="https://x.com/BaronBoost">
          <FooterSNSIconBox>
            <FaXTwitter className="icon" />
          </FooterSNSIconBox>
        </Link>
      </FooterBottomRight>
    </FooterBottomWrapper>
  );
};

export default FooterBottom;
