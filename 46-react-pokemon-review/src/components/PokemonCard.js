import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    front: true
  }

  // XXX When clicked, the card should toggle between displaying the front and back pictures
  
  render() {
    // XXX Render each pokemon name, picture, and hp in a card
    const { name, hp, sprites } = this.props.poke
    return (
      <Card>
        <div onClick={()=> this.setState({ front: !this.state.front})}>
          <div className="image">
            {this.state.front ? 
            <img src={sprites.front} alt="oh no!" /> :
            <img src={sprites.back} alt="oh no!" /> 
            }
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
