import React from "react";
import { useSelector } from 'react-redux';
import Square from "./Square";

export default function Grid() {

    // El Grid ahora se sirve solo desde Redux
    const { filas, columnas, empty } = useSelector((state) => state.game);

    const squares = [];

    //Generamos la cuadricual mediante dos bucles
    for (let f= 1; f<=filas; f++) {
        for (let c = 1; c <= columnas; c++) {
            const estaVacio = f === empty.fila && c === empty.columna;

            squares.push(
                <Square
                    key={`${f}-${c}`}
                    fila={f}
                    columna={c}
                    estaVacio={estaVacio}
                />
            );
        }
    }

    // Sobrescribimos las columnas y filas del CSS con las props
    const estiloDinamico = {
        gridTemplateColumns: `repeat(${columnas}, 40px)`,
        gridTemplateRows: `repeat(${filas}, 40px)`
    };
    return (
        <div className="grid-container" style={estiloDinamico}>
        {squares}
        </div>
    );

}