import { render, screen, fireEvent } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"


describe('Pruebas en componete < GifItem />', () => {
    const title = 'Saitama'
    const url = 'https://one-punch.com/saitama.jpg'

    test('Debe de hacer match con el snapshot', () => {

        const { container } = render(<GifItem title={title} url={url} />)
        expect(container).toMatchSnapshot()

    })

    test('Debe mostrar la imagen con el URL y el ALT indicado', () => {
        const url = 'http://perros.com/perro-hembra'
        const title = 'Home image'

        render(<GifItem title={title} url={url} />)
        // screen.debug()
        // expect(screen.getByRole('img').src).toBe(url)
        // expect(screen.getByRole('img').alt).toBe(title)

        const { src, alt } = screen.getByRole('img')
        expect(src).toBe(url)
        expect(alt).toBe(title)
    })

    // test('Debe tener un titulo', () => {

    //     // render(<GifItem title={title} url={url} />)
    //     // expect(screen.getByText(title)).toBeTruthy()

    // })

})

