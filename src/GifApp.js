import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifApp = () => {

    const [categories, setCategories] = useState(['Naruto shippuden'])

    //const handleAdd = () => {
        //setCategories( [...categories, 'Boku no Hero', 'Vinlan Saga'] )
        //setCategories( cats => [...cats, 'Boku no Hero', 'Vinlan Saga'] )
    //}

    return (
        <div>
            <h2>GifApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>

        <ol>
            {
                categories.map( category => (
                    <GifGrid 
                    key={ category }
                    category={ category }
                    />
                    ))
            }
        </ol>


        </div>
    )
}