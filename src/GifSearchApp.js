import React, { useState } from 'react';
import AddCategory from './Components/AddCategory';
import GifGrid from './Components/GifGrid';

const GifSearchApp = () => {
    
    const [categories, setCategories] = useState(['HIMYM']);

    return (
        <>
        <h1>GifSearchApp</h1>
        <AddCategory setCategories={setCategories}/>
        <hr></hr>

        <ul>
            { 
                categories.map( category => 
                    <GifGrid
                        key = {category}
                        category = {category}
                    />
                )
            }
        </ul>
        </>
    )
}

export default GifSearchApp
