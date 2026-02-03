import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { iniciarJuego } from './gameSlice'; // Importamos solo la acción
import { getRandomEmpty } from './utils';

export default function InitForm() {
    const [filas, setFilas] = useState(4);
    const [columnas, setColumnas] = useState(5);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const { row, col } = getRandomEmpty(filas, columnas);

        //enviamos el mensaje al Store
        dispatch(iniciarJuego({
            filas:filas,
            columnas:columnas, 
            empty: {fila:row +1, columna:col + 1 }
        }));
    };

    return (
        <form className='init-form' onSubmit={handleSubmit}>
            <div className='slider-group'>
                <label>Filas: <span className="slider-value">{filas}</span></label>
                <input type="range" min="3" max="8" value={filas} onChange={(e) => setFilas(Number(e.target.value))} />
            </div>
            <div className="slider-group">
                <label>Columnas: <span className="slider-value">{columnas}</span></label>
                <input type="range" min="3" max="8" value={columnas} onChange={(e) => setColumnas(Number(e.target.value))} />
            </div>
            <button type="submit" className="init-btn">Iniciar</button>
        </form>
    )
}
