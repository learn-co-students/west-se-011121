import React, { Component } from "react";
import hogs from "../porkers_data";
import HogsMenu from './HogsMenu'   
import HogDetails from './HogDetails'
import FilterSort from './FilterSort'

class HogsContainer extends Component {

  // using Class field (ES6) to initialize state and bind it to an instance (instead of constructor)
  state = {
    greaseFilter: 'all',
    sortType: 'none',
    chosenHog: null
  }

  // CALLBACK FUNCTIONS: these fns are all passed down to child components so that events on the children can change state here on parent
  chooseHog = (chosenHog) => {
    this.setState({ chosenHog })
  }

  closeHog = () => {
    this.setState({ chosenHog: null })
  }

  selectFilter = (greaseFilter) => {
    this.setState({ greaseFilter })
  }

  selectSort = (sortType) => {
    this.setState({ sortType })
  }

  render() {
    return (
      <div>
        <FilterSort selectFilter={this.selectFilter} selectSort={this.selectSort} />
        {this.state.chosenHog ? <HogDetails hog={this.state.chosenHog} closeHog={this.closeHog} /> : 
        <HogsMenu 
          hogs={hogs} 
          chooseHog={this.chooseHog}
          greaseFilter={this.state.greaseFilter} 
          sortType={this.state.sortType}
        />}
      </div>
    );
  }
}

export default HogsContainer;
