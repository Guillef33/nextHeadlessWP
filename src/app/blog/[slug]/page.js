import Navbar from "@/app/components/Navbar";
import { getPostById } from "../../lib/getPostById";
import { getImageById } from "../../lib/getImageById";

export async function generateStaticParams() {
  const posts = await fetch(
    "https://guilleflores2.peymi.net/wp-json/wp/v2/posts"
  ).then((res) => res.json());

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
export default async function Page({ params }) {
  const { slug } = params;

  const post1 = await getPostById(slug);
  const image = await getImageById(28);

  const textClean = post1[0].content.rendered.replace(/<\/?[^>]+>/gi, "");

  return (
    <div className="max-w-screen-xl mx-auto">
      <Navbar />
      <h2 className="text-[2rem]">{post1[0].title.rendered}</h2>
      <h5>El autor es: {post1[0].author}</h5>
      <p>{textClean}</p>
    </div>
  );
}
