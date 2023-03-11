import React from 'react';
import PropTypes from 'prop-types';
import './Search.css';

function Search({ setSearchValue }) {
  const handleChange = event => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="search-container">
      <img className="man" src="https://assets.jiji.co.ke/static/img/main-page/man.png" alt="" />
      <div className="call-to-search">
        <p>Find your best Smart Device here</p>
        <input type="text" placeholder="Search..." onChange={handleChange} />
      </div>
      <img className="girls" src="https://assets.jiji.co.ke/static/img/main-page/girls.png" alt="" />
    </div>
  );
}

Search.propTypes = {
  setSearchValue: PropTypes.func.isRequired,
};

export default Search;
