import Navbar from "@/app/components/Navbar";

export async function generateStaticParams() {
  const posts = await fetch(
    "https://guilleflores2.peymi.net/wp-json/wp/v2/posts"
  ).then((res) => res.json());

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function Page({ params }) {
  const { slug } = params;
  console.log(slug);
  return (
    <div className="max-w-screen-xl mx-auto">
      <Navbar />
      <h2 className="text-[2rem]">Titulo del post, {slug}</h2>
    </div>
  );
}
