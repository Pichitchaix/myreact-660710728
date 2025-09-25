import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/BookCard.css'; // ✨ Import from style folder
import BookImage from './BookImage'; // ✨ Use BookImage for lazy loading

const BookCard = ({ book, viewMode = 'grid' }) => {
  const [isInWishlist, setIsInWishlist] = useState(false);

  const toggleWishlist = (e) => {
    e.preventDefault();
    setIsInWishlist(!isInWishlist);
  };

  const addToCart = (e) => {
    e.preventDefault();
    // Add to cart logic here
    alert(`Added "${book.title}" to cart!`);
  };

  const renderStars = (rating) => {
    return '⭐'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating));
  };

  if (viewMode === 'list') {
    return (
      <Link to={`/book/${book.id}`} className="book-card list-view">
        <BookImage 
          src={book.image} 
          alt={book.title}
          className="book-card-image"
        />
        <div className="book-info">
          <h3 className="book-title">{book.title}</h3>
          <p className="book-author">by {book.author}</p>
          <p className="book-description">{book.description}</p>
          <div className="book-meta">
            <span className="book-rating">{renderStars(book.rating)} {book.rating}</span>
            <span className="book-category">{book.category}</span>
          </div>
        </div>
        <div className="book-actions">
          <div className="book-price">
            <span className="price">${book.price}</span>
            {book.oldPrice && (
              <span className="old-price">${book.oldPrice}</span>
            )}
          </div>
          <button className="btn-primary" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </Link>
    );
  }

  return (
    <div className="book-card grid-view">
      <Link to={`/book/${book.id}`} className="book-card-link">
        <div className="book-card-image-container">
          <BookImage 
            src={book.image} 
            alt={book.title}
            className="book-card-image"
          />
          {book.badge && (
            <span className="book-badge">{book.badge}</span>
          )}
          <button 
            className={`wishlist-btn ${isInWishlist ? 'active' : ''}`}
            onClick={toggleWishlist}
          >
            {isInWishlist ? '❤️' : '🤍'}
          </button>
        </div>
        
        <div className="book-card-content">
          <h3 className="book-title">{book.title}</h3>
          <p className="book-author">{book.author}</p>
          
          <div className="book-rating">
            <span className="stars">{renderStars(book.rating)}</span>
            <span className="rating-value">{book.rating}</span>
          </div>
          
          <div className="book-price-section">
            <div className="price-wrapper">
              <span className="price">${book.price}</span>
              {book.oldPrice && (
                <span className="old-price">${book.oldPrice}</span>
              )}
            </div>
          </div>
          
          <button className="btn-add-to-cart" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </Link>
    </div>
  );
};

export default BookCard;
