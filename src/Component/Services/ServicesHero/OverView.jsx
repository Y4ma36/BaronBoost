import React from "react";
import styled from "styled-components";
import OverViewBackgroundImg from "../../../assets/overviewImg.jpg";
import { useLocation, useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const OverViewWrapper = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 1)),
    url(${OverViewBackgroundImg});

  /* 밑에 부분을 더 검하게 줘서 다음 색션과 자연스럽게 이어지도록  */
  background-size: cover;
  background-repeat: no-repeat;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${(props) => props.theme.device.laptop} {
    background-position: center;
  }
`;

const OverViewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 70%;
  @media ${(props) => props.theme.device.tablet} {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const OverViewLeft = styled.div`
  display: flex;
  flex-direction: column;
  text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
    0px -4px 10px rgba(255, 255, 255, 0.3);
  justify-content: center;
  @media ${(props) => props.theme.device.tablet} {
    align-items: center;
  }
`;

const OverViewLeftTitle = styled.div`
  margin-bottom: 20px;
  text-align: center;
  span {
    font-family: "Noto Sans KR", sans-serif;
    color: ${(props) => props.theme.colors.white};
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 900;
    position: relative;
    z-index: 1;
    @media ${(props) => props.theme.device.desktop} {
      font-size: 3.5rem;
    }
    @media ${(props) => props.theme.device.tablet} {
      font-size: 3rem;
    }
    @media ${(props) => props.theme.device.mobile} {
      font-size: 2rem;
    }
  }
`;

const OverViewLeftSubTitle = styled.h3`
  font-size: ${(props) => props.theme.fontSize.lg};
  @media ${(props) => props.theme.device.desktop} {
    font-size: ${(props) => props.theme.fontSize.md};
    width: 70%;
  }
  @media ${(props) => props.theme.device.tablet} {
    font-size: ${(props) => props.theme.fontSize.base};
    width: 100%;
  }
  @media ${(props) => props.theme.device.mobile} {
    font-size: ${(props) => props.theme.fontSize.sm};
    text-align: center;
  }
`;

const Underline = styled(motion.div)`
  position: absolute;
  bottom: 0px;
  left: 5px;
  width: 90%;
  height: 25px;
  background-color: ${(props) => props.theme.colors.purple};
  transform-origin: left;
  z-index: -1;
  opacity: 0;
  @media ${(props) => props.theme.device.desktop} {
    height: 20px;
  }
  @media ${(props) => props.theme.device.mobile} {
    height: 15px;
  }
`;

const UnderlineVariant = {
  initial: {
    scaleX: 0,
  },
  animate: {
    scaleX: 1,
    opacity: 1,
  },
};

const OverViewRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  width: 40%;
  padding: 10px 10px;
  border-radius: 5px;
  background-color: rgb(255, 255, 255, 0.1);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  h3 {
    font-size: 1.5rem;
    line-height: 30px;
    @media ${(props) => props.theme.device.desktop} {
      font-size: ${(props) => props.theme.fontSize.md};
    }
    @media ${(props) => props.theme.device.laptop} {
      font-size: ${(props) => props.theme.fontSize.base};
    }
    @media ${(props) => props.theme.device.mobile} {
      font-size: ${(props) => props.theme.fontSize.sm};
    }
  }
`;

const OverView = () => {
  const location = useLocation();
  const currentLocation = location.pathname.split("/").pop();
  return (
    <OverViewWrapper>
      <OverViewContainer>
        <OverViewLeft>
          <AnimatePresence key={currentLocation}>
            <OverViewLeftTitle>
              <span>
                {currentLocation}
                <Underline
                  variants={UnderlineVariant}
                  initial="initial"
                  animate="animate"
                  transition={{
                    duration: 2,
                  }}
                />
              </span>
              <span>
                Boost
                <Underline
                  variants={UnderlineVariant}
                  initial="initial"
                  animate="animate"
                  transition={{
                    duration: 2,
                  }}
                />
              </span>
            </OverViewLeftTitle>
          </AnimatePresence>
          <OverViewLeftSubTitle>
            Ranked Elo Boosting League of Legends Quality Boosting
          </OverViewLeftSubTitle>
        </OverViewLeft>
        <OverViewRight>
          <h3>
            Get rank you deserve with our professional Leauge of Legends
            Boosting service. <br /> We've ex professional League of Legends
            Player and Challenger Player.
          </h3>
        </OverViewRight>
      </OverViewContainer>
    </OverViewWrapper>
  );
};

export default OverView;
