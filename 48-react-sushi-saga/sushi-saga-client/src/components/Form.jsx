import React from 'react'

export default function Form(props) {
    return (
        <form onSubmit={props.addMoney}> 
            <label>ADD MONEY (please enter amount)</label>
            <input name="walletAmt" type="number"></input>
            <button type='submit'>Add $$$</button>
        </form>
    )
}
