// import React, { useState, useEffect } from "react";

// const DeliveryDetailsPage = ({ buyerId }) => {
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [buyer, setBuyer] = useState(null);
//   const [sellers, setSellers] = useState(null);
//   const API_BASE_URL = "http://localhost:5000";

//   useEffect(() => {
//     const fetchDeliveryDetails = async () => {
//       try {
//         const response = await fetch(
//           `${API_BASE_URL}/api/delivery-details/${buyerId}`
//         );
//         if (!response.ok) {
//           let errorMessage = `HTTP error! Status: ${response.status}`;
//           if (response.status === 404) {
//             errorMessage = "Delivery details not found.";
//           } else if (response.status === 500) {
//             errorMessage = "Internal server error. Please try again later.";
//           }
//           throw new Error(errorMessage);
//         }

//         const data = await response.json();
//         setLoading(false);
//         setError(null);

//         if (data && data.buyer) {
//           setBuyer(data.buyer);
//         } else {
//           setError("Buyer data is missing or malformed.");
//           setLoading(false);
//           return;
//         }

//         if (data && data.sellers) {
//           setSellers(data.sellers);
//         } else {
//           setSellers([]);
//         }
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };

//     fetchDeliveryDetails();
//   }, [buyerId]);

//   if (loading) {
//     return (
//       <div className="p-4">
//         <p>Loading delivery details...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return <div className="p-4 text-red-500">Error: {error}</div>;
//   }

//   if (!buyer) {
//     return <div className="p-4">No buyer data found.</div>;
//   }

//   return (
//     <div className="p-4 space-y-4">
//       <h1 className="text-2xl font-semibold text-blue-600">Delivery Details</h1>

//       <div className="buyer-details p-4 bg-gray-100 rounded-lg border border-gray-200">
//         <h2 className="text-xl font-semibold text-green-500 mb-2">
//           Buyer Information
//         </h2>
//         <p>
//           <span className="font-medium">Name:</span>{" "}
//           <span className="text-gray-700">{buyer.buyerName}</span>
//         </p>
//         <p>
//           <span className="font-medium">Phone:</span>{" "}
//           <span className="text-gray-700">{buyer.buyerPhoneNumber}</span>
//         </p>
//         <p>
//           <span className="font-medium">Address:</span>{" "}
//           <span className="text-gray-700">{buyer.buyerAddress}</span>
//         </p>
//       </div>

//       {sellers && sellers.length > 0 && (
//         <div className="sellers-details space-y-4">
//           <h2 className="text-xl font-semibold text-purple-500 mb-2">
//             Seller Information
//           </h2>
//           {sellers.map((seller) => (
//             <div
//               key={seller.sellerid} // Corrected key to seller.sellerid
//               className="seller-details p-4 bg-white rounded-lg border border-gray-200 mb-2"
//             >
//               <h3 className="text-lg font-semibold text-indigo-500 mb-1">
//                 Seller {/* Corrected to seller.sellerid */}
//               </h3>
//               <p>
//                 <span className="font-medium">Name:</span>{" "}
//                 <span className="text-gray-700">{seller.sellername}</span>{" "}
//                 {/* Corrected to seller.sellername */}
//               </p>
//               <p>
//                 <span className="font-medium">Address:</span>{" "}
//                 <span className="text-gray-700">{seller.selleraddress}</span>{" "}
//                 {/* Corrected to seller.selleraddress */}
//               </p>
//               <p>
//                 <span className="font-medium">Phone:</span>{" "}
//                 <span className="text-gray-700">
//                   {seller.sellerphonenumber}{" "}
//                   {/* Corrected to seller.sellerphonenumber */}
//                 </span>
//               </p>
//             </div>
//           ))}
//         </div>
//       )}
//       {sellers && sellers.length === 0 && (
//         <div className="p-4">
//           <p className="text-gray-500">
//             No sellers found for this buyer&apos;s items.
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// const DeliveryDetailsPageWrapper = () => {
//   const buyerId = 1;
//   return <DeliveryDetailsPage buyerId={buyerId} />;
// };

// export default DeliveryDetailsPageWrapper;

// import React, { useState, useEffect } from "react";

// const DeliveryDetailsPage = ({ buyerId }) => {
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [buyer, setBuyer] = useState(null);
//   const [sellers, setSellers] = useState(null);
//   const [message, setMessage] = useState("Deliver"); // Initial message state
//   const API_BASE_URL = "http://localhost:5000";

//   useEffect(() => {
//     const fetchDeliveryDetails = async () => {
//       try {
//         const response = await fetch(
//           `${API_BASE_URL}/api/delivery-details/${buyerId}`
//         );
//         if (!response.ok) {
//           let errorMessage = `HTTP error! Status: ${response.status}`;
//           if (response.status === 404) {
//             errorMessage = "Delivery details not found.";
//           } else if (response.status === 500) {
//             errorMessage = "Internal server error. Please try again later.";
//           }
//           throw new Error(errorMessage);
//         }

//         const data = await response.json();
//         setLoading(false);
//         setError(null);

//         if (data && data.buyer) {
//           setBuyer(data.buyer);
//         } else {
//           setError("Buyer data is missing or malformed.");
//           setLoading(false);
//           return;
//         }

//         if (data && data.sellers) {
//           setSellers(data.sellers);
//         } else {
//           setSellers([]);
//         }
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };

//     fetchDeliveryDetails();
//   }, [buyerId]);

//   const handleDeliverClick = () => {
//     setMessage("Pending");
//   };

//   const handleDeliveredClick = () => {
//     setMessage("Delivered");
//   };

//   if (loading) {
//     return (
//       <div className="p-4">
//         <p>Loading delivery details...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return <div className="p-4 text-red-500">Error: {error}</div>;
//   }

//   if (!buyer) {
//     return <div className="p-4">No buyer data found.</div>;
//   }

//   return (
//     <div className="p-4 space-y-4">
//       <h1 className="text-2xl font-semibold text-blue-600">Delivery Details</h1>

