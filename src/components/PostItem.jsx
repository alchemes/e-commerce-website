


import React, { useState } from 'react';
import './PostItem.css'; // Import CSS for styling if needed

const PostItem = ({ setPostedItems }) => {
  const [itemType, setItemType] = useState('');
  const [description, setDescription] = useState('');
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    const newItem = {
      itemType,
      description,
      size: { length, width },
      price,
      image, // Assuming you'll handle image uploads separately
    };

    // Call the function passed from the parent to update posted items
    setPostedItems((prevItems) => [...prevItems, newItem]);

    // Reset the form
    setItemType('');
    setDescription('');
    setLength('');
    setWidth('');
    setPrice('');
    setImage(null);
  };

  return (
    <div className="post-item-container">
      <h2>Post Item</h2>
      <form className="post-item-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="itemType">Item Type:</label>
          <select 
            id="itemType" 
            name="itemType" 
            value={itemType} 
            onChange={(e) => setItemType(e.target.value)} 
            required
          >
            <option value="">Select an item type</option>
            <option value="painting">Painting</option>
            <option value="clayArt">Clay Art</option>
            <option value="sculpture">Sculpture</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="description">Description:</label>
          <textarea 
            id="description" 
            name="description" 
            rows="4" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            required 
          />
        </div>
        <div className="form-field">
          <label htmlFor="size">Size:</label>
          <div>
            <input 
              type="number" 
              id="length" 
              name="length" 
              placeholder="Length (cm)" 
              value={length} 
              onChange={(e) => setLength(e.target.value)} 
              required 
            />
            <input 
              type="number" 
              id="width" 
              name="width" 
              placeholder="Width (cm)" 
              value={width} 
              onChange={(e) => setWidth(e.target.value)} 
              required 
            />
          </div>
        </div>
        <div className="form-field">
          <label htmlFor="price">Price:</label>
          <input 
            type="number" 
            id="price" 
            name="price" 
            value={price} 
            onChange={(e) => setPrice(e.target.value)} 
            required 
          />
        </div>
        <div className="form-field">
          <label htmlFor="imageUpload">Upload Image:</label>
          <input 
            type="file" 
            id="imageUpload" 
            name="imageUpload" 
            accept="image/*" 
            onChange={(e) => setImage(e.target.files[0])} 
            required 
          />
        </div>
        <button type="submit">Submit Item</button>
      </form>
    </div>
  );
};

export default PostItem;