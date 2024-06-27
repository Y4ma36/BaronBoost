require("dotenv").config();

const path = require("path");
const express = require("express");
const app = express();
app.use(express.json());

// const stripe = require("stripe")(process.env.VITE_STRIPE_CLIENT_SECRET);

// const storeItems = new Map([
//   [1, { priceInCents: 10000, name: "learn react today" }],
//   [2, { priceInCents: 20000, name: "learn nextjs today" }],
// ]);

// app.get("/config", (req, res) => {
//   res.send({
//     publishableKey: process.env.VITE_STRIPE_PUBLISHABLE_KEY,
//   });
// });

app.post("/create-checkout-session", async (req, res) => {
  // try {
  //   const session = await stripe.checkout.sessions.create({
  //     paymetn_method_types: ["card"],
  //     line_items: req.body.items.map((item) => {
  //       const storeItem = storeItems.get(item.id);
  //       return {
  //         price_data: {
  //           currency: "usd",
  //           product_data: {
  //             name: storeItem.name,
  //           },
  //           unit_amount: storeItem.priceInCents,
  //         },
  //         quantity: item.quantity,
  //       };
  //     }),
  //     mode: "payment",
  //     success_url: `http://localhost:5173/order/payment-sucessful`,
  //     cancel_url: `http://localhost:5173/order/payment-cancel`,
  //   });
  // } catch (e) {
  //   res.status(500).json({ error: e.messge });
  // }
  res.json({ url: "hello" });
});

app.listen(5173, () => {
  console.log("Server is running on http://localhost:5173");
});
