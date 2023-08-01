import Image from "next/image";
import Navbar from "./components/Navbar";
import Link from "next/link";
import { getAllPosts } from "./lib/getAllPosts";
import { getPostById } from "./lib/getPostById";
import { getAllImages } from "./lib/getAllImages";

async function getImages() {
  const res = await fetch(
    "https://guilleflores2.peymi.net/wp-json/wp/v2/media"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getAllPosts();
  const images = await getAllImages();

  return (
    <main>
      <Navbar />
      <section className="grid grid-cols-3 gap-4 max-w-screen-xl mx-auto">
        {data.map((item, index) => {
          const text = item.content.rendered;
          const textClean = text.replace(/<\/?[^>]+>/gi, "");
          const excerpt = textClean.substring(0, 150);

          return (
            <div key={index} className="p-6">
              <div className="w-full">
                {images.map((imageItem, imageIndex) => {
                  if (item.id === imageItem.post) {
                    return (
                      <Image
                        src={imageItem.source_url}
                        key={imageIndex}
                        width={600}
                        height={400}
                      />
                    );
                  }
                })}
              </div>
              <h2 className="py-4">
                <Link
                  href={`/blog/${item.slug}`}
                  className="text-blue-400 text-2xl hover:text-blue-600"
                >
                  {item.title.rendered}
                </Link>
              </h2>

              <p className="line-clamp-3">{textClean}</p>
              <div className="mt-4">
                <Link
                  href={`/blog/${item.slug}`}
                  className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                >
                  Read more
                </Link>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
