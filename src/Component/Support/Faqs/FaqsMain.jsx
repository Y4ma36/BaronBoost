import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { color } from "framer-motion";

const Wrapper = styled.div`
  background-color: black;
  padding: 50px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 80%;
  grid-gap: 30px;
  justify-content: center;
  @media ${(props) => props.theme.device.desktop} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${(props) => props.theme.device.tablet} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const QuestionBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.purple};
  border: 2px solid white;
  gap: 10px;
  h2 {
    font-size: ${(props) => props.theme.fontSize.lg};
    font-weight: 800;
  }
  p {
    line-height: 20px;
    a {
      text-decoration: none;
      color: #37b9f1;
      font-weight: 800;
    }
  }
  li {
    list-style-type: circle;
    line-height: 20px;
    margin-left: 20px;
  }
`;

const FaqsMain = () => {
  return (
    <Wrapper>
      <Container>
        <QuestionBox>
          <h2>How do I place an order?</h2>
          <p>
            Simply navigate to the services section or coach section on our
            website, choose the type of service we provide including SoloBoost,
            DuoBoost, NetWin, Coaching (more coming soon), then fill out all the
            necessary information. Pay through PayPal and then sit back and
            relax until your order is complete.
          </p>
        </QuestionBox>
        <QuestionBox>
          <h2>What is the refund policy?</h2>
          <p>
            All payments for boosting services must be made through the website,
            otherwise, orders will not be refundable. Refunds will be issued
            under the following conditions:
          </p>
          <ul>
            <li>If the order has not been fulfilled.</li>
            <li>If boosting fails.</li>
            <li>If the order information is incorrect.</li>
            <li>
              If the order is idling (not being boosted) for a long period of
              time (1 week).
            </li>
          </ul>
        </QuestionBox>
        <QuestionBox>
          <h2>How long does boosting usually take?</h2>
          <p>
            It depends on your order. If you do not see any progress on your
            order after a week, please contact us via
            baronboostservice@gmail.com.
          </p>
        </QuestionBox>

        <QuestionBox>
          <h2>How do I sign up as a booster?</h2>
          <p>
            We only accept applications if your rank is Diamond and above.
            Please visit this page
            <Link to="/support/booster-application"> Booster-Application </Link>
            to learn more.
          </p>
        </QuestionBox>
        <QuestionBox>
          <h2>What is the "PURGE"?</h2>
          <p>
            "The Purge" is an event during which Baron Boost will wipe customer
            data for security purposes and to maintain low database costs. This
            helps keep boosting costs low for customers and ensures a high
            payout rate for boosters. Prior to the Purge, the website will close
            temporarily to stop any incoming orders, allowing us to complete all
            existing orders. This event will not affect customer orders or
            booster payouts.
          </p>
        </QuestionBox>
        <QuestionBox>
          <h2>
            I have wrong information on my order. How do I change my order
            information?
          </h2>
          <p>
            Please contact us regarding this issue via
            baronboostservice@gmail.com or Discord.
          </p>
        </QuestionBox>

        <QuestionBox>
          <h2>
            I just paid but I have wrong information on my order. How long until
            refund?
          </h2>
          <p>
            We will immediately process a refund as soon as we receive your
            money (approximately 5 days).
          </p>
        </QuestionBox>

        <QuestionBox>
          <h2>What is your policy?</h2>
          <p>
            Visit <Link to="/support/policy">Policy</Link> page.
          </p>
        </QuestionBox>
        <QuestionBox>
          <h2>What is DuoBoost?</h2>
          <p>
            It's a service where we assign a professional or high-rank player to
            play with you to help you rank up.
          </p>
        </QuestionBox>

        <QuestionBox>
          <h2>How do I report a booster? They are vandalizing my account.</h2>
          <p>
            Sorry to hear about that, this is our responsibility. Please contact
            us through baronboostservice@gmail.com or Discord, providing the
            booster's name and the problems you encountered.
          </p>
        </QuestionBox>
        <QuestionBox>
          <h2>Are there events at BaronBoost?</h2>
          <p>
            Yes, we have a Discord dedicated to hosting events for our
            customers. We will have events such as tournaments, 1v1 matches, and
            custom games. There will be prizes (cash, free coaching sessions,
            free boosts, free accounts, and much more). To be eligible for a
            prize, you must have completed at least one order with us in the
            past.
          </p>
        </QuestionBox>
      </Container>
    </Wrapper>
  );
};

export default FaqsMain;
