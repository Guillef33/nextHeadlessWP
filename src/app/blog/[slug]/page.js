import Navbar from "@/app/components/Navbar";
import Image from "next/image";
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
  const imageId = post1[0].featured_media;
  const image = await getImageById(imageId);

  // console.log(`El id es: ${imageId}`);
  console.log(imageId);

  const textClean = post1[0].content.rendered.replace(/<\/?[^>]+>/gi, "");

  return (
    <div className="max-w-screen-xl mx-auto rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
      <img
        className="w-full h-[30rem] object-cover"
        src={`https://guilleflores2.peymi.net/wp-content/uploads/${image.media_details.file}`}
      />
      <h2 className="text-[2rem]">{post1[0].title.rendered}</h2>
      <h5>El autor es: {post1[0].author}</h5>
      <p>{textClean}</p>
    </div>
  );
}
