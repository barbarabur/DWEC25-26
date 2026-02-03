
import './pokedex.css'
import { useState } from 'react'
import PokeData from './PokeData'
import PokeForm from './PokeForm'

function Pokedex() {

  const [pokemonId, setPokemonId] = useState(null);

  const handleSearch = (id) => {
    setPokemonId(id);
  };

  return (
    <div className='pokedex-container'>
      <h1>Pokedex</h1>
        <PokeForm onSearch={handleSearch}/>
        <PokeData id={pokemonId} />      
    </div>
  )
}

export default Pokedex
