import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('pruebas en hook useFetch', () => {
    test('debe regresar el estado inicial', () => {
        const { result } = renderHook(() => useFetchGifs('One Punch'))
        const { images, isLoading } = result.current
        expect(images.length).toBe(0)
        expect(isLoading).toBeTruthy()
    })

    test('debe regresar un arreglo de imagenes y el loading en false', async () => {

        const { result } = renderHook(() => useFetchGifs('One Punch'))

        await waitFor(() => {
            expect(result.current.images.length).toBeGreaterThan(0)
        })


        expect(result.current.images.length).toBeGreaterThan(0)
        expect(result.current.isLoading).toBeFalsy();

    })
})