import React, { useState, useCallback, useEffect } from 'react';
import { fetchCards } from './api';
import {
    SearchBar,
    SearchResult,
    DeckList
} from './components';
import { css } from "@emotion/core";
import { ClipLoader } from "react-spinners";
const override = css`
    position: fixed;
    top: 50%;
    left: 50%;
`;

const App = () => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [deck, setDeck] = useState([])
    
    /**
     * to feed the cards data to the application
     * Its empty array dependency means useEffect hook 
     * is triggered only once. 
     */
    useEffect(async () => {
        const cards = await fetchCards({
            name: '',
            text: ''
        });

        setResults(cards);
        setLoading(false);
    }, []);

    /**
     * 
     * @param {id} id: id of the card to be added to the deck
     * @param {name} name: name of the card to be added to the deck
     */
    const addCardToDeck = ({id, name}) => {
        const nextDeck = [...deck];
        const index = nextDeck.findIndex(card => card.id === id);
        if(index > -1) {
            nextDeck[index].count += 1;
        } else {
            nextDeck.push({
                id,
                name,
                count: 1
            })
        }
        setDeck(nextDeck);
    }

    /**
     * 
     * @param {id} id: id of the card to be removed. 
     */
    const removeCardFromDeck = ({id}) => {
        const nextDeck = [...deck];
        const index = nextDeck.findIndex(card => card.id === id);
        if(index === -1) {
            return;
        } 
        
        if(nextDeck[index].count === 1) {
            nextDeck.splice(index, 1);
        } else {
            nextDeck[index].count -= 1;
        }

        setDeck(nextDeck);
    }

    return (
        <>
            <ClipLoader
                css={override}
                size={50}
                color={"#123abc"}
                loading={loading}
            />
            <div id="app" className={loading? 'opacity' : ''}>
                <SearchBar 
                    setResults={setResults} 
                    setLoading={setLoading} 
                />
                <SearchResult 
                    results={results} 
                    addCardToDeck={addCardToDeck}
                    removeCardFromDeck={removeCardFromDeck}
                />
                <DeckList 
                    deck={deck}
                    addCardToDeck={addCardToDeck}
                    removeCardFromDeck={removeCardFromDeck}
                />
            </div>
        </>
    )
}

export default App;