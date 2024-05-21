import React from "react";
import NavBar from "./Shared/Navbar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Shared/Footer/Footer";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
