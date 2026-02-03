function paso1() {
    return new Promise(resolve => {
        setTimeout(() => resolve("valor 1"), 1000);
    });
}

function paso2(valor) {
    return new Promise(resolve => {
        setTimeout(() => resolve(valor + " -> Valor 2"), 1000);
    });
}

function paso3(valor) {
    return new Promise(resolve => {
        setTimeout(() => resolve(valor + " -> Valor 3"), 1000);
    });
}


paso1()
.then(res1 => {
    console.log(res1);
    return paso2(res1); //pasa el resultado al siguiente
})
.then(res2 => {
    console.log(res2);
    return paso3(res2); //sigue encadenando
})
.then(res3 => {
    console.log ("resultado final ", res3);

})
.catch(err=> console.error(err));