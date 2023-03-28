// import { object } from "prop-types"
import { getGifts } from "../../src/helpers/getGifs"



describe('Pruebas en el componente <getGifs/>', () => {
    test('Debe retornar un Array de 10 elementos', async () => {
        const gifts = await getGifts('valoran')
        // console.log(gifts)
        expect(gifts.length).toBe(10)
        // expect(typeof gifts).toBe(typeof [])
    })

    test('Debe retornar un Array de objetos', async () => {
        const gifts = await getGifts('valoran')
        const type = expect.any(String)

        expect(gifts[0]).toEqual({
            id: type,
            title: type,
            url: gifts[0].url.startsWith('https')
        })
    })
})