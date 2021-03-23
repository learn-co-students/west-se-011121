import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {

  // Wire up the form to add a missing pokemon
  state = {
    name: '',
    hp: '',
    frontUrl: '',
    backUrl: ''
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  // this is completely optional, you can also just write your inputs in the form below
  renderInputs = () => {
    return ['name', 'hp', 'frontUrl', 'backUrl'].map(inputName => {
      return (
        <Form.Input 
          fluid label={inputName} 
          placeholder={inputName} 
          name={inputName} 
          value={this.state[`${inputName}`]}
          onChange={this.handleChange}
        />
      )
    })
  }

  handleSubmit = e => {
    this.setState({
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    })
    this.props.submitNew(e, this.state)
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        {/* one use of a controlled form could be to let the user preview an image before submitting */}
        {/* <img src={this.state.frontUrl} /> */}
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            {this.renderInputs()}
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
