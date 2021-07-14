import React from 'react';
import PropTypes from 'prop-types';

import GifGridItem from './GifGridItem';
import useFetchGifs from '../hooks/useFetchGifs';

const GifGrid = ({category}) => {

    const {data: images, loading} = useFetchGifs( category );

    return (
        <>
            <h3 className="animate__animated animate__fadeInDown">{ category }</h3>
            { loading && <img className="loading" src="https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=0018cc8bymc5oodxul7t9g4pngus52aokh23hfjg565p499q&rid=giphy.gif&ct=g" alt="Loading" /> }
            { !loading && images.length === 0 && <img className="noData animate__animated animate__zoomIn" src="https://media1.giphy.com/media/ISOckXUybVfQ4/giphy.gif?cid=0018cc8bx3h73gt2v3gtqy6mipd4r3az2ms9lk5se76j8cz2&rid=giphy.gif&ct=g" alt="NoData" /> }
            <div className="card-grid">
                    {
                        images.map( gif => 
                            <GifGridItem key={ gif.id } { ...gif } />
                        )
                    }
            </div>
        </>
    )
};

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
};

export default GifGrid;
