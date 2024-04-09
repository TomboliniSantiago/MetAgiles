const StringCalc = require('./stringCalc');

describe('StringCalculator', () => {
    describe('sumar', () => {

        it('debería devolver 0 para una cadena vacía', () => {
            expect(StringCalc.sumar('')).toBe(0);
        });

        it('debería devolver el mismo numero para una cadena de un solo numero', () => {
            expect(StringCalc.sumar('1')).toBe(1);
        });

        it('debería sumar dos números separados por coma', () => {
            expect(StringCalc.sumar('1,2')).toBe(3);
            expect(StringCalc.sumar('4,2')).toBe(6);
        });

        it('debería sumar múltiples números separados por coma', () => {
            expect(StringCalc.sumar('3,8,7')).toBe(18);
        });

        it('deberia sumar multiples numeros, y admitir caracteres de barra invertida', () =>{
            expect(StringCalc.sumar('3,4\n4,6')).toBe(17);
        });


    });
})