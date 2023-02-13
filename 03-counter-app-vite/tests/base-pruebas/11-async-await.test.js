import { string } from "prop-types"
import { getImage } from "../../src/base-pruebas/11-async-await"

describe('Pruenbas en 11-async', () => {
  test('getImagen debe retornar un URL de la imagen', async () => {
    const url = await getImage()
    console.log(url)

    expect(typeof url).toBe('string')
  })
})