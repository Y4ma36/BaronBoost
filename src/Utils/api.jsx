import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: "http://localhost:8080/",
});

api.interceptors.request.use(
  (config) => {
    const token = Cookies.get("accessToken"); // Retrieve the JWT token from local storage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Set the Authorization header
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
