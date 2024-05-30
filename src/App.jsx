import { useState } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Component/Home/Home";
import Services from "./Component/Services/Services";
import Support from "./Component/Support/Support";
import Login from "./Component/Login&Signup/Login/Login";
import SignUp from "./Component/Login&Signup/Signup/SignUp";

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
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/support",
        element: <Support />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

export default router;
