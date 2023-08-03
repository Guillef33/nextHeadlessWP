import Navbar from "../components/Navbar";
import { getAllPosts } from "../lib/getAllPosts";
import { getAllImages } from "../lib/getAllImages";
import BlogGrid from "../components/BlogGrid";

export async function getData() {
  const res = await fetch(
    "https://guilleflores2.peymi.net/wp-json/wp/v2/posts"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function Blog() {
  const data = await getAllPosts();
  const images = await getAllImages();


  return (
    <div className="max-w-screen-xl mx-auto">
      <Navbar />
      <BlogGrid data={data} images={images} />
    </div>
  );
}

export default Blog;
