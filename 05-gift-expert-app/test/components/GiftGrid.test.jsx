import { render, screen } from "@testing-library/react"
import { GiftGrid } from "../../src/components/GiftGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

jest.mock('../../src/hooks/useFetchGifs')

describe('Pruebas en <GiftGrid />', () => {

    const gifts = [{
        id: 'ABC',
        url: 'https://localhost/saitama.jpg',
        title: 'Saitama'
    }, {
        id: '123',
        url: 'https://localhost/pepe.jpg',
        title: 'Pepe'
    }]

    const category = 'One Punch'


    test('debe mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: gifts,
            isLoading: true
        })

        render(<GiftGrid category={category} />)
        // screen.debug()
        expect(screen.getByText('Cargando...'))
        expect(screen.getByText(category))
    })

    test('debe mostrar items cuando se cargan imagenes useFetchGifs', () => {

        useFetchGifs.mockReturnValue({
            images: gifts,
            isLoading: true
        })

        render(<GiftGrid category={category} />)
        // screen.debug()
        expect(screen.getAllByRole('img').length).toBe(2)
        // expect(screen.getAllByRole('img').length).toBe(gifts.length)
        // useFetchGifs()
    })
})