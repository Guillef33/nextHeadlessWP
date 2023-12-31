import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 0,
  posts: [],
  isLoading: false,
};

export const blogSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    startLoadingPosts: (state) => {
      state.isLoading = true;
    },
    setPosts: (state, action) => {
      state.isLoading = false;
      state.page = action.payload.page;
      state.posts = action.payload.posts;
    },
  },
});

export const { startLoadingPosts, setPosts } = blogSlice.actions;
