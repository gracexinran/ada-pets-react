import React, { Component } from 'react';
import PetList from './components/PetList';
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
      filterList: undefined
    };
  }

  selectPet = (i) => {
    const pet = this.state.petList[i]
    this.setState({
      currentPet: pet
    })
  }

  removePet = (i) => {
    let newPetList = this.state.petList
    newPetList.splice(i, 1)
    this.setState({
      petList: newPetList
    })
  }

  addPet = (pet) => {
    let newPetList = this.state.petList
    newPetList.push(pet)
    this.setState({
      petList: newPetList
    })
  }

  filterList = (value) => {
    const petList = this.state.petList
    let newPetList = []
    petList.forEach(pet => {
      if (pet.name.toLowerCase().includes(value) || pet.location.toLowerCase().includes(value) || pet.about.toLowerCase().includes(value)) {
        newPetList.push(pet)
      }
    })
    
    this.setState({
      filterList: newPetList
    })
  }

  render () {
    const { currentPet } = this.state;
    let showCurrentPet = null
    if (currentPet) {
      showCurrentPet = (
        <section className='pet-details'>
          <PetDetails
            currentPet={currentPet}
          />
        </section>
      )
    }

    let petList = this.state.petList
    if (this.state.filterList) {
      petList = this.state.filterList
    }

    let newPetId = this.state.petList[this.state.petList.length - 1].id + 1

    return (
      <main className="App">
        <header className="app-header">
          <h1>Ada Pets</h1>
        </header>

        <section className="search-bar-wrapper">
          { /* Wave 4:  Place to add the SearchBar component */}
          <SearchBar filterListCallback={this.filterList}/>
        </section>

        { /* Wave 1:  Where Pet Details should appear */}
        {showCurrentPet}

        <section className="pet-list-wrapper">
          { /* Wave 1:  Where PetList should appear */}
          <PetList
            pets={petList}
            onSelectPet={this.selectPet}
            onRemovePet={this.removePet}
          />
        </section>

        <section className="new-pet-form-wrapper">
          { /* Wave 3:  Where NewPetForm should appear */}
          <NewPetForm newPetId={newPetId} addPetCallback={this.addPet}/>
        </section>
      </main>
    );
  }
}

export default App;
