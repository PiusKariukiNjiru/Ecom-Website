import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <img src="https://www.shutterstock.com/image-vector/digital-technology-logo-template-mobile-600w-1029483697.jpg" alt="Logo" className="logo" />
      <nav>
        <ul>
          <li><a href="https://amzn.to/3ITCzF6">Home</a></li>
          <li><a href="https://amzn.to/3SrVES4">About</a></li>
          <li><a href="https://blog.aboutamazon.com/?utm_source=gateway&utm_medium=footer">Blogs</a></li>
          <li><a href="https://affiliate-program.amazon.com/home/contact/ref=amb_link_4s-gyt_BNmi8uXuh9NeWSg_10?pf_rd_p=c705084d-dd5f-4deb-9368-305ad6e10000&_encoding=UTF8%2F">Contact</a></li>
        </ul>
      </nav>
      <button className="cta">Get Started</button>
    </div>
  );
};

export default Header;
