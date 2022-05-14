import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
//import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {

    //const [images, setImages] = useState([])

    const {data:images, loading} = useFetchGifs( category )
    //console.log(data, loading)

    //useEffect( () => {
        //getGifs(category)
        //.then(setImages)
    //}, [category])

    //getGifs()

    return (
        <>

        <h3 className='animate__animated animate__fadeIn'>{ category }</h3>

        { loading && <p className='animate__animated animate__bounceIn'>loading</p> }

        <div className='card-fire'>

                {
                    images.map( img => (
                     <GifGridItem
                     key={ img.id }
                     { ...img }
                     />   
                    ))
                }
            </div>

        </>
    )
}