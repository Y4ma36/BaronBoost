import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../Utils/api";
import Cookies from "js-cookie";
import * as auth from "../Utils/auth.jsX";

/**🔐 Login
 * Login Check
 * Login
 * Log Out
 */

export const LoginContext = createContext(null);

const LoginContextProvider = (props) => {
  const navigate = useNavigate();

  /*---------------------[State]------------------------*/
  /*
    상태
    -로그인 여부
    -유저 정보
    -권한 정보
    -아이디 저장
  */

  //check login
  const [isLogin, setLogin] = useState(!!localStorage.getItem("accessToken"));

  const [userName, setUsername] = useState("");

  //user information
  const [userInfo, setUserInfo] = useState();

  //user roles
  const [roles, setRoles] = useState({ isUser: false, isBooster: false });

  //save id
  const [saveUserId, setSaveUserId] = useState();

  /*---------------------------------------------------*/

  // ✅login Check
  const loginCheck = async (username) => {
    const accessToken = Cookies.get("accessToken");
    //store userInfo

    loginSetting(accessToken, username);
  };

  //🔐 login
  const login = async (userLogIn) => {
    const userInfo = {
      username: userLogIn.username,
      password: userLogIn.password,
    };

    const response = await auth.login(userInfo);
    const data = response.data;
    const status = response.status;
    const headers = response.headers;
    const accessToken = data;

    if (status === 200) {
      Cookies.set("accessToken", accessToken);
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("username", userInfo.username);
      loginCheck(userInfo.username);
    }
  };

  //🔐 Login Setting
  const loginSetting = (accessToken, username) => {
    //axios object header
    api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

    setLogin(true);

    setUsername(username);
    //use info Update

    getUserInfo(username);

    //roles info setting - do it later -
    const updatedRoles = { isUser: false, isBooster: false };
    navigate("/");
  };

  const logout = () => {
    //axios 해더 초기호ㅓ
    api.defaults.headers.common.Authorization = undefined;
    //쿠키 초기화
    Cookies.remove("accessToken");

    localStorage.removeItem("accessToken");

    localStorage.removeItem("username");
    // 로그인 여부 false
    setLogin(false);
    // 유저 정보 초기화
    setUsername(null);

    setUserInfo(null);
    // 권한 정보 초기화
    setRoles(null);

    location.reload(true);
  };

  //saveUser Information

  const getUserInfo = async (username) => {
    const accessToken =
      localStorage.getItem("accessToken") || Cookies.get("accessToken");
    if (accessToken) {
      const response = await auth.info(username);
      const data = response.data;
      localStorage.setItem("userInfo", JSON.stringify(data));
    }
  };

  //reset password

  const resetPassword = async () => {
    const accessToken =
      localStorage.getItem("accessToken") || Cookies.get("accessToken");
    if (accessToken) {
      const response = await auth.resetPassword(newPassword);
    }
  };

  useEffect(() => {
    // Check if there's a token in localStorage or Cookie to determine login status
    const accessToken =
      localStorage.getItem("accessToken") || Cookies.get("accessToken");
    if (accessToken) {
      setLogin(true);
      // Optionally fetch and set user info based on accessToken
    }
  }, []);

  const contextValue = {
    login,
    logout,
    isLogin,
    resetPassword,
  };

  return (
    <LoginContext.Provider value={contextValue}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
