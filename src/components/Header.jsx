export default function Header({ score, highScore }) {
  return (
    <header className="header mx-auto shadow-md sticky top-0 z-10 max-w-screen h-28  mb-4 font-techMono bg-white rounded-md ">
      <div className="w-full h-full relative">
        <div className="heading-container flex flex-col md:flex-row justify-center items-center px-3 pt-3 md:pt-5 md:space-x-3">
          <h1 className=" text-2xl md:text-3xl   font-semibold text-gray-500 text-center">
            Test your memory with Pokemons
          </h1>
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
            alt="pokeball"
            className="w-7 h-7 md:w-10 md:h-10"
          ></img>
        </div>
        <div className="score-card text-sm absolute right-4 bottom-2">
          <p>
            Score: <span>{score}</span>
          </p>
          <p>
            High score: <span>{highScore}</span>
          </p>
        </div>
      </div>
    </header>
  );
}
