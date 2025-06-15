import { useEffect } from "react";
import PokemonDataStore from "../stores/PokemonDataStore";

export default function FetchTest() {
  const { pokemons, isLoading, error, fetchData } = PokemonDataStore();
  const endId = 151;
  const language = "ko";

  useEffect(() => {
    fetchData(endId, language);
  }, [fetchData, endId, language]);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {pokemons.map((pokemon) => (
        <li key={pokemon.id}>{pokemon.name}</li>
      ))}
    </ul>
  );
}
