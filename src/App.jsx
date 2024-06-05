import { useState } from "react";
import { createBrowserRouter } from "react-router-dom";

// Home
import Layout from "./Layout";
import Home from "./Component/Home/Home";
import Support from "./Component/Support/Support";
import Login from "./Component/Login&Signup/Login/Login";
import SignUp from "./Component/Login&Signup/Signup/SignUp";

// Services
import Services from "./Component/Services/Services";
import Solo from "./Component/Services/ServicesList/SoloFile/Solo";
import Duo from "./Component/Services/ServicesList/DuoFile/Duo";
import NetWins from "./Component/Services/ServicesList/NetWinsFile/NetWins";

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
        children: [
          {
            path: "solo",
            element: <Solo />,
          },
          {
            path: "duo",
            element: <Duo />,
          },
          {
            path: "netwins",
            element: <NetWins />,
          },
        ],
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
