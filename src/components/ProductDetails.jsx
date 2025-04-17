import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './ProductDetails.css'; // Import CSS for styling

const ProductDetails = () => {
  const location = useLocation();
  const { item } = location.state || {}; // Get the product item passed as state

  const [quantity, setQuantity] = useState(1); // State for product quantity

  if (!item) {
    return <p>Product not found.</p>; // Handle invalid state
  }

  const handleQuantityChange = (change) => {
    setQuantity(prev => Math.max(1, prev + change)); // Prevent quantity from going below 1
  };

  const handleAddToCart = () => {
    // Logic to add the item to the cart
    // You can implement a context or a state management solution here
    console.log("Added to cart:", { ...item, quantity });
  };

  return (
    <div className="product-details-container">
      <h2>{item.itemType}</h2>
      <div className="product-details-content">
        <img src={URL.createObjectURL(item.image)} alt={item.description} />
        <div className="details-info">
          <p>Description: {item.description}</p>
          <p>Price: ${item.price}</p>
          <p>Size: {item.size.length} x {item.size.width} cm</p>
          {renderStars(item.rating)} {/* assuming item.rating is a number from 0-5 */}
          
          <div className="quantity-controls">
            <button onClick={() => handleQuantityChange(-1)}>-</button>
            <span>{quantity}</span>
            <button onClick={() => handleQuantityChange(1)}>+</button>
          </div>
          
          <button 
            className="add-to-cart" 
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

// Function to render stars for the rating
const renderStars = (rating) => {
    return (
        <div className="star-rating">
            {[...Array(5)].map((_, index) => (
                <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>
                    ★
                </span>
            ))}
        </div>
    );
};

export default ProductDetails;