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
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Product.css'; // Import CSS for styling

// const Product = ({ postedItems }) => {
//   const [selectedItems, setSelectedItems] = useState({}); // Holds item quantities
//   const navigate = useNavigate(); // Use useNavigate

//   const handleQuantityChange = (itemId, change) => {
//     setSelectedItems((prev) => {
//       const currentQuantity = prev[itemId] || 0;
//       const newQuantity = Math.max(0, currentQuantity + change); // Prevent negative quantities
//       return { ...prev, [itemId]: newQuantity };
//     });
//   };

//   const handleCheckout = () => {
//     const itemsToPay = postedItems
//       .filter((_, index) => selectedItems[index])
//       .map((item, index) => ({
//         ...item,
//         quantity: selectedItems[index],
//       }));

//     const totalPrice = itemsToPay.reduce((total, item) => {
//       return total + item.price * item.quantity;
//     }, 0);

//     navigate('/payment', { state: { items: itemsToPay, totalPrice } });
//   };

//   const handleView = (item) => {
//     navigate('/product-details', { state: { item } }); // Navigate to ProductDetails with state
//   };

//   return (
//     <div className="product-container">
//       <h2>Posted Items</h2>
//       {postedItems.length === 0 ? (
//         <p className="no-items">No items posted yet.</p>
//       ) : (
//         <div className="product-list">
//           {postedItems.map((item, index) => (
//             <div className="product-item" key={index}>
//               <div className="product-image">
//                 <img src={URL.createObjectURL(item.image)} alt={item.description} />
//               </div>
//               <div className="product-details">
//                 <h3>{item.itemType}</h3>
//                 <p>Description: {item.description}</p>
//                 <p>Price: ${item.price}</p>
//                 <p>Size: {item.size.length} x {item.size.width} cm</p>
//                 <div className="quantity-controls">
//                   <button onClick={() => handleQuantityChange(index, -1)}>-</button>
//                   <span>{selectedItems[index] || 0}</span>
//                   <button onClick={() => handleQuantityChange(index, 1)}>+</button>
//                 </div>
//                 <button onClick={() => handleView(item)}>View</button> {/* Redirect to details */}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//       <button onClick={handleCheckout} disabled={Object.keys(selectedItems).length === 0}>
//         Go to Cart
//       </button>
//     </div>
//   );
// };

// export default Product;import React, { useState, useEffect } from 'react';
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Product.css";

// const Product = () => {
//   const [postedItems, setPostedItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedItems, setSelectedItems] = useState({});
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchItems = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/api/items", {
//           cache: "no-store",
//         });
//         if (!response.ok) {
//           throw new Error(
//             `HTTP error! status: ${response.status} - ${response.statusText}`
//           );
//         }
//         const data = await response.json();
//         console.log("Fetched items:", data);
//         setPostedItems(data);
//       } catch (error) {
//         setError(error);
//         console.error("Fetch error:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchItems();
//   }, []);

//   const handleQuantityChange = (itemId, change) => {
//     setSelectedItems((prev) => {
//       const currentQuantity = prev[itemId] || 0;
//       const newQuantity = Math.max(0, currentQuantity + change);
//       return { ...prev, [itemId]: newQuantity };
//     });
//   };

//   const handleCheckout = () => {
//     const itemsToPay = postedItems
//       .filter((item) => selectedItems[item.id])
//       .map((item) => ({
//         ...item,
//         quantity: selectedItems[item.id],
//       }));

//     const totalPrice = itemsToPay.reduce((total, item) => {
//       return total + item.price * item.quantity;
//     }, 0);

//     if (itemsToPay.length > 0) {
//       navigate("/payment", { state: { items: itemsToPay, totalPrice } });
//     } else {
//       alert("Please select items and quantity to checkout.");
//     }
//   };

//   const handleView = (item) => {
//     navigate("/product-details", { state: { item } });
//   };

//   if (loading) {
//     return <div className="loading">Loading items...</div>;
//   }

//   if (error) {
//     return <div className="error">Error: {error.message}</div>;
//   }

//   return (
//     <div className="product-container">
//       <h2>Available Items</h2>
//       {postedItems.length === 0 ? (
//         <p className="no-items">No items available at the moment.</p>
//       ) : (
//         <div className="product-list">
//           {postedItems.map((item) => {
//             // Construct imageSource *directly* from item.image_path
//             const imageSource = item.image_path
//               ? item.image_path // Use the full URL from the backend
//               : "https://via.placeholder.com/200";

