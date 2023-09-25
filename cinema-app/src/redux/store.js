import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/slices/auth"
import messageReducer from "../redux/slices/message"
import userSlice from "../redux/slices/userSlice"
// const persistConfig = {
//   key: "root",
//   storage,
// };
// const user = persistReducer(persistConfig, userSlice);
// export const store = configureStore({
//   reducer: {
//     user,
   
//   },
//   middleware: [thunk],
// });
// export const persistor = persistStore(store);
const reducer = {
  auth: authReducer,
  message: messageReducer,
  user : userSlice
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export default store;

