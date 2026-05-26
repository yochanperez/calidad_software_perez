const { sumarPares } = require('./sumarPares');

describe('Suma de números pares', () => {
    test('Happy path: suma solo los elementos pares', () => {
        expect(sumarPares([1, 2, 3, 4, 5, 6])).toBe(12);
    });

    test('Happy path: si no hay pares devuelve 0', () => {
        expect(sumarPares([1, 3, 5])).toBe(0);
    });
});