import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentFilm: "",
  currentTheater: [],
  date: null,
  time: null,
  positions: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setCurrentFilm: (state, action) => {
      state.currentFilm = action.payload;
    },
    setTheater: (state, action) => {
      state.currentTheater = action.payload;
    },
    setDate: (state, action) => {
      state.date = action.payload;
    },
    setTime: (state, action) => {
      state.time = action.payload;
    },
    appendPosition: (state, action) => {
      state.positions.push(action.payload);
    },
    deletePosition: (state, action) => {
      state.positions = state.positions.filter((position) => position !== action.payload);
    },
    resetPosition: (state, action) => {
      state.positions = [];
    },
  },
});

export const { setCurrentFilm, setTheater, setDate, setTime, appendPosition, deletePosition, resetPosition } =
  orderSlice.actions;

export default orderSlice.reducer;
