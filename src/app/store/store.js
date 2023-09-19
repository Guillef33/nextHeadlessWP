import { configureStore } from "@reduxjs/toolkit";
import { blogSlice } from "./slices/blog/blogSlice";
import { counterSlice } from "./slices/counter/counterSlice";
import { pokemonSlice } from "./slices/pokemons/pokemonSlice";
import { authSlice } from "./slices/auth/authSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemons: pokemonSlice.reducer,
    posts: blogSlice.reducer,
    auth: authSlice.reducer,
  },
});
