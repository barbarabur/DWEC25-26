 Cada vez que declaras una función como `async`, esa función **devuelve una promesa automáticamente**, y cada vez que usas `await`, estás esperando a que una **promesa** se resuelva.


leer datos de un usuario y luego sus pedidos.

### Ejemplo "Limpio" con Async/Await (Lo que parece que no usa promesas)

```javascript
// Simulamos funciones que ya existen y son asíncronas
async function obtenerDatos() {
    try {
        // En lugar de usar .then(), el resultado se asigna directamente a la variable
        const usuario = await pedirUsuarioAlServidor(); 
        
        console.log("Usuario recibido:", usuario.nombre);

        const pedidos = await pedirPedidos(usuario.id);
        
        console.log("Pedidos recibidos:", pedidos.length);
        return pedidos;

    } catch (error) {
        // En lugar de .catch(), usamos el bloque catch tradicional
        console.error("Hubo un fallo en la conexión");
    }
}

```

---

### ¿Por qué decimos que "por debajo" son promesas?

Si intentas ver qué es `obtenerDatos()` sin ejecutarla, verás esto:

```javascript
const resultado = obtenerDatos();
console.log(resultado); // Imprimirá: Promise { <pending> }

```

### Diferencias clave en la escritura:

| Característica | Con Promesas (.then) | Con Async / Await |
| --- | --- | --- |
| **Resultado** | Se recibe en el callback del `.then(res => ...)` | Se asigna a una variable: `const res = await ...` |
| **Errores** | Se manejan en el `.catch(err => ...)` | Se manejan en un bloque `try { ... } catch (err) { ... }` |
| **Lectura** | Se lee de arriba hacia abajo, pero con indentación (pirámide). | Se lee igual que el código síncrono (línea a línea). |

---

### Un ejemplo del mundo real: Fetch API

Así es como se ve el código moderno cuando pides datos a una página web sin escribir la palabra `Promise` ni una sola vez:

```javascript
async function mostrarPosts() {
  // Esperamos a que la petición termine
  const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts');
  
  // Esperamos a que el texto se convierta a JSON
  const datos = await respuesta.json();
  
  console.log(datos[0].title);
}

mostrarPosts();

```

