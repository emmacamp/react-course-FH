import { getHeroeById, getHeroeByOwner } from "../../src/base-pruebas/08-imp-exp"
import heroes from "../../src/data/heroes"


describe('Pruebas en 08-imp-exp', () => {
    test('getHeroeById debe retornar un heroe por ID', () => {

        const getHeroeByIdTest = getHeroeById(2)

        expect(getHeroeByIdTest).toEqual({
            id: 2,
            name: 'Spiderman',
            owner: 'Marvel'
        })
    })
    test('getHeroeById retorna un arreglo con los heroes de DC', () => {
        const owner = 'DC'
        const pack = getHeroeByOwner(owner)
        expect(pack).toEqual(heroes.filter(h => h.owner === 'DC'))
        expect(pack.length).toEqual(3)
    })

})