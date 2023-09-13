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
      <section className="grid grid-cols-3 gap-4 max-w-screen-xl mx-auto">
        {posts.map((item, index) => {
          return (
            <div key={item.id}>
              <h1>{item.title.rendered}</h1>
              <h2>{item.author}</h2>
              <p>{item.excerpt.rendered}</p>
            </div>
          );
        })}
      </section>
      <button disabled={isLoading} onClick={() => dispatch(getBlogPosts(page))}>
        Show Posts
      </button>
      {/* <BlogGrid data={posts} /> */}
    </div>
  );
}

export default Blog;
