import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  content: "",
  blogImage: null,
  author: null,
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    createBlog: (state, action) => {
      state.title = action.payload.title;
      state.content = action.payload.content;
      state.blogImage = action.payload.blogImage;
      state.author = action.payload.author;
    },

    editBlog: (state, action) => {},

    deleteBlog: (state, action) => {},
  },
});

export const { createBlog, editBlog, deleteBlog } = blogSlice.actions;

export default blogSlice.reducer;
