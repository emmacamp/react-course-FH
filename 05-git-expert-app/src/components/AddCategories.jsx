import React from 'react'
import { useState } from 'react'

export const AddCategories = ({ addCategories }) => {
    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target: { value } }) => {
        setInputValue(value);
        // console.log(value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const input = inputValue.trim();
        if (input.length <= 1) return;
        addCategories(input);
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            {/* <h3>AddCategories</h3> */}
            <button type='submit'>Seach</button>
            <input
                type="text"
                placeholder='Buscar Gifts'
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
