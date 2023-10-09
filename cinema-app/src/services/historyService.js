import axios from "../setup/axios";
const getALlTransaction = (id) => {
  return axios.get(`/api/v1/transaction?id=${id}`);
};
const createTransaction = (data) => {
  return axios.post(`/api/v1/transaction`, data);
};
const checkTransaction = (userId, filmId) => {
  return axios.get(`/api/v1/transaction/check?userId=${userId}&filmId=${filmId}`);
}
export { getALlTransaction, createTransaction, checkTransaction };
