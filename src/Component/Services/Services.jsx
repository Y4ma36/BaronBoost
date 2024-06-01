import React from "react";
import { Outlet } from "react-router-dom";
import OverView from "./OverView./OverView";

const Services = () => {
  return (
    <div>
      <OverView />
      <Outlet />
    </div>
  );
};

export default Services;
