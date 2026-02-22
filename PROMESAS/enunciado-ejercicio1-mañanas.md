# Ejercicio 1

Se te proporcionan dos funciones simuladas (en el módulo `devicelib.js`):

```javascript
async function obtenerConfiguracion(deviceId)
async function obtenerRegistros(nombre)
```

Ambas devuelven promesas que resuelven después de un retardo.

### Apartado 1

Escribe una función `procesarDispositivo(deviceId)` que llame a `obtenerConfiguracion` de ese dispositivo y, una vez obtenida la configuración, llame a `obtenerRegistros` con el nombre del dispositivo. Finalmente, debe retornar un objeto que combine ambos resultados.

Estructura del objeto a devolver:

```javascript
{
  deviceId: 10,
  nombre: "Sensor A",
  tipo: "Temperatura",
  estado: "Activo",
  registros: [
    { timestamp: "2024-01-01T12:00:00Z", nivel: "Info", mensaje: "Inicio correcto" },
    { timestamp: "2024-01-01T12:05:00Z", nivel: "Warning", mensaje: "Temperatura alta" }
  ]
}
```

### Apartado 2

Escribe una función `procesarDispositivos(deviceIds)` que reciba un array de IDs de dispositivos y devuelva un array con la información de cada dispositivo.

