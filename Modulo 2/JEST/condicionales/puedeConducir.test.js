const { puedeConducir } = require('./puedeConducir');

describe('puedeConducir', () => {
    test('Happy path: 20 => Si', () => {
        expect(puedeConducir(20)).toBe('Si');
    });

    test('Happy path: 20 => No', () => {
        expect(puedeConducir(20)).toBe('Si');
    });

    test('Sad path: edad invalidad', () => {
        expect(() => puedeConducir(-1)).toThrow('edad invalidad');
        expect(() => puedeConducir('18')).toThrow('edad invalida');
    });
});