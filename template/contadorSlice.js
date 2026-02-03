import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import accionAsincrona from './accion_asincrona'

const initialState = {
  valor: 1,
  incremento: 2,
  cargando: false,
  error: null
}

export const dividirAsincrono = createAsyncThunk(
  'dividirAsincrono',
  async (param) => {
    const res = await accionAsincrona(param, true)
    console.log('dividirAsincrono', res)
    return res
  }
)


export const contadorSlice = createSlice({
  name: 'contador',
  initialState,
  reducers: {

    incrementar(state, action) {
      const incremento = action.payload
      state.valor += incremento
    },

    decrementar(state, action) {
      const incremento = action.payload
      if(state.valor - incremento < 0) return
      state.valor -= incremento
    },

    cambiarIncremento(state, action) {
      state.incremento = Number(action.payload)
    },


    multiplicarPending(state, _action){
      console.log('Pending')
      state.cargando = true
      state.error = null
    },
    multiplicarResolved(state, action){
      console.log('Resolved')
      state.cargando = false
      state.valor *= action.payload
    },
    multiplicarRejected(state, action){
      console.log('Rejected')
      state.cargando = false
      state.error = action.payload
    },


  },
  extraReducers(builder) {
    builder
    .addCase(dividirAsincrono.pending, (state, _action) => {
      state.cargando = true
      state.error = null
    })
    .addCase(dividirAsincrono.fulfilled, (state, action) => {
      state.cargando = false
      state.valor /= action.payload
    })
    .addCase(dividirAsincrono.rejected, (state, action) => {
      state.cargando = false
      state.error = action.error.message
    })
  }
})

export const {
  incrementar,
  decrementar,
  cambiarIncremento,

  multiplicarPending,
  multiplicarResolved,
  multiplicarRejected
} = contadorSlice.actions

export const selectValor = state => state.contador.valor
export const selectIncremento = state => state.contador.incremento
export const selectCargando = state => state.contador.cargando
export const selectError = state => state.contador.error

export default contadorSlice.reducer
