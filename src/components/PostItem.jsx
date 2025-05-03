// import React, { useState } from "react";
// import "./PostItem.css"; // Import CSS for styling if needed

// const PostItem = ({ setPostedItems }) => {
//   const [itemType, setItemType] = useState("");
//   const [description, setDescription] = useState("");
//   const [length, setLength] = useState("");
//   const [width, setWidth] = useState("");
//   const [price, setPrice] = useState("");
//   const [image, setImage] = useState(null);
//   const [quantity, setQuantity] = useState(1); // Added quantity state, default to 1

//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent the default form submission

//     const newItem = {
//       itemType,
//       description,
//       size: { length, width },
//       price,
//       image, // Assuming you'll handle image uploads separately
//       quantity: parseInt(quantity, 10), // Ensure quantity is an integer
//     };

//     // Call the function passed from the parent to update posted items
//     setPostedItems((prevItems) => [...prevItems, newItem]);

//     // Reset the form
//     setItemType("");
//     setDescription("");
//     setLength("");
//     setWidth("");
//     setPrice("");
//     setImage(null);
//     setQuantity(1); // Reset quantity to default
//   };

//   return (
//     <div className="post-item-container">
//       <h2>Post Item</h2>
//       <form className="post-item-form" onSubmit={handleSubmit}>
//         <div className="form-field">
//           <label htmlFor="itemType">Item Type:</label>
//           <select
//             id="itemType"
//             name="itemType"
//             value={itemType}
//             onChange={(e) => setItemType(e.target.value)}
//             required
//           >
//             <option value="">Select an item type</option>
//             <option value="painting">Painting</option>
//             <option value="clayArt">Clay Art</option>
//             <option value="sculpture">Sculpture</option>
//             <option value="other">Other</option>
//           </select>
//         </div>
//         <div className="form-field">
//           <label htmlFor="description">Description:</label>
//           <textarea
//             id="description"
//             name="description"
//             rows="4"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-field">
//           <label htmlFor="size">Size:</label>
//           <div>
//             <input
//               type="number"
//               id="length"
//               name="length"
//               placeholder="Length (cm)"
//               value={length}
//               onChange={(e) => setLength(e.target.value)}
//               required
//             />
//             <input
//               type="number"
//               id="width"
//               name="width"
//               placeholder="Width (cm)"
//               value={width}
//               onChange={(e) => setWidth(e.target.value)}
//               required
//             />
//           </div>
//         </div>
//         <div className="form-field">
//           <label htmlFor="price">Price:</label>
//           <input
//             type="number"
//             id="price"
//             name="price"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-field">
//           <label htmlFor="quantity">Quantity:</label>
//           <input
//             type="number"
//             id="quantity"
//             name="quantity"
//             min="1" // Ensure quantity is at least 1
//             value={quantity}
//             onChange={(e) => setQuantity(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-field">
//           <label htmlFor="imageUpload">Upload Image:</label>
//           <input
//             type="file"
//             id="imageUpload"
//             name="imageUpload"
//             accept="image/*"
//             onChange={(e) => setImage(e.target.files[0])}
//             required
//           />
//         </div>
//         <button type="submit">Submit Item</button>
//       </form>
//     </div>
//   );
// };

// export default PostItem;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PostItem.css";

const PostItem = () => {
  const [itemType, setItemType] = useState("");
  const [description, setDescription] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userId, setUserId] = useState(null); // Add state for userId

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(storedUserId);
    } else {
      // Redirect to login if userId is not available
      navigate("/login"); // Or wherever your login page is
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    if (
      !itemType ||
      !description ||
      !length ||
      !width ||
      !price ||
      !image ||
      !quantity
    ) {
      setError("All fields are required.");
      setIsSubmitting(false);
      return;
    }

    if (!userId) {
      setError("User ID is missing. Please log in.");
      setIsSubmitting(false);
      return;
    }

    const formData = new FormData();
    formData.append("itemType", itemType);
    formData.append("description", description);
    formData.append("length", length);
    formData.append("width", width);
    formData.append("price", price);
    formData.append("quantity", quantity);
    formData.append("image", image);
    formData.append("userId", userId); // Include userId

    try {
      const response = await fetch("http://localhost:5000/api/items", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        navigate("/products");
      } else {
        console.error("Failed to post item:", data);
        setError(data.message || "Failed to post item.");
      }
    } catch (error) {
      console.error("Error posting item:", error);
      setError("An error occurred while posting the item.");
    } finally {
      setIsSubmitting(false);
    }
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
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="imageUpload">Upload Image:</label>
          <input
            type="file"
            id="imageUpload"
            name="image"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Posting..." : "Submit Item"}
        </button>
      </form>
    </div>
  );
};

export default PostItem;
