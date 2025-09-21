import { useState, useEffect } from 'react';

/**
 * Custom hook for localStorage with state sync
 */
export const useLocalStorage = (key, initialValue) => {
  // Get initial value from localStorage or use provided initial value
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error loading ${key} from localStorage:`, error);
      return initialValue;
    }
  });

  // Update localStorage when state changes
  const setValue = (value) => {
    try {
      // Allow value to be a function (like setState)
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Error saving ${key} to localStorage:`, error);
    }
  };

  return [storedValue, setValue];
};

/**
 * Custom hook for shopping cart management
 */
export const useCart = () => {
  const [cart, setCart] = useLocalStorage('bookstore_cart', []);

  const addToCart = (book, quantity = 1) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === book.id);
      
      if (existingItem) {
        // Update quantity if item already in cart
        return prevCart.map(item =>
          item.id === book.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      
      // Add new item to cart
      return [...prevCart, { ...book, quantity }];
    });
  };

  const removeFromCart = (bookId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== bookId));
  };

  const updateQuantity = (bookId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(bookId);
      return;
    }
    
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === bookId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  const isInCart = (bookId) => {
    return cart.some(item => item.id === bookId);
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartCount,
    isInCart
  };
};

/**
 * Custom hook for wishlist management
 */
export const useWishlist = () => {
  const [wishlist, setWishlist] = useLocalStorage('bookstore_wishlist', []);

  const addToWishlist = (book) => {
    setWishlist(prevWishlist => {
      // Check if already in wishlist
      if (prevWishlist.some(item => item.id === book.id)) {
        return prevWishlist;
      }
      return [...prevWishlist, book];
    });
  };

  const removeFromWishlist = (bookId) => {
    setWishlist(prevWishlist => 
      prevWishlist.filter(item => item.id !== bookId)
    );
  };

  const toggleWishlist = (book) => {
    if (isInWishlist(book.id)) {
      removeFromWishlist(book.id);
    } else {
      addToWishlist(book);
    }
  };

  const clearWishlist = () => {
    setWishlist([]);
  };

  const isInWishlist = (bookId) => {
    return wishlist.some(item => item.id === bookId);
  };

  const moveToCart = (bookId, addToCartFn) => {
    const book = wishlist.find(item => item.id === bookId);
    if (book) {
      addToCartFn(book);
      removeFromWishlist(bookId);
    }
  };

  return {
    wishlist,
    addToWishlist,
    removeFromWishlist,
    toggleWishlist,
    clearWishlist,
    isInWishlist,
    moveToCart
  };
};

/**
 * Custom hook for recently viewed books
 */
export const useRecentlyViewed = (maxItems = 10) => {
  const [recentlyViewed, setRecentlyViewed] = useLocalStorage('bookstore_recently_viewed', []);

  const addToRecentlyViewed = (book) => {
    setRecentlyViewed(prev => {
      // Remove if already exists
      const filtered = prev.filter(item => item.id !== book.id);
      // Add to beginning
      const updated = [book, ...filtered];
      // Keep only maxItems
      return updated.slice(0, maxItems);
    });
  };

  const clearRecentlyViewed = () => {
    setRecentlyViewed([]);
  };

  return {
    recentlyViewed,
    addToRecentlyViewed,
    clearRecentlyViewed
  };
};