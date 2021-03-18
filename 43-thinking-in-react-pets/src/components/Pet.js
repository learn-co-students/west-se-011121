import React from 'react'

class Pet extends React.Component {

  
  render() {
    // using destructuring assignment to extract properties from a 'pet' object
    const {id, age, gender, name, type, weight, isAdopted} = this.props.pet
  
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {gender === 'female' ? '♀' : '♂'}
            {name}
          </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          {/* below is a ternary expression to conditionally render different JSX based on the boolean value 'isAdopted'*/}
          {isAdopted ? <button className="ui disabled button">Already adopted</button>: <button onClick={() => this.props.onAdoptPet(id)} className="ui primary button">Adopt pet</button>}
          
          
        </div>
      </div>
    )
  }
}

export default Pet
