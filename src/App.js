import React, { Component } from 'react';
import PetList from './components/PetList';
import PetCard from './components/PetCard'
import PetDetails from './components/PetDetails';
import SearchBar from './components/SearchBar';
import NewPetForm from './components/NewPetForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { pets } from './data/pets.json';
// const pets = importData.pets;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      petList: pets,
      currentPet: undefined,
    };
    console.log(pets);
  }

  onSelectPetCallback = (i) => {
    const pet = this.state.petList[i]
    this.setState({
      currentPet: pet
    })
  }

  render () {
    const { currentPet } = this.state;

    let showCurrentPet = null
    if (currentPet) {
      showCurrentPet = (
        <section>
          <PetDetails
            currentPet={currentPet}
          />
        </section>
      )
    }
    return (
      <main className="App">
        <header className="app-header">
          <h1>Ada Pets</h1>
        </header>
        <section className="search-bar-wrapper">
          { /* Wave 4:  Place to add the SearchBar component */}
          <SearchBar />
        </section>
        { /* Wave 1:  Where Pet Details should appear */}
        {showCurrentPet}
        <section className="pet-list-wrapper">
          { /* Wave 1:  Where PetList should appear */}
          <PetList pets={pets} onSelectPet={this.onSelectPetCallback}/>
        </section>
        <section className="new-pet-form-wrapper">
          { /* Wave 3:  Where NewPetForm should appear */}
        </section>
      </main>
    );
  }
}

export default App;
