import { useState, useEffect } from "react";

import { Card, Sprite } from "./PokemonCardStyle";

export default function PokemonCard() {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
      .then((res) => res.json())
      .then((data) => setPokemon(data));
  }, []);
  console.log(pokemon);
  const type = pokemon.types[0].type.name;
  const sprite = pokemon.sprites.front_default;
  const weight = pokemon.weight;
  // const stats = pokemon.stats
  const { name } = pokemon;

  return (
    <Card>
      {name}, {type}, <Sprite src={sprite} />, {`${weight} kgs`}
      <br />
      <br />
      Status: hp, ataque, defesa, special atack, special defesa, speed
    </Card>
  );
}
