import { useState } from 'react'
import './App.css'
import Form from './Form'

function App() {
  const [size, setSize] = useState(50);   // Un número, no vacío
  const [number, setNumber] = useState(5); // Un número, no vacío
  const [color, setColor] = useState("#008000");
  return (
    <>
      <Form
      size={size}
      setSize={setSize} 
      number={number}
      setNumber={setNumber} 
      color={color}
      setColor={setColor} 
      />
   </>
  )
}

export default App
