import React, { useState, useEffect } from 'react';
import './style/BookImage.css';

/**
 * BookImage Component - สำหรับ lazy loading รูปภาพ
 * ช่วยให้การโหลดรูปภาพราบรื่นขึ้น โดยแสดง placeholder ก่อน
 * แล้วค่อยโหลดรูปจริงเมื่อพร้อม
 * 
 * @param {string} src - path ของรูปภาพจริง
 * @param {string} alt - alt text สำหรับ accessibility
 * @param {string} className - CSS class เพิ่มเติม
 * @param {string} placeholder - path ของรูป placeholder (optional)
 */
const BookImage = ({ 
  src, 
  alt, 
  className = '', 
  placeholder = '/images/misc/placeholder.jpg' 
}) => {
  const [imgSrc, setImgSrc] = useState(placeholder);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    // Reset states when src changes
    setIsLoading(true);
    setError(false);
    
    // Create new image object to preload
    const img = new Image();
    
    // When image loads successfully
    img.onload = () => {
      setImgSrc(src);
      setIsLoading(false);
    };
    
    // When image fails to load
    img.onerror = () => {
      setError(true);
      setIsLoading(false);
      // Keep showing placeholder or show error image
      setImgSrc('/images/misc/no-image.jpg');
    };
    
    // Start loading the image
    img.src = src;
    
    // Cleanup function
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, placeholder]);
  
  return (
    <div className={`book-image-wrapper ${className}`}>
      <img 
        src={imgSrc} 
        alt={alt} 
        className={`book-image ${isLoading ? 'loading' : 'loaded'} ${error ? 'error' : ''}`}
      />
      {isLoading && (
        <div className="image-loader">
          <div className="spinner"></div>
        </div>
      )}
    </div>
  );
};

export default BookImage;