import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CheckOutForm from "./CheckOutForm";
import { useRecoilValue } from "recoil";
import { priceState } from "../../../../../../Data/atoms";

const LoadingWrapper = styled.div`
  background-color: black;
  height: 100vh;
`;

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.purple};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 500px;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 15px;
`;

const initStripe = async () => {
  const res = await axios.get("/api/publishable-key");
  const publishableKey = await res.data.publishable_key;
  return loadStripe(publishableKey);
};
const Checkout = () => {
  const setPriceState = useRecoilValue(priceState);
  const totalPriceState = setPriceState * 100; //stripe price in cents

  const stripePromise = initStripe();
  const [clientSecretSettings, setClientSecretSettings] = useState({
    clientSecret: "",
    loading: true,
  });

  useEffect(() => {
    async function createPaymentIntent() {
      const response = await axios.post("/api/create-payment-intent", {
        amount: totalPriceState,
      });

      setClientSecretSettings({
        clientSecret: response.data.client_secret,
        loading: false,
      });
    }

    createPaymentIntent();
  }, []);

  return (
    <div>
      {clientSecretSettings.loading ? (
        <LoadingWrapper>
          <h1>Loading...</h1>
        </LoadingWrapper>
      ) : (
        <Wrapper>
          <Container>
            <Elements
              stripe={stripePromise}
              options={{
                clientSecret: clientSecretSettings.clientSecret,
                appearance: { theme: "stripe" },
              }}
            >
              <CheckOutForm totalPrice={totalPriceState} />
            </Elements>
          </Container>
        </Wrapper>
      )}
    </div>
  );
};

export default Checkout;
