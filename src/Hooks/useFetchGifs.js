import { useEffect, useState } from "react"
import { getGifs } from "../Helpers/GetGifs";


export const useFetchGifs = (categoria) => {
  
    const [state, setstate] = useState({
        data: [],
        loading: true,
    });

    useEffect( () => {

        getGifs( categoria )
                .then( imgs => {

                        setstate({
                            data: imgs,
                            loading: false
                        });

                });

    }, [categoria]);

    return state;
}
