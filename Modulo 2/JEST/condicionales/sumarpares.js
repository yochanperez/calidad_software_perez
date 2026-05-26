function sumarPares(numeros) {
    let total = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            total += numeros[i];
        }
    }
    return total;
}

module.exports = { sumarPares };