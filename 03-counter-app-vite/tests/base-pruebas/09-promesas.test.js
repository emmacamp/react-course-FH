import { getHeroByIdAsync } from "../../src/base-pruebas/09-promesas"

describe('Pruebas en 09-promesas', () => {
  test('getHeroByIdAsync debe retornar heroe', (done) => {
    const id = 1

    getHeroByIdAsync(id)
      .then(heroe => {
        expect(heroe).toEqual({
          id: 1,
          name: 'Batman',
          owner: 'DC'
        })
        // ? eL DONE espera a que haya una respuesta y le dice a jest que termino
        done()
        // expect(heroe).toBe(heroe.find(h => h.id === id))
      })
  })

  test('getHeroByIdAsync debe obtener un error si heroe not found', (done) => {
    const id = 100

    getHeroByIdAsync(id)
      // ESTO ESTA DEMAS porque solo evaluaremos el error
      /*       .then(hero => {
              expect(hero).toBeFalsy()
            }) */
      .catch(error => {
        // console.log(error)
        expect(error).toBe('Heroe not found hero with id: ' + id)

        done()
      })
  })

}) 