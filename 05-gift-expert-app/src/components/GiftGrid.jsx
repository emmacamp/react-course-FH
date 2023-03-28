import PropTypes from 'prop-types';

import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';



export const GiftGrid = ({ category }) => {
    const { images, isLoading } = useFetchGifs(category);

    return (
        <div className='d-flex '>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }
            <ul className='card-grid bg-danger'>
                {
                    images.length > 0 ?
                        images.map((img) => (
                            <GifItem key={img.id} {...img} />
                        ))
                        : <p>No se encontraron gifts :(</p>
                }
            </ul>

        </div>
    )
}

GiftGrid.prototype = {
    category: PropTypes.string.isRequired
}


