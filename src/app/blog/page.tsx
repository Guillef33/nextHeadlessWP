"use client";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBlogPosts } from "../store/slices/blog/thunk";

interface Post {
  id: number;
  title: {
    rendered: string;
  };
  author: string;
  excerpt: {
    rendered: string;
  };
}

function Blog() {
  const dispatch = useDispatch();

  const { isLoading, posts, page } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getBlogPosts());
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto">
      <p>Loading: {isLoading ? "True" : "False"}</p>
      <section className="grid grid-cols-3 gap-4 max-w-screen-xl mx-auto">
        {posts.map((item: Post) => {
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
