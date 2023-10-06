import axios from "../setup/axios";
const blockUser = (id) => {
  return axios.put(`/api/v1/user?id=${id}`);
};
const getAllUsers = () => {
  return axios.get("/api/v1/user");
};
const deleteUser = (id) => {
  return axios.post(`/api/v1/user?id=${id}`);
}
export {
  getAllUsers,
  blockUser,
  deleteUser
}

