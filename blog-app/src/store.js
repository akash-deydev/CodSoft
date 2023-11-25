import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../src/slice/userSlice";
import blogReducer from "../src/slice/blogSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    blog: blogReducer,
  },
});
