import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = ({ setSearchQuery }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    setSearchQuery(searchTerm);
  };

  return (
    <header className='header-container'>
      <h1>To-Go News!</h1>
      <nav className='nav-bar'>
        <Link to='/'>
          <button>Home</button>
        </Link>
        <input
          type='text'
          placeholder='Search News...'
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>Search</button>
      </nav>
    </header>
  );
};

export default Header;
