import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'
import Cage from './Cage';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }, 
      filteredPets: [], /* ADD STATE FOR CHOSEN PETS */
      isCaged: false /* FOR CAGED COMPONENT */
    }
  }

  
  // TODO: SET STATE WITH ONE FETCH
  componentDidMount(){
    const domain = '/api/pets';
    fetch(domain)
    .then(res => res.json())
    .then(pets => this.setState({ pets, filteredPets: pets }));

  }
  

  onChangeType = (e) => {
    this.setState({ filters: { type: e.target.value } });
  };

  // TODO: MODIFY TO CHOOSE THE PET TYPE FROM PETS AND UPDATE FILTERED PETS
  onFindPetsClick = () => {
    const filterType = this.state.filters.type;
    // const endpoint = filterType === 'all' ? domain : `${domain}?type=${filterType}`;
    let filteredPets
    if (filterType === 'all') {
      filteredPets = [...this.state.pets]
    } else {
      filteredPets = this.state.pets.filter(pet => pet.type === filterType)
    }
    this.setState({ filteredPets })
    // fetch(endpoint)
    // .then(res => res.json())
    // .then(pets => this.setState({ pets }));
    
  };

  // TODO: MODIFY TO UPDATE THE FILTERED PET
  onAdoptPet = (id) => {
    // update pet in state to isAdopted: true
    // need to update the same pet in both arrays in state
    this.setState(prevState => {
      return { 
        filteredPets: prevState.filteredPets.map(pet => pet.id === id ? {...pet, isAdopted: true} : pet),
        pets: prevState.pets.map(pet => pet.id === id ? {...pet, isAdopted: true} : pet)
    }
    });
  };

  // HANDLER THAT TOGGLES THE isCaged BOOLEAN IN STATE
  setCaged = () => {
    this.setState({ isCaged: !this.state.isCaged });
  };

  render() {
    return <>
      {/* CONDITIONALLY SHOW CAGED COMPONENT */}
      {/* this.state.isCaged ? <Cage /> : null */}
      {this.state.isCaged && <Cage />}

      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
              <button onClick={this.setCaged} className="ui secondary button cage-btn" >
                  Toggle Cage
              </button>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.filteredPets} onAdoptPet={this.onAdoptPet}  />
            </div>
          </div>
        </div>
      </div>
    </>
  }
}

export default App
