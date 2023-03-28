import axios from 'axios';

const ApiRestBase = 'https://localhost:44387/api/';
const ApiUnidadCompra = 'UnidadCompra/';
const typesULR = {
    'byNombreOAcronimo': 'BuscarUnidadCompraByNombreOAcronimo/',
    'byCodigoExterno': 'BuscarUnidadCompraByCodigoExterno/'
};


export const getData = async (type, query) => {
    try {

        const { data } = await axios.get(`${ApiRestBase}${ApiUnidadCompra}${typesULR[type]}${query}`);

        const unidadCompra = data.map((uc) => ({
            nombre: uc.nombre,
            codigoExterno: uc.codigoExterno,
            acronimo: uc.acronimo
        }));

        return unidadCompra;

    } catch (error) {
        console.log(error);
        return null;
    }
};


/* getData(typeURL, search)
    .then(() => {
        res.length === 0
            ? alertWarning("No se encontraron datos")
            : setData(res)
    })
    .catch(() => alertError('Error al consultar los datos'))
    .finally(() => setIsLoading(false));
 */

// Custom Hook

const useFetchUnidades = (type, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getData(type, query)
            .then((res) => {
                res.length === 0
                    ? alertWarning("No se encontraron datos")
                    : setData(res)
            })
            .catch(() => alertError('Error al consultar los datos'))
            .finally(() => setIsLoading(false));
    }, [type, query]);

    return {
        data,
        isLoading
    }
}