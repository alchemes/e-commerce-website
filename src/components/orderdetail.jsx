// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";

// const OrderConfirmation = () => {
//   const location = useLocation();
//   const orderDetails = location.state;
//   const [sellers, setSellers] = useState([]); // State for seller data
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchSellerDetails = async () => {
//       if (!orderDetails?.orderId) {
//         setError("Order ID is missing.");
//         setLoading(false);
//         return;
//       }

//       try {
//         const response = await fetch(
//           `http://localhost:5000/api/orders/${orderDetails.orderId}` // Use orderId
//         );
//         if (!response.ok) {
//           throw new Error(`Failed to fetch seller details: ${response.status}`);
//         }
//         const data = await response.json();

//         // Assuming the API returns seller information within the order details
//         setSellers(data.sellers || []); // Adjust based on your API response structure!
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     fetchSellerDetails();
//   }, [orderDetails?.orderId]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (!orderDetails) {
//     return (
//       <div>
//         No order details found. Possible error: Navigated to this page directly.
//       </div>
//     );
//   }

//   return (
//     <div>
//       <h2>Order Confirmation</h2>
//       <div>
//         <h3>Order Details:</h3>
//         <p>Order ID: {orderDetails.orderId}</p>
//         <p>Total Amount: ${orderDetails.totalAmount.toFixed(2)}</p>
//         <p>Delivery Option: {orderDetails.deliveryOption}</p>
//         {orderDetails.deliveryOption === "delivery" && (
//           <p>Delivery Time: {orderDetails.deliveryTime}</p>
//         )}
//         <p>Payment Method: {orderDetails.paymentMethod}</p>
//       </div>
//       <div>
//         <h3>Items:</h3>
//         {orderDetails.items && orderDetails.items.length > 0 ? (
//           <ul>
//             {orderDetails.items.map((item, index) => (
//               <li key={index}>
//                 <p>Item ID: {item.itemId}</p>
//                 <p>Quantity: {item.quantity}</p>
//                 <p>Price: ${item.price.toFixed(2)}</p>
//                 <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>No items found in this order.</p>
//         )}
//       </div>

//       <div>
//         <h3>Seller(s) Information:</h3>
//         {sellers && sellers.length > 0 ? (
//           sellers.map((seller) => (
//             <div key={seller.sellerId}>
//               <p>
//                 <strong>Name:</strong> {seller.sellerName}
//               </p>
//               <p>
//                 <strong>Phone Number:</strong> {seller.sellerPhoneNumber}
//               </p>
//               <p>
//                 <strong>Email:</strong> {seller.sellerEmail}
//               </p>
//               <p>
//                 <strong>Address:</strong> {seller.sellerAddress}
//               </p>
//             </div>
//           ))
//         ) : (
//           <p>No sellers found for this order.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default OrderConfirmation;

// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";

// const OrderConfirmation = () => {
//   const location = useLocation();
//   const orderDetails = location.state;
//   const [sellers, setSellers] = useState([]); // State for seller data
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchSellerDetails = async () => {
//       if (!orderDetails?.orderId) {
//         setError("Order ID is missing.");
//         setLoading(false);
//         return;
//       }

//       try {
//         const response = await fetch(
//           `http://localhost:5000/api/orders/${orderDetails.orderId}` // Use orderId
//         );
//         if (!response.ok) {
//           throw new Error(`Failed to fetch seller details: ${response.status}`);
//         }
//         const data = await response.json();

//         // Assuming the API returns seller information within the order details
//         setSellers(data.sellers || []); // Adjust based on your API response structure!
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     fetchSellerDetails();
//   }, [orderDetails?.orderId]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (!orderDetails) {
//     return (
//       <div>
//         No order details found. Possible error: Navigated to this page directly.
//       </div>
//     );
//   }
//   console.log("Sellers data:", sellers); // ADDED CONSOLE LOG

//   return (
//     <div>
//       <h2>Order Confirmation</h2>
//       <div>
//         <h3>Order Details:</h3>
//         <p>Order ID: {orderDetails.orderId}</p>
//         <p>Total Amount: ${orderDetails.totalAmount.toFixed(2)}</p>
//         <p>Delivery Option: {orderDetails.deliveryOption}</p>
//         {orderDetails.deliveryOption === "delivery" && (
//           <p>Delivery Time: {orderDetails.deliveryTime}</p>
//         )}
//         <p>Payment Method: {orderDetails.paymentMethod}</p>
//       </div>
//       <div>
//         <h3>Items:</h3>
//         {orderDetails.items && orderDetails.items.length > 0 ? (
//           <ul>
//             {orderDetails.items.map((item, index) => (
//               <li key={index}>
//                 <p>Item ID: {item.itemId}</p>
//                 <p>Quantity: {item.quantity}</p>
//                 <p>Price: ${Number(item.price).toFixed(2)}</p>
//                 <p>
//                   Subtotal: ${(Number(item.price) * item.quantity).toFixed(2)}
//                 </p>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>No items found in this order.</p>
//         )}
//       </div>

//       <div>
//         <h3>Seller(s) Information:</h3>
//         {sellers && sellers.length > 0 ? (
//           sellers.map(
//             (
//               seller // Iterate through the 'sellers' array
//             ) => (
//               <div key={seller.sellerid}>
//                 {" "}
//                 {/* Use seller.sellerid as the key */}
//                 <p>
//                   <strong>Name:</strong> {seller.sellername}
//                 </p>
//                 <p>
//                   <strong>Phone Number:</strong> {seller.sellerphonenumber}
//                 </p>
//                 <p>
//                   <strong>Email:</strong> {seller.selleremail}
//                 </p>
//                 <p>
//                   <strong>Address:</strong> {seller.selleraddress}
//                 </p>
//               </div>
//             )
//           )
//         ) : (
//           <p>No sellers found for this order.</p>
//         )}
//       </div>
//       <div>please contact the seller to get your product as you requested</div>
//     </div>
//   );
// };

// export default OrderConfirmation;
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const OrderConfirmation = () => {
  const location = useLocation();
  const orderDetails = location.state;
  const [sellers, setSellers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSellerDetails = async () => {
      if (!orderDetails?.orderId) {
        setError("Order ID is missing.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `http://localhost:5000/api/orders/${orderDetails.orderId}`
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch seller details: ${response.status}`);
        }
        const data = await response.json();
        console.log("API response:", data); // Debug API response
        setSellers(data.sellers || []);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchSellerDetails();
  }, [orderDetails?.orderId]);

  if (loading) {
    return <div className="container mt-5 text-center">Loading...</div>;
  }

  if (error) {
    return (
      <div className="container mt-5 alert alert-danger" role="alert">
        Error: {error}
      </div>
    );
  }

  if (!orderDetails) {
    return (
      <div className="container mt-5 alert alert-warning" role="alert">
        No order details found. Possible error: Navigated to this page directly.
      </div>
    );
  }

  console.log("Sellers data:", sellers);
  console.log("Order details:", orderDetails);
  console.log("Order items:", orderDetails.items);
  // Debug each item in items array
  orderDetails.items?.forEach((item, index) => {
    console.log(`Item ${index}:`, item);
    console.log(`Item ${index} keys:`, Object.keys(item));
  });

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-sm p-4">
            <h2 className="text-center mb-4">Order Confirmation</h2>
            <div className="mb-3">
              <h3>Order Details:</h3>
              <p>
                <strong>Order ID:</strong> {orderDetails.orderId || "N/A"}
              </p>
              <p>
                <strong>Total Amount:</strong> $
                {(orderDetails.totalAmount != null
                  ? Number(orderDetails.totalAmount)
                  : 0
                ).toFixed(2)}
              </p>
              <p>
                <strong>Delivery Option:</strong>{" "}
                {orderDetails.deliveryOption || "N/A"}
              </p>
              {orderDetails.deliveryOption === "delivery" && (
                <p>
                  <strong>Delivery Time:</strong>{" "}
                  {orderDetails.deliveryTime || "N/A"}
                </p>
              )}
              <p>
                <strong>Payment Method:</strong>{" "}
                {orderDetails.paymentMethod || "Not specified"}
              </p>
            </div>

            <div className="mb-3">
              <h3>Items:</h3>
              {orderDetails.items && orderDetails.items.length > 0 ? (
                <ul className="list-group">
                  {orderDetails.items.map((item, index) => (
                    <li key={index} className="list-group-item">
                      <p className="mb-1">
                        <strong>Item ID:</strong>{" "}
                        {item.itemId ||
                          item.item_id ||
                          item.id ||
                          item.ItemId ||
                          "N/A"}
                      </p>
                      <p className="mb-1">
                        <strong>Quantity:</strong>{" "}
                        {item.quantity != null ? item.quantity : "N/A"}
                      </p>
                      <p className="mb-1">
                        <strong>Price:</strong> $
                        {(item.price != null ? Number(item.price) : 0).toFixed(
                          2
                        )}
                      </p>
                      <p className="mb-0">
                        <strong>Subtotal:</strong> $
                        {(item.price != null && item.quantity != null
                          ? Number(item.price) * item.quantity
                          : 0
                        ).toFixed(2)}
                      </p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted">No items found in this order.</p>
              )}
            </div>

            <div className="mb-3">
              <h3>Seller(s) Information:</h3>
              {sellers && sellers.length > 0 ? (
                sellers.map((seller) => (
                  <div key={seller.sellerid} className="card mb-2 p-3">
                    <p className="mb-1">
                      <strong>Name:</strong> {seller.sellername || "N/A"}
                    </p>
                    <p className="mb-1">
                      <strong>Phone Number:</strong>{" "}
                      {seller.sellerphonenumber || "N/A"}
                    </p>
                    <p className="mb-1">
                      <strong>Email:</strong> {seller.selleremail || "N/A"}
                    </p>
                    <p className="mb-0">
                      <strong>Address:</strong> {seller.selleraddress || "N/A"}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-muted">No sellers found for this order.</p>
              )}
            </div>

            <div className="alert alert-info" role="alert">
              Please contact the seller(s) to arrange for your product as you
              requested.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
