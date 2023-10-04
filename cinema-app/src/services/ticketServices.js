import axios from "../setup/axios";
const getAllTicket = () => {
    return axios.get(`/api/v1/ticket`);
};
const getAllGift = () => {
    return axios.get(`/api/v1/gift`);
};
export { getAllTicket, getAllGift };
