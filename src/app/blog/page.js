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

  useEffect(() => {
    return () => {
      dispatch(getBlogPosts());
    };
  }, []);

  console.log(posts);

  return (
    <div className="max-w-screen-xl mx-auto">
      <p>Loading: {isLoading ? "True" : "False"}</p>
      {posts.map((item, index) => {
        return <h2>{item.id}</h2>;
      })}
      <button disabled={isLoading} onClick={() => dispatch(getBlogPosts(page))}>
        Next
      </button>
      {/* <BlogGrid data={posts} /> */}
    </div>
  );
}

export default Blog;
