import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en <FirstApp />', () => {
    /* 
        test('Debe hacer match con el snapshot', () => {
    
            const title = 'Hola Pepe'
            const { container } = render(<FirstApp title={title} />)
            expect(container).toMatchSnapshot()
        })
     */
    test('Debe mostrar el titulo en un h1', () => {

        const title = 'Hola Pepe'
        const { container, getByText, getByTestId } = render(<FirstApp title={title} />)
        expect(getByText(title)).toBeTruthy()

        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain(title)

        //?  Si existe
        // expect(getByTestId('test-title')).toBeTruthy()
        // Si es identico
        expect(getByTestId('test-title').innerHTML).toBe(title)
    })
})