//       <div className="buyer-details p-4 bg-gray-100 rounded-lg border border-gray-200">
//         <h2 className="text-xl font-semibold text-green-500 mb-2">
//           Buyer Information
//         </h2>
//         <p>
//           <span className="font-medium">Name:</span>{" "}
//           <span className="text-gray-700">{buyer.buyerName}</span>
//         </p>
//         <p>
//           <span className="font-medium">Phone:</span>{" "}
//           <span className="text-gray-700">{buyer.buyerPhoneNumber}</span>
//         </p>
//         <p>
//           <span className="font-medium">Address:</span>{" "}
//           <span className="text-gray-700">{buyer.buyerAddress}</span>
//         </p>
//       </div>

//       {sellers && sellers.length > 0 && (
//         <div className="sellers-details space-y-4">
//           <h2 className="text-xl font-semibold text-purple-500 mb-2">
//             Seller Information
//           </h2>
//           {sellers.map((seller) => (
//             <div
//               key={seller.sellerid}
//               className="seller-details p-4 bg-white rounded-lg border border-gray-200 mb-2"
//             >
//               <h3 className="text-lg font-semibold text-indigo-500 mb-1">
//                 Seller
//               </h3>
//               <p>
//                 <span className="font-medium">Name:</span>{" "}
//                 <span className="text-gray-700">{seller.sellername}</span>
//               </p>
//               <p>
//                 <span className="font-medium">Address:</span>{" "}
//                 <span className="text-gray-700">{seller.selleraddress}</span>
//               </p>
//               <p>
//                 <span className="font-medium">Phone:</span>{" "}
//                 <span className="text-gray-700">
//                   {seller.sellerphonenumber}
//                 </span>
//               </p>
//             </div>
//           ))}
//         </div>
//       )}
//       {sellers && sellers.length === 0 && (
//         <div className="p-4">
//           <p className="text-gray-500">
//             No sellers found for this buyer&apos;s items.
//           </p>
//         </div>
//       )}
//       <div className="button-container flex gap-4">
//         {message === "Deliver" ? (
//           <button
//             onClick={handleDeliverClick}
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//           >
//             Deliver
//           </button>
//         ) : (
//           <button
//             onClick={handleDeliveredClick}
//             className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
//           >
//             Delivered
//           </button>
//         )}
//       </div>
//       {message && <p>Status: {message}</p>}
//     </div>
//   );
// };

// const DeliveryDetailsPageWrapper = () => {
//   const buyerId = 1;
//   return <DeliveryDetailsPage buyerId={buyerId} />;
// };

// export default DeliveryDetailsPageWrapper;

// import React, { useState, useEffect } from "react";

// const DeliveryDetailsPage = ({ buyerId }) => {
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [buyer, setBuyer] = useState(null);
//   const [sellers, setSellers] = useState(null);
//   const [message, setMessage] = useState("Deliver");
//   const [items, setItems] = useState([]);
//   const API_BASE_URL = "http://localhost:5000";

//   useEffect(() => {
//     const fetchDeliveryDetails = async () => {
//       try {
//         const response = await fetch(
//           `${API_BASE_URL}/api/delivery-details/${buyerId}`
//         );
//         if (!response.ok) {
//           let errorMessage = `HTTP error! Status: ${response.status}`;
//           if (response.status === 404) {
//             errorMessage = "Delivery details not found.";
//           } else if (response.status === 500) {
//             errorMessage = "Internal server error. Please try again later.";
//           }
//           throw new Error(errorMessage);
//         }

//         const data = await response.json();
//         setLoading(false);
//         setError(null);

//         if (data && data.buyer) {
//           setBuyer(data.buyer);
//           setItems(data.buyer.items || []);
//         } else {
//           setError("Buyer data is missing or malformed.");
//           setLoading(false);
//           return;
//         }

//         if (data && data.sellers) {
//           setSellers(data.sellers);
//         } else {
//           setSellers([]);
//         }
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };

//     fetchDeliveryDetails();
//   }, [buyerId]);

//   const handleDeliverClick = () => {
//     setMessage("Pending");
//   };

//   const handleDeliveredClick = () => {
//     setMessage("Delivered");
//   };

//   if (loading) {
//     return (
//       <div className="p-4">
//         <p>Loading delivery details...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return <div className="p-4 text-red-500">Error: {error}</div>;
//   }

//   if (!buyer) {
//     return <div className="p-4">No buyer data found.</div>;
//   }

//   return (
//     <div className="p-4 space-y-4">
//       <h1 className="text-2xl font-semibold text-blue-600">Delivery Details</h1>

//       <div className="buyer-details p-4 bg-gray-100 rounded-lg border border-gray-200">
//         <h2 className="text-xl font-semibold text-green-500 mb-2">
//           Buyer Information
//         </h2>
//         <p>
//           <span className="font-medium">Name:</span>{" "}
//           <span className="text-gray-700">{buyer.buyerName}</span>
//         </p>
//         <p>
//           <span className="font-medium">Phone:</span>{" "}
//           <span className="text-gray-700">{buyer.buyerPhoneNumber}</span>
//         </p>
//         <p>
//           <span className="font-medium">Address:</span>{" "}
//           <span className="text-gray-700">{buyer.buyerAddress}</span>
//         </p>
//         {items && items.length > 0 && (
//           <div>
//             <h4 className="font-semibold">Items:</h4>
//             <ul>
//               {items.map((item, index) => (
//                 <li key={index}>
//                   {item.quantity} x {item.itemType} (ID: {item.id})
//                   <p>Description: {item.description}</p>
//                   <p>Length: {item.length}</p>
//                   <p>Width: {item.width}</p>
//                   <p>Price: {item.price}</p>
//                   {item.image_path && (
//                     <div
//                       style={{
//                         display: "flex",
//                         flexDirection: "column",
//                         alignItems: "flex-start",
//                       }}
//                     >
//                       <img
//                         src={item.image_path}
//                         alt={item.itemType}
//                         style={{
//                           maxWidth: "100px",
//                           maxHeight: "100px",
//                           marginLeft: "10px",
//                         }}
//                       />
//                     </div>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//         {(!items || items.length === 0) && (
//           <p>
//             <span className="font-medium">Items:</span> No items found for this
//             buyer.
//           </p>
//         )}
//       </div>

