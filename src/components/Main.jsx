import { useState, useEffect } from "react";
import PokemonContainer from "./PokemonContainer";
export default function Main({ score, setScore, highScore, setHighScore }) {
  const [pokemonArr, setPokemonArr] = useState([]);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=24")
      .then((res) => res.json())
      .then((pokemons) => {
        const promises = pokemons.results.map((pokemon) =>
          fetch(pokemon.url).then((res) => res.json())
        );
        return Promise.all(promises);
      })
      .then((pokemonDetails) =>
        setPokemonArr(
          pokemonDetails.map((pokemonDetail) => ({
            ...pokemonDetail,
            isClicked: "false",
          }))
        )
      )
      .catch((err) => console.log(err));
  }, []);

  const shuffle = function (arr) {
    const shuffledArr = [];
    while (shuffledArr.length !== arr.length) {
      let i = Math.floor(Math.random() * arr.length);
      if (!shuffledArr.includes(arr[i])) shuffledArr.push(arr[i]);
    }
    return shuffledArr;
  };

  const findPokemon = function (arr, id) {
    const obj = arr.filter((element) => element.id === Number(id));
    return obj[0];
  };

  const resetPokemons = function () {
    setPokemonArr((prev) =>
      prev.map((element) => ({ ...element, isClicked: "false" }))
    );
  };

  const setClickedPokemon = function (id) {
    setPokemonArr((prev) =>
      prev.map((element) => {
        if (element.id === Number(id)) return { ...element, isClicked: "true" };
        else return { ...element };
      })
    );
  };

  const setScoreCard = function () {
    setScore((prev) => prev + 1);
  };

  const resetScoreCard = function () {
    if (score > highScore) setHighScore(score);
    setScore(0);
  };

  const handleChange = function (e) {
    const pokeId = e.currentTarget.id;
    const pokemon = findPokemon(pokemonArr, pokeId);
    if (pokemon.isClicked === "true") {
      resetScoreCard();
      resetPokemons();
    } else {
      setScoreCard();
      setClickedPokemon(pokeId);
    }
    setPokemonArr((prev) => shuffle(prev));
  };

  const PokemonContainerArr = pokemonArr.map((pokemon) => (
    <PokemonContainer
      key={pokemon.id}
      props={pokemon}
      handleChange={handleChange}
    />
  ));

  return (
    <div className="container font-techMono text-xl text-white flex flex-wrap justify-center items-center gap-3 my-3 mx-auto">
      {pokemonArr.length != 0 && PokemonContainerArr}
    </div>
  );
}
