import React, { Component } from 'react';

class CardSearch extends Component {
    constructor(props){
        super(props)
        this.state = {
            input: "",
            card: "",
            error: ""
        }
        this.displayCard = this.displayCard.bind(this);
    }

    // updates text field
    updateText(text){
        this.setState({ input: text })
          // to see if it's updating state
          console.log(this.state.input)
      }
    
    searchCard(){
        // if input isn't blank, error message remains blank and then fetches the data
        if(this.state.input !== ""){
            this.setState({error: ""})
            fetch(`https://api.scryfall.com/cards/named?exact=${this.state.input}`)
            .then(response => response.json())
            .then(data => {
                // if 404 (not found), will return below message
                if(data.status ===404){
                    this.setState({ error: "Card not found." })
                } else {
                    this.setState({ card: data })
                }
            })
        } else {
            // if input is empty, will return message below 
            this.setState({ error: "Please enter a card name, fool."})
        }
    }

    displayCard(){
        if(this.state.card !== ""){
            return <img src={this.state.card.image_uris.small}></img>            
        } 
    }

    render(){

        return(
            <div className="CardSearch">
                <input onChange={(e) => this.updateText(e.target.value)} placeHolder="Enter Card Name"></input>
                {/* if no error, this is blank.  if there is an error, it will display*/}
                {this.state.error === "" ? <div></div> : <div>{this.state.error}</div>}
                <a><button onClick={() => this.searchCard()}>Search</button></a>
                <a><button onClick={() => this.props.add(this.state.card)}>Add</button></a>
                <div className="cardContainer">{this.displayCard()}</div>
            </div>
                
        )
    }
}

export default CardSearch