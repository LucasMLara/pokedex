import { useEffect, useState, useCallback } from "react";
import PokemonCard from "../../Components/PokemonCard";
import { Main, SearchPokemonInput } from "./style";
import Loading from "../../Components/Loading.tsx";

export default function Home() {
  const [pokemon, setPokemon] = useState();
  const [search, setSearch] = useState("");

  function handleChange(e) {
    setSearch(e.target.value);
    console.log(search);
  }
  const getPokemon = useCallback((pokemonName) => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    fetch(URL, {})
      .then((res) => res.json())
      .then((data) => setPokemon(data));
  }, []);

  useEffect(() => {
    getPokemon("pikachu");
  }, []);

  if (!pokemon) return <Loading />;

  return (
    <>
      <Main>
        <SearchPokemonInput
          onChange={handleChange}
          value={search}
          placeholder="Busque seu pokemon"
          type="text"
        />
        <PokemonCard
          name={pokemon.name}
          type={pokemon.types[0].type.name}
          sprite={pokemon.sprites.front_default}
          weight={pokemon.weight}
        />
      </Main>
    </>
  );
}
