import { useState, useEffect } from "react";
import { getPokemonData } from "./pokemon_api";

const DEFAULT_LANGUAGE = '7' // Español

function pokemonsInLanguage(pokemons, language) {
  return pokemons.filter(pokemon => pokemon.local_language_id === language)
}

function PokeForm(props) {

  //1. Estados
  const [allPokemons, setAllPokemons] = useState([]);
  const [selectedName, setSelectedName] = useState("");
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);

  //carga inicial de datos
  useEffect(()=> {
    getPokemonData().then(data => {
      setAllPokemons(data);
    });
  }, []);

  //manejo del envío del formulario
  const handleSubmit =(e) => {
    e.preventDefault(); //Evita que la página se recargue
    //buscamos el objeto pokemos que coincida con el nombre e idioma
    const found = allPokemons.find(p => 
      p.name.toLowerCase() === selectedName.toLowerCase() &&
      p.local_language_id === language
    );
    //Si existe invocamos la función de las props (ej:onSearch) con el pokemon_species_id
    if (found) {
      props.onSearch(found.pokemon_species_id);
      setSelectedName("");
    } else {
      alert("Pokemos no encontrado en este idioma");
    }
  };

  //filtrar lista para el datalist
  const displayList = pokemonsInLanguage(allPokemons, language);

  return (
    <div>
      <h2>Introduce el nombre de un Pokemon</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre del pokèmon:
          <input 
            type="text" 
            name="name" 
            list="pokemons"
            value={selectedName}
            onChange={(e) => setSelectedName(e.target.value)}
          />
        </label>
        <datalist id="pokemons">
           { displayList.map((p, index) => (
          <option key={index} value= {p.name} />
          ))}
        </datalist>

        <label>
          Lenguaje
          <select value={language} onChange={(e) => setLanguage(e.target.value)}>            <option value="7">Español</option>
            <option value="5">Francés</option> 
            <option value="6">Alemán</option>
          </select>
        </label>
        <input type="submit" value="Search"/>
      </form>
    </div>
  )
}

export default PokeForm
