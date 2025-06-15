import useFavorite from "../hooks/useFavorite";

export default function Favorites() {
  const { favoriteIds } = useFavorite();
  return (
    <div className="flex flex-wrap justify-center gap-10">
      {favoriteIds}
      {/* {pokemons.map((pokemon) => (
        <Cards key={pokemon.id} data={pokemon} />
      ))} */}
    </div>
  );
}
