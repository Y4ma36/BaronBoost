import api from "./api";

//login

export const login = (userLogIn) => api.post("authenticate/signin", userLogIn);

//user info
export const info = (username) => api.get(`api/users/username/${username}`);

//signup
export const join = (data) => api.post(`users`, data);

//user info update
export const update = (data) => api.put(`users`, data);

//user delete
export const remove = (username) =>
  api.delete(`users/username/${username}`, username);
