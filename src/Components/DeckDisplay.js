import React, { Component } from "react";

const DeckDisplay = (props) => {
    return(
        <div className="deckDisplay">
            {props.deck.map(card => {
                return(
                    // mapping over every object in the deck array and creates an image wrapped in a div 
                    <div key={card.name} onClick={(e) => {props.remove(e.target.alt)} }>
                        <img src={card.image_uris.small} alt={card.id}></img>
                    </div>
                )
            })}
        </div>
    )
}

export default DeckDisplay;
