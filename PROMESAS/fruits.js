

/* Crea una función llamada timedExecution() que reciba una función asíncrona como parámetro y devuelva un objeto con la siguiente estructura:
No debes controlar si la función asíncrona lanza un error. Puedes obtener el tiempo actual en milisegundos con performance.now().
¿Cómo llamarías a la función para ver cuánto tardas en ejecutar la función "banana"?
{
  result: "banana 45" // resultado de la función asíncrona,
  time: 12.2323 // tiempo de ejecución
 */
async function timeExecution(asyncFunc) {

    const startTime = performance.now(); //inicio del cronometro

    const result = await asyncFunc(); 
    //ejecucion de la funcion(esperamos a qeu se resuleva)

    const endTime = performance.now(); //fin del cronometro
    return {
        result: result,
        time: endTime - startTime
    };
    
}
//para llamar a la funcion
timedExecution(banana).then(data => {
    console.log(`Resultado: ${data.result}, Tardó: ${data.time}ms`);
});

/* Crea una función llamada quickFruits() que tenga como primer parámetro el nombre de la fruta
(“banana” o “papaya”) y como segundo parámetro un número natural.

La función debe lanzar el número de veces indicado la función correspondiente a la fruta en
paralelo y devolver una promesa que se resuelva con un array de los resultados y del tiempo que
han tardado, utilizando la función anterior (timedExecution). 
*/

async function quickFruits(fruit, number) {

    // 1. Elegimos la función correcta según el string y lo llenamos
    //con llamadas a timeExecution
  const funcToExecute = fruit === 'banana' ? banana : papaya;

  //creamos un array vacio con la longitud number
    
  const promisesArray = Array.from({length: number }, ()=> {
    return timedExecution(funcToExecute);
  });

  //ejecutamos todo en paralelo y esperamos los resultados
  const results = await Promise.all(promisesArray);

  return results;

}

async function fruitRace() {
    //preparamos los competidores
    const raceBanana = quickFruits('banana', 5);
    const racePapaya = quickFruits('papaya', 5);

    try {
        const winner = await Promise.any([raceBanana, racePapaya]);
        return winner;
    } catch (error) {
        throw "piña!";
    }
}




