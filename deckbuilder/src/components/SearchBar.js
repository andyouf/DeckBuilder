import React, { useState } from 'react';
import { fetchCards } from '../api';

const SearchBar = ({setResults, setLoading}) => {
    const [name, setName] = useState('');
    const [text, setText] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleTextChange = (e) => {
        setText(e.target.value);
    }

    const handleSumit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const cards = await fetchCards({
            name,
            text
        })

        setResults(cards);
        setLoading(false);
    }
    return (
        <div id="search">
            <h3>Look up cards here...</h3>
            <form onSubmit={ handleSumit }>
                <input 
                    type="text" 
                    placeholder="card name" 
                    value={ name }
                    onChange={ handleNameChange } />
                <input 
                    type="text" 
                    placeholder="card text" 
                    value={ text }
                    onChange={ handleTextChange } />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchBar;