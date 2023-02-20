import PropTypes from 'prop-types';

import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';



export const GiftGrid = ({ category }) => {
    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading
                    ? 'Cargando...'
                    : <ul className='card-grid'>
                        {
                            images.map((img) => (
                                <GifItem key={img.id} {...img} />
                            ))
                        }
                    </ul>
            }
        </>
    )
}

GiftGrid.prototype = {
    category: PropTypes.string.isRequired
}