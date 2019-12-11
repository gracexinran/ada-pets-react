import React from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './SearchBar.css';

const SearchBar = () => {
  const filterList = (event) => {
    if (event.target.value) {
      this.props.filterListCallback(event.target.value.toLowerCase())
    }
  }

  return (
    <section>
      <input type="text" placeholder="Search" onChange={filterList}/>
    </section>
  )
}

SearchBar.propTypes = {
  filterListCallback: PropTypes.func.isRequired
}

export default SearchBar;
