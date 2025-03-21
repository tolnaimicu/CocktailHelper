import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../style/NavBarStyle.css';
import logo from '../assets/logo3.png'; // Adjust the path to your logo file

const NavBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search-cocktail?query=${searchQuery}`);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Cocktail Helper Logo" />
        </Link>
      </div>
      <div className="navbar-right">
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <form className="navbar-search" onSubmit={handleSearch}>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search cocktails..."
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
};

export default NavBar;