//             return (
//               <div className="product-item" key={item.id}>
//                 <div
//                   className="product-image"
//                   style={{
//                     width: "200px",
//                     height: "200px",
//                     position: "relative",
//                     overflow: "hidden",
//                     marginLeft: "20%",
//                   }}
//                 >
//                   <img
//                     src={imageSource}
//                     alt={item.description}
//                     style={{
//                       position: "absolute",
//                       top: "0",
//                       left: "0",
//                       width: "100%",
//                       height: "100%",
//                       objectFit: "cover",
//                     }}
//                     onError={(e) => {
//                       e.target.onerror = null;
//                       e.target.src = "https://via.placeholder.com/200";
//                     }}
//                   />
//                 </div>
//                 <div className="product-details">
//                   <h3>{item.item_type}</h3>
//                   <p>Description: {item.description}</p>
//                   <p>Price: ${item.price}</p>
//                   <p>
//                     Size: {item.length} x {item.width} cm
//                   </p>
//                   <p>Quantity: {item.quantity}</p>
//                   <div className="quantity-controls">
//                     <button onClick={() => handleQuantityChange(item.id, -1)}>
//                       -
//                     </button>
//                     <span>{selectedItems[item.id] || 0}</span>
//                     <button onClick={() => handleQuantityChange(item.id, 1)}>
//                       +
//                     </button>
//                   </div>
//                   <button onClick={() => handleView(item)}>View</button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       )}
//       <button
//         onClick={handleCheckout}
//         disabled={Object.keys(selectedItems).length === 0}
//       >
//         Go to Cart
//       </button>
//     </div>
//   );
// };

// export default Product;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Product.css";

// const Product = () => {
//   const [postedItems, setPostedItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedItems, setSelectedItems] = useState({});
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchItems = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/api/items", {
//           cache: "no-store",
//         });
//         if (!response.ok) {
//           throw new Error(
//             `HTTP error! status: ${response.status} - ${response.statusText}`
//           );
//         }
//         const data = await response.json();
//         console.log("Fetched items:", data);
//         setPostedItems(data);
//       } catch (error) {
//         setError(error);
//         console.error("Fetch error:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchItems();
//   }, []);

//   const handleQuantityChange = (itemId, change) => {
//     const item = postedItems.find((p) => p.id === itemId);
//     if (!item) return; // Should not happen, but good to have.

//     setSelectedItems((prev) => {
//       const currentQuantity = prev[itemId] || 0;
//       let newQuantity = currentQuantity + change;

//       // Restrict the quantity
//       newQuantity = Math.max(0, newQuantity); // Prevent negative quantities
//       newQuantity = Math.min(newQuantity, item.quantity); // Limit to available stock

//       return { ...prev, [itemId]: newQuantity };
//     });
//   };

//   const handleCheckout = () => {
//     const itemsToPay = postedItems
//       .filter((item) => selectedItems[item.id])
//       .map((item) => ({
//         ...item,
//         quantity: selectedItems[item.id],
//       }));

//     const totalPrice = itemsToPay.reduce((total, item) => {
//       return total + item.price * item.quantity;
//     }, 0);

//     if (itemsToPay.length > 0) {
//       navigate("/payment", { state: { items: itemsToPay, totalPrice } });
//     } else {
//       alert("Please select items and quantity to checkout.");
//     }
//   };

//   const handleView = (item) => {
//     navigate("/product-details", { state: { item } });
//   };

//   if (loading) {
//     return <div className="loading">Loading items...</div>;
//   }

//   if (error) {
//     return <div className="error">Error: {error.message}</div>;
//   }

//   return (
//     <div className="product-container">
//       <h2>Available Items</h2>
//       {postedItems.length === 0 ? (
//         <p className="no-items">No items available at the moment.</p>
//       ) : (
//         <div className="product-list">
//           {postedItems.map((item) => {
//             // Construct imageSource *directly* from item.image_path
//             const imageSource = item.image_path
//               ? item.image_path // Use the full URL from the backend
//               : "https://via.placeholder.com/200";

