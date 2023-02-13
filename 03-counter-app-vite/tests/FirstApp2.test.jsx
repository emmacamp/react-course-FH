import { render, screen } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en <FirstApp2 />', () => {
    const title = 'Hola Pepe'
    const subTitle = 'Im subtitle'


    test('Debe de hacer match con el snapshot', () => {

        const { container } = render(<FirstApp title={title} />)
        expect(container).toMatchSnapshot()

    })

    test('Debe mostrar el mensaje "Hola Pepe"', () => {

        render(<FirstApp title={title} />)
        expect(screen.getByText(title)).toBeTruthy()

        // screen.debug()
    })

    test('Debe mostrar el titulo en un h1', () => {

        render(<FirstApp title={title} />);
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toBeTruthy();

    })

    test('Debe mostrar un subtitulo enviado por props', () => {

        render(
            <FirstApp
                title={title}
                subTitle={subTitle}
            />);

        expect(screen.getAllByText(subTitle)).toBeTruthy();
    })

})