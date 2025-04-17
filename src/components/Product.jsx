/*
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import './Product.css'; // Import CSS for styling

const Product = ({ postedItems }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all'); // State for selected filter
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  // Function to filter posted items based on search and filters
  const filteredItems = () => {
    let items = [...postedItems]; // Create a copy of postedItems to avoid mutating the original array

    // Search functionality
    if (searchQuery) {
      items = items.filter(item =>
        item.itemType.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort items based on selected filter
    switch (filter) {
      case 'low-to-high':
        items.sort((a, b) => a.price - b.price);
        break;
      case 'high-to-low':
        items.sort((a, b) => b.price - a.price);
        break;
      case 'recently-added':
        items.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
        break;
      case 'size':
        items.sort((a, b) => a.size.length - b.size.length);
        break;
      default:
        break; // No sorting needed for 'all'
    }

    return items; // Return filtered and sorted items
  };

  const itemsToDisplay = filteredItems(); // Get items to display based on filters

  const handleItemClick = (selectedItem) => {
    navigate('/payment', { state: { item: selectedItem } }); // Navigate to Payment with the selected item
  };

  return (
    <div className="product-container">
      <h2>Posted Items</h2>

      <div className="search-filter-container">
        <input
          type="text"
          placeholder="Search for items..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        
        <select onChange={(e) => setFilter(e.target.value)} value={filter}>
          <option value="all">Filter by</option>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
          <option value="recently-added">Recently Added</option>
          <option value="size">Size</option>
        </select>
      </div>

      {itemsToDisplay.length === 0 ? (
        <p className="no-items">No items found.</p>
      ) : (
        <div className="product-list">
          {itemsToDisplay.map((item, index) => (
            <div 
              className="product-item" 
              key={index} 
              onClick={() => handleItemClick(item)} // Handle item click to navigate
            >
              <img src={URL.createObjectURL(item.image)} alt={item.description} />
              <div className="product-overlay">
                <h3>{item.itemType}</h3>
                <p>Description: {item.description}</p>
                <p>Price: ${item.price}</p>
                <p>Size: {item.size.length} x {item.size.width} cm</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Product;*/
/*
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Update import from useHistory to useNavigate
import './Product.css'; // Import CSS for styling

const Product = ({ postedItems }) => {
  const [selectedItems, setSelectedItems] = useState({}); // Holds item quantities
  const navigate = useNavigate(); // Use useNavigate

  const handleQuantityChange = (itemId, change) => {
    setSelectedItems((prev) => {
      const currentQuantity = prev[itemId] || 0;
      const newQuantity = Math.max(0, currentQuantity + change); // Prevent negative quantities
      return { ...prev, [itemId]: newQuantity };
    });
  };

  const handleCheckout = () => {
    const itemsToPay = postedItems
      .filter((_, index) => selectedItems[index])
      .map((item, index) => ({
        ...item,
        quantity: selectedItems[index],
      }));
    
    const totalPrice = itemsToPay.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);

    navigate('/payment', { state: { items: itemsToPay, totalPrice } }); // Use navigate instead of history.push
  };

  return (
    <div className="product-container">
      <h2>Posted Items</h2>
      {postedItems.length === 0 ? (
        <p className="no-items">No items posted yet.</p>
      ) : (
        <div className="product-list">
          {postedItems.map((item, index) => (
            <div className="product-item" key={index}>
              <img src={URL.createObjectURL(item.image)} alt={item.description} />
              <div className="product-overlay">
                <h3>{item.itemType}</h3>
                <p>Description: {item.description}</p>
                <p>Price: ${item.price}</p>
                <p>Size: {item.size.length} x {item.size.width} cm</p>
                <div className="quantity-controls">
                  <button onClick={() => handleQuantityChange(index, -1)}>-</button>
                  <span>{selectedItems[index] || 0}</span>
                  <button onClick={() => handleQuantityChange(index, 1)}>+</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <button onClick={handleCheckout} disabled={Object.keys(selectedItems).length === 0}>
        Go to Cart
      </button>
    </div>
  );
};

export default Product;*/
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'; // Import CSS for styling

const Product = ({ postedItems }) => {
  const [selectedItems, setSelectedItems] = useState({}); // Holds item quantities
  const navigate = useNavigate(); // Use useNavigate

  const handleQuantityChange = (itemId, change) => {
    setSelectedItems((prev) => {
      const currentQuantity = prev[itemId] || 0;
      const newQuantity = Math.max(0, currentQuantity + change); // Prevent negative quantities
      return { ...prev, [itemId]: newQuantity };
    });
  };

  const handleCheckout = () => {
    const itemsToPay = postedItems
      .filter((_, index) => selectedItems[index])
      .map((item, index) => ({
        ...item,
        quantity: selectedItems[index],
      }));

    const totalPrice = itemsToPay.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);

    navigate('/payment', { state: { items: itemsToPay, totalPrice } });
  };

  const handleView = (item) => {
    navigate('/product-details', { state: { item } }); // Navigate to ProductDetails with state
  };

  return (
    <div className="product-container">
      <h2>Posted Items</h2>
      {postedItems.length === 0 ? (
        <p className="no-items">No items posted yet.</p>
      ) : (
        <div className="product-list">
          {postedItems.map((item, index) => (
            <div className="product-item" key={index}>
              <div className="product-image">
                <img src={URL.createObjectURL(item.image)} alt={item.description} />
              </div>
              <div className="product-details">
                <h3>{item.itemType}</h3>
                <p>Description: {item.description}</p>
                <p>Price: ${item.price}</p>
                <p>Size: {item.size.length} x {item.size.width} cm</p>
                <div className="quantity-controls">
                  <button onClick={() => handleQuantityChange(index, -1)}>-</button>
                  <span>{selectedItems[index] || 0}</span>
                  <button onClick={() => handleQuantityChange(index, 1)}>+</button>
                </div>
                <button onClick={() => handleView(item)}>View</button> {/* Redirect to details */}
              </div>
            </div>
          ))}
        </div>
      )}
      <button onClick={handleCheckout} disabled={Object.keys(selectedItems).length === 0}>
        Go to Cart
      </button>
    </div>
  );
};

export default Product;