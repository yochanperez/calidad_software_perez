function sumarTresArreglos(arr1, arr2, arr3) {
    let todosLosNumeros = [...arr1, ...arr2, ...arr3];    
    let total = 0;
    for (let i = 0; i < todosLosNumeros.length; i++) {
        total += todosLosNumeros[i];
    }
    
    return total;
}

module.exports = { sumarTresArreglos };