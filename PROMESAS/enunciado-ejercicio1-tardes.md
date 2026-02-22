# Ejercicio 1

Trabajas en una aplicación que necesita procesar información de varios usuarios simultáneamente. Para cada usuario, debes:
1. Obtener sus datos básicos de un servicio
2. Obtener sus estadísticas de actividad de otro servicio

Se te proporcionan dos funciones que simulan llamadas a APIs con retardos en el módulo `userlib.js`:

```javascript
async function obtenerDatosUsuario(userId)
async function obtenerEstadisticas(userId)
```

En ambos apartados debes intentar obtener los datos de la forma más rápida posible.

### Apartado 1

Crea una función `procesarUsuario(userId)` que:
- **Reciba**: Un ID de usuario
- **Retorne**: Un objeto con los datos completos del usuario, que incluya tanto sus datos básicos como sus estadísticas.

El objeto resultante debe tener esta estructura:
```javascript
{
  userId: number,
  nombre: string,
  email: string,
  fechaRegistro: string,
  estadisticas: {
    posts: number,
    seguidores: number,
    siguiendo: number
  }
}
```

### Apartado 2

Crea una función `procesarUsuarios(userIds)` que:

- **Reciba**: Un array de IDs de usuario (ejemplo: `[1, 2, 3]`)
- **Retorne**: Un array de objetos con la información completa de cada usuario


No hace falta que controles los errores de las llamadas a las APIs en ninguno de los apartados.
