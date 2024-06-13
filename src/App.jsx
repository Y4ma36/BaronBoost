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
import Coaching from "./Component/Coaching/Coaching";

// Support
import Contact from "./Component/Support/Contact/Contact";
import Faqs from "./Component/Support/Faqs/Faqs";
import Policy from "./Component/Support/Policy/Policy";
import BoosterApplication from "./Component/Support/BoosterApplication/BoosterApplication";
import Order from "./Component/Order/Order";

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
const supportRoutes = [
  { path: "contact", element: <Contact /> },
  { path: "faqs", element: <Faqs /> },
  { path: "policy", element: <Policy /> },
  { path: "booster-application", element: <BoosterApplication /> },
];

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
        path: "/coaching",
        element: <Coaching />,
      },
      {
        path: "/orders",
        element: <Order />,
      },
      {
        path: "/support",
        element: <Support />,
      },
      ...supportRoutes.map((route) => ({
        path: `/support/${route.path}`,
        element: route.element,
      })),
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
