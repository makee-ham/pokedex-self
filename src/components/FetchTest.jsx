// 데이터 페치 테스트용 컴포넌트로, 서비스 화면에 노출되지 아니함

import { useEffect } from "react";
import usePokemonDataStore from "../hooks/PokemonDataStore";

export default function FetchTest() {
  const { pokemons, isLoading, error, fetchData } = usePokemonDataStore();
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
