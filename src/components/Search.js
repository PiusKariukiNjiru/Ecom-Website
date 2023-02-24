import React from 'react';
import './Search.css'; // import the CSS file for styling

function Search() {
  return (
    <div className="search-container">
      
      <img className='man' src="https://assets.jiji.co.ke/static/img/main-page/man.png"/>
      <div className='call-to-search'>
        <p>Find your best Smart Device here</p>
        <input type="text" placeholder="Search..." />
      </div>
      
      
      <img className='girls' src='https://assets.jiji.co.ke/static/img/main-page/girls.png' />
    </div>
  );
}

export default Search;
