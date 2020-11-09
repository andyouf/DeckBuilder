import React from 'react';

const DeckList = ({
    deck,
    addCardToDeck,
    removeCardFromDeck
}) => {
    let cardCound = deck.reduce((cardCount, card) => {
        return cardCount + card.count
    }, 0);

    return (
        <div id="deck">
            <h3>Your deck so far: ({cardCound} cards)</h3>
            <div className="DeckList">
                {deck.map(({ id, name, count }) => (
                    <p key={ id }>
                        <span>
                            ({ count }x) { name }
                        </span><br /> 
                        <button 
                            className="deck"
                            onClick={() => addCardToDeck({ id, name })}> 
                            + 
                        </button>
                        <button 
                            className="deck"
                            onClick={() => removeCardFromDeck({ id })}>
                            - 
                        </button>
                    </p>
                ))}
            </div>
        </div>
    )
}

export default DeckList;