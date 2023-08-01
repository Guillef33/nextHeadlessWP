import Navbar from "../components/Navbar";

export async function getData() {
  const res = await fetch(
    "https://guilleflores2.peymi.net/wp-json/wp/v2/posts"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

function Blog() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Navbar />
      <h1>The blog page</h1>
    </div>
  );
}

export default Blog;