//       {sellers && sellers.length > 0 && (
//         <div className="sellers-details space-y-4">
//           <h2 className="text-xl font-semibold text-purple-500 mb-2">
//             Seller Information
//           </h2>
//           {sellers.map((seller) => (
//             <div
//               key={seller.sellerid}
//               className="seller-details p-4 bg-white rounded-lg border border-gray-200 mb-2"
//             >
//               <h3 className="text-lg font-semibold text-indigo-500 mb-1">
//                 Seller
//               </h3>
//               <p>
//                 <span className="font-medium">Name:</span>{" "}
//                 <span className="text-gray-700">{seller.sellername}</span>
//               </p>
//               <p>
//                 <span className="font-medium">Address:</span>{" "}
//                 <span className="text-gray-700">{seller.selleraddress}</span>
//               </p>
//               <p>
//                 <span className="font-medium">Phone:</span>{" "}
//                 <span className="text-gray-700">
//                   {seller.sellerphonenumber}
//                 </span>
//               </p>
//             </div>
//           ))}
//         </div>
//       )}
//       {sellers && sellers.length === 0 && (
//         <div className="p-4">
//           <p className="text-gray-500">
//             No sellers found for this buyer&apos;s items.
//           </p>
//         </div>
//       )}
//       <div className="button-container flex gap-4">
//         {message === "Deliver" ? (
//           <button
//             onClick={handleDeliverClick}
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//           >
//             Deliver
//           </button>
//         ) : (
//           <button
//             onClick={handleDeliveredClick}
//             className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
//           >
//             Delivered
//           </button>
//         )}
//       </div>
//       {message && <p>Status: {message}</p>}
//     </div>
//   );
// };

// const DeliveryDetailsPageWrapper = () => {
//   const buyerId = 1;
//   return <DeliveryDetailsPage buyerId={buyerId} />;
// };

// export default DeliveryDetailsPageWrapper;

// import React, { useState, useEffect } from "react";

// const DeliveryDetailsPage = ({ buyerId }) => {
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [buyer, setBuyer] = useState(null);
//   const [sellers, setSellers] = useState(null);
//   const [message, setMessage] = useState("Deliver");
//   const [items, setItems] = useState([]);
//   const API_BASE_URL = "http://localhost:5000";

//   useEffect(() => {
//     const fetchDeliveryDetails = async () => {
//       try {
//         const response = await fetch(
//           `${API_BASE_URL}/api/delivery-details/${buyerId}`
//         );
//         if (!response.ok) {
//           let errorMessage = `HTTP error! Status: ${response.status}`;
//           if (response.status === 404) {
//             errorMessage = "Delivery details not found.";
//           } else if (response.status === 500) {
//             errorMessage = "Internal server error. Please try again later.";
//           }
//           throw new Error(errorMessage);
//         }

//         const data = await response.json();
//         setLoading(false);
//         setError(null);

//         if (data && data.buyer) {
//           setBuyer(data.buyer);
//           setItems(data.buyer.items || []);
//         } else {
//           setError("Buyer data is missing or malformed.");
//           setLoading(false);
//           return;
//         }

//         if (data && data.sellers) {
//           setSellers(data.sellers);
//         } else {
//           setSellers([]);
//         }
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };

//     fetchDeliveryDetails();
//   }, [buyerId]);

//   const handleDeliverClick = () => {
//     setMessage("Pending");
//   };

//   const handleDeliveredClick = async () => {
//     setMessage("Delivered");
//     try {
//       // Send a request to your backend to update the order status
//       const response = await fetch(`${API_BASE_URL}/api/orders/update-status`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ buyerId: buyerId, newStatus: "Delivered" }),
//       });

//       if (!response.ok) {
//         throw new Error(`Failed to update order status: ${response.status}`);
//       }

//       const result = await response.json();
//       console.log(result.message); // Log the response from the backend
//       // Optionally, you can show a success message to the user
//     } catch (error) {
//       setError(error.message); // Set the error state
//       console.error("Error updating order status:", error);
//       // Optionally, show an error message to the user
//     }
//   };

//   if (loading) {
//     return (
//       <div className="p-4">
//         <p>Loading delivery details...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return <div className="p-4 text-red-500">Error: {error}</div>;
//   }

//   if (!buyer) {
//     return <div className="p-4">No buyer data found.</div>;
//   }

//   return (
//     <div className="p-4 space-y-4">
//       <h1 className="text-2xl font-semibold text-blue-600">Delivery Details</h1>

//       <div className="buyer-details p-4 bg-gray-100 rounded-lg border border-gray-200">
//         <h2 className="text-xl font-semibold text-green-500 mb-2">
//           Buyer Information
//         </h2>
//         <p>
//           <span className="font-medium">Name:</span>{" "}
//           <span className="text-gray-700">{buyer.buyerName}</span>
//         </p>
//         <p>
//           <span className="font-medium">Phone:</span>{" "}
//           <span className="text-gray-700">{buyer.buyerPhoneNumber}</span>
//         </p>
//         <p>
//           <span className="font-medium">Address:</span>{" "}
//           <span className="text-gray-700">{buyer.buyerAddress}</span>
//         </p>
//         {items && items.length > 0 && (
//           <div>
//             <h4 className="font-semibold">Items:</h4>
//             <ul>
//               {items.map((item, index) => (
//                 <li key={index}>
//                   {item.quantity} x {item.itemType} (ID: {item.id})
//                   <p>Description: {item.description}</p>
//                   <p>Length: {item.length}</p>
//                   <p>Width: {item.width}</p>
//                   <p>Price: {item.price}</p>
//                   {item.image_path && (
//                     <div
//                       style={{
//                         display: "flex",
//                         flexDirection: "column",
//                         alignItems: "flex-start",
//                       }}
//                     >
//                       <img
//                         src={item.image_path}
//                         alt={item.itemType}
//                         style={{
//                           maxWidth: "100px",
//                           maxHeight: "100px",
//                           marginLeft: "10px",
//                         }}
//                       />
//                     </div>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//         {(!items || items.length === 0) && (
//           <p>
//             <span className="font-medium">Items:</span> No items found for this
//             buyer.
//           </p>
//         )}
//       </div>

