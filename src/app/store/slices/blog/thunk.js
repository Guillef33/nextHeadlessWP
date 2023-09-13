import { startLoadingPosts, setPosts } from "./blogSlice";
import { blogsApi } from "@/app/api/blogsApi";

export const getBlogPosts = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPosts());

    const { data } = await blogsApi.get(`/posts`);

    console.log(data);

    dispatch(setPosts({ blogs: data.results, page: page + 1 }));
  };
};
