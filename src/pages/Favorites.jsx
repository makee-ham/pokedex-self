import Cards from "../components/Cards";
import useFavorite from "../hooks/useFavorite";
import usePokemonDataStore from "../hooks/usePokemonDataStore";

export default function Favorites() {
  const { favoriteIds } = useFavorite();
  const { pokemons } = usePokemonDataStore();
  const favoritePokemons = pokemons.filter(
    (p) => favoriteIds.includes(p.id) === true
  );

  return (
    <div className="flex flex-wrap justify-center gap-10">
      {favoritePokemons.map((pokemon) => (
        <Cards key={pokemon.id} data={pokemon} />
      ))}
    </div>
  );
}
