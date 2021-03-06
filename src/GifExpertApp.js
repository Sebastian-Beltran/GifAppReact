import React, {useState} from 'react';

import {AddCategory} from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
import logo from './logo.svg'

export const GifExpertApp = () => {

    
    const [categories, setCategories] = useState([]);

    

    return (
        <>
            <div className="Header-Title">
                <h2 className="Title">Gif-ExpertApp</h2>
                <img src={logo} className="App-logo" alt="logo"/>
            </div>
            <p>Desarrollada por Sebastian Beltran</p>
            {/* <h3>Desarrollada por Sebastian Beltran</h3> */}
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
