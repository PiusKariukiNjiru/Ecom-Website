import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <img src="https://www.shutterstock.com/image-vector/digital-technology-logo-template-mobile-600w-1029483697.jpg" alt="Logo" className="logo" />
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Blogs</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <button className="cta">Get Started</button>
    </div>
  );
};

export default Header;
