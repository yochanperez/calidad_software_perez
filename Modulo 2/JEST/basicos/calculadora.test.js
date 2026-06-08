const { sumar, restar, multiplicar, dividir } = require('./calculadora');

describe('Pruebas unitarias para operaciones matemáticas', () => {
    
    describe('Función sumar', () => {
        test('Debería sumar dos números positivos correctamente', () => {
            expect(sumar(2, 3)).toBe(5);
        });

        test('Debería manejar números negativos', () => {
            expect(sumar(-1, -5)).toBe(-6);
        });
    });

    describe('Función restar', () => {
        test('Debería restar dos números correctamente', () => {
            expect(restar(10, 4)).toBe(6);
        });

        test('Debería dar un resultado negativo si el sustraendo es mayor', () => {
            expect(restar(3, 5)).toBe(-2);
        });
    });

    describe('Función multiplicar', () => {
        test('Debería multiplicar dos números correctamente', () => {
            expect(multiplicar(4, 5)).toBe(20);
        });

        test('Debería dar cero si se multiplica por cero', () => {
            expect(multiplicar(7, 0)).toBe(0);
        });
    });

    // Grupo de pruebas para la división
    describe('Función dividir', () => {
        test('Debería dividir dos números correctamente', () => {
            expect(dividir(10, 2)).toBe(5);
        });

        test('Debería permitir un resultado decimal', () => {
            expect(dividir(5, 2)).toBe(2.5);
        });

        test('Debería lanzar un error al intentar dividir por cero', () => {
            expect(() => dividir(10, 0)).toThrow("No se puede dividir por cero");
        });
    });

});