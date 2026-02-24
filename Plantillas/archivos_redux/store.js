import { configureStore } from "@reduxjs/toolkit";
import entidadReducer from "./miEntidadSlice"; // Importa tu reducer

export const store = configureStore({
  reducer: {
    // MUY IMPORTANTE: Este nombre es el que usarás en useSelector
    // state.datos.lista
    datos: entidadReducer, 
  }
});

export default store; // <--- Asegúrate de tener esta línea
