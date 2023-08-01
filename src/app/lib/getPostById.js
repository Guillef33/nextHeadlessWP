export async function getPostById(id) {
  const res = await fetch(
    `https://guilleflores2.peymi.net/wp-json/wp/v2/posts?slug=${id}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
