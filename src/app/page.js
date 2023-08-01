import Image from "next/image";

async function getData() {
  const res = await fetch(
    "https://guilleflores2.peymi.net/wp-json/wp/v2/posts"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

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
  const data = await getData();
  const images = await getImages();

  return (
    <main className="grid grid-cols-3 gap-4">
      {data.map((item, index) => {
        return (
          <div key={index}>
            <div>
              {images.map((imageItem, imageIndex) => {
                if (item.id === imageItem.post) {
                  return <img src={imageItem.source_url} key={imageIndex} />;
                }
              })}
            </div>
            <h1 className="text-[2rem]">{item.title.rendered}</h1>
            <p>{item.content.rendered}</p>
          </div>
        );
      })}
    </main>
  );
}