export default function Ability({side, svgs}) {
  return (
    <section className="box">
      <h3>{side}</h3>
      <div className="svgs">
        {svgs.map((svg, index) => (
          <img key={index} src={svg} alt={side}/>
        ))}
      </div>

    </section>
  );
}