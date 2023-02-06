import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("user")) || {};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    LogIn: (state, action) => {
      return action.payload;
    },
    LogOut: (state, action) => {
      return { initialState };
    },
  },
});

export const { LogIn, LogOut } = userSlice.actions;
export default userSlice.reducer;
