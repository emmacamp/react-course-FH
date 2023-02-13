import { string } from "prop-types"
import { retornaArr } from "../../src/base-pruebas/07-deses-arr"

describe('Pruebas en 07-deses-arr', () => {

  test('debe retornar un string o un numero', () => {
    const [letters, numbers] = retornaArr()

    expect(letters).toEqual(expect.any(String))
    expect(typeof numbers).toEqual('number')

  })

})