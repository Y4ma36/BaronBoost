import { BrowserRouter, Route, Routes } from "react-router-dom";

/*---------------------[Home]------------------------*/
import Layout from "./Layout";
import Home from "./Component/Home/Home";
import Support from "./Component/Support/Support";
import Login from "./Component/Login&Signup/Login/Login";
import SignUp from "./Component/Login&Signup/Signup/SignUp";

/*---------------------------------------------------*/

/*---------------------[Services]------------------------*/
import Services from "./Component/Services/Services";
import Solo from "./Component/Services/ServicesList/SoloFile/Solo";
import Duo from "./Component/Services/ServicesList/DuoFile/Duo";
import NetWins from "./Component/Services/ServicesList/NetWinsFile/NetWins";
import Coaching from "./Component/Coaching/Coaching";

/*---------------------------------------------------*/

/*---------------------[Support]------------------------*/
import Contact from "./Component/Support/Contact/Contact";
import Faqs from "./Component/Support/Faqs/Faqs";
import Policy from "./Component/Support/Policy/Policy";
import BoosterApplication from "./Component/Support/BoosterApplication/BoosterApplication";
import Order from "./Component/Order/Order";
import SignUpSuccess from "./Component/Login&Signup/SignUpSuccess/SignUpSuccess";

/*---------------------------------------------------*/

/*---------------------[DashBoard]------------------------*/
import UserDashboard from "./Component/Dashboard/UserDashboard/UserDashboard";
import UserProfile from "./Component/Dashboard/UserDashboard/UserDashboardMain/UserProfile/UserProfile";
import UserOrderHistory from "./Component/Dashboard/UserDashboard/UserDashboardMain/UserOrderHistory/UserOrderHistory";
import ProtectedRoutes from "./Utils/ProtectedRoutes";
import ForgotPassword from "./Component/Login&Signup/ForgotPassword/ForgotPassword";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

/*---------------------------------------------------*/

/*---------------------[Orders]------------------------*/
import OrderCategory from "./Component/Order/OrderMain/OrderList/OrderCategory/OrderCategory";
import useOrderData from "./Component/Order/OrderData";
import PaymentSuccessful from "./Component/Services/ServicesList/ServicesCommon/TotalPrice/Payment/PaymentSuccessful";
import PaymentCancel from "./Component/Services/ServicesList/ServicesCommon/TotalPrice/Payment/PaymentCancel";
import CheckOut from "./Component/Services/ServicesList/ServicesCommon/TotalPrice/Payment/CheckOut";

/*---------------------------------------------------*/

const supportRoutes = [
  { path: "contact", element: <Contact /> },
  { path: "faqs", element: <Faqs /> },
  { path: "policy", element: <Policy /> },
  { path: "booster-application", element: <BoosterApplication /> },
];

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />}>
              <Route path="solo" element={<Solo />} />
              <Route path="duo" element={<Duo />} />
              <Route path="netwins" element={<NetWins />} />
            </Route>
            <Route path="coaching" element={<Coaching />} />
            <Route path="orders" element={<Order />}>
              <Route path="all-orders" element={<OrderCategory />} />
              <Route path="solo-orders" element={<OrderCategory />} />
              <Route path="duo-orders" element={<OrderCategory />} />
              <Route path="netwins-orders" element={<OrderCategory />} />
              <Route path="coach-orders" element={<OrderCategory />} />
            </Route>
            <Route path="support" element={<Support />} />
            {supportRoutes.map((route) => (
              <Route
                key={route.path}
                path={`support/${route.path}`}
                element={route.element}
              />
            ))}

            <Route element={<ProtectedRoutes />}>
              <Route path="user-dashboard" element={<UserDashboard />}>
                <Route path="profile" element={<UserProfile />} />
                <Route path="order-history" element={<UserOrderHistory />} />
              </Route>
            </Route>
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />

          <Route path="signup/successful" element={<SignUpSuccess />} />
          <Route path="login/forgot-password" element={<ForgotPassword />} />
          <Route path="order/checkout" element={<CheckOut />} />
          <Route
            path="/order/payment-sucessful"
            element={<PaymentSuccessful />}
          />
          <Route path="order/payment-failed" element={<PaymentCancel />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};
export default App;
