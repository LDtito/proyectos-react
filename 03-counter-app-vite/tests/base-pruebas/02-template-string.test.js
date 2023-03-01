import { getSaludo } from "../../src/base-pruebas/02-template-string";


describe('Pruevas en 02-template-string', () => {

    test('getSaludo debe retornar "hola Henry"', () => {

        const name = 'Henry';
        const message = getSaludo(name);

        expect(message).toBe(`Hola ${name}`)

    });
  
});
