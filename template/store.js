import { configureStore } from '@reduxjs/toolkit'
import contador from './contadorSlice'

const store = configureStore({
  reducer: {
    contador
  }
})

export default store
