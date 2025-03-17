import React from 'react';
import { Link } from 'react-router-dom';
import '../style/FooterStyle.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <ul className="footer-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/search">Search Cocktails</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </footer>
  );
};

export default Footer;