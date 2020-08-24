import React from 'react'
import useFetchGif from '../hooks/useFetchGif';
import GifGridItems from './GifGridItems';

const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGif(category);

    return (
        <>
        <h4>{category}</h4>
        { loading && <p className='animate__animated animate__flash'>Loading...</p>}

        <div className="card-grid">
                {
                    images.map( img => {
                        return (
                            <GifGridItems 
                                key = {img.id}
                                {...img}
                            />
                        )
                    })
                }
        </div>
        </>
    )
}

export default GifGrid;
