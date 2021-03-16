import React from 'react'
// import logo from './logo.svg';
import './App.css';
import BookContainer from './Components/BookContainer'

class App extends React.Component {
  render(){
    return (
      <div className="App-header">
        <BookContainer arr={['Mel', 'Pat']} num={3} bool={true}/>
      </div>
    );
  }
}

export default App;
