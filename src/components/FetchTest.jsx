import PokemonDataStore from "../stores/PokemonDataStore";

export default function FetchTest() {
  let store = PokemonDataStore();
  let { pokemon, fetchData, isLoading } = store;

  return (
    <div>
      <button onClick={fetchData}>Show id 1 Pokemon</button>
      {isLoading && <div>Loading...</div>}
      {pokemon.forms ? <div>it's {pokemon.forms[0].name}</div> : ""}
    </div>
  );
}