//       {sellers && sellers.length > 0 && (
//         <div className="sellers-details space-y-4">
//           <h2 className="text-xl font-semibold text-purple-500 mb-2">
//             Seller Information
//           </h2>
//           {sellers.map((seller) => (
//             <div
//               key={seller.sellerid}
//               className="seller-details p-4 bg-white rounded-lg border border-gray-200 mb-2"
//             >
//               <h3 className="text-lg font-semibold text-indigo-500 mb-1">
//                 Seller
//               </h3>
//               <p>
//                 <span className="font-medium">Name:</span>{" "}
//                 <span className="text-gray-700">{seller.sellername}</span>
//               </p>
//               <p>
//                 <span className="font-medium">Address:</span>{" "}
//                 <span className="text-gray-700">{seller.selleraddress}</span>
//               </p>
//               <p>
//                 <span className="font-medium">Phone:</span>{" "}
//                 <span className="text-gray-700">
//                   {seller.sellerphonenumber}
//                 </span>
//               </p>
//             </div>
//           ))}
//         </div>
//       )}
//       {sellers && sellers.length === 0 && (
//         <div className="p-4">
//           <p className="text-gray-500">
//             No sellers found for this buyer&apos;s items.
//           </p>
//         </div>
//       )}
//       <div className="button-container flex gap-4">
//         {message === "Deliver" ? (
//           <button
//             onClick={handleDeliverClick}
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//           >
//             Deliver
//           </button>
//         ) : (
//           <button
//             onClick={handleDeliveredClick}
//             className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
//           >
//             Delivered
//           </button>
//         )}
//       </div>
//       {message && <p>Status: {message}</p>}
//     </div>
//   );
// };

// const DeliveryDetailsPageWrapper = () => {
//   const buyerId = 1;
//   return <DeliveryDetailsPage buyerId={buyerId} />;
// };

// export default DeliveryDetailsPageWrapper;

// import React, { useState, useEffect } from "react";

// const DeliveryDetailsPage = ({ buyerId }) => {
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [buyer, setBuyer] = useState(null);
//   const [sellers, setSellers] = useState(null);
//   const [message, setMessage] = useState("Deliver");
//   const [items, setItems] = useState([]);
//   const [deliveryTime, setDeliveryTime] = useState(null); // Add state for deliveryTime
//   const API_BASE_URL = "http://localhost:5000";

//   useEffect(() => {
//     const fetchDeliveryDetails = async () => {
//       try {
//         const response = await fetch(
//           `${API_BASE_URL}/api/delivery-details/${buyerId}`
//         );
//         if (!response.ok) {
//           let errorMessage = `HTTP error! Status: ${response.status}`;
//           if (response.status === 404) {
//             errorMessage = "Delivery details not found.";
//           } else if (response.status === 500) {
//             errorMessage = "Internal server error. Please try again later.";
//           }
//           throw new Error(errorMessage);
//         }

//         const data = await response.json();
//         setLoading(false);
//         setError(null);

//         if (data && data.buyer) {
//           setBuyer(data.buyer);
//           setItems(data.buyer.items || []);
//         } else {
//           setError("Buyer data is missing or malformed.");
//           setLoading(false);
//           return;
//         }

//         if (data && data.sellers) {
//           setSellers(data.sellers);
//         } else {
//           setSellers([]);
//         }

//         // Set deliveryTime from the response
//         setDeliveryTime(data.deliveryTime);
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };

//     fetchDeliveryDetails();
//   }, [buyerId]);

//   const handleDeliverClick = () => {
//     setMessage("Pending");
//   };

//   const handleDeliveredClick = async () => {
//     setMessage("Delivered");
//     try {
//       // Send a request to your backend to update the order status
//       const response = await fetch(`${API_BASE_URL}/api/orders/update-status`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ buyerId: buyerId, newStatus: "Delivered" }),
//       });

//       if (!response.ok) {
//         throw new Error(`Failed to update order status: ${response.status}`);
//       }

//       const result = await response.json();
//       console.log(result.message); // Log the response from the backend
//       // Optionally, you can show a success message to the user
//     } catch (error) {
//       setError(error.message); // Set the error state
//       console.error("Error updating order status:", error);
//       // Optionally, show an error message to the user
//     }
//   };

//   if (loading) {
//     return (
//       <div className="p-4">
//         <p>Loading delivery details...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return <div className="p-4 text-red-500">Error: {error}</div>;
//   }

//   if (!buyer) {
//     return <div className="p-4">No buyer data found.</div>;
//   }

//   return (
//     <div className="p-4 space-y-4">
//       <h1 className="text-2xl font-semibold text-blue-600">Delivery Details</h1>

//       <div className="buyer-details p-4 bg-gray-100 rounded-lg border border-gray-200">
//         <h2 className="text-xl font-semibold text-green-500 mb-2">
//           Buyer Information
//         </h2>
//         <p>
//           <span className="font-medium">Name:</span>{" "}
//           <span className="text-gray-700">{buyer.buyerName}</span>
//         </p>
//         <p>
//           <span className="font-medium">Phone:</span>{" "}
//           <span className="text-gray-700">{buyer.buyerPhoneNumber}</span>
//         </p>
//         <p>
//           <span className="font-medium">Address:</span>{" "}
//           <span className="text-gray-700">{buyer.buyerAddress}</span>
//         </p>
//         {deliveryTime && (
//           <p>
//             <span className="font-medium">Delivery Time:</span>{" "}
//             <span className="text-gray-700">{deliveryTime}</span>
//           </p>
//         )}
//         {items && items.length > 0 && (
//           <div>
//             <h4 className="font-semibold">Items:</h4>
//             <ul>
//               {items.map((item, index) => (
//                 <li key={index}>
//                   {item.quantity} x {item.itemType} (ID: {item.id})
//                   <p>Description: {item.description}</p>
//                   <p>Length: {item.length}</p>
//                   <p>Width: {item.width}</p>
//                   <p>Price: {item.price}</p>
//                   {item.image_path && (
//                     <div
//                       style={{
//                         display: "flex",
//                         flexDirection: "column",
//                         alignItems: "flex-start",
//                       }}
//                     >
//                       <img
//                         src={item.image_path}
//                         alt={item.itemType}
//                         style={{
//                           maxWidth: "100px",
//                           maxHeight: "100px",
//                           marginLeft: "10px",
//                         }}
//                       />
//                     </div>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//         {(!items || items.length === 0) && (
//           <p>
//             <span className="font-medium">Items:</span> No items found for this
//             buyer.
//           </p>
//         )}
//       </div>

