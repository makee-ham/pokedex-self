import { create } from "zustand";

const PokemonDataStore = create((set) => ({
  pokemon: {},
  isLoading: false,
  error: null,
  fetchData: async () => {
    set({ isLoading: true });

    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/1/");
      const data = await response.json();
      set({ pokemon: data });
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default PokemonDataStore;
