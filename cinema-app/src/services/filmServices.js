import axios from "../setup/axios";
const getShowingFilms = (limit,page) => {
  return axios.get(`api/v1/showing?limit=${limit}&page=${page}`); 
};
const getComingFilms = (limit,page) => {
  return axios.get(`/api/v1/upcoming?limit=${limit}&page=${page}`);
};
export {
  getShowingFilms,
  getComingFilms,
};

