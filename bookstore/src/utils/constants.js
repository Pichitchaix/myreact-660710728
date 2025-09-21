// API Endpoints (if using real API)
export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

export const API_ENDPOINTS = {
  BOOKS: '/books',
  CATEGORIES: '/categories',
  AUTHORS: '/authors',
  REVIEWS: '/reviews',
  CART: '/cart',
  WISHLIST: '/wishlist',
  ORDERS: '/orders',
  USER: '/user',
};

// Pagination
export const ITEMS_PER_PAGE = 12;
export const MAX_VISIBLE_PAGES = 5;

// Search
export const SEARCH_DEBOUNCE_DELAY = 300;
export const MIN_SEARCH_LENGTH = 2;
export const MAX_SEARCH_RESULTS = 10;

// Cart
export const MAX_CART_ITEMS = 99;
export const MAX_QUANTITY_PER_ITEM = 10;

// Wishlist
export const MAX_WISHLIST_ITEMS = 50;

// Reviews
export const MAX_REVIEW_LENGTH = 500;
export const MIN_REVIEW_LENGTH = 10;

// Book Categories
export const BOOK_CATEGORIES = {
  FICTION: 'fiction',
  NON_FICTION: 'non-fiction',
  TECHNOLOGY: 'technology',
  BUSINESS: 'business',
  SELF_HELP: 'self-help',
  CHILDREN: 'children',
  ROMANCE: 'romance',
  MYSTERY: 'mystery',
  SCIENCE: 'science',
  HISTORY: 'history',
  BIOGRAPHY: 'biography',
  COOKING: 'cooking',
};

// Sort Options
export const SORT_OPTIONS = [
  { value: 'title', label: 'Title (A-Z)' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'newest', label: 'Newest First' },
  { value: 'popular', label: 'Most Popular' },
];

// Filter Options
export const PRICE_RANGES = [
  { min: 0, max: 10, label: 'Under $10' },
  { min: 10, max: 25, label: '$10 - $25' },
  { min: 25, max: 50, label: '$25 - $50' },
  { min: 50, max: 100, label: '$50 - $100' },
  { min: 100, max: null, label: 'Over $100' },
];

export const RATING_OPTIONS = [
  { value: 4, label: '4 Stars & Up' },
  { value: 3, label: '3 Stars & Up' },
  { value: 2, label: '2 Stars & Up' },
  { value: 1, label: '1 Star & Up' },
];

// Languages
export const LANGUAGES = [
  { value: 'all', label: 'All Languages' },
  { value: 'english', label: 'English' },
  { value: 'spanish', label: 'Spanish' },
  { value: 'french', label: 'French' },
  { value: 'german', label: 'German' },
  { value: 'chinese', label: 'Chinese' },
  { value: 'japanese', label: 'Japanese' },
];

// Messages
export const MESSAGES = {
  CART_ADD_SUCCESS: 'Book added to cart successfully!',
  CART_REMOVE_SUCCESS: 'Book removed from cart',
  CART_EMPTY: 'Your cart is empty',
  WISHLIST_ADD_SUCCESS: 'Book added to wishlist',
  WISHLIST_REMOVE_SUCCESS: 'Book removed from wishlist',
  WISHLIST_EMPTY: 'Your wishlist is empty',
  SEARCH_NO_RESULTS: 'No books found. Try different keywords.',
  LOADING: 'Loading...',
  ERROR_GENERIC: 'Something went wrong. Please try again.',
  FORM_INVALID: 'Please fill in all required fields',
  EMAIL_INVALID: 'Please enter a valid email address',
  ORDER_SUCCESS: 'Your order has been placed successfully!',
};

// Validation Rules
export const VALIDATION_RULES = {
  NAME_MIN_LENGTH: 2,
  NAME_MAX_LENGTH: 50,
  EMAIL_PATTERN: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE_PATTERN: /^[\d\s\-\+\(\)]+$/,
  ZIP_PATTERN: /^\d{5}(-\d{4})?$/,
  PASSWORD_MIN_LENGTH: 8,
  PASSWORD_PATTERN: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/,
};

// Local Storage Keys
export const STORAGE_KEYS = {
  CART: 'bookstore_cart',
  WISHLIST: 'bookstore_wishlist',
  USER: 'bookstore_user',
  PREFERENCES: 'bookstore_preferences',
  RECENTLY_VIEWED: 'bookstore_recently_viewed',
  SEARCH_HISTORY: 'bookstore_search_history',
};

// Theme Colors (matching CSS variables)
export const COLORS = {
  PRIMARY: '#667eea',
  SECONDARY: '#764ba2',
  SUCCESS: '#10b981',
  ERROR: '#ef4444',
  WARNING: '#f59e0b',
  INFO: '#3b82f6',
  TEXT_PRIMARY: '#1f2937',
  TEXT_SECONDARY: '#6b7280',
  BORDER: '#e5e7eb',
  BACKGROUND: '#f9fafb',
};

// Breakpoints
export const BREAKPOINTS = {
  MOBILE: 480,
  TABLET: 768,
  DESKTOP: 1024,
  WIDE: 1280,
};

// Default Values
export const DEFAULTS = {
  BOOK_IMAGE: '/images/misc/placeholder.jpg',
  USER_AVATAR: '/images/misc/default-avatar.jpg',
  CATEGORY_ICON: '/images/categories/default.svg',
  RATING: 0,
  CURRENCY: 'USD',
  LANGUAGE: 'english',
};