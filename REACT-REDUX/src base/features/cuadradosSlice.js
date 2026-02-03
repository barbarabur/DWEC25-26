// Aquí va la lógica Redux

import { createSlice } from '"reduxjs/toolkit'; //Siempre!!

const initialState = {
    listaFilas: [],
    colorFondo: '#ffffff' //constante con el estado inicial de la app
}
//recibe un objeto con tres propiedades fundamentales:

/* name: Un string que identifica al slice.

initialState: El estado que definimos arriba.

 reducers: Un objeto donde cada funcion es una accion que modifica el estado
 */ 

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

