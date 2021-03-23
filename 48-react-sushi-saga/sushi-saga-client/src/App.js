import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  // how to render only 4:
  // use a currentIdx in state to track the position,
  // have an array of displayingSushis in state, update it
  state = {
    sushis: [],
    currentIndex: 0,
    money: 100,

  }

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(data => {
        let moddedSushis = data.map(obj => {obj.eaten = false; return obj})
        this.setState({sushis: moddedSushis})
      })
  }

  nextFour = () => {
    // TODO: limit to arr.length
    this.setState({currentIndex: this.state.currentIndex + 4})
  }

  eatASushi = sushi => {
    // change eaten status on the sushi
    // pass arr of eaten sushi to Table
    // add condition to prevent overspending
    if (sushi.price > this.state.money){
      alert("You broke the bank!")
    } else {
      sushi.eaten = true
      // subtract price from money
      this.setState({
        money: this.state.money - sushi.price
      })

    }

  }

  render() {
    const { sushis, currentIndex, money } = this.state
    return (
      <div className="app">
        <SushiContainer   
          sushis={sushis.slice(currentIndex, currentIndex + 4)} 
          nextFour={this.nextFour}
          eatSushi={this.eatASushi}
        />
        <Table money={money} eatenSushis={sushis.filter(soosh => soosh.eaten === true)}/>
      </div>
    );
  }
}

export default App;