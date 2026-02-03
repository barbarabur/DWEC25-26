import { useState, useEffect } from "react";
import  Loading from './Loading';
import { getSpeciesSprite } from './pokemon_api';

function PokeData(props) {
  const [imgUrl, setImgUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!props.id) return; //si no hay id no hacemos la llamada a la api
    setLoading(true); //se pone en true cada vez que cambia el id
    getSpeciesSprite(props.id).then(url => {
      setImgUrl(url); //guardamos la url
      setLoading(false); //ya no estamos cargando
    });
  }, [props.id]); // <----Solo ejecutate si el id cambia


  return (
    <>
      <div className='pokedata'>
          {/* Usamos el operador ternario: 
         ¿Está cargando? 
         SI (?) -> Muestra el componente Loading
         NO (:) -> Muestra la imagen con la URL que guardamos
      */}
      {loading ? (
        <Loading />
      ) : (
        <img src={imgUrl} alt={`Pokemon con id ${props.id}`} className="poke-img" />
      )}
      </div>
    </>
  )
}

export default PokeData
