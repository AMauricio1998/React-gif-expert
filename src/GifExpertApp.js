//RAFC
import React, { useState } from 'react'
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

export const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['Dragon ball']);

    // const handleAdd = () => {
    //     […]. El operador de propagación(spread) se puede usar para tomar una matriz(array) 
    //     existente y agregarle otro elemento mientras se conserva la matriz(array) original.
    //     Obtenemos una las categorias y agragamos una nueva
    //     setcategorias(['Naruto', ...categorias]);
    //     setcategorias( catego => [...catego, 'Naruto']);
    // };

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategorias = { setCategorias }/>
            <hr/>

            <ol>
                {
                    categorias.map( categoria => (
                      <GifGrid 
                        key = { categoria }
                        categoria = { categoria }
                      />
                    ))
                }
            </ol>
        </>
    )
}
