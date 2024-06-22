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
  const [isLogin, setLogin] = useState(false);

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
      loginCheck(userInfo.username);
    }
  };

  //🔐 Login Setting
  const loginSetting = (accessToken, username) => {
    //axios object header
    api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

    setLogin(true);

    setUserInfo(username);
    //use info Update
    // const updatedUserInfo = { userId, username, roles };
    // setUserInfo(updatedUserInfo);

    //roles info setting - do it later -
    const updatedRoles = { isUser: false, isBooster: false };
    navigate("/");
  };

  const logout = () => {
    //axios 해더 초기호ㅓ
    api.defaults.headers.common.Authorization = undefined;
    //쿠키 초기화
    Cookies.remove("accessToken");
    // 로그인 여부 false
    setLogin(false);
    // 유저 정보 초기화
    setUserInfo(null);
    // 권한 정보 초기화
    setRoles(null);

    location.reload(true);
  };

  useEffect(() => {
    const token = Cookies.get("accessToken");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setLogin(true);
    }
  }, []);

  const contextValue = {
    login,
    logout,
    isLogin,
    userInfo,
  };

  return (
    <LoginContext.Provider value={contextValue}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
