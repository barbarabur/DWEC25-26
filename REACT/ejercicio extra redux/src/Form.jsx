import React from 'react';

const COLORS = [
    { name: "Verde", value: "#008000" },
    { name: "Azul", value: "#0000FF" },
    { name: "Rojo", value: "#FF0000" },
    { name: "Turquesa", value: "#008080" },
    { name: "Púrpura", value: "#800080" },
];
const MIN_VAL = 1;
const MAX_TOTAL_WIDTH = 888;
const GAP = 5;

function Form({size, setSize, number, setNumber, color, setColor}) {

    // LÓGICA DE RESTRICCIÓN: 
    // Ancho total = (size * number) + (GAP * (number - 1))
    // Despejamos para obtener el máximo permitido dinámicamente:
    
    // Máximo tamaño posible dado el número actual de divs
    const dynamicMaxSize = Math.floor((MAX_TOTAL_WIDTH - (GAP * (number - 1))) / number);
    
    // Máximo número de divs dado el tamaño actual de cada uno
    const dynamicMaxNumber = Math.floor((MAX_TOTAL_WIDTH + GAP) / (size + GAP));

    
    return (
    <div className="form-container" style={{ padding: '20px', border: '1px solid #ccc' }}>        
        <div className="form-inline-row">
            <div className="control">
                <label>Size: <strong>{size}</strong>px  </label>
                <input 
                type="range"
                min={MIN_VAL}
                max={dynamicMaxSize}
                value={size}
                onChange={(e) => setSize(Number(e.target.value))} />
            </div>
            <div className="control">
                <label>Number: <strong>{number}</strong> </label>
                <input 
                type="range"
                min={MIN_VAL}
                max={dynamicMaxNumber}
                value={number}
                onChange={(e) => setNumber(Number(e.target.value))} />
            </div>
            <div className="control">
                <label>Color: </label>
                <select value={color} onChange={(e) => setColor(e.target.value)}>
                {COLORS.map((c) => (
                    <option key={c.value} value={c.value}>
                    {c.name}
                    </option>
                ))}
                </select>
            </div>
            <button className="add-button">Añadir Fila</button>
        </div>
        <div className="info-text">
        Ancho total: {(size * number) + (GAP * (number - 1))}px / {MAX_TOTAL_WIDTH}px
        </div>
    </div>
  );
}

export default Form