//       {sellers && sellers.length > 0 && (
//         <div className="sellers-details space-y-4">
//           <h2 className="text-xl font-semibold text-purple-500 mb-2">
//             Seller Information
//           </h2>
//           {sellers.map((seller) => (
//             <div
//               key={seller.sellerid}
//               className="seller-details p-4 bg-white rounded-lg border border-gray-200 mb-2"
//             >
//               <h3 className="text-lg font-semibold text-indigo-500 mb-1">
//                 Seller
//               </h3>
//               <p>
//                 <span className="font-medium">Name:</span>{" "}
//                 <span className="text-gray-700">{seller.sellername}</span>
//               </p>
//               <p>
//                 <span className="font-medium">Address:</span>{" "}
//                 <span className="text-gray-700">{seller.selleraddress}</span>
//               </p>
//               <p>
//                 <span className="font-medium">Phone:</span>{" "}
//                 <span className="text-gray-700">
//                   {seller.sellerphonenumber}
//                 </span>
//               </p>
//             </div>
//           ))}
//         </div>
//       )}
//       {sellers && sellers.length === 0 && (
//         <div className="p-4">
//           <p className="text-gray-500">
//             No sellers found for this buyer&apos;s items.
//           </p>
//         </div>
//       )}
//       <div className="button-container flex gap-4">
//         {message === "Deliver" ? (
//           <button
//             onClick={handleDeliverClick}
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//           >
//             Deliver
//           </button>
//         ) : (
//           <button
//             onClick={handleDeliveredClick}
//             className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
//           >
//             Delivered
//           </button>
//         )}
//       </div>
//       {message && <p>Status: {message}</p>}
//     </div>
//   );
// };

// const DeliveryDetailsPageWrapper = () => {
//   const buyerId = 1;
//   return <DeliveryDetailsPage buyerId={buyerId} />;
// };

// export default DeliveryDetailsPageWrapper;

// import React, { useState, useEffect } from "react";

// const DeliveryDetailsPage = () => {
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [buyers, setBuyers] = useState([]);
//   const [message, setMessage] = useState("Deliver");
//   const API_BASE_URL = "http://localhost:5000";

//   useEffect(() => {
//     const fetchDeliveryDetails = async () => {
//       try {
//         const response = await fetch(`${API_BASE_URL}/api/delivery-details`);
//         if (!response.ok) {
//           let errorMessage = `HTTP error! Status: ${response.status}`;
//           if (response.status === 404) {
//             errorMessage = "Delivery details not found.";
//           } else if (response.status === 500) {
//             errorMessage = "Internal server error. Please try again later.";
//           }
//           throw new Error(errorMessage);
//         }

//         const data = await response.json();
//         console.log(
//           "[Frontend DEBUG] Response Data:",
//           JSON.stringify(data, null, 2)
//         );

//         if (data && data.buyers && Array.isArray(data.buyers)) {
//           setBuyers(data.buyers);
//           setLoading(false);
//           setError(null);
//         } else {
//           setError("Invalid response format: No buyers data found.");
//           setLoading(false);
//         }
//       } catch (error) {
//         console.error("[Frontend DEBUG] Fetch Error:", error);
//         setError(error.message);
//         setLoading(false);
//       }
//     };

//     fetchDeliveryDetails();
//   }, []);

//   const handleDeliverClick = (buyerId) => {
//     setMessage(`Pending for Buyer ${buyerId}`);
//   };

//   const handleDeliveredClick = async (buyerId) => {
//     setMessage(`Delivered for Buyer ${buyerId}`);
//     try {
//       const response = await fetch(`${API_BASE_URL}/api/orders/update-status`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ buyerId: buyerId, newStatus: "Delivered" }),
//       });

//       if (!response.ok) {
//         throw new Error(`Failed to update order status: ${response.status}`);
//       }

//       const result = await response.json();
//       console.log("[Frontend DEBUG] Update Status Response:", result.message);
//     } catch (error) {
//       console.error("[Frontend DEBUG] Error updating order status:", error);
//       setError(error.message);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="p-4">
//         <p>Loading delivery details...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return <div className="p-4 text-red-500">Error: {error}</div>;
//   }

//   if (buyers.length === 0) {
//     return <div className="p-4">No buyer data found.</div>;
//   }

//   return (
//     <div className="p-4 space-y-4">
//       <h1 className="text-2xl font-semibold text-blue-600">Delivery Details</h1>

//       {buyers.map((buyer) => (
//         <div key={buyer.buyerId} className="buyer-section mb-8 border-b pb-4">
//           <div className="buyer-details p-4 bg-gray-100 rounded-lg border border-gray-200">
//             <h2 className="text-xl font-semibold text-green-500 mb-2">
//               Buyer Information (ID: {buyer.buyerId})
//             </h2>
//             <p>
//               <span className="font-medium">Name:</span>{" "}
//               <span className="text-gray-700">{buyer.buyerName}</span>
//             </p>
//             <p>
//               <span className="font-medium">Phone:</span>{" "}
//               <span className="text-gray-700">{buyer.buyerPhoneNumber}</span>
//             </p>
//             <p>
//               <span className="font-medium">Address:</span>{" "}
//               <span className="text-gray-700">{buyer.buyerAddress}</span>
//             </p>
//             {buyer.deliveryTime && (
//               <p>
//                 <span className="font-medium">Delivery Time:</span>{" "}
//                 <span className="text-gray-700">{buyer.deliveryTime}</span>
//               </p>
//             )}
//             {buyer.items && buyer.items.length > 0 && (
//               <div>
//                 <h4 className="font-semibold">Items:</h4>
//                 <ul>
//                   {buyer.items.map((item, index) => (
//                     <li key={index}>
//                       {item.quantity} x {item.item_type} (ID: {item.id})
//                       <p>Description: {item.description || "N/A"}</p>
//                       <p>Length: {item.length || "N/A"}</p>
//                       <p>Width: {item.width || "N/A"}</p>
//                       <p>Price: {item.price || "N/A"}</p>
//                       {item.image_path && (
//                         <div
//                           style={{
//                             display: "flex",
//                             flexDirection: "column",
//                             alignItems: "flex-start",
//                           }}
//                         >
//                           <img
//                             src={item.image_path}
//                             alt={item.item_type || "Item"}
//                             style={{
//                               maxWidth: "100px",
//                               maxHeight: "100px",
//                               marginLeft: "10px",
//                             }}
//                           />
//                         </div>
//                       )}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//             {(!buyer.items || buyer.items.length === 0) && (
//               <p>
//                 <span className="font-medium">Items:</span> No items found for
//                 this buyer.
//               </p>
//             )}
//           </div>

