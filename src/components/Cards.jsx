export default function Cards({ data }) {
  const { id, name, front } = data;

  return (
    <section className="flex flex-col items-center w-70 h-70 border">
      <p>No. {id}</p>
      <img src={front} alt={name} className="w-55" />
      <h2>{name}</h2>
    </section>
  );
}
