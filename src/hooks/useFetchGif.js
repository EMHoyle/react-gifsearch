import { useState, useEffect } from "react";
import { getGif } from '../helpers/getGif';

const useFetchGif = (category) => {
  
    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    useEffect(() => {
        
        getGif(category)
            .then(img => {
                setTimeout(() => {
                    setState({
                        data: img,
                        loading: false
                    });
                }, 500);
            })
    }, [category])

    return state;
}

export default useFetchGif
