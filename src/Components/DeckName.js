import React, { Component } from "react";
import axios from "axios";
import './Components.css';

class DeckName extends Component {
    constructor(props){
        super(props)
        this.state = {
            input: "",
            deckName: ""
        }
    }

    // READ.  Loads the default deckname on initial load
componentWillMount(){
    const cardsBaseUrl = "http://localhost:4001/api/cards"
    let deckName = {deckName:this.state.deckName}
    axios.get(cardsBaseUrl).then(
    results =>{
        this.setState({
            deckName: results.data
        })
    })
}

deckName(text){
    this.setState({input: text})
     // to see if it's updating state
     console.log(this.state.input)
}

saveDeckName(){
    const cardsBaseUrl = "http://localhost:4001/api/cards"
    let body = {deckName: this.state.input}
    axios.put(cardsBaseUrl, body).then(
        results => {
            this.setState({
                deckName: results.data
            })
        }
    )
}

    render(){
        return(
            <div className="saveDeckName">
                <input onChange={(e) => this.deckName(e.target.value)} placeHolder="Enter Deck Name" type = "text"></input>
                <a><button onClick={(e) => this.saveDeckName()}>Save Deck Name</button></a>
                <h1>{this.state.deckName}</h1>
            </div>
        )
    }
}

export default DeckName