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
        // let moddedSushis = data.map(obj => {
        //   obj.eaten = false
        //   return obj
        // })
        // this.setState({sushis: moddedSushis})
        this.setState({sushis: data})
      })
  }

  nextFour = () => {
    // X TODO: reset currentIndex when end of array is met
    
    this.setState(prevState => {
      let tempIndex;
      if (prevState.currentIndex + 4 >= prevState.sushis.length){
        tempIndex = 0
      } else {
        tempIndex = prevState.currentIndex + 4
      }
      return {currentIndex: tempIndex}
    })
  }
  
  eatASushi = sushi => {
    // TODO: can't eat an eaten sushi
    // change eaten status on the sushi
    // pass arr of eaten sushi to Table
    // add condition to prevent overspending
    if (sushi.eaten === true) {
      alert("You can't eat what's in your belly!")
    } else if (sushi.price > this.state.money) {
      alert("You broke the bank!")
    } else {
      sushi.eaten = true
      // subtract price from money
      this.setState({
        money: this.state.money - sushi.price
      })

    }

  }

  addMoney = e => {
    e.preventDefault()
    console.log('Amount: ', e.target.walletAmt.value)
    const amt = parseInt(e.target.walletAmt.value)
    this.setState({ money: this.state.money + amt})
    e.target.reset()
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
        <Table 
        money={money} 
        eatenSushis={sushis.filter(soosh => soosh.eaten === true)}
        addMoney={this.addMoney} />
      </div>
    );
  }
}

export default App;