//             return (
//               <div className="product-item" key={item.id}>
//                 <div
//                   className="product-image"
//                   style={{
//                     width: "200px",
//                     height: "200px",
//                     position: "relative",
//                     overflow: "hidden",
//                     marginLeft: "20%",
//                   }}
//                 >
//                   <img
//                     src={imageSource}
//                     alt={item.description}
//                     style={{
//                       position: "absolute",
//                       top: "0",
//                       left: "0",
//                       width: "100%",
//                       height: "100%",
//                       objectFit: "cover",
//                     }}
//                     onError={(e) => {
//                       e.target.onerror = null;
//                       e.target.src = "https://via.placeholder.com/200";
//                     }}
//                   />
//                 </div>
//                 <div className="product-details">
//                   <h3>{item.item_type}</h3>
//                   <p>Description: {item.description}</p>
//                   <p>Price: ${item.price}</p>
//                   <p>
//                     Size: {item.length} x {item.width} cm
//                   </p>
//                   <p>Quantity: {item.quantity}</p>
//                   <div className="quantity-controls">
//                     <button
//                       onClick={() => handleQuantityChange(item.id, -1)}
//                       disabled={selectedItems[item.id] <= 0} // Disable - button
//                     >
//                       -
//                     </button>
//                     <span>{selectedItems[item.id] || 0}</span>
//                     <button
//                       onClick={() => handleQuantityChange(item.id, 1)}
//                       disabled={selectedItems[item.id] >= item.quantity} // Disable + button
//                     >
//                       +
//                     </button>
//                   </div>
//                   <button onClick={() => handleView(item)}>View</button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       )}
//       <button
//         onClick={handleCheckout}
//         disabled={Object.keys(selectedItems).length === 0}
//       >
//         Go to Cart
//       </button>
//     </div>
//   );
// };

// export default Product;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Product.css";

// const Product = () => {
//   const [postedItems, setPostedItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedItems, setSelectedItems] = useState({});
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchItems = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/api/items", {
//           cache: "no-store",
//         });
//         if (!response.ok) {
//           throw new Error(
//             `HTTP error! status: ${response.status} - ${response.statusText}`
//           );
//         }
//         const data = await response.json();
//         console.log("Fetched items:", data);
//         setPostedItems(data);
//       } catch (error) {
//         setError(error);
//         console.error("Fetch error:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchItems();
//   }, []);

//   const handleQuantityChange = (itemId, change) => {
//     const item = postedItems.find((p) => p.id === itemId);
//     if (!item) return; // Should not happen, but good to have.

//     setSelectedItems((prev) => {
//       const currentQuantity = prev[itemId] || 0;
//       let newQuantity = currentQuantity + change;

//       // Restrict the quantity
//       newQuantity = Math.max(0, newQuantity); // Prevent negative quantities
//       newQuantity = Math.min(newQuantity, item.quantity); // Limit to available stock

//       return { ...prev, [itemId]: newQuantity };
//     });
//   };

//   const handleCheckout = () => {
//     const itemsToPay = postedItems
//       .filter((item) => selectedItems[item.id])
//       .map((item) => ({
//         ...item,
//         quantity: selectedItems[item.id],
//       }));

//     const totalPrice = itemsToPay.reduce((total, item) => {
//       return total + item.price * item.quantity;
//     }, 0);

//     if (itemsToPay.length > 0) {
//       navigate("/payment", { state: { items: itemsToPay, totalPrice } });
//     } else {
//       alert("Please select items and quantity to checkout.");
//     }
//   };

//   const handleView = (item) => {
//     navigate("/product-details", { state: { item } });
//   };

//   if (loading) {
//     return <div className="loading">Loading items...</div>;
//   }

//   if (error) {
//     return <div className="error">Error: {error.message}</div>;
//   }

//   return (
//     <div className="product-container">
//       <h2>Available Items</h2>
//       {postedItems.length === 0 ? (
//         <p className="no-items">No items available at the moment.</p>
//       ) : (
//         <div className="product-list">
//           {postedItems.map((item) => {
//             // Construct imageSource *directly* from item.image_path
//             const imageSource = item.image_path
//               ? item.image_path // Use the full URL from the backend
//               : "https://via.placeholder.com/200";

