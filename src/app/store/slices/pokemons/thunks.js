import { startLoadingPokemons, setPokemons } from "./pokemonSlice";
import { pokemonApi } from "../../../api/pokemonApi";

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());

    const { data } = await pokemonApi.get(
      `/pokemon?limit=10&offset=${page * 10}`
    );

    const pokemonsWithImages = await Promise.all(
      data.results.map(async (pokemon, index) => {
        const { data: pokemonData } = await pokemonApi.get(
          `/pokemon/${pokemon.name}`
        );

        return {
          name: pokemon.name,
          image: pokemonData.sprites.front_default,
          order: pokemonData.order,
          weight: pokemonData.weight,
        };
      })
    );

    dispatch(setPokemons({ pokemons: pokemonsWithImages, page: page + 1 }));
  };
};
