import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  userName: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getToken: (state, { payload }) => {
      console.log(payload);
      console.log(state);
      state.token = payload.token;
    },
  },
});
export const { getToken } = userSlice.actions;
export default userSlice.reducer;
