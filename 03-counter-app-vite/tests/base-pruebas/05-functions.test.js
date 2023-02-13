import { getUser, getUserActive } from "../../src/base-pruebas/05-functions";

describe('Prueba en 05-funciones', () => {
  test('getUser debe retornar un objeto', () => {

    const testUser = {
      uid: 'LALELI', username: 'papucho'
    }

    const user = getUser()

    expect(user).toEqual(testUser);
  });

  test('getUserActive debe retornar un objeto', () => {
    const name = 'Aaron'

    const user = getUserActive(name)

    expect(user)
      .toEqual({
        uid: 'AFASDFA',
        username: name
      })

    /*  const nameUser = 'Popa'
    const testUserActive = (name) => ({
      uid: 'AFASDFA',
      username: name
    });
    const user = getUserActive(nameUser)

    expect(testUserActive(nameUser)).toEqual(user) 
    */

  })
});
