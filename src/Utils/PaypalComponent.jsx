import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import React from "react";

const paypalConfig = {
  clientId: import.meta.env.VITE_PAYPAL_CLIENT_KEY,
  clientSecret: import.meta.env.VITE_PAYPAL_CLIENT_SECRET,
};
const stripe = require("stripe")(paypalConfig.clientSecret);

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};

export default async function handler(req, res) {
  const { items } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
}
