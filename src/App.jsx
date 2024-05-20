import { useState } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Component/Home/Home";

// baronboost/coaching
// baronboost/boosters
// baronboost/login
// baronboost/signup
// baronboost/services/solo
// baronboost/services/duo
// baronboost/services/netwins
// baronboost/support/contactus
// baronboost/support/faqs
// baronboost/support/boosterapplication

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
