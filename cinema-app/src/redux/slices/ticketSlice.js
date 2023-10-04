import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentTicket: {},
  currentGift:{}
};
const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    setTicket: (state, action) => {
      state.currentTicket = action.payload;
    },
    clearTicket: () => {
      return { currentTicket: {} };
    },
    setGift: (state, action) => {
      state.currentGift = action.payload;
    },
    clearGift: () => {
      return { currentGift: {} };
    },
  },
});
export const { setTicket, clearTicket, setGift, clearGift } = ticketSlice.actions;
export default ticketSlice.reducer;
