import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'; // ✨ Import from style folder

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(3); // Mock cart count

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/images/misc/logo.png" alt="BookStore" />
          <span>BookStore</span>
        </Link>

        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink 
            to="/books" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            onClick={() => setIsMenuOpen(false)}
          >
            Books
          </NavLink>
          <NavLink 
            to="/category/fiction" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            onClick={() => setIsMenuOpen(false)}
          >
            Categories
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </NavLink>
        </div>

        <div className="navbar-actions">
          <button className="icon-button">
            <span className="icon">🔍</span>
          </button>
          <button className="icon-button cart-button">
            <span className="icon">🛒</span>
            {cartCount > 0 && (
              <span className="cart-badge">{cartCount}</span>
            )}
          </button>
          <button className="icon-button">
            <span className="icon">👤</span>
          </button>
          
          <button 
            className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;