const asyncRequest = require('./asyncRequest');

//lanzamos las 3 peticiones simultáneamente
let results = {
    resource1: null,
    resource2: null,
    resource3: null,
};
let printed = {
    resource1: false,
    resource2: false,
    resource3: false,
};

function tryPrint() {
    //imprimir resource1 si ya ha llegado
    if(!printed.resource1 &&results.resource1 !== null) {
        console.log(results.resource1);
        printed.resource1 = true;
    }

    //imprimir resource2 si resource1 ya se imprimió
    if(!printed.resource2 && printed.resource1 && results.resource2 !== null) {
        console.log(results.resource2);
        printed.resource2 = true;
    }
    //imprimir resource3 si resource2 se imprimió

    if(!printed.resource3 && printed.resource2 &&results.resource3 !== null) {
        console.log(results.resource3);
    }

    //si los 3 ya están impresos
    if(printed.resource1 && printed.resource2 && printed.resource3) {
        console.log("¡Completado!")
    }
}

asyncRequest("resource1", function(res) {
    results.resource1 = res;
    tryPrint();
});

asyncRequest("resource2", function(res) {
    results.resource2 = res;
    tryPrint();
});

asyncRequest("resource3", function(res) {
    results.resource3 = res;
    tryPrint();
});