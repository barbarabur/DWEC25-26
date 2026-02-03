Slice

El createSlice recibe un objeto con tres propiedades fundamentales:

name: Un string que identifica al slice (útil para las herramientas de desarrollo).

initialState: El estado que definimos arriba.

reducers: Un objeto donde cada función es una "acción" que modifica el estado.

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      // El dato que envías llega en action.payload
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

4. Exportaciones (El paso final)
Un slice debe exportar dos cosas para que el resto de la app funcione:

Las acciones: Para poder usarlas en tus componentes con dispatch.

El reducer: Para conectarlo a la Store principal.
/ Exportamos las acciones generadas automáticamente
export const { addItem, removeItem } = cartSlice.actions;

// Exportamos el reducer para la store
export default cartSlice.reducer;