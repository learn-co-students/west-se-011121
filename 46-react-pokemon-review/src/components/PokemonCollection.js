import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  // XXX Create an index displaying pokemon 'cards'
  renderPokemon = () => {
    return this.props.pokemon.map(poke => <PokemonCard poke={poke} key={poke.id}/>)
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.renderPokemon()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
