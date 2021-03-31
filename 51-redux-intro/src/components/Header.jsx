import React from 'react'
import logo from "../logo.svg";
import { store } from '../App'




export default function Header() {

    const renderDescription = () => {
        const remainder = store.getState().count % 5;
        const upToNext = 5 - remainder;
        return `The current count is less than ${store.getState().count + upToNext}`;
      };
    
    return (
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        <h3>{renderDescription()}</h3>
      </header>
    )
}
