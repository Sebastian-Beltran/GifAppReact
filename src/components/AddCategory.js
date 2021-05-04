import React, { useState } from 'react'
import PropTypes from 'prop-types'


export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2){

            setCategories(categories => [inputValue])
            setInputValue('')
        }

    }

    return (
        <form onSubmit={ handleSubmit }>
            {/* <label>Busca tu GIF</label> */}
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
                placeholder="Busca tu GIF!"
            />
            <input type="submit" value="Buscar!"/>
            
        </form>
    )
}
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
