import React, { Component } from 'react'
import Counter from './components/Counter'
import Header from './components/Header'
import { createStore } from 'redux'


const intialState = { 
    count: 0
 };

const reducer = (oldState=intialState, action) => {
    console.log('action: ', action);
    console.log('oldState: ', oldState);
    // if (action.type === 'INCREMENT') {
    //     return { count: oldState.count + 1}
    // }
    switch (action.type) {
        case 'INCREMENT':
            return { count: oldState.count + 1}
        case 'DECREMENT':
            return { count: oldState.count - 1}
        case 'ADD_THREE':
            return { count: oldState.count + action.payload}
        case 'SUBTRACT_FIVE':
            return { count: oldState.count - 5}  
        default:
            return oldState
    }
    // if (oldState === undefined) {
    //     return {intialState}
    // }
}

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default class App extends Component {


    // increment = () => {
    // this.setState(prevState => ({ count: prevState.count + 1 }));
    // };

    // decrement = () => {
    // this.setState(prevState => ({ count: prevState.count - 1 }));
    // };

    componentDidMount() {
        store.subscribe(() => this.forceUpdate())
    }

    render() {
        return (
        <div className="App">
            <Header  />
            <Counter
            // increment={this.increment}
            // decrement={this.decrement}
            />
        </div>
        );
    }
}
