// Aquí va la lógica REdux

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    listaFilas: [],
    colorFondo: '#ffffff' 
};

console.log("Slice cargado correctamente")

export const cuadradosSlice = createSlice({
    name: 'cuadrados',
    initialState,
    reducers: {
        //Aquí definiremos las acciones
        agregarFila: (state, action) => {
            state.listaFilas.push(action.payload);
        },
        cambiarFondo: (state, action) => {
            state.colorFondo = action.payload;
        }
    }
});

//Exportamos las acciones para usarlas en los componentes
export const { agregarFila, cambiarFondo } = cuadradosSlice.actions;

//Exportamos el reducer para el resto
export default cuadradosSlice.reducer;

