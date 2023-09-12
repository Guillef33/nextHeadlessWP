export async function getPokemons() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=10");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
