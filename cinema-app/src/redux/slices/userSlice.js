import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  username: "",
  role: "",
  id: 0,
  address: "",
  phonenumber: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.username = action.payload.username;
      state.role = action.payload.role;
      state.id = action.payload.id;
      state.address = action.payload.address;
      state.phonenumber = action.payload.phone;
    },
    setUserDefault: (state) => {
      state.email = "";
      state.username = "";
      state.role = "";
      state.token = "";
      state.id = 0;
      state.address = "";
      state.phonenumber = "";
    },
  },
});
export const { setUser, setUserDefault } = userSlice.actions;
export default userSlice.reducer;