//           {buyer.sellers && buyer.sellers.length > 0 && (
//             <div className="sellers-details space-y-4 mt-4">
//               <h2 className="text-xl font-semibold text-purple-500 mb-2">
//                 Seller Information
//               </h2>
//               {buyer.sellers.map((seller) => (
//                 <div
//                   key={seller.sellerid}
//                   className="seller-details p-4 bg-white rounded-lg border border-gray-200 mb-2"
//                 >
//                   <h3 className="text-lg font-semibold text-indigo-500 mb-1">
//                     Seller
//                   </h3>
//                   <p>
//                     <span className="font-medium">Name:</span>{" "}
//                     <span className="text-gray-700">{seller.sellername}</span>
//                   </p>
//                   <p>
//                     <span className="font-medium">Address:</span>{" "}
//                     <span className="text-gray-700">
//                       {seller.selleraddress}
//                     </span>
//                   </p>
//                   <p>
//                     <span className="font-medium">Phone:</span>{" "}
//                     <span className="text-gray-700">
//                       {seller.sellerphonenumber}
//                     </span>
//                   </p>
//                   <p>
//                     <span className="font-medium">Email:</span>{" "}
//                     <span className="text-gray-700">{seller.selleremail}</span>
//                   </p>
//                 </div>
//               ))}
//             </div>
//           )}
//           {buyer.sellers && buyer.sellers.length === 0 && (
//             <div className="p-4">
//               <p className="text-gray-500">
//                 No sellers found for this buyer's items.
//               </p>
//             </div>
//           )}

//           <div className="button-container flex gap-4 mt-4">
//             {message.includes(buyer.buyerId) ? (
//               <button
//                 onClick={() => handleDeliveredClick(buyer.buyerId)}
//                 className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
//               >
//                 Delivered
//               </button>
//             ) : (
//               <button
//                 onClick={() => handleDeliverClick(buyer.buyerId)}
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//               >
//                 Deliver
//               </button>
//             )}
//           </div>
//           {message.includes(buyer.buyerId) && <p>Status: {message}</p>}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DeliveryDetailsPage;

// import React, { useState, useEffect } from "react";

// const DeliveryDetailsPage = () => {
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [buyers, setBuyers] = useState([]);
//   const [message, setMessage] = useState("Deliver");
//   const API_BASE_URL = "http://localhost:5000";

//   useEffect(() => {
//     const fetchDeliveryDetails = async () => {
//       try {
//         const response = await fetch(`${API_BASE_URL}/api/delivery-details`);
//         if (!response.ok) {
//           let errorMessage = `HTTP error! Status: ${response.status}`;
//           if (response.status === 404) {
//             errorMessage = "Delivery details not found.";
//           } else if (response.status === 500) {
//             errorMessage = "Internal server error. Please try again later.";
//           }
//           throw new Error(errorMessage);
//         }

//         const data = await response.json();
//         console.log(
//           "[Frontend DEBUG] Response Data:",
//           JSON.stringify(data, null, 2)
//         );

//         if (data && data.buyers && Array.isArray(data.buyers)) {
//           // Filter out buyers with 'Delivered' status
//           const filteredBuyers = data.buyers.filter(
//             (buyer) =>
//               buyer.status &&
//               buyer.status !== "Delivered" &&
//               buyer.status !== "cancelled"
//           );
//           console.log(
//             "[Frontend DEBUG] Filtered Buyers:",
//             JSON.stringify(filteredBuyers, null, 2)
//           );
//           setBuyers(filteredBuyers);
//           setLoading(false);
//           setError(null);
//         } else {
//           setError("Invalid response format: No buyers data found.");
//           setLoading(false);
//         }
//       } catch (error) {
//         console.error("[Frontend DEBUG] Fetch Error:", error);
//         setError(error.message);
//         setLoading(false);
//       }
//     };

//     fetchDeliveryDetails();
//   }, []);

//   const handleDeliverClick = (buyerId) => {
//     console.log("[Frontend DEBUG] Deliver Clicked for Buyer ID:", buyerId);
//     setMessage(`Pending for Buyer ${buyerId}`);
//   };

//   const handleDeliveredClick = async (buyerId) => {
//     console.log("[Frontend DEBUG] Delivered Clicked for Buyer ID:", buyerId);
//     try {
//       const response = await fetch(`${API_BASE_URL}/api/orders/update-status`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           buyerId: Number(buyerId),
//           newStatus: "Delivered",
//         }),
//       });

//       if (!response.ok) {
//         throw new Error(`Failed to update order status: ${response.status}`);
//       }

//       const result = await response.json();
//       console.log("[Frontend DEBUG] Update Status Response:", result.message);

//       // Remove the buyer (and their sellers) from the state
//       setBuyers((prevBuyers) => {
//         console.log(
//           "[Frontend DEBUG] Buyers Before Removal:",
//           JSON.stringify(prevBuyers, null, 2)
//         );
//         const updatedBuyers = prevBuyers.filter(
//           (buyer) => Number(buyer.buyerId) !== Number(buyerId)
//         );
//         console.log(
//           "[Frontend DEBUG] Buyers After Removal:",
//           JSON.stringify(updatedBuyers, null, 2)
//         );
//         return updatedBuyers;
//       });
//       setMessage(`Delivered for Buyer ${buyerId}`);
//     } catch (error) {
//       console.error("[Frontend DEBUG] Error updating order status:", error);
//       setError(error.message);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="p-4">
//         <p>Loading delivery details...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return <div className="p-4 text-red-500">Error: {error}</div>;
//   }

