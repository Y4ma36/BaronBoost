import React from "react";
import * as auth from "../Utils/auth.jsX";

const SignUp = async (data, navigate) => {
  const userInfo = {
    username: data.username,
    password: data.password,
    email: data.email,
    role: "CUSTOMER",
    boostStatus: "NONE",
  };
  try {
    const response = await auth.signUp(userInfo);
    if (response) {
      navigate("successful");
    }
  } catch (error) {
    console.log(error);
  }
};

export default SignUp;
