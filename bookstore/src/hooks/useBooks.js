import { useState, useEffect, useCallback } from 'react';
import { 
  getAllBooks, 
  getBookById, 
  getBooksByCategory,
  searchBooks 
} from '../data/booksData';

/**
 * Custom hook for managing book data
 */
export const useBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      setLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      const data = getAllBooks();
      setBooks(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const getBook = useCallback((id) => {
    return getBookById(id);
  }, []);

  const filterByCategory = useCallback((categoryId) => {
    if (!categoryId || categoryId === 'all') {
      return books;
    }
    return getBooksByCategory(categoryId);
  }, [books]);

  const search = useCallback((query) => {
    if (!query) return books;
    return searchBooks(query);
  }, [books]);

  return {
    books,
    loading,
    error,
    getBook,
    filterByCategory,
    search,
    refresh: fetchBooks
  };
};

/**
 * Custom hook for single book details
 */
export const useBookDetail = (bookId) => {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!bookId) {
      setError('No book ID provided');
      setLoading(false);
      return;
    }

    const fetchBook = async () => {
      try {
        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 300));
        const bookData = getBookById(bookId);
        
        if (!bookData) {
          throw new Error('Book not found');
        }
        
        setBook(bookData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [bookId]);

  return { book, loading, error };
};

/**
 * Custom hook for book filters and sorting
 */
export const useBookFilters = (initialBooks = []) => {
  const [filteredBooks, setFilteredBooks] = useState(initialBooks);
  const [filters, setFilters] = useState({
    category: 'all',
    priceRange: { min: 0, max: 1000 },
    rating: 0,
    inStock: false
  });
  const [sortBy, setSortBy] = useState('title');

  useEffect(() => {
     applyFiltersAndSort();
  }, [filters, sortBy, initialBooks]);

  const applyFiltersAndSort = () => {
    let result = [...initialBooks];

    // Apply filters
    if (filters.category !== 'all') {
      result = result.filter(book => book.category === filters.category);
    }

    if (filters.priceRange) {
      result = result.filter(book => 
        book.price >= filters.priceRange.min && 
        book.price <= filters.priceRange.max
      );
    }

    if (filters.rating > 0) {
      result = result.filter(book => book.rating >= filters.rating);
    }

    if (filters.inStock) {
      result = result.filter(book => book.inStock === true);
    }

    // Apply sorting
    result.sort((a, b) => {
      switch (sortBy) {
        case 'title':
          return a.title.localeCompare(b.title);
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return new Date(b.publishDate) - new Date(a.publishDate);
        default:
          return 0;
      }
    });

    setFilteredBooks(result);
  };

  const updateFilter = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const resetFilters = () => {
    setFilters({
      category: 'all',
      priceRange: { min: 0, max: 1000 },
      rating: 0,
      inStock: false
    });
  };

  return {
    filteredBooks,
    filters,
    sortBy,
    setSortBy,
    updateFilter,
    resetFilters
  };
};