
# Promesas en JavaScript



### 1. Constructor

Para crear una promesa, usas el constructor `new Promise()` y le pasas una función (llamada *executor*) que se ejecuta inmediatamente.

```javascript
const miPromesa = new Promise((resolve, reject) => {
  // Aquí va tu lógica asíncrona (ej. una llamada a una API) setTimeout(()
  
  const exito = true;

  if (exito) {
    resolve("¡Todo salió bien!"); // Cambia el estado a 'fulfilled'
  } else {
    reject("Algo falló...");      // Cambia el estado a 'rejected'
  }
});

```

---

### 2. Los 3 Estados de una Promesa

Una promesa es como un semáforo que solo puede estar en un color a la vez:

1. **`pending` (Pendiente):** Estado inicial. La operación asíncrona aún no ha terminado.
2. **`fulfilled` (Resuelta):** La operación terminó con éxito. Se llamó a `resolve()`.
3. **`rejected` (Rechazada):** La operación falló. Se llamó a `reject()`.

---

### 3. Esquema Visual de Flujo

Imagina que la promesa es un contrato:

* **Creación:** Firmas el contrato (`new Promise`).
* **Proceso:** El trabajador hace su tarea (el código dentro del executor).
* **Resolución:** * Si termina el trabajo, te entrega el producto (`resolve` -> `.then()`).
* Si hay un problema, te da una explicación de por qué no pudo (`reject` -> `.catch()`).



---

### 4. Resumen de Sintaxis (Copy-Paste)

| Componente | Función |
| --- | --- |
| **`new Promise`** | Crea la instancia del objeto. |
| **`executor`** | Función con los argumentos `(resolve, reject)`. |
| **`resolve(valor)`** | Función que llamas si quieres que la promesa tenga éxito. |
| **`reject(error)`** | Función que llamas si quieres que la promesa falle. |

---

### El "Superpoder" de las Promesas: El Encadenamiento

Lo mejor de construir promesas es que puedes encadenarlas para evitar el famoso *Callback Hell*:

```javascript
miPromesa
  .then(valor => {
    console.log(valor);
    return "Siguiente paso"; // Lo que retornas aquí se convierte en una nueva promesa
  })
  .then(siguiente => console.log(siguiente))
  .catch(error => console.error(error))
  .finally(() => console.log("Proceso terminado"));

```

---
A veces no quieres esperar a un proceso, sino devolver una promesa ya terminada. Para ello existen métodos de creación inmediata:

* **`Promise.resolve(value)`**: Crea una promesa que ya nace "cumplida" (resolved) con el valor que le pases. Muy útil para testear o para normalizar datos.
* **`Promise.reject(reason)`**: Crea una promesa que ya nace "rechazada". Útil para forzar un error en un flujo de promesas.

---

## Métodos de Combinación (Estáticos)

### 1. `Promise.race(iterable)`

Se detiene en cuanto la **primera** promesa termina (ya sea éxito o error).

* **Nota:** Si la más rápida falla, la carrera falla globalmente. No es ideal si necesitas esperar a que alguna otra tenga éxito.

### 2. `Promise.any(iterable)`

Espera a la primera promesa que se resuelva con **éxito**.

* **Nota:** Si todas las promesas fallan, lanza un error agregado (`AggregateError`).

### 3. `Promise.all(iterable)`

* **Qué hace:** Espera a que **todas** las promesas se resuelvan con éxito.
* **Si una falla:** Todo el grupo falla inmediatamente (es "todo o nada").
* **Uso:** Cuando necesitas varios datos obligatorios (ej. datos del usuario + sus posts) para poder renderizar una página.

### 4. `Promise.allSettled(iterable)`

* **Qué hace:** Espera a que **todas** terminen, sin importar si fallaron o tuvieron éxito.
* **Resultado:** Devuelve un array de objetos que indican el estado (`status: 'fulfilled'` o `'rejected'`) y el valor o error de cada una.
* **Uso:** Cuando ejecutas tareas independientes y quieres saber cuáles funcionaron y cuáles no (ej. enviar 10 correos y verificar cuáles rebotaron).

---

## Métodos de Instancia (Encadenamiento)

* **`.then(onFulfilled, onRejected)`**: El método más común. Define qué hacer cuando la promesa se resuelve con éxito.
* **`.catch(onRejected)`**: El "paracaídas". Atrapa cualquier error que ocurra en la cadena anterior.
* **`.finally(onFinally)`**: Se ejecuta **siempre** al final, pase lo que pase (éxito o error).

**`.then():`**. Es como pedir comida a domicilio y dejar una nota en la puerta: "Cuando llegues, deja la pizza en la mesa". Tú sigues haciendo otras cosas en casa.

**`.await:`**. Es como estar frente al repartidor esperando a que te dé la caja para poder empezar a cenar.



---

## `Promise.withResolvers()`

Permite extraer el `resolve` y el `reject` fuera del cuerpo de la promesa. Esto evita tener que envolver toda la lógica dentro del constructor.

```javascript
// Estructura de Promise.withResolvers
const { promise, resolve, reject } = Promise.withResolvers();

// Ejemplo de uso: Puedes llamar a resolve() desde cualquier parte del código
setTimeout(() => {
  resolve("¡Listo!");
}, 1000);

promise.then(console.log); // "¡Listo!" después de 1 segundo

```


### Tabla Comparativa de Combinadores de Promesas

| Método | ¿Cuándo se resuelve (Success)? | ¿Cuándo se rechaza (Error)? | Resultado esperado |
| --- | --- | --- | --- |
| **`Promise.all`** | Cuando **todas** tienen éxito. | En cuanto **una sola** falla. | Un array con todos los valores. |
| **`Promise.allSettled`** | Cuando **todas** terminan (sea como sea). | Nunca se rechaza como grupo. | Un array de objetos con `status` y `value/reason`. |
| **`Promise.any`** | En cuanto **la primera** tiene éxito. | Solo si **todas** fallan. | El valor de la primera que funcionó. |
| **`Promise.race`** | En cuanto **la primera** termina (éxito). | Si **la primera** en terminar es un error. | El valor o error de la más rápida. |

---

### Un pequeño "truco" mnemotécnico:

* **All**: "O todos o ninguno".
* **AllSettled**: "Quiero el informe final de todos, pase lo que pase".
* **Any**: "Busco al primer ganador".
* **Race**: "Cronómetro puro: el primero que llegue gana, aunque se caiga".


### Para el flujo:
* **Paralelo**: Usas map o Array.from para crear un array de promesas y luego Promise.all.

* **Secuencial**: Usarías un bucle for...of con un await dentro (esto sería mucho más lento).

