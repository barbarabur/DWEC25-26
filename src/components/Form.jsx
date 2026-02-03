import { useState } from "react";
import { useDispatch } from 'react-redux';
import { agregarFila } from '../features/cuadradosSlice';

function Form() {
    const dispatch = useDispatch();

    //Estados locales apra los imputs
    const [size, setSize] = useState(50);
    const [number, setNumber] = useState(1);
    const [color, setColor] = useState('Red');

    const colores = ["Red", "Blue", "Green", "Yellow", "Purple"];
    const GAP = 5;
    const MAX_WIDTH = 888;

    //cálculos dinámicos

    const maxPossibleSize = Math.floor((MAX_WIDTH - (GAP * (number - 1))) / number);
    const maxPossibleNumber = Math.floor((MAX_WIDTH + GAP) / (size + GAP));

    const handleSubmit = (e) => {
        e.preventDefault();
        //Aqui enviamos la accion a Redux
        // 1. Creamos el objeto con los datos actuales del formulario
        const nuevaFila = {
            tamano: size,
            numero: number,
            color: color
        };

        if (number <= maxPossibleNumber) {

            // 2. Usamos el dispatch para enviar la acción 'agregarFila' con esos datos
            dispatch(agregarFila(nuevaFila));
        }
    };

    return (
        <div className="form">
    <form onSubmit={handleSubmit} className="frm">
        <label>Size: <strong>{size}</strong>        
        <input 
            type="range" 
            value={size} 
            onChange={(e) => setSize(Number(e.target.value))} 
            min={1}
            max={maxPossibleSize} // Aquí usamos tu fórmula 📏
        />
        </label>

        <label>
        Number:  <strong>{number}</strong>    
        <input 
            type="range" 
            value={number} 
            onChange={(e) => setNumber(Number(e.target.value))} 
            min={1}
            max={maxPossibleNumber} // Y aquí también 📏
        />
        </label>

        <label>
        Color:
        <select value={color} onChange={(e) => setColor(e.target.value)}>
            {colores.map(c => (
            <option key={c} value={c}>{c}</option>
            ))}
        </select>
        </label>

        <button type="submit">Añadir Fila</button>
    </form>
    </div>
    )
}
export default Form;

