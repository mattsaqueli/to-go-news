import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = ({ setSearchQuery }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchTerm(query);
    setSearchQuery(query);
  };

  return (
    <header className='header-container'>
      <h1>To-Go News!</h1>
      <nav className='nav-bar'>
        <Link to='/'>
          <button>HOME</button>
        </Link>
        <input
          type='text'
          placeholder='Search News...'
          value={searchTerm}
          onChange={handleInputChange}
        />
      </nav>
    </header>
  );
};

export default Header;
