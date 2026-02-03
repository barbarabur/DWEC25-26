const asyncRequest = require('./asyncRequest');
const cutriFetch = require('./cutriFetch');

asyncRequest("resource1", function(res1) {
    console.log("Recurso1 recibido: ", res1);

    asyncRequest("resource2", function(res2) {
        console.log("Recurso2 recibido: ", res2);

        asyncRequest("resource3", function(res3) {
            console.log("recurso3 recibido: ", res3);

            console.log("¡Completado!");
        })
    })
})

//--------Con promesas---------//

async function secuencial() {
    const r1 = await cutriFetch("resource1");
    console.log(r1);

    const r2 = await cutriFetch("resource2");
    console.log(r2);

    const r3 = await cutriFetch("resource3");
    console.log(r3);

    console.log("¡Completado!");
}

secuencial();

