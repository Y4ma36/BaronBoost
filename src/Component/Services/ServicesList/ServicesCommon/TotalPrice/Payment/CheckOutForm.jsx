import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React, { useState } from "react";
import styled from "styled-components";
import logo_img from "../../../../../../assets/BaronBoostLogo.png";
import { useLocation } from "react-router-dom";

const PayButton = styled.button`
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.theme.colors.purple};
  border: none;
  border-radius: 5px;
  margin-top: 20px;
  transition: all 0.5s ease-in-out;
  &:hover {
    color: ${(props) => props.theme.colors.white};
  }
`;

const ImageLogo = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  img {
    width: 170px;
    height: 150px;
  }
`;

const TotalPriceShow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-family: "Noto Sans KR", sans-serif;
  margin-top: 20px;
`;

const TotalPriceTitle = styled.span`
  opacity: 0.7;
  font-size: ${(props) => props.theme.fontSize.md};
`;

const TotalPriceNumber = styled.span`
  font-size: ${(props) => props.theme.fontSize.md};
  font-weight: 600;
`;

const CheckOutForm = ({ totalPrice }) => {
  const location = useLocation();
  const orderType = location?.state?.orderType;
  const newTotalPrice = totalPrice / 100;
  const email = localStorage.getItem("email");

  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    const { error } = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: `http://localhost:4242/order/payment-successful?orderType=${encodeURIComponent(
          orderType
        )}`,
        receipt_email: email,
      },
    });
    if (error) {
      // This point will only be reached if there is an immediate error when
      // confirming the payment. Show error to your customer (for example, payment
      // details incomplete)
      setErrorMessage(error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <ImageLogo>
        <img src={logo_img} alt="logo" />
      </ImageLogo>
      <PaymentElement />
      <TotalPriceShow>
        <TotalPriceTitle>Total Price</TotalPriceTitle>
        <TotalPriceNumber>USD ${newTotalPrice}</TotalPriceNumber>
      </TotalPriceShow>
      <PayButton disabled={!stripe}>Submit</PayButton>
      {/* Show error message to your customers */}
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};

export default CheckOutForm;
