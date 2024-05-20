import { useState } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Component/Home/Home";

// BaronBoost/coaching
// BaronBoost/boosters
// BaronBoost/login
// BaronBoost/signup
// BaronBoost/services/soloduorank
// BaronBoost/services/netwins
// BaronBoost/support/contactus
// BaronBoost/support/faqs
// BaronBoost/support/boosterapplication

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
