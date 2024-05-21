import React from "react";
import logo from "../../../assets/sampleLogoNObg.png";
import styled from "styled-components";

const FooterTopLeftWrapper = styled.div``;

const FooterTopLeftTop = styled.div`
  display: flex;
  justify-content: flex-start;

  gap: 10px;
  img {
    width: 50px;
    height: 50px;
    position: relative;
    top: -20px;
  }
  p {
    font-size: ${(props) => props.theme.fontSize.md};
    font-weight: 900;
  }
`;

const FooterTopLeftBottom = styled.div`
  line-height: 20px;
  margin-top: -10px;
`;

const FooterTopLeft = () => {
  return (
    <FooterTopLeftWrapper>
      <FooterTopLeftTop>
        <img src={logo} alt="" />
        <p>BaronBoost</p>
      </FooterTopLeftTop>
      <FooterTopLeftBottom>
        <p>
          BaronBoost offers a variety of services <br />
          related to League of Legends, including <br /> elo boosting, duo
          boosting, coaching, and more.
        </p>
      </FooterTopLeftBottom>
    </FooterTopLeftWrapper>
  );
};

export default FooterTopLeft;
