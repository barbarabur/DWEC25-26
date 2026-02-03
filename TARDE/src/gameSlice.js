import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filas: 0,
  columnas: 0,
  empty: null,
  jugando: false
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    // Aquí definimos la acción y el reducer al mismo tiempo
    iniciarJuego: (state, action) => {
      const { filas, columnas, empty } = action.payload;
      state.filas = filas;
      state.columnas = columnas;
      state.empty = empty;
      state.jugando = true;
    },
    moverCuadro: (state, action) => {
      // Recibimos la fila y columna del cuadro pulsado
      const { fila, columna } = action.payload;
      const { empty } = state;

      // Calculamos la distancia (Manhattan distance)
      const difFila = Math.abs(fila - empty.fila);
      const difCol = Math.abs(columna - empty.columna);

      // Es adyacente si está en la misma fila y a 1 de dist en col, 
      // o misma columna y a 1 de dist en fila.
      const esAdyacente = (difFila === 1 && difCol === 0) || (difFila === 0 && difCol === 1);

      if (esAdyacente) {
        state.empty = { fila, columna };
      }
    }
  }
});

// Exportamos la acción para usarla en el componente
export const { iniciarJuego, moverCuadro } = gameSlice.actions;

// Exportamos el reducer para configurarlo en el store
export default gameSlice.reducer;