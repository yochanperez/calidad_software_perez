const { estadoTemperatura } = require('./estadoTemperatura');

describe('estadoTemperatura', () => {
    test('Happy path: 15 => Templado', () => {
        expect(estadoTemperatura(15)).toBe('Templado');
    });

    test('Happy path: 30 => Calor', () => {
        expect(estadoTemperatura(31)).toBe('Calor');
    });
    
    test('Happy path: 15 <  Frio', () => {
        expect(estadoTemperatura(14)).toBe('Frio');
    });

    test('Sad path: nota invalidad', () => {
        expect(() => estadoTemperatura('18')).toThrow('temperatura invalida');
    });
});