//   if (buyers.length === 0) {
//     return <div className="p-4">No pending buyer data found.</div>;
//   }

//   return (
//     <div className="p-4 space-y-4">
//       <h1 className="text-2xl font-semibold text-blue-600">Delivery Details</h1>

//       {buyers.map((buyer) => (
//         <div key={buyer.buyerId} className="buyer-section mb-8 border-b pb-4">
//           <div className="buyer-details p-4 bg-gray-100 rounded-lg border border-gray-200">
//             <h2 className="text-xl font-semibold text-green-500 mb-2">
//               Buyer Information (ID: {buyer.buyerId})
//             </h2>
//             <p>
//               <span className="font-medium">Name:</span>{" "}
//               <span className="text-gray-700">{buyer.buyerName}</span>
//             </p>
//             <p>
//               <span className="font-medium">Phone:</span>{" "}
//               <span className="text-gray-700">{buyer.buyerPhoneNumber}</span>
//             </p>
//             <p>
//               <span className="font-medium">Address:</span>{" "}
//               <span className="text-gray-700">{buyer.buyerAddress}</span>
//             </p>
//             {buyer.deliveryTime && (
//               <p>
//                 <span className="font-medium">Delivery Time:</span>{" "}
//                 <span className="text-gray-700">{buyer.deliveryTime}</span>
//               </p>
//             )}
//             <p>
//               <span className="font-medium">Order Status:</span>{" "}
//               <span className="text-gray-700">{buyer.status || "N/A"}</span>
//             </p>
//             {buyer.items && buyer.items.length > 0 && (
//               <div>
//                 <h4 className="font-semibold">Items:</h4>
//                 <ul>
//                   {buyer.items.map((item, index) => (
//                     <li key={index}>
//                       {item.quantity} x {item.item_type} (ID: {item.id})
//                       <p>Description: {item.description || "N/A"}</p>
//                       <p>Length: {item.length || "N/A"}</p>
//                       <p>Width: {item.width || "N/A"}</p>
//                       <p>Price: {item.price || "N/A"}</p>
//                       {item.image_path && (
//                         <div
//                           style={{
//                             display: "flex",
//                             flexDirection: "column",
//                             alignItems: "flex-start",
//                           }}
//                         >
//                           <img
//                             src={item.image_path}
//                             alt={item.item_type || "Item"}
//                             style={{
//                               maxWidth: "100px",
//                               maxHeight: "100px",
//                               marginLeft: "10px",
//                             }}
//                           />
//                         </div>
//                       )}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//             {(!buyer.items || buyer.items.length === 0) && (
//               <p>
//                 <span className="font-medium">Items:</span> No items found for
//                 this buyer.
//               </p>
//             )}
//           </div>

//           {buyer.sellers && buyer.sellers.length > 0 && (
//             <div className="sellers-details space-y-4 mt-4">
//               <h2 className="text-xl font-semibold text-purple-500 mb-2">
//                 Seller Information
//               </h2>
//               {buyer.sellers.map((seller) => (
//                 <div
//                   key={seller.sellerid}
//                   className="seller-details p-4 bg-white rounded-lg border border-gray-200 mb-2"
//                 >
//                   <h3 className="text-lg font-semibold text-indigo-500 mb-1">
//                     Seller
//                   </h3>
//                   <p>
//                     <span className="font-medium">Name:</span>{" "}
//                     <span className="text-gray-700">{seller.sellername}</span>
//                   </p>
//                   <p>
//                     <span className="font-medium">Address:</span>{" "}
//                     <span className="text-gray-700">
//                       {seller.selleraddress}
//                     </span>
//                   </p>
//                   <p>
//                     <span className="font-medium">Phone:</span>{" "}
//                     <span className="text-gray-700">
//                       {seller.sellerphonenumber}
//                     </span>
//                   </p>
//                   <p>
//                     <span className="font-medium">Email:</span>{" "}
//                     <span className="text-gray-700">{seller.selleremail}</span>
//                   </p>
//                 </div>
//               ))}
//             </div>
//           )}
//           {buyer.sellers && buyer.sellers.length === 0 && (
//             <div className="p-4">
//               <p className="text-gray-500">
//                 No sellers found for this buyer's items.
//               </p>
//             </div>
//           )}

//           <div className="button-container flex gap-4 mt-4">
//             {message.includes(buyer.buyerId) ? (
//               <button
//                 onClick={() => handleDeliveredClick(buyer.buyerId)}
//                 className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
//               >
//                 Delivered
//               </button>
//             ) : (
//               <button
//                 onClick={() => handleDeliverClick(buyer.buyerId)}
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//               >
//                 Deliver
//               </button>
//             )}
//           </div>
//           {message.includes(buyer.buyerId) && <p>Status: {message}</p>}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DeliveryDetailsPage;

import React, { useState, useEffect } from "react";

