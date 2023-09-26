import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentFilm : {},
};

const filmSLice = createSlice({
    name: "film",
    initialState,
    reducers: {
        setFilm: (state, action) => {
            return { currentFilm: action.payload };
        },
        clearFilm: () => {
            return { currentFilm: {} };
        },
    },
});
export const { setFilm, clearFilm } = filmSLice.actions;
export default filmSLice.reducer;
