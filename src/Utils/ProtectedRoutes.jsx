import React, { useContext } from "react";
import { LoginContext } from "../Context/LoginContext";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const { isLogin } = useContext(LoginContext);
};

export default ProtectedRoutes;
