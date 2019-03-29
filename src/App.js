import React, { Component } from 'react';
import CardSearch from './Components/CardSearch';
import './App.css';
import DeckDisplay from './Components/DeckDisplay';
import DeckName from './Components/DeckName';
import axios from 'axios';
import Banner from './Components/Banner';
import Mewtwo from './Components/Mewtwo';
import MewtwoReverse from './Components/MewtwoReverse';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      deck: [], 
    }
    this.addCard = this.addCard.bind(this);
    this.removeCard = this.removeCard.bind(this);
  }

  addCard(card){
    const cardsBaseUrl = "http://localhost:4001/api/cards"
    let body = { card: card }
    console.log("this is the card", card)
    if (card !== ""){
    axios.post(cardsBaseUrl, body).then(
        results => {
          this.setState({
            deck: results.data
          })
        }
      )
    } else {
      this.setState({ error: "Please search for a card." })
    }
  }

  removeCard(name){
    const cardsBaseUrl = `http://localhost:4001/api/cards/${name}`
    axios.delete(cardsBaseUrl).then(
      results => {
        this.setState({
          deck: results.data
        })
      }
    )
  }

  render() {
    return (
      <div>
        <a><header>ALL YOUR BASE ARE BELONG TO US!</header></a>
      <Banner/>
        {/* passing addCard through props to card search*/}
        <div><h1>Search for a Card</h1></div>
        <CardSearch add={this.addCard}/>
        <DeckName/>
        <DeckDisplay remove={this.removeCard} deck={this.state.deck}/>
        <Banner/>
        <div>
        <MewtwoReverse/>
        <Mewtwo/>
        </div>
      </div>
    );
  }
}

export default App;
