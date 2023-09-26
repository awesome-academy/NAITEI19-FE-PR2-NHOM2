import axios from "../setup/axios";
const login = (email, password) => {
  return axios.post("/api/v1/login", { email, password });
};
const register = (email, password, name) => {
  return axios.post("/api/v1/register", { email, password, name });
};


