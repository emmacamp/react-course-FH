import { render, screen, fireEvent } from "@testing-library/react"
import GifExpertApp from "../../src/GifExpertApp"



describe('Pruebas en <GiftExpertApp />', () => {

    test('se debe hacer el snapshot', () => {
        const { container } = render(<GifExpertApp />)
        expect(container).toMatchSnapshot()

    })

    test('Debe mostrar la imagen con el URL y el ALT indicado ', () => {
        const url = 'http://perros.com/macho/doberman'
        const title = 'Home image'

        render(<GifExpertApp />)
        // screen.debug()

        const { src, alt } = screen.getByRole('img')
        expect(src).toBe(url)
        expect(alt).toBe(title)

    })

    test('debe haber un input y debe estar vacio', () => {
        render(<GifExpertApp />)
        screen.debug()

        const input = screen.getByRole('textbox')

        expect(input).toBeDefined()
        expect(input.value).toBe('')

    })
    test('onAddCategory debe tener una categoria', () => {
        render(<GifExpertApp />)

        const input = screen.getByRole('textbox')
        fireEvent.input(input, { target: { value: "saitama" } })
        expect(input.value).toBe("saitama");

        screen.debug()



    })

})