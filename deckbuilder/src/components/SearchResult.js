import React from 'react';
import Card from './Card';

const SearchResult = ({results, addCardToDeck, removeCardFromDeck}) => {
    return (
        <div id="result">
            <h3>Here's what we found ({results.length} results)</h3>
            <div className="cardlist">
                {
                    results && 
                    results.map(result => (
                        <Card  
                            key={result.id} 
                            addCardToDeck={addCardToDeck}
                            removeCardFromDeck={removeCardFromDeck}
                            {...result}/>
                    ))
                }
            </div>
        </div>
    )
}

export default SearchResult;