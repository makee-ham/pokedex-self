import { useEffect } from "react";
import Cards from "../components/Cards";
import PokemonDataStore from "../stores/PokemonDataStore";

const endId = 151;
const language = "ko";

export default function Main() {
  const { pokemons, isLoading, error, fetchData } = PokemonDataStore();

  useEffect(() => {
    fetchData(endId, language);
  }, [fetchData]);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="flex flex-wrap justify-center gap-10">
      {pokemons.map((pokemon) => (
        <Cards key={pokemon.id} data={pokemon} />
      ))}
    </div>
  );
}
