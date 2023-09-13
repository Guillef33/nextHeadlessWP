"use client";

import Navbar from "../components/Navbar";
// import { getAllPosts } from "../lib/getAllPosts";
// import { getAllImages } from "../lib/getAllImages";
import BlogGrid from "../components/BlogGrid";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBlogPosts } from "../store/slices/blog/thunk";

function Blog() {
  const dispatch = useDispatch();

  const { isLoading, posts, page } = useSelector((state) => state.posts);

  console.log(posts);

  const posteos = dispatch(getBlogPosts());

  useEffect(() => {
    return () => {
      dispatch(getBlogPosts());
    };
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto">
      <p>Loading: {isLoading ? "True" : "False"}</p>
      <BlogGrid data={posts} />
    </div>
  );
}

export default Blog;
