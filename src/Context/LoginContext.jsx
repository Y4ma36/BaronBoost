import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../Utils/api";
import * as auth from "../Utils/auth.jsX";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { accessToken, userInfoAtom } from "../Data/atomsLogin";
import Cookies from "js-cookie";

/**🔐 Login
 * Login Check
 * Login
 * Log Out
 */

/*---------------------[State]------------------------*/
/*
    상태
    -로그인 여부
    -유저 정보
    -권한 정보
    -아이디 저장
  */

const useAuth = () => {
  const navigate = useNavigate();

  //user token
  const setAccessToken = useSetRecoilState(accessToken);

  //user information
  const setUserInfo = useSetRecoilState(userInfoAtom);

  //user roles

  //save id

  /*---------------------------------------------------*/

  //🔐 login
  const login = async (userLogIn, from) => {
    const userInfo = {
      username: userLogIn.username,
      password: userLogIn.password,
    };

    const response = await auth.login(userInfo);
    const data = response.data;
    const status = response.status;
    const accessToken = data;

    if (status === 200) {
      loginSetting(accessToken, from);
      getUserInfo(userInfo.username);
    }
  };

  //🔐 Login Setting
  const loginSetting = (accessToken, from) => {
    //axios object header
    api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

    setAccessToken(accessToken);

    Cookies.set("accessToken", accessToken);

    navigate(from);
  };

  const logout = () => {
    //axios 해더 초기호ㅓ
    api.defaults.headers.common.Authorization = undefined;
    //쿠키 초기화

    setAccessToken(undefined);

    Cookies.remove("accessToken");

    location.reload(true);
  };

  //saveUser Information

  const getUserInfo = async (username) => {
    const response = await auth.info(username);
    const data = response.data;
    localStorage.setItem("role", data.role);
    setUserInfo(data);
  };

  //reset password

  //c
  const updatePassword = async (username) => {
    await auth.resetPassword(username);
    alert("Check the email linked to your BaronBoost account.");
  };

  return {
    login,
    logout,
    updatePassword,
  };
};

export default useAuth;
