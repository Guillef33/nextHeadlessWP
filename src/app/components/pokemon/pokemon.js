"use client";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPokemons } from "../../store/slices/pokemons/thunks";

export function Pokemon() {
  const dispatch = useDispatch();

  const { isLoading, pokemons, page } = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto">
      Nuestra lista de pokemones
      <p>Loading: {isLoading ? "True" : "False"}</p>
      <ul>
        {pokemons.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
      <button disabled={isLoading} onClick={() => dispatch(getPokemons(page))}>
        Next
      </button>
    </div>
  );
}

export default Pokemon;
