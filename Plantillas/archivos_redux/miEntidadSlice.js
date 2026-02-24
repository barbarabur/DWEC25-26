import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lista: [], // Tus datos (números, tareas, etc.)
  busqueda: "",
  cargando: false
};

export const miEntidadSlice = createSlice({
  name: "entidad", // Nombre interno del slice
  initialState,
  reducers: {
    // Acción para guardar datos
    setLista: (state, action) => {
      state.lista = action.payload;
    },
    // Acción para añadir un elemento
    agregarElemento: (state, action) => {
      state.lista.push(action.payload);
    },
    // Acción para limpiar todo
    reset: (state) => {
      return initialState;
    }
  }
});

// Exportamos las acciones para usarlas en los componentes
export const { setLista, agregarElemento, reset } = miEntidadSlice.actions;

// Exportamos el reducer para el store
export default miEntidadSlice.reducer;