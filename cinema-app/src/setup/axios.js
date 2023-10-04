import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:8000",
});
instance.defaults.withCredentials = true;
instance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    const status = error.response ? error.response.status : 500;
    switch (status) {
      case 401:
        return Promise.reject(error);
        break;
      case 403:
        return Promise.reject(error);
        break;
      case 404:
        return Promise.reject(error);
        break;
      case 500:
        return Promise.reject(error);
        break;
      default:
        break;
    }
    return Promise.reject(error);
  }
);
export default instance;
