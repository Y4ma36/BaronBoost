import { useState } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Component/Home/Home";
import Services from "./Component/Services/Services";
import Support from "./Component/Support/Support";
import Login from "./Component/Login&Signup/Login/Login";
import SignUp from "./Component/Login&Signup/Signup/SignUp";
import Solo from "./Component/Services/Solo/Solo";
import Duo from "./Component/Services/Duo/Duo";
import NetWins from "./Component/Services/NetWins/NetWins";
import Coaching from "./Component/Services/Coaching/Coaching";

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
        path: "/services/*",
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
          {
            path: "coaching",
            element: <Coaching />,
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
