import React from "react";
import { useDispatch } from 'react-redux';
import { moverCuadro } from './gameSlice';

export default function Square({fila, columna, estaVacio}) {
    const dispatch = useDispatch();
    //Evaluamos la clase según el booleano estaVacio
    const claseCss = estaVacio ? "cuadro empty" : "cuadro";

    const handleClick = () => {
    // Si no está vacío, intentamos moverlo
    if (!estaVacio) {
        dispatch(moverCuadro({ fila, columna }));
        }
    };

return (
    <div 
      className={claseCss} 
      style={{ gridArea: `${fila} / ${columna}` }}
      onClick={handleClick}
    ></div>
  );
    
}