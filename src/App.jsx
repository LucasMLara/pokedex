import {useEffect, useState} from 'react'


function App() {
  const [pokemon, setPokemon] = useState({})
  const [pokemonSearch, setPokemonSearch] = useState('')

  
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
      .then(res => res.json())
      .then(data => setPokemon(data))
  }, [])

  console.log(pokemon.stats[0].base_stat)
  return (
    <div>
      <label htmlFor='pokemonInput'> Digite seu Pokemon
        <input type="text" id='pokemonInput' />
      </label>
      <p>{pokemon.name}</p>
      <img src={pokemon.sprites.front_default} alt="" />
      <p>Habilidades</p>
      <ul>
        {pokemon.abilities.map(({ability: {name}}) => <li>{name}</li> )}
      </ul>
      <p>Stats</p>
      <ul>
        {pokemon.abilities.map(({ability: {name}}) => <li>{name}</li> )}
      </ul>
    </div>
  );
}

export default App;
