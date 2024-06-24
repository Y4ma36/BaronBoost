import api from "./api";

/*------------------Login & SignUp-------------------------*/

//login

export const login = (userLogIn) => api.post("authenticate/signin", userLogIn);

//user info
export const info = (username) => api.get(`api/users/username/${username}`);

//signup
export const join = (data) => api.post(`users`, data);

//user info update
export const update = (data) => api.put(`users`, data);

//user reset password

export const resetPassword = (newPassword) =>
  api.put("updatePassword/resetPassword", newPassword);

//user delete
export const remove = (username) =>
  api.delete(`users/username/${username}`, username);

/*---------------------------------------------------*/

/*--------------------Price Data-----------------------*/

export const soloPrice = () => api.get("api/leaguePrices/soloOrder");

export const duoPrice = () => api.get("api/leaguePrices/duoOrder");

export const netwinsPrice = () => api.get("api/leaguePrices/netWinOrder");
