export async function getAllImages() {
  const res = await fetch(
    "https://guilleflores2.peymi.net/wp-json/wp/v2/media"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
