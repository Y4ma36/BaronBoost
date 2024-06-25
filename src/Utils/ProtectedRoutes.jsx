import React, { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isLoginSelector } from "../Data/atomsLogin";

const ProtectedRoutes = () => {
  const isLogin = useRecoilValue(isLoginSelector);
  const currentLocation = useLocation();

  return isLogin ? (
    <Outlet />
  ) : (
    <Navigate to={"/login"} replace state={{ redirectFrom: currentLocation }} />
  );
};

export default ProtectedRoutes;
