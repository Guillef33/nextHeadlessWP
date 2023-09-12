import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 0,
  posts: [],
  isLoading: false,
};

export const blogSlice = createSlice({
  name: "blogPost",
  initialState,
  reducers: {
    startLoadingPosts: (state) => {
      state.isLoading = true;
    },
    setPost: (state, action) => {
      console.log(action);
    },
  },
});

export const { startLoadingPosts, setPost } = blogSlice.actions;
