import { useNavigate } from "react-router-dom";
import useFavorite from "../hooks/useFavorite";

export default function Cards({ data }) {
  const { id, name, front } = data;
  const navigate = useNavigate();
  const { favoriteIds, addToFavorite, removeFromFavorite } = useFavorite();
  const isFavorite = favoriteIds.includes(id); // controlled

  return (
    <section
      className="flex flex-col items-center w-70 h-75 border"
      onClick={() => navigate(`detail/${id}`)}
    >
      <p>No. {id}</p>
      <img src={front} alt={name} className="w-55" />
      <h2>{name}</h2>
      <input
        type="checkbox"
        checked={isFavorite}
        onClick={(e) => e.stopPropagation()}
        onChange={(e) => {
          if (e.target.checked) {
            addToFavorite(id);
          } else {
            removeFromFavorite(id);
          }
        }}
      />
    </section>
  );
}
