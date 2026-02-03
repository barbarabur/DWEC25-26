import { Gradient } from './components/Gradient';
import './App.css';  
import Picker from './components/Picker';
import { useState } from "react";


function App() {
   const [hue, setHue] = useState(100);
    const [saturation, setSaturation] = useState(5);
    const [number, setNumber] = useState(50);

  return (
    <div className="main-app">
      <Picker
      hue={hue} 
      setHue={setHue} 
      saturation={saturation} 
      setSaturation={setSaturation}
      number={number}
      setNumber={setNumber}
    />
      <h1>Gradient</h1>
      <Gradient 
      hue={hue} 
      saturation={saturation} 
      number={number}/>
    </div>
  );
}

export default App;