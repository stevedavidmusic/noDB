// CRUD controller 

let deck = [];
let deckName = "Your Deckname Here"; 

module.exports = {
    
    create: (req, res) => {
       // desconstructing card from req.body
       // .send can also be .JSON
       const {card} = req.body
       deck.push(card)
       res.status(200).send(deck)
    },  

    read: (req, res) => {
       // sets default deckname using variable up top
     res.status(200).send(deckName)

    },

    update: (req, res) => {
        // updates the deckName up top to the deckName variable of req.body
        deckName = req.body.deckName
        res.status(200).send(deckName)
    },

    delete: (req, res) => {
        // deconstruct the card id from the request parameters
        let {id} = req.params; 
        // defining index for the card we want to splice
        let index = deck.findIndex((card) => card.id === id);
        // finds the targeted index and removes the 1 value, returns modified array
        deck.splice(index, 1)

    res.status(200).send(deck)

    },
}

