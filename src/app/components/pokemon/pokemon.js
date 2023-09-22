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

  console.log(pokemons);

  return (
    <div className="max-w-screen-xl mx-auto">
      Nuestra lista de pokemones
      <p>Loading: {isLoading ? "True" : "False"}</p>
      <div className="grid grid-cols-3">
        {pokemons.map((item) => (
          <div key={item.name}>
            <img src={item.image} alt="Image de un pokemon" />
            <h1>{item.name}</h1>
            <p>Peso: {item.weight} </p>
            <p>Numero: {item.order}</p>
          </div>
        ))}
      </div>
      <button disabled={isLoading} onClick={() => dispatch(getPokemons(page))}>
        Next
      </button>
    </div>
  );
}

export default Pokemon;
