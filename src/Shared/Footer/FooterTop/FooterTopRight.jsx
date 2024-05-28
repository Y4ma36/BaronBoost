import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterTopRightWrapper = styled.div`
  display: flex;
  gap: 50px;

  @media ${(props) => props.theme.device.mobile} {
    flex-direction: column;
  }
`;

const FooterTopList = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    gap: 25px;
  }
`;

const FooterListTitle = styled.h1`
  font-size: ${(props) => props.theme.fontSize.md};
  font-weight: 900;
  color: ${(props) => props.theme.colors.white};
`;

const FooterTopItem = styled.li`
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.white};
    opacity: 0.75;

    &:hover {
      opacity: 1;
    }
  }
`;

const FooterTopRight = () => {
  return (
    <FooterTopRightWrapper>
      <FooterTopList>
        <FooterListTitle>Services</FooterListTitle>
        <ul>
          <FooterTopItem>
            <Link>Solo Wins</Link>
          </FooterTopItem>
          <FooterTopItem>
            <Link>Duo Wins</Link>
          </FooterTopItem>
          <FooterTopItem>
            <Link>Net Wins</Link>
          </FooterTopItem>
          <FooterTopItem>
            <Link>Coaching</Link>
          </FooterTopItem>
        </ul>
      </FooterTopList>
      <FooterTopList>
        <FooterListTitle>Contact</FooterListTitle>
        <ul>
          <FooterTopItem>
            <Link>Contact</Link>
          </FooterTopItem>
          <FooterTopItem>
            <Link>Job</Link>
          </FooterTopItem>
        </ul>
      </FooterTopList>
      <FooterTopList>
        <FooterListTitle>Support</FooterListTitle>
        <ul>
          <FooterTopItem>
            <Link>FAQs</Link>
          </FooterTopItem>
          <FooterTopItem>
            <Link>Policy</Link>
          </FooterTopItem>
          <FooterTopItem>
            <Link>Term of Service</Link>
          </FooterTopItem>
        </ul>
      </FooterTopList>
    </FooterTopRightWrapper>
  );
};

export default FooterTopRight;
