import { useState } from 'react'
import Form from './components/Form';
import Filas from './components/Filas'

import './App.css'

function App() {

  return (
    <div className="app">
      <h1>Creador de Filas</h1>
      <Form />
      <Filas />
    </div>
  );
}

export default App
