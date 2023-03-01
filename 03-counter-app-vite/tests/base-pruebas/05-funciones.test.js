import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas de 05-funciones', () => {

    test('getUser debe retornar un objeto', () => {

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const User = getUser();

        expect(User).toEqual(testUser);

    });

    test('getUsuerio debe retornar un objeto ', () => {
        
        const nombre = 'Henry';
        

        const user = getUsuarioActivo( nombre );

        expect( user ).toStrictEqual({
            uid: 'ABC567',
            username: nombre
        });
    })
    
  
});
