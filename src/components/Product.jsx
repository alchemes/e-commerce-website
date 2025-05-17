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
//     // Check if user is logged in
//     const userToken = localStorage.getItem("userId");
//     if (!userToken) {
//       // User not logged in, redirect to login
//       navigate("/login", {
//         state: {
//           nextPath: "/payment", // Path after login
//           items: postedItems
//             .filter((item) => selectedItems[item.id])
//             .map((item) => ({
//               ...item,
//               quantity: selectedItems[item.id],
//             })),
//           totalPrice: postedItems
//             .filter((item) => selectedItems[item.id])
//             .reduce(
//               (total, item) => total + item.price * selectedItems[item.id],
//               0
//             ),
//         },
//       });
//     } else {
//       // User is logged in, proceed to payment page
//       navigate("/payment", {
//         state: {
//           items: postedItems
//             .filter((item) => selectedItems[item.id])
//             .map((item) => ({
//               ...item,
//               quantity: selectedItems[item.id],
//             })),
//           totalPrice: postedItems
//             .filter((item) => selectedItems[item.id])
//             .reduce(
//               (total, item) => total + item.price * selectedItems[item.id],
//               0
//             ),
//         },
//       });
//     }
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
//                       className="btn btn-success btn-sm mx-1"
//                       onClick={() => handleQuantityChange(item.id, -1)}
//                       disabled={selectedItems[item.id] <= 0} // Disable - button
//                     >
//                       -
//                     </button>
//                     <span>{selectedItems[item.id] || 0}</span>
//                     <button
//                       className="btn btn-success btn-sm mx-1"
//                       onClick={() => handleQuantityChange(item.id, 1)}
//                       disabled={selectedItems[item.id] >= item.quantity} // Disable + button
//                     >
//                       +
//                     </button>
//                   </div>
//                   <p>Selected Quantity: {selectedItems[item.id] || 0}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       )}
//       <button
//         className="go-to"
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
  const [filteredItems, setFilteredItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedItems, setSelectedItems] = useState({});
  const [filters, setFilters] = useState({
    filterType: "None",
    itemType: "",
    minPrice: "",
    maxPrice: "",
  });
  const [searchQuery, setSearchQuery] = useState("");
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
        setFilteredItems(data);
      } catch (error) {
        setError(error);
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  useEffect(() => {
    let result = postedItems;

    // Apply item type filter
    if (filters.filterType === "Item Type" && filters.itemType !== "") {
      result = result.filter((item) => item.item_type === filters.itemType);
    }

    // Apply price range filter
    if (filters.filterType === "Price") {
      if (filters.minPrice !== "") {
        result = result.filter(
          (item) => item.price >= parseFloat(filters.minPrice)
        );
      }
      if (filters.maxPrice !== "") {
        result = result.filter(
          (item) => item.price <= parseFloat(filters.maxPrice)
        );
      }
    }

    // Apply search query
    if (searchQuery.trim() !== "") {
      result = result.filter((item) =>
        item.item_type.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredItems(result);
  }, [filters, searchQuery, postedItems]);

  const handleQuantityChange = (itemId, change) => {
    const item = postedItems.find((p) => p.id === itemId);
    if (!item) return;

    setSelectedItems((prev) => {
      const currentQuantity = prev[itemId] || 0;
      let newQuantity = currentQuantity + change;

      newQuantity = Math.max(0, newQuantity);
      newQuantity = Math.min(newQuantity, item.quantity);

      return { ...prev, [itemId]: newQuantity };
    });
  };

  const handleCheckout = () => {
    const userToken = localStorage.getItem("userId");
    if (!userToken) {
      navigate("/login", {
        state: {
          nextPath: "/payment",
          items: postedItems
            .filter((item) => selectedItems[item.id])
            .map((item) => ({
              ...item,
              quantity: selectedItems[item.id],
            })),
          totalPrice: postedItems
            .filter((item) => selectedItems[item.id])
            .reduce(
              (total, item) => total + item.price * selectedItems[item.id],
              0
            ),
        },
      });
    } else {
      navigate("/payment", {
        state: {
          items: postedItems
            .filter((item) => selectedItems[item.id])
            .map((item) => ({
              ...item,
              quantity: selectedItems[item.id],
            })),
          totalPrice: postedItems
            .filter((item) => selectedItems[item.id])
            .reduce(
              (total, item) => total + item.price * selectedItems[item.id],
              0
            ),
        },
      });
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
      // Reset other filter values when filterType changes
      ...(name === "filterType" && value !== "Item Type"
        ? { itemType: "" }
        : {}),
      ...(name === "filterType" && value !== "Price"
        ? { minPrice: "", maxPrice: "" }
        : {}),
    }));
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Get unique item types, ensure Sculpture and Other are included
  const uniqueItemTypes = [
    ...new Set(postedItems.map((item) => item.item_type)),
    "Sculpture",
    "Other",
  ];

  if (loading) {
    return <div className="loading">Loading items...</div>;
  }

  if (error) {
    return <div className="error">Error: {error.message}</div>;
  }

  return (
    <div className="product-container">
      {/* Filter and Search Bar */}
      <div className="d-flex justify-content-between mb-4">
        {/* Filters on the Left */}
        <div className="filters">
          <div className="mb-2">
            <h6>Filter By</h6>
            <select
              name="filterType"
              value={filters.filterType}
              onChange={handleFilterChange}
              className="form-control"
            >
              <option value="None">None</option>
              <option value="Price">Price</option>
              <option value="Item Type">Item Type</option>
            </select>
          </div>
          {filters.filterType === "Item Type" && (
            <div className="mb-2">
              <h6>Item Type</h6>
              <select
                name="itemType"
                value={filters.itemType}
                onChange={handleFilterChange}
                className="form-control"
              >
                <option value="">Select Item Type</option>
                {uniqueItemTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          )}
          {filters.filterType === "Price" && (
            <div>
              <h6>Price Range</h6>
              <div className="input-group">
                <input
                  type="number"
                  className="form-control"
                  name="minPrice"
                  placeholder="Min Price"
                  value={filters.minPrice}
                  onChange={handleFilterChange}
                  min="0"
                />
                <span className="input-group-text">-</span>
                <input
                  type="number"
                  className="form-control"
                  name="maxPrice"
                  placeholder="Max Price"
                  value={filters.maxPrice}
                  onChange={handleFilterChange}
                  min="0"
                />
              </div>
            </div>
          )}
        </div>
        {/* Search on the Right */}
        <div className="search">
          <input
            type="text"
            className="form-control"
            placeholder="Search by title..."
            value={searchQuery}
            onChange={handleSearchChange}
            style={{ width: "200px" }}
          />
        </div>
      </div>

      <h2>Available Items</h2>
      {filteredItems.length === 0 ? (
        <p className="no-items">No items match your filters.</p>
      ) : (
        <div className="product-list">
          {filteredItems.map((item) => {
            const imageSource = item.image_path
              ? item.image_path
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
                      className="btn btn-success btn-sm mx-1"
                      onClick={() => handleQuantityChange(item.id, -1)}
                      disabled={selectedItems[item.id] <= 0}
                    >
                      -
                    </button>
                    <span>{selectedItems[item.id] || 0}</span>
                    <button
                      className="btn btn-success btn-sm mx-1"
                      onClick={() => handleQuantityChange(item.id, 1)}
                      disabled={selectedItems[item.id] >= item.quantity}
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
