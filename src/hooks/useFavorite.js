import { create } from "zustand";

const useFavorite = create((set) => ({
  favoriteIds: [],
  addToFavorite: (id) =>
    set((state) => ({ favoriteIds: [...state.favoriteIds, id] })),
  removeFromFavorite: (id) =>
    set((state) => ({
      favoriteIds: state.favoriteIds.filter((i) => i !== id),
    })),
}));

export default useFavorite;
