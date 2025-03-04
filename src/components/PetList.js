import React from 'react';
import PropTypes from 'prop-types';
import PetCard from './PetCard';

import 'bootstrap/dist/css/bootstrap.min.css';

class PetList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  static propTypes = {
    pets: PropTypes.array.isRequired,
    onSelectPet: PropTypes.func,
  }

  selectPet = (i) => {
    this.props.onSelectPet(i)
  }

  removePet = (i) => {
    this.props.onRemovePet(i)
  }

  render() {
    const pets = this.props.pets.map((pet, i) => {
      return (
        <PetCard
          key={i}
          id={pet.id}
          name={pet.name}
          species={pet.species}
          about={pet.about}
          location={pet.location}
          selectPetCallback={this.selectPet}
          removePetCallback={this.removePet}
          index={i}
        />
      )
    })

    return (
      <div className="card-group">
        {pets}
      </div>
    )
  }
}

export default PetList;
