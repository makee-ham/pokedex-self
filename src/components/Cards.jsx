import { useNavigate } from "react-router-dom";

export default function Cards({ data }) {
  const { id, name, front } = data;
  const navigate = useNavigate();

  return (
    <section
      className="flex flex-col items-center w-70 h-70 border"
      onClick={() => navigate(`detail/${id}`)}
    >
      <p>No. {id}</p>
      <img src={front} alt={name} className="w-55" />
      <h2>{name}</h2>
    </section>
  );
}
