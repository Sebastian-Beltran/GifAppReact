import React, {useState} from 'react';

import {AddCategory} from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    
    const [categories, setCategories] = useState([]);

    

    return (
        <>
            <h2 className="Title">Gift-ExpertApp</h2>
            <h4 className="Title">Desarrollada por Sebastian Beltran</h4>
            <br/>
            <AddCategory setCategories={ setCategories }/>
            <hr />
            <ol>
                { categories.map(category => {
                    return <GifGrid 
                        key={category}
                        category={category}

                    />

                })
                }

            </ol>
        </>
    )
}
