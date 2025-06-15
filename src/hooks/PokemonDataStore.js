import { create } from "zustand";

const usePokemonDataStore = create((set, get) => ({
  pokemons: [],
  isLoading: false,
  error: null,
  fetchData: async (endId, language) => {
    set({ isLoading: true, error: null });
    const idArray = Array.from({ length: endId }, (_, i) => i + 1);

    try {
      // async의 반환값은 무조건 Promise
      // 이때 모든 id에 대해 비동기 함수 실행 -> fetch 요청 전부 발생
      // => "병렬 요청"
      const fetchPromises = idArray.map(async (pokemonId) => {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`
        );

        const data = await response.json();

        return {
          id: pokemonId,
          name:
            data.names.find((name) => name.language.name === language)?.name ??
            "???",
          description:
            data.flavor_text_entries.find(
              (datum) => datum.language.name === language
            )?.flavor_text ?? "이 포켓몬에 대해 밝혀진 바는 없다.",
          front: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`,
          back: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemonId}.png`,
        };
      });

      // Promise.all([...])은 “모든 Promise가 완료되었을 때, 그 결과값들을 배열로 모아서 반환”하는 Promise
      // 위 fetch 요청/응답 + 변환 작업 다 끝날 때까지 await Promise.all이 기다리고,
      // fetchPromises(Promise들의 배열) 안 Promise들의 return 값들(가공된 배열들)을 모아 배열로 반환
      const dataArray = await Promise.all(fetchPromises);
      set({ pokemons: dataArray });
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ isLoading: false });
    }
  },
  getPokemonDetailById: (id) =>
    get().pokemons.find((pokemon) => pokemon.id === id),
}));

export default usePokemonDataStore;
