export default function PokemonContainer({ props, handleChange }) {
  return (
    <div
      onClick={handleChange}
      className=" bg-slate-400 w-60 flex flex-col justify-center items-center pr-3 py-4 rounded-md cursor-pointer text-white hover:shadow-[0px_4px_10px_rgba(0,0,0,0.2)] hover:bg-slate-300"
      id={props.id}
    >
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.id}.png`}
        className="w-48 h-48 "
      ></img>
      <span>{props.name}</span>
    </div>
  );
}
