import React, { useState, useEffect } from 'react';
import './style/BookListPage.css'; // ✨ Import from style folder
import SearchBar from '../components/SearchBar';
import BookCard from '../components/BookCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { getAllBooks, getCategories } from '../data/booksData';

const BookListPage = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('title');
  const [viewMode, setViewMode] = useState('grid');

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const booksData = getAllBooks();
      setBooks(booksData);
      setFilteredBooks(booksData);
      setCategories(getCategories());
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    filterAndSortBooks();
  }, [selectedCategory, sortBy, books]);

  const filterAndSortBooks = () => {
    let filtered = [...books];

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(book => book.category === selectedCategory);
    }

    // Sort books
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'title':
          return a.title.localeCompare(b.title);
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

    setFilteredBooks(filtered);
  };

  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      setFilteredBooks(books);
      return;
    }

    const filtered = books.filter(book =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBooks(filtered);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="book-list-page">
      <div className="page-header">
        <h1>All Books</h1>
        <p>Browse our complete collection of books</p>
      </div>

      <div className="filters-section">
        <SearchBar 
          onSearch={handleSearch}
          placeholder="Search books by title or author..."
        />
        
        <div className="filter-controls">
          <select 
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="filter-select"
          >
            <option value="all">All Categories</option>
            {categories.map(cat => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>

          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
            className="filter-select"
          >
            <option value="title">Sort by Title</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>

          <div className="view-mode-buttons">
            <button 
              className={`view-mode-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
            >
              Grid
            </button>
            <button 
              className={`view-mode-btn ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
            >
              List
            </button>
          </div>
        </div>
      </div>

      <div className="results-info">
        Showing {filteredBooks.length} of {books.length} books
      </div>

      {filteredBooks.length === 0 ? (
        <div className="no-results">
          <h3>No books found</h3>
          <p>Try adjusting your filters or search terms</p>
        </div>
      ) : (
        <div className={`books-container ${viewMode}`}>
          {filteredBooks.map(book => (
            <BookCard key={book.id} book={book} viewMode={viewMode} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BookListPage;