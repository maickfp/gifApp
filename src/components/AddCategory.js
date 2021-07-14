import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {
    
    const [categoryValue, setCategoryValue] = useState('');

    const categoryValueHandler = (e) => {
        setCategoryValue(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();

        // Validar categoria
        if(categoryValue.trim().length > 2){
            setCategories( (currentCategories) => {
                return [ categoryValue, ...currentCategories ];
            });
            setCategoryValue('');
        }

    };

    return (
        <form onSubmit={ submitHandler }>
            <input 
                type="text" 
                placeholder="Category" 
                value={ categoryValue } 
                onChange={ categoryValueHandler }
            />
        </form>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};

export default AddCategory;