import { useMemo } from "react";
import { useParams } from "react-router-dom";
import usePokemonDataStore from "../hooks/PokemonDataStore";

export default function Detail() {
  const { id } = useParams();
  const { pokemons } = usePokemonDataStore();
  const { name, front, back, description } = useMemo(
    () => pokemons.find((p) => p.id === Number(id)),
    [pokemons, id]
  );

  return (
    <section className="flex flex-col items-center w-70 h-70 border">
      <h5>No. {id}</h5>
      <h2>{name}</h2>
      <img src={front} alt={name} className="w-55" />
      <p>{description}</p>
    </section>
  );
}
