//Coleccion de gifs
import React from 'react'
import { useFetchGifs } from '../Hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({categoria}) => {

    const {data:imagenes, loading} = useFetchGifs(categoria);


    return (
        <>
            <h3 className="animate__animated animate__jello">{ categoria }</h3>
            { loading && <p className="animate__animated animate__jello">Loading...</p> }
            
            <div className="cardGrid ">
                     {
                        imagenes.map( img => (
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
