import { configureStore } from "@reduxjs/toolkit";
import cuadradosReducer from '../features/cuadradosSlice'; //importar el reducer del slice

export const store = configureStore({
  reducer: {
    // Aquí asignamos un nombre a nuestro trozo de estado
    appCuadrados: cuadradosReducer
    // "appCuadrados" es el nombre del estado global
    // "cuadradosReducer" es la lógica que importamos
  }
});

