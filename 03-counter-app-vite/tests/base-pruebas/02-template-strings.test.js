import { getSaludo } from "../../src/base-pruebas/02-template-strings";

describe('Pruebas en 02-template-strings', () => {
    test('Debe de retornar un "Hola Popa"', () => {
        const name = 'Popa';

        const saludo = getSaludo(name);
        expect(saludo).toBe('Hola ' + name);

    })
})