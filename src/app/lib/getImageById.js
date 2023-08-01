export async function getImageById(id) {
  const res = await fetch(
    `https://guilleflores2.peymi.net/wp-json/wp/v2/media?id=${id}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  console.log(res);

  return res.json();
}
