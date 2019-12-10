import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './NewPetForm.css'

class NewPetForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      species: '',
      location: '',
      images: '',
      about: ''
    };
  }
  
  onNameChange = (event) => {
    const name = event.target.value
    this.setState({
      name,
    })
  }

  onSpeciesChange = (event) => {
    const species = event.target.value
    this.setState({
      species,
    })
  }

  onLocationChange = (event) => {
    const location = event.target.value
    this.setState({
      location,
    })
  }

  onImagesChange = (event) => {
    const images = event.target.value.split(',')
    console.log(images)
    this.setState({
      images,
    })
  }

  onAboutChange = (event) => {
    const about = event.target.value
    this.setState({
      about,
    })
  }

  onSubmitPet = (event) => {
    event.preventDefault();
    const pet = {
      id: this.props.newPetId,
      name: this.state.name,
      species: this.state.species,
      location: this.state.location,
      images: this.state.image,
      about: this.state.about
    }

    this.props.addPetCallback(pet)
    this.setState({
      name: '',
      species: '',
      location: '',
      images: '',
      about: ''
    })
  }

  render() {
    return (
      <form  className="new-pet-form" id="new-pet-form" onSubmit={this.onSubmitPet}>
        <h3>Add a Pet</h3>
        { /* A form should go here! */}
        <div>
          <label htmlFor='name' className="new-pet-form--label">Name:</label>
          <input
            name='name'
            id='name'
            type='text'
            onChange={this.onNameChange}
            value={this.state.name}
          />
        </div>

        <div>
          <label htmlFor='species' className="new-pet-form--label">Species:</label>
          <input
            name='species'
            id='species'
            type='text'
            onChange={this.onSpeciesChange}
            value={this.state.name}
          />
        </div>

        <div>
          <label htmlFor='location' className="new-pet-form--label">Location:</label>
          <input
            name='location'
            id='location'
            type='text'
            onChange={this.onLocationChange}
            value={this.state.location}
          />
        </div>

        <div>
          <label htmlFor='images' className="new-pet-form--label">Image:</label>
          <input
            name='images'
            id='images'
            type='text'
            onChange={this.onImagesChange}
            value={this.state.image}
          />
        </div>

        <div>
          <label htmlFor='about' className="new-pet-form--label">About:</label>
        </div>
        <div>
          <textarea
            name='about'
            id='about'
            type='text'
            onChange={this.onAboutChange}
            value={this.state.about}
            className="new-pet-form--about"
          />
        </div>

        <input className="btn btn-success new-pet-form--submit" type="submit" name="submit" value="Add a Pet" />
      </form>
    );
  }
}

NewPetForm.propTypes = {
  addPetCallback: PropTypes.func.isRequired,
};

export default NewPetForm;