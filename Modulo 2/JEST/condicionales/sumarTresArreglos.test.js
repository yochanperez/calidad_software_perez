const { sumarTresArreglos } = require('./sumarTresArreglos'); 

describe('Suma de 3 arreglos', ()=>{
    test('Happy path: suma todos los números',()=>{
        expect(sumarTresArreglos([1, 2], [3, 4], [5, 6])).toBe(21);
    })
    test('Happy path: funciona con vacíos',()=>{
        expect(sumarTresArreglos([], [5], [])).toBe(5);
    })
})