//             return (
//               <div className="product-item" key={item.id}>
//                 <div
//                   className="product-image"
//                   style={{
//                     width: "200px",
//                     height: "200px",
//                     position: "relative",
//                     overflow: "hidden",
//                     marginLeft: "20%",
//                   }}
//                 >
//                   <img
//                     src={imageSource}
//                     alt={item.description}
//                     style={{
//                       position: "absolute",
//                       top: "0",
//                       left: "0",
//                       width: "100%",
//                       height: "100%",
//                       objectFit: "cover",
//                     }}
//                     onError={(e) => {
//                       e.target.onerror = null;
//                       e.target.src = "https://via.placeholder.com/200";
//                     }}
//                   />
//                 </div>
//                 <div className="product-details">
//                   <h3>{item.item_type}</h3>
//                   <p>Description: {item.description}</p>
//                   <p>Price: ${item.price}</p>
//                   <p>
//                     Size: {item.length} x {item.width} cm
//                   </p>
//                   <p>Item ID: {item.id}</p>
//                   <p>Quantity: {item.quantity}</p>
//                   <div className="quantity-controls">
//                     <button
//                       onClick={() => handleQuantityChange(item.id, -1)}
//                       disabled={selectedItems[item.id] <= 0} // Disable - button
//                     >
//                       -
//                     </button>
//                     <span>{selectedItems[item.id] || 0}</span>
//                     <button
//                       onClick={() => handleQuantityChange(item.id, 1)}
//                       disabled={selectedItems[item.id] >= item.quantity} // Disable + button
//                     >
//                       +
//                     </button>
//                   </div>
//                   <p>Selected Quantity: {selectedItems[item.id] || 0}</p>
//                   <button onClick={() => handleView(item)}>View</button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       )}
//       <button
//         onClick={handleCheckout}
//         disabled={Object.keys(selectedItems).length === 0}
//       >
//         Go to Cart
//       </button>
//     </div>
//   );
// };

// export default Product;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Product.css";

const Product = () => {
  const [postedItems, setPostedItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedItems, setSelectedItems] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/items", {
          cache: "no-store",
        });
        if (!response.ok) {
          throw new Error(
            `HTTP error! status: ${response.status} - ${response.statusText}`
          );
        }
        const data = await response.json();
        console.log("Fetched items:", data);
        setPostedItems(data);
      } catch (error) {
        setError(error);
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  const handleQuantityChange = (itemId, change) => {
    const item = postedItems.find((p) => p.id === itemId);
    if (!item) return; // Should not happen, but good to have.

    setSelectedItems((prev) => {
      const currentQuantity = prev[itemId] || 0;
      let newQuantity = currentQuantity + change;

      // Restrict the quantity
      newQuantity = Math.max(0, newQuantity); // Prevent negative quantities
      newQuantity = Math.min(newQuantity, item.quantity); // Limit to available stock

      return { ...prev, [itemId]: newQuantity };
    });
  };

  const handleCheckout = () => {
    const itemsToPay = postedItems
      .filter((item) => selectedItems[item.id])
      .map((item) => ({
        ...item,
        quantity: selectedItems[item.id],
      }));

    const totalPrice = itemsToPay.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);

    // *Always* redirect to login first, passing the cart data as state
    navigate("/login", {
      state: {
        nextPath: "/payment", // Where to go *after* login
        items: itemsToPay, // Pass the cart data
        totalPrice: totalPrice,
      },
    });
  };

  if (loading) {
    return <div className="loading">Loading items...</div>;
  }

  if (error) {
    return <div className="error">Error: {error.message}</div>;
  }

  return (
    <div className="product-container">
      <h2>Available Items</h2>
      {postedItems.length === 0 ? (
        <p className="no-items">No items available at the moment.</p>
      ) : (
        <div className="product-list">
          {postedItems.map((item) => {
            // Construct imageSource *directly* from item.image_path
            const imageSource = item.image_path
              ? item.image_path // Use the full URL from the backend
              : "https://via.placeholder.com/200";

            return (
              <div className="product-item" key={item.id}>
                <div
                  className="product-image"
                  style={{
                    width: "200px",
                    height: "200px",
                    position: "relative",
                    overflow: "hidden",
                    marginLeft: "20%",
                  }}
                >
                  <img
                    src={imageSource}
                    alt={item.description}
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://via.placeholder.com/200";
                    }}
                  />
                </div>
                <div className="product-details">
                  <h3>{item.item_type}</h3>
                  <p>Description: {item.description}</p>
                  <p>Price: ${item.price}</p>
                  <p>
                    Size: {item.length} x {item.width} cm
                  </p>
                  <p>Item ID: {item.id}</p>
                  <p>Quantity: {item.quantity}</p>
                  <div className="quantity-controls">
                    <button
                      onClick={() => handleQuantityChange(item.id, -1)}
                      disabled={selectedItems[item.id] <= 0} // Disable - button
                    >
                      -
                    </button>
                    <span>{selectedItems[item.id] || 0}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id, 1)}
                      disabled={selectedItems[item.id] >= item.quantity} // Disable + button
                    >
                      +
                    </button>
                  </div>
                  <p>Selected Quantity: {selectedItems[item.id] || 0}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <button
        className="go-to"
        onClick={handleCheckout}
        disabled={Object.keys(selectedItems).length === 0}
      >
        Go to Cart
      </button>
    </div>
  );
};

export default Product;
