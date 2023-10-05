import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/slices/auth";
import messageReducer from "../redux/slices/message";
import filmSlice from "./slices/filmSlice";
import ticketSlice from "./slices/ticketSlice";
import orderSlice from "./slices/orderSlice";

const reducer = {
  auth: authReducer,
  message: messageReducer,
  film: filmSlice,
  ticket: ticketSlice,
  order: orderSlice,
};
const store = configureStore({
  reducer: reducer,
  devTools: true,
});
export default store;
