import { useState } from 'react'
import './App.css'
import ListaNumeros from './ListaNumeros'

function App() {

 /* const [numFilas, setNumFilas] = useState(4);
  const [numCols, setNumCols] = useState(4);
 */
  return (
  <div className="App">
      <h1>Ejercicio Redux</h1>
      <ListaNumeros />
    </div>
  );
}
 
export default App;


