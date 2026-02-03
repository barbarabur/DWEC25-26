import React from "react";

function Filas(props) {
    const listaDeDatos = props.datos;

    return (
        <div className="contenedor-filas">
        {listaDeDatos.map(function(item, index) {
            return (
            <Fila 
                key={index} 
                tamano={item.tamano} 
                numero={item.numero} 
                color={item.color} 
            />
            );
        })}        
        </div>
    )
}gC45lSA5