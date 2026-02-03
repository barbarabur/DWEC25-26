import { useState } from 'react';

export function Contador() {
  const [cuenta, setCuenta] = useState(0);

  return (
    <div style={{ border: '2px solid red', padding: '20px' }}>
      <h2>Contador: {cuenta}</h2>
      <button onClick={() => setCuenta(cuenta + 1)}>Sumar</button>
    </div>
  );
}