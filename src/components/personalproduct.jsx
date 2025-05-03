// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// const PersonalProducts = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProducts = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         // Get user ID from localStorage
//         const userId = localStorage.getItem("userId");
//         console.log(userId);
//         if (!userId) {
//           setError("User ID is missing. Please log in.");
//           setLoading(false);
//           return;
//         }

//         const url = `http://localhost:5000/api/items/user/${userId}`;

//         const response = await fetch(url);
//         if (!response.ok) {
//           //check if user name is found
//           if (response.status === 404) {
//             setError("No products found for this user.");
//             setLoading(false);
//             return;
//           }
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         setProducts(data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProducts();
//   }, []); // Remove location.state.userId from dependency array

//   if (loading) {
//     return <div>Loading products...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (products.length === 0) {
//     return <div>No products available for this user.</div>;
//   }

//   return (
//     <div className="product-list">
//       <h1>My Products</h1>
//       {products.map((product) => (
//         <div key={product._id} className="product-card">
//           <Carousel showThumbs={false} showIndicators={true}>
//             {product.images.map((image, index) => (
//               <div key={index}>
//                 <img
//                   src={image}
//                   alt={`Product ${index + 1}`}
//                   style={{ maxHeight: "300px", objectFit: "contain" }}
//                 />
//               </div>
//             ))}
//           </Carousel>
//           <h2>{product.name}</h2>
//           <p>Price: ${product.price}</p>
//           <p>Description: {product.description}</p>
//           <button onClick={() => navigate(`/product/${product._id}`)}>
//             View Details
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PersonalProducts;

// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// const PersonalProducts = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProducts = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const userId = localStorage.getItem("userId");
//         if (!userId) {
//           setError("User ID is missing. Please log in.");
//           setLoading(false);
//           return;
//         }

//         const url = `http://localhost:5000/api/items/user/${userId}`;

//         const response = await fetch(url);
//         if (!response.ok) {
//           if (response.status === 404) {
//             setError("No products found for this user.");
//             setLoading(false);
//             return;
//           }
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         setProducts(data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProducts();
//   }, []);

//   if (loading) {
//     return <div>Loading products...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (products.length === 0) {
//     return <div>No products available for this user.</div>;
//   }

//   return (
//     <div className="product-list">
//       <h1>My Products</h1>
//       {products.map((product) => {
//         //  Handle the case where product.images is undefined or not an array
//         const images = product.images || []; //  Ensure it's always an array
//         return (
//           <div key={product._id} className="product-card">
//             <Carousel showThumbs={false} showIndicators={true}>
//               {images.map((image, index) => (
//                 <div key={index}>
//                   <img
//                     src={image}
//                     alt={`Product ${index + 1}`}
//                     style={{ maxHeight: "300px", objectFit: "contain" }}
//                   />
//                 </div>
//               ))}
//             </Carousel>
//             <h2>{product.name}</h2>
//             <p>Price: ${product.price}</p>
//             <p>Description: {product.description}</p>
//             <button onClick={() => navigate(`/product/${product._id}`)}>
//               View Details
//             </button>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default PersonalProducts;

// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import "./Product.css";

// const PersonalProducts = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProducts = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const userId = localStorage.getItem("userId");
//         if (!userId) {
//           setError("User ID is missing. Please log in.");
//           setLoading(false);
//           return;
//         }

//         const url = `http://localhost:5000/api/items/user/${userId}`;

//         const response = await fetch(url);
//         if (!response.ok) {
//           if (response.status === 404) {
//             setError("No products found for this user.");
//             setLoading(false);
//             return;
//           }
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         setProducts(data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProducts();
//   }, []);

//   if (loading) {
//     return <div className="loading">Loading products...</div>;
//   }

//   if (error) {
//     return <div className="error">Error: {error}</div>;
//   }

//   if (products.length === 0) {
//     return <div>No products available for this user.</div>;
//   }

//   return (
//     <div className="product-container">
//       <h2>My Products</h2>
//       {products.map((item) => {
//         // Construct imageSource directly from item.image_path, handling missing paths
//         const imageSource = item.image_path
//           ? item.image_path
//           : "https://via.placeholder.com/200";
//         console.log("Image URL:", imageSource);

//         return (
//           <div className="product-item" key={item._id}>
//             <div
//               className="product-image"
//               style={{
//                 width: "200px",
//                 height: "200px",
//                 position: "relative",
//                 overflow: "hidden",
//                 marginLeft: "20%",
//               }}
//             >
//               <img
//                 src={imageSource}
//                 alt={item.description}
//                 style={{
//                   position: "absolute",
//                   top: "0",
//                   left: "0",
//                   width: "100%",
//                   height: "100%",
//                   objectFit: "cover",
//                 }}
//                 onError={(e) => {
//                   e.target.onerror = null;
//                   e.target.src = "https://via.placeholder.com/200";
//                 }}
//               />
//             </div>
//             <div className="product-details">
//               <h3>{item.item_type || item.name}</h3>
//               <p>Description: {item.description}</p>
//               <p>Price: ${item.price}</p>
//               <p>
//                 Size: {item.length} x {item.width} cm
//               </p>
//               <p>Quantity: {item.quantity}</p>
//               <button onClick={() => navigate(`/product/${item._id}`)}>
//                 View Details
//               </button>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default PersonalProducts;

// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import "./Product.css";

// const PersonalProducts = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [isEditing, setIsEditing] = useState(false); // Track editing mode
//   const [editedQuantities, setEditedQuantities] = useState({});
//   const [editedPrices, setEditedPrices] = useState({});
//   const [editedLengths, setEditedLengths] = useState({}); // New state for length
//   const [editedWidths, setEditedWidths] = useState({}); // New state for width

//   useEffect(() => {
//     const fetchProducts = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const userId = localStorage.getItem("userId");
//         if (!userId) {
//           setError("User ID is missing. Please log in.");
//           setLoading(false);
//           return;
//         }

//         const url = `http://localhost:5000/api/items/user/${userId}`;

//         const response = await fetch(url);
//         if (!response.ok) {
//           if (response.status === 404) {
//             setError("No products found for this user.");
//             setLoading(false);
//             return;
//           }
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         setProducts(data);
//         // Initialize edited states
//         const initialQuantities = {};
//         const initialPrices = {};
//         const initialLengths = {};
//         const initialWidths = {};
//         data.forEach((item) => {
//           initialQuantities[item.id] = item.quantity;
//           initialPrices[item.id] = item.price;
//           initialLengths[item.id] = item.length;
//           initialWidths[item.id] = item.width;
//         });
//         setEditedQuantities(initialQuantities);
//         setEditedPrices(initialPrices);
//         setEditedLengths(initialLengths);
//         setEditedWidths(initialWidths);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProducts();
//   }, []);

//   const handleDelete = async (itemId) => {
//     const userId = localStorage.getItem("userId");
//     if (!userId) {
//       alert("Please log in to delete this product.");
//       return;
//     }

//     if (window.confirm("Are you sure you want to delete this product?")) {
//       try {
//         const response = await fetch(
//           `http://localhost:5000/api/items/${itemId}`,
//           {
//             method: "DELETE",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ userId }),
//           }
//         );
//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.message || "Failed to delete product");
//         }
//         setProducts((prevProducts) =>
//           prevProducts.filter((product) => product.id !== itemId)
//         );
//         alert("Product deleted successfully.");
//       } catch (error) {
//         setError(error.message);
//         console.error("Error deleting product:", error);
//       }
//     }
//   };

//   const handleUpdateProduct = async (itemId) => {
//     const userId = localStorage.getItem("userId");
//     if (!userId) {
//       alert("Please log in to update product.");
//       return;
//     }
//     try {
//       const response = await fetch(
//         `http://localhost:5000/api/items/${itemId}`,
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             quantity: editedQuantities[itemId],
//             price: editedPrices[itemId],
//             length: editedLengths[itemId], // Include length
//             width: editedWidths[itemId], // Include width
//             userId,
//           }),
//         }
//       );
//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || "Failed to update product");
//       }

//       // Update the product in the state
//       setProducts((prevProducts) =>
//         prevProducts.map((product) =>
//           product.id === itemId
//             ? {
//                 ...product,
//                 quantity: editedQuantities[itemId],
//                 price: editedPrices[itemId],
//                 length: editedLengths[itemId], // Update length
//                 width: editedWidths[itemId], // Update width
//               }
//             : product
//         )
//       );
//       alert("Product updated successfully.");
//     } catch (error) {
//       setError(error.message);
//       console.error("Error updating product:", error);
//     }
//   };

//   const handleEditToggle = () => {
//     setIsEditing(!isEditing);
//   };

//   if (loading) {
//     return <div className="loading">Loading products...</div>;
//   }

//   if (error) {
//     return <div className="error">Error: {error}</div>;
//   }

//   if (products.length === 0) {
//     return <div>No products available for this user.</div>;
//   }

//   return (
//     <div className="product-container">
//       <h2>My Products</h2>
//       {/* <button onClick={handleEditToggle}>
//         {isEditing ? "View Mode" : "Edit Mode"}
//       </button> */}
//       {products.map((item) => {
//         // Construct imageSource directly from item.image_path, handling missing paths
//         const imageSource = item.image_path
//           ? item.image_path
//           : "https://via.placeholder.com/200";

//         return (
//           <div className="product-item" key={item._id}>
//             <div
//               className="product-image"
//               style={{
//                 width: "200px",
//                 height: "200px",
//                 position: "relative",
//                 overflow: "hidden",
//                 marginLeft: "20%",
//               }}
//             >
//               <img
//                 src={imageSource}
//                 alt={item.description}
//                 style={{
//                   position: "absolute",
//                   top: "0",
//                   left: "0",
//                   width: "100%",
//                   height: "100%",
//                   objectFit: "cover",
//                 }}
//                 onError={(e) => {
//                   e.target.onerror = null;
//                   e.target.src = "https://via.placeholder.com/200";
//                 }}
//               />
//             </div>
//             <div className="product-details">
//               <h3>{item.item_type || item.name}</h3>
//               <p>Description: {item.description}</p>
//               {isEditing ? (
//                 <>
//                   <p>
//                     Price:
//                     <input
//                       type="number"
//                       value={editedPrices[item.id] || item.price}
//                       onChange={(e) =>
//                         setEditedPrices({
//                           ...editedPrices,
//                           [item.id]: parseFloat(e.target.value),
//                         })
//                       }
//                     />
//                   </p>
//                   <p>
//                     Quantity:
//                     <input
//                       type="number"
//                       value={editedQuantities[item.id] || item.quantity}
//                       onChange={(e) =>
//                         setEditedQuantities({
//                           ...editedQuantities,
//                           [item.id]: parseInt(e.target.value),
//                         })
//                       }
//                     />
//                   </p>
//                   <p>
//                     Length:
//                     <input
//                       type="number"
//                       value={editedLengths[item.id] || item.length}
//                       onChange={(e) =>
//                         setEditedLengths({
//                           ...editedLengths,
//                           [item.id]: parseFloat(e.target.value),
//                         })
//                       }
//                     />
//                   </p>
//                   <p>
//                     Width:
//                     <input
//                       type="number"
//                       value={editedWidths[item.id] || item.width}
//                       onChange={(e) =>
//                         setEditedWidths({
//                           ...editedWidths,
//                           [item.id]: parseFloat(e.target.value),
//                         })
//                       }
//                     />
//                   </p>
//                   <button onClick={() => handleUpdateProduct(item.id)}>
//                     Update
//                   </button>
//                   <button onClick={() => handleDelete(item.id)}>Delete</button>
//                 </>
//               ) : (
//                 <>
//                   <p>Price: ${item.price}</p>
//                   <p>Quantity: {item.quantity}</p>
//                   <p>
//                     Size: {item.length} x {item.width} cm
//                   </p>
//                 </>
//               )}

//               {/* <button onClick={() => navigate(`/product/${item._id}`)}>
//                 View Details
//               </button> */}
//               <button onClick={handleEditToggle}>
//                 {isEditing ? "View Mode" : "Edit Mode"}
//               </button>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default PersonalProducts;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./personalproduct.css";

const PersonalProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [editedQuantities, setEditedQuantities] = useState({});
  const [editedPrices, setEditedPrices] = useState({});
  const [editedLengths, setEditedLengths] = useState({});
  const [editedWidths, setEditedWidths] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const userId = localStorage.getItem("userId");
        if (!userId) {
          setError("User ID is missing. Please log in.");
          setLoading(false);
          return;
        }

        const url = `http://localhost:5000/api/items/user/${userId}`;
        const response = await fetch(url);

        if (!response.ok) {
          if (response.status === 404) {
            setError("No products found for this user.");
            setLoading(false);
            return;
          }
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setProducts(data);

        // Initialize edited states *after* setting products
        const initialQuantities = {};
        const initialPrices = {};
        const initialLengths = {};
        const initialWidths = {};

        data.forEach((item) => {
          initialQuantities[item.id] = item.quantity;
          initialPrices[item.id] = item.price.toString(); // Ensure price is a string
          initialLengths[item.id] = item.length;
          initialWidths[item.id] = item.width;
        });

        setEditedQuantities(initialQuantities);
        setEditedPrices(initialPrices); // <----  This is the important change
        setEditedLengths(initialLengths);
        setEditedWidths(initialWidths);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleDelete = async (itemId) => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      alert("Please log in to delete this product.");
      return;
    }

    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        const response = await fetch(
          `http://localhost:5000/api/items/${itemId}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ userId: userId }), // Corrected userId usage
          }
        );
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to delete product");
        }
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== itemId)
        );
        alert("Product deleted successfully.");
      } catch (error) {
        setError(error.message);
        console.error("Error deleting product:", error);
      }
    }
  };

  const handleUpdateProduct = async (itemId) => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      alert("Please log in to update product.");
      return;
    }
    const updatedPrice = parseFloat(editedPrices[itemId]);
    if (isNaN(updatedPrice)) {
      alert("Invalid price format. Please enter a valid number.");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:5000/api/items/${itemId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            quantity: editedQuantities[itemId],
            price: updatedPrice, // Use parsed price
            length: editedLengths[itemId],
            width: editedWidths[itemId],
            userId: userId,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to update product");
      }

      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === itemId
            ? {
                ...product,
                quantity: editedQuantities[itemId],
                price: updatedPrice, // Use parsed price
                length: editedLengths[itemId],
                width: editedWidths[itemId],
              }
            : product
        )
      );
      alert("Product updated successfully.");
    } catch (error) {
      setError(error.message);
      console.error("Error updating product:", error);
    }
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  if (loading) {
    return <div className="loading">Loading products...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  if (products.length === 0) {
    return <div>No products available for this user.</div>;
  }

  return (
    <div className="product-container">
      <h2>My Products</h2>
      <div className="productss">
        {products.map((item) => {
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
                <h3>{item.item_type || item.name}</h3>
                <p>Description: {item.description}</p>
                {isEditing ? (
                  <>
                    <p>
                      Price:
                      <input
                        type="text"
                        value={editedPrices[item.id] || ""}
                        onChange={(e) => {
                          const newPrice = e.target.value;
                          // Allow empty string, numbers, and a single decimal point
                          if (
                            newPrice === "" ||
                            /^(\d+(\.\d{0,2})?)?$/.test(newPrice)
                          ) {
                            setEditedPrices({
                              ...editedPrices,
                              [item.id]: newPrice,
                            });
                          }
                        }}
                      />
                    </p>
                    <p>
                      Quantity:
                      <input
                        type="number"
                        value={editedQuantities[item.id] || ""}
                        onChange={(e) => {
                          const newQuantity = parseInt(e.target.value, 10);
                          if (e.target.value === "" || !isNaN(newQuantity)) {
                            setEditedQuantities({
                              ...editedQuantities,
                              [item.id]:
                                e.target.value === "" ? null : newQuantity,
                            });
                          }
                        }}
                      />
                    </p>
                    <p>
                      Length:
                      <input
                        type="number"
                        value={editedLengths[item.id] || ""}
                        onChange={(e) => {
                          const newLength = parseFloat(e.target.value);
                          if (e.target.value === "" || !isNaN(newLength)) {
                            setEditedLengths({
                              ...editedLengths,
                              [item.id]:
                                e.target.value === "" ? null : newLength,
                            });
                          }
                        }}
                      />
                    </p>
                    <p>
                      Width:
                      <input
                        type="number"
                        value={editedWidths[item.id] || ""}
                        onChange={(e) => {
                          const newWidth = parseFloat(e.target.value);
                          if (e.target.value === "" || !isNaN(newWidth)) {
                            setEditedWidths({
                              ...editedWidths,
                              [item.id]:
                                e.target.value === "" ? null : newWidth,
                            });
                          }
                        }}
                      />
                    </p>
                    <div className="buttons">
                      <button onClick={() => handleUpdateProduct(item.id)}>
                        Update
                      </button>
                      <button onClick={() => handleDelete(item.id)}>
                        Delete
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <p>Price: ${item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>
                      Size: {item.length} x {item.width} cm
                    </p>
                  </>
                )}
                <button onClick={handleEditToggle}>
                  {isEditing ? "View Mode" : "Edit Mode"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PersonalProducts;
