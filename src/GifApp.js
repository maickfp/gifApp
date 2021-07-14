import React, { useState } from 'react'

import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifApp = () => {

    // const categories = ['Naruto', 'Seven Deadly Sins', 'Death Note'];
    const [categories, setCategories] = useState(['Seven Deadly Sins']);

    // const handleAdd = () => {
    //     const newCategory = 'Bleach';
    //     // setCategories([...categories, newCategory]);
    //     setCategories( (currentCategories) => {
    //         return [...currentCategories, newCategory];
    //     });
    // };

    return (
        <>
            <h2>Gif App</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />
            {/* <button onClick={handleAdd} >Add Category</button> */}
            {/* {categories} */}
            <h3>Categories:</h3>
            <ol>
            {
                categories.map(category => 
                    // <li key={category}>{category}</li>
                    <GifGrid key={ category } category={ category } />
                )
            }
            </ol>
        </>
    )
};

export default GifApp;
