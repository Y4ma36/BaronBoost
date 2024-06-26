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

export const resetPassword = (username) =>
  api.post("updatePassword/forgotPassword", username, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

//user delete
export const remove = (username) =>
  api.delete(`users/username/${username}`, username);

//user SingUp

export const signUp = (userInfo) => api.post(`authenticate/signup`, userInfo);
/*---------------------------------------------------*/

/*--------------------Price Data-----------------------*/

export const soloPrice = (orderInfo) =>
  api.post("api/leaguePrices/soloOrder", orderInfo);

export const duoPrice = (orderInfo) =>
  api.post("api/leaguePrices/duoOrder", orderInfo);

export const netwinsPrice = (orderInfo) =>
  api.post("api/leaguePrices/netWinOrder", orderInfo);

/*---------------------------------------------------*/

/*--------------------Order-----------------------*/

export const allOrders = () => api.get("api/orders");

export const soloOrders = () => api.get("api/orders/soloOrders");

export const duoOrders = () => api.get("api/orders/duoOrders");

export const netWinsOrders = () => api.get("api/orders/netWinOrders");

export const coachOrders = () => api.get("api/orders/coachOrders");

/*---------------------------------------------------*/
