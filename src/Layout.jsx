import React from "react";
import NavBar from "./Shared/Navbar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Shared/Footer/Footer";

const Layout = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
