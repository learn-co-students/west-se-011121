import React from 'react'
import { store } from '../App'

export default function Counter(props) {

    const increment = () => {
        store.dispatch({type: 'INCREMENT'})
    }
    const decrement = () => {
        store.dispatch({type: 'DECREMENT'})
    }
    const addThree = () => {
        store.dispatch({type: 'ADD_THREE', payload: 3})
    }
    const subtractFive = () => {
        store.dispatch({type: 'SUBTRACT_FIVE'})
    }

    return (
        <div className="Counter">
        <h1>{store.getState().count}</h1>
        <button onClick={decrement}> - </button>
        <button onClick={increment}> + </button>
        <button onClick={addThree}> +3 </button>
        <button onClick={subtractFive}> -5 </button>
      </div>
    )
}
