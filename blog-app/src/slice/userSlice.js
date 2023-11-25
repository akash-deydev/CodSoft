import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: {
    displayName: "",
    uid: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user.displayName = action.payload.displayName;
      state.user.uid = action.payload.uid;
    },

    logout: (state) => {
      state.isAuthenticated = false;
      state.user.displayName = "";
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
