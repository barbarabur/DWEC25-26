import React from 'react';

function Fila(props) {
    const bloques = Array.from({ length:props.numero });
    const estiloBloque = {
    width: tamano,
    height: tamano,
    backgroundColor: color,
    display: 'inline-block',
    margin: '2px'
  };

    return (
        <div className='fila'>
            {bloques.map((_, index) => (
                <div key={index} style={estiloBloque}></div>
            ))}
        </div>
    );

}

export default Fila;