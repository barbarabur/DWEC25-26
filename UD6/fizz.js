function fizz(n) {
    return new Promise(resolve => {
        const retraso = Math.floor(Math.random() * 100) + 1; // entre 100 y 10000 ms

       setTimeout(() => {
        const contiene3 = n.toString().includes("3");
        const divisible3 = n % 3 === 0;
        resolve (contiene3 || divisible3);
       }, retraso);
    });
}

function imprimir(n) {
    if (n > 300) {
        console.log('?¡Completado!');
        return;
    }

    fizz(n).then(resultado => {
        if (resultado) {
            console.log('Fizz');
        } else {
            console.log(n);
        }
        //llamada recursiva para imprimir el siguiente numero
        imprimir(n + 1);
    });
    
}


imprimir(1);