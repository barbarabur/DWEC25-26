import {banana, papaya} from "./fruits.js";

async function timedExecution(func) {
    let timeStart = performance.now();
    const result = await func();
    let timeEnd = performance.now();
    
    return {result: result,
            time: (timeEnd-timeStart)

    }
}

/* timedExecution(banana).then(console.log);
 */
/* const info = await timedExecution(banana);
console.log(info); */


async function quickFruits(fruta, num) {
    // 1. Mapeamos el string a la función real
    const funciones = {
        "banana": banana,
        "papaya": papaya
    };
    const funcionAEjecutar = funciones[fruta];

    // 2. Creamos el array de promesas llamando a timedExecution
    const promesas = Array.from({ length: num }, () => timedExecution(funcionAEjecutar));

    // 3. Esperamos a que todas terminen en paralelo
    const resultadosRaw = await Promise.all(promesas);

    // 4. Transformamos el objeto para que coincida con la estructura pedida (fruit en vez de result)
    return resultadosRaw.map(item => ({
        fruit: item.result,
        time: item.time
    }));


}
/* const info = await quickFruits("banana", 4);
console.log(info); */

async function fruitRace() {
    try {
    const carrera = Promise.any([
        quickFruits('banana', 5),
        quickFruits('papaya', 5),
    ]);
    //esperamos a que se resuelva
    return await carrera;
  
    } catch (error) {
        // Si Promise.any lanza error, es porque AMBAS fallaron
        throw "¡Piña!";
    }

}

// Para probarlo:
fruitRace()
    .then(ganador => console.log("La fruta más rápida fue:", ganador))
    .catch(err => console.error(err));