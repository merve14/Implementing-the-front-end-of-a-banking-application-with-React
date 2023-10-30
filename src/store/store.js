import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import profileSlice from "./profileSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    profile: profileSlice,
  },
});
