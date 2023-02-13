describe('Pruebas en <DemoComponent />', () => {
    test('Esta prueba no puede fallar', () => {
        const message = 'Hola Mundo';
        const message2 = message.trim();

        expect(message).toBe(message2);
    })
})