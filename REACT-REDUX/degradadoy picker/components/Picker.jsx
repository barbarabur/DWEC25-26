import { useState } from "react";

function Picker({hue, setHue, saturation, setSaturation,number, setNumber}) {
   
return (
    <div className="picker-container">
        <h2>Picker</h2>
        <div>
            <div className="Hue">
                <label>Hue: {hue}</label>
                <input 
                type="range"
                min="0"
                max="360"
                value={hue}
                onChange={(e) => setHue(Number(e.target.value))} />
            </div>
            <div className="Saturation">
                <label>Saturation: {saturation}</label>
                <input 
                type="range"
                min="0"
                max="100"
                value={saturation}
                onChange={(e) => setSaturation(Number(e.target.value))} />
            </div>
            <div className="Number">
                <label>Number: {number}</label>
                <input 
                type="range"
                min="5"
                max="100"
                value={number}
                onChange={(e) => setNumber(Number(e.target.value))} />
            </div>
            <div className="Valores"
            style={{ 
                marginTop: '20px', 
                padding: '15px', 
                border: '2px solid black', 
                borderRadius: '8px',
                backgroundColor: '#f9f9f9' 
            }}>
                <strong>Resultados:</strong>
                <p>H: {hue} | S: {saturation} | N: {number}</p>
            </div>
        </div>
    </div>
)
}
export default Picker;