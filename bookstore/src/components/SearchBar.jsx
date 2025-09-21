import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './style/SearchBar.css';
import { searchBooks } from '../data/booksData';

const SearchBar = ({ onSearch, placeholder = "Search for books...", className = "" }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (searchTerm.length > 1) {
      const results = searchBooks(searchTerm).slice(0, 5);
      setSuggestions(results);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchTerm]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchTerm);
    }
    setShowSuggestions(false);
  };

  const handleSuggestionClick = (book) => {
    navigate(`/book/${book.id}`);
    setSearchTerm('');
    setShowSuggestions(false);
  };

  return (
    <div className={`search-bar ${className}`} ref={searchRef}>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={placeholder}
          className="search-input"
        />
        <button type="submit" className="search-button">
          <span>🔍</span>
        </button>
      </form>

      {showSuggestions && suggestions.length > 0 && (
        <div className="search-suggestions">
          {suggestions.map(book => (
            <div 
              key={book.id}
              className="suggestion-item"
              onClick={() => handleSuggestionClick(book)}
            >
              <img src={book.image} alt={book.title} className="suggestion-image" />
              <div className="suggestion-info">
                <div className="suggestion-title">{book.title}</div>
                <div className="suggestion-author">by {book.author}</div>
              </div>
              <div className="suggestion-price">${book.price}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;