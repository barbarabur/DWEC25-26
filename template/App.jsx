import { useSelector, useDispatch } from 'react-redux'
import './App.css'

import {
  selectValor,
  selectIncremento,
  selectCargando,

  incrementar,
  decrementar,
  cambiarIncremento,

  multiplicarPending,
  multiplicarResolved,
  multiplicarRejected,

  dividirAsincrono
} from './contadorSlice'

import accionAsincrona from './accion_asincrona'

function App() {

  const valor = useSelector(selectValor)
  const incremento = useSelector(selectIncremento)
  const cargando = useSelector(selectCargando)
  const error = useSelector(state => state.contador.error)

  const dispatch = useDispatch()

  function onIncremento(event){
    dispatch(cambiarIncremento(event.target.value))
  }

  

  return (
    <>
      <h1>Contador: {valor}</h1>
      <br/>
      Incrementar en: &nbsp;
      <input type="text"
        value={incremento}
        onChange={onIncremento}
      />
      <br/><br/>

      <button onClick={() => dispatch(incrementar(incremento))}>
        Incrementar
      </button>
      <button onClick={() => dispatch(decrementar(incremento))}>
        Decrementar
      </button>

      <p/>

      <button onClick={onMultiplicarAsincrono}>
        Multiplicar asíncrono
      </button>
      <button onClick={onDividirAsincrono}>
        Dividir asíncrono
      </button>
      <br/>
      { cargando && <p>Cargando...</p> }
      { error && <h3>Error: {error}</h3> }
    </>
  )
}

export default App
