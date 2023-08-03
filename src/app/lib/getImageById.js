export async function getImageById(id) {
  console.log(id);
  const res = await fetch(
    `https://guilleflores2.peymi.net/wp-json/wp/v2/media/${id}`
  );
  console.log(res);
  if (!res.ok) {
    throw new Error("Independiente campeon");
  }

  return res.json();
}