const DeliveryDetailsPage = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [buyers, setBuyers] = useState([]);
  const [message, setMessage] = useState("Deliver");
  const API_BASE_URL = "http://localhost:5000";

  useEffect(() => {
    const fetchDeliveryDetails = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/delivery-details`);
        if (!response.ok) {
          let errorMessage = `HTTP error! Status: ${response.status}`;
          if (response.status === 404) {
            errorMessage = "Delivery details not found.";
          } else if (response.status === 500) {
            errorMessage = "Internal server error. Please try again later.";
          }
          throw new Error(errorMessage);
        }

        const data = await response.json();
        console.log(
          "[Frontend DEBUG] Response Data:",
          JSON.stringify(data, null, 2)
        );

        if (data && data.buyers && Array.isArray(data.buyers)) {
          const filteredBuyers = data.buyers.filter(
            (buyer) =>
              buyer.status &&
              buyer.status !== "Delivered" &&
              buyer.status !== "cancelled"
          );
          console.log(
            "[Frontend DEBUG] Filtered Buyers:",
            JSON.stringify(filteredBuyers, null, 2)
          );
          setBuyers(filteredBuyers);
          setLoading(false);
          setError(null);
        } else {
          setError("Invalid response format: No buyers data found.");
          setLoading(false);
        }
      } catch (error) {
        console.error("[Frontend DEBUG] Fetch Error:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchDeliveryDetails();
  }, []);

  const handleDeliverClick = (buyerId) => {
    console.log("[Frontend DEBUG] Deliver Clicked for Buyer ID:", buyerId);
    setMessage(`Pending for Buyer ${buyerId}`);
  };

  const handleDeliveredClick = async (buyerId) => {
    console.log("[Frontend DEBUG] Delivered Clicked for Buyer ID:", buyerId);
    try {
      const response = await fetch(`${API_BASE_URL}/api/orders/update-status`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          buyerId: Number(buyerId),
          newStatus: "Delivered",
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to update order status: ${response.status}`);
      }

      const result = await response.json();
      console.log("[Frontend DEBUG] Update Status Response:", result.message);

      setBuyers((prevBuyers) => {
        console.log(
          "[Frontend DEBUG] Buyers Before Removal:",
          JSON.stringify(prevBuyers, null, 2)
        );
        const updatedBuyers = prevBuyers.filter(
          (buyer) => Number(buyer.buyerId) !== Number(buyerId)
        );
        console.log(
          "[Frontend DEBUG] Buyers After Removal:",
          JSON.stringify(updatedBuyers, null, 2)
        );
        return updatedBuyers;
      });
      setMessage(`Delivered for Buyer ${buyerId}`);
    } catch (error) {
      console.error("[Frontend DEBUG] Error updating order status:", error);
      setError(error.message);
    }
  };

  if (loading) {
    return (
      <div className="container text-center my-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3">Loading delivery details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container my-5">
        <div className="alert alert-danger" role="alert">
          Error: {error}
        </div>
      </div>
    );
  }

  if (buyers.length === 0) {
    return (
      <div className="container my-5 text-center">
        <div className="alert alert-info" role="alert">
          No pending buyer data found.
        </div>
      </div>
    );
  }

  return (
    <div className="container my-4">
      <h1 className="mb-4 text-center">Delivery Details</h1>
      {buyers.map((buyer) => (
        <div key={buyer.buyerId} className="card mb-4 shadow-sm">
          <div className="card-header bg-light d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Order Information</h5>
            <span className="badge bg-success">{buyer.status || "N/A"}</span>
          </div>
          <div className="card-body">
            {/* Buyer Details */}
            {/* Buyer Details */}
            <div className="mb-4">
              <h6 className="card-title">
                Buyer Details:<br></br>ID: {buyer.buyerId}
              </h6>
              <p className="mb-1">
                <strong>Name:</strong> {buyer.buyerName}
              </p>
              <p className="mb-1">
                <strong>Phone:</strong> {buyer.buyerPhoneNumber}
              </p>
              <p className="mb-1">
                <strong>Address:</strong> {buyer.buyerAddress}
              </p>
              {buyer.deliveryTime && (
                <p className="mb-1">
                  <strong>Delivery Time:</strong> {buyer.deliveryTime}
                </p>
              )}
            </div>
            <div
              style={{
                width: "1px",
                backgroundColor: "#dee2e6", // Bootstrap border color
                height: "auto",
                marginLeft: "20px",
              }}
            />

            {/* Items */}
            <div className="mb-3">
              <h6>Items</h6>
              {buyer.items && buyer.items.length > 0 ? (
                <ul className="list-group list-group-flush">
                  {buyer.items.map((item, index) => (
                    <li key={index} className="list-group-item">
                      <div className="d-flex flex-column">
                        <div>
                          {item.quantity} x {item.item_type} (ID: {item.id})
                        </div>
                        <div>Description: {item.description || "N/A"}</div>
                        <div>Length: {item.length || "N/A"}</div>
                        <div>Width: {item.width || "N/A"}</div>
                        <div>Price: {item.price || "N/A"}</div>
                        {item.image_path && (
                          <img
                            src={item.image_path}
                            alt={item.item_type || "Item"}
                            className="img-thumbnail mt-2"
                            style={{ maxWidth: "100px", maxHeight: "100px" }}
                          />
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted">No items found for this buyer.</p>
              )}
            </div>
            <div
              style={{
                width: "1px",
                backgroundColor: "#dee2e6", // Bootstrap border color
                height: "auto",
                marginLeft: "5px",
                marginRight: "5px",
              }}
            />

            {/* Sellers */}
            <div className="mb-3">
              <h6>Seller details</h6>
              {buyer.sellers && buyer.sellers.length > 0 ? (
                buyer.sellers.map((seller) => (
                  <div key={seller.sellerid} className="mb-2">
                    <div className="p-6">
                      <p className="mb-1 me-2">
                        <strong>Name:</strong> {seller.sellername}
                      </p>
                      <p className="mb-1">
                        <strong>Address:</strong> {seller.selleraddress}
                      </p>
                      <p className="mb-1 ms-2">
                        <strong>Phone:</strong> {seller.sellerphonenumber}
                      </p>
                      <p className="mb-1">
                        <strong>Email:</strong> {seller.selleremail}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-muted">
                  No sellers found for this buyer's items.
                </p>
              )}
            </div>

            {/* Action Buttons */}
            {/* Action Buttons */}
            <div
              className="d-flex justify-content-end mt-3 align-items-end"
              style={{ height: "auto" }}
            >
              {message.includes(buyer.buyerId) ? (
                <button
                  onClick={() => handleDeliveredClick(buyer.buyerId)}
                  className="btn btn-success btn-sm"
                >
                  Pending
                </button>
              ) : (
                <button
                  onClick={() => handleDeliverClick(buyer.buyerId)}
                  className="btn btn-primary btn-lg"
                >
                  Deliver
                </button>
              )}
            </div>
          </div>

          {/* Status Message */}
          {message.includes(buyer.buyerId) && (
            <div className="mt-2 text-center">
              <p className="text-muted">Status: {message}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DeliveryDetailsPage;
