/**
 * Format price with currency symbol
 */
export const formatPrice = (price, currency = 'USD') => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return formatter.format(price);
};

/**
 * Calculate discount percentage
 */
export const calculateDiscount = (originalPrice, salePrice) => {
  if (!originalPrice || !salePrice) return 0;
  const discount = ((originalPrice - salePrice) / originalPrice) * 100;
  return Math.round(discount);
};

/**
 * Format book rating display
 */
export const formatRating = (rating, maxRating = 5) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = maxRating - Math.ceil(rating);
  
  return {
    fullStars,
    hasHalfStar,
    emptyStars,
    displayText: rating.toFixed(1)
  };
};

/**
 * Get rating stars as string
 */
export const getRatingStars = (rating) => {
  const { fullStars, hasHalfStar, emptyStars } = formatRating(rating);
  let stars = '⭐'.repeat(fullStars);
  if (hasHalfStar) stars += '⭐'; // You might want to use a half-star emoji/icon
  stars += '☆'.repeat(emptyStars);
  return stars;
};

/**
 * Truncate text with ellipsis
 */
export const truncateText = (text, maxLength = 150) => {
  if (!text || text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
};

/**
 * Format publish date
 */
export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

/**
 * Generate unique ID
 */
export const generateId = () => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Sort books by various criteria
 */
export const sortBooks = (books, sortBy = 'title') => {
  const sorted = [...books];
  
  switch (sortBy) {
    case 'title':
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
    case 'author':
      return sorted.sort((a, b) => a.author.localeCompare(b.author));
    case 'price-low':
      return sorted.sort((a, b) => a.price - b.price);
    case 'price-high':
      return sorted.sort((a, b) => b.price - a.price);
    case 'rating':
      return sorted.sort((a, b) => b.rating - a.rating);
    case 'newest':
      return sorted.sort((a, b) => 
        new Date(b.publishDate) - new Date(a.publishDate)
      );
    case 'popular':
      return sorted.sort((a, b) => b.reviews - a.reviews);
    default:
      return sorted;
  }
};

/**
 * Filter books by multiple criteria
 */
export const filterBooks = (books, filters) => {
  return books.filter(book => {
    // Category filter
    if (filters.category && filters.category !== 'all') {
      if (book.category !== filters.category) return false;
    }
    
    // Price range filter
    if (filters.minPrice !== undefined && book.price < filters.minPrice) {
      return false;
    }
    if (filters.maxPrice !== undefined && book.price > filters.maxPrice) {
      return false;
    }
    
    // Rating filter
    if (filters.minRating && book.rating < filters.minRating) {
      return false;
    }
    
    // In stock filter
    if (filters.inStockOnly && !book.inStock) {
      return false;
    }
    
    // Language filter
    if (filters.language && filters.language !== 'all') {
      if (book.language !== filters.language) return false;
    }
    
    return true;
  });
};

/**
 * Search books by query
 */
export const searchBooksHelper = (books, query) => {
  if (!query) return books;
  
  const lowercaseQuery = query.toLowerCase();
  return books.filter(book => {
    return (
      book.title.toLowerCase().includes(lowercaseQuery) ||
      book.author.toLowerCase().includes(lowercaseQuery) ||
      book.description?.toLowerCase().includes(lowercaseQuery) ||
      book.isbn?.toLowerCase().includes(lowercaseQuery) ||
      book.publisher?.toLowerCase().includes(lowercaseQuery)
    );
  });
};

/**
 * Get book availability status
 */
export const getAvailabilityStatus = (inStock, quantity = 0) => {
  if (!inStock) {
    return {
      status: 'Out of Stock',
      color: 'red',
      available: false
    };
  }
  
  if (quantity > 10) {
    return {
      status: 'In Stock',
      color: 'green',
      available: true
    };
  }
  
  if (quantity > 0) {
    return {
      status: `Only ${quantity} left`,
      color: 'orange',
      available: true
    };
  }
  
  return {
    status: 'Available',
    color: 'green',
    available: true
  };
};

/**
 * Validate email format
 */
export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

/**
 * Debounce function for search
 */
export const debounce = (func, delay) => {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
};