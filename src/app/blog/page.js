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

  const posteos = dispatch(getBlogPosts(2));

  console.log(posteos);

  // useEffect(() => {
  //   return () => {
  //     dispatch(getBlogPosts());
  //   };
  // }, []);

  return (
    <div className="max-w-screen-xl mx-auto">
      <p>Loading: {isLoading ? "True" : "False"}</p>
      {posteos.map((item, index) => {
        <h2>{item.id}</h2>;
      })}
      {/* <BlogGrid data={posts} /> */}
    </div>
  );
}

export default Blog;
