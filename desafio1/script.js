function zetaDieta(C, P, G) {
    let actualcount = [0, 0, 0, 0];
    const banana = [27, 0, 0, 105];
    const atun = [0, 30, 0, 120]; 
    const aceite = [0, 0, 1, 9];
    const cantdeseada = [C, P, G];

    while (actualcount[0] < cantdeseada[0]) {
        actualcount[0] += banana[0];
        actualcount[3] += banana[3];
    }

    while (actualcount[1] < cantdeseada[1]) {
        actualcount[1] += atun[1];
        actualcount[3] += atun[3];
    }

    while (actualcount[2] < cantdeseada[2]) {
        actualcount[2] += aceite[2];
        actualcount[3] += aceite[3];
    }

    return actualcount[3];
}

console.log("Calorias de Zetadieta Comun " + zetaDieta(88, 90, 50));
console.log("Calorias de Subtarea numero 1 " + zetaDieta(0, 0, 1000))
console.log("Calorias de Subtarea numero 2 " + zetaDieta(0, 0, 247))
console.log("Calorias de Subtarea numero 3 " + zetaDieta(0, 1000, 0))
console.log("Calorias de Subtarea numero 4 " + zetaDieta(0, 247, 0))
console.log("Calorias de Subtarea numero 5 " + zetaDieta(1000, 0, 0))
console.log("Calorias de Subtarea numero 6 " + zetaDieta(247, 0, 0))
console.log("Calorias de Subtarea numero 7 " + zetaDieta(1000, 1000, 1000))
console.log("Calorias de Subtarea numero 8 " + zetaDieta(2314, 696, 100000))