// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// // You can create a CSS file for styling

// const TrackOrder = () => {
//   const [orderId, setOrderId] = useState("");
//   const [orderStatus, setOrderStatus] = useState(null);
//   const [itemDetails, setItemDetails] = useState(null);
//   const [orderDate, setOrderDate] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();
//   const userId = localStorage.getItem("userId"); // Get user ID

//   const fetchOrderDetails = async () => {
//     if (!orderId) {
//       setError("Please enter your Order ID.");
//       return;
//     }

//     setLoading(true);
//     setError(null);
//     try {
//       // Fetch order details, including item details
//       const response = await fetch(
//         `http://localhost:5000/api/orders/track/${orderId}`
//       );
//       if (!response.ok) {
//         throw new Error(`Failed to fetch order details: ${response.status}`);
//       }
//       const data = await response.json();

//       if (data) {
//         setOrderStatus(data.status);
//         setItemDetails(data.item_details); //  DO NOT PARSE JSON.  It is already an object.
//         setOrderDate(data.order_date);
//       } else {
//         setError("Order not found. Please check your Order ID.");
//       }
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="track-order-container">
//       <h2>Track Your Order</h2>
//       <div className="input-container">
//         <label htmlFor="orderId">Order ID:</label>
//         <input
//           type="text"
//           id="orderId"
//           value={orderId}
//           onChange={(e) => setOrderId(e.target.value)}
//           placeholder="Enter your Order ID"
//         />
//         <button onClick={fetchOrderDetails} disabled={loading}>
//           {loading ? "Loading..." : "Track Order"}
//         </button>
//       </div>

//       {error && <p className="error-message">{error}</p>}

//       {orderStatus && (
//         <div className="order-details">
//           <h3>Order Details</h3>
//           <p>Order ID: {orderId}</p>
//           <p>Order Status: {orderStatus}</p>
//           <p>Order Date: {orderDate}</p>
//           <h4>Item Details:</h4>
//           {itemDetails && itemDetails.length > 0 ? (
//             <ul>
//               {itemDetails.map((item, index) => (
//                 <li key={index}>
//                   <p>Item ID: {item.itemId}</p>
//                   <p>Quantity: {item.quantity}</p>
//                   <p>Price: ${item.price}</p>
//                   {/* Add more item details as needed */}
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p>No items found in this order.</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default TrackOrder;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const TrackOrder = () => {
//   const [orderId, setOrderId] = useState("");
//   const [orderStatus, setOrderStatus] = useState(null);
//   const [itemDetails, setItemDetails] = useState(null);
//   const [orderDate, setOrderDate] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [deliverer, setDeliverer] = useState(null); // Add state for deliverer
//   const navigate = useNavigate();

//   const fetchOrderDetails = async () => {
//     if (!orderId) {
//       setError("Please enter your Order ID.");
//       return;
//     }

//     setLoading(true);
//     setError(null);
//     try {
//       const response = await fetch(
//         `http://localhost:5000/api/orders/track/${orderId}`
//       );
//       if (!response.ok) {
//         throw new Error(`Failed to fetch order details: ${response.status}`);
//       }
//       const data = await response.json();
//       console.log("Response Data:", data); //check what the api is sending

//       if (data) {
//         setOrderStatus(data.order?.status);
//         setItemDetails(data.order?.item_details);
//         setOrderDate(data.order?.order_date);
//         setDeliverer(data.deliverer); // Store deliverer data
//       } else {
//         setError("Order not found. Please check your Order ID.");
//       }
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     const userId = localStorage.getItem("userId");
//     if (!userId) {
//       navigate("/login");
//     }
//   }, [navigate]);

//   return (
//     <div className="track-order-container">
//       <h2>Track Your Order</h2>
//       <div className="input-container">
//         <label htmlFor="orderId">Order ID:</label>
//         <input
//           type="text"
//           id="orderId"
//           value={orderId}
//           onChange={(e) => setOrderId(e.target.value)}
//           placeholder="Enter your Order ID"
//         />
//         <button onClick={fetchOrderDetails} disabled={loading}>
//           {loading ? "Loading..." : "Track Order"}
//         </button>
//       </div>

//       {error && <p className="error-message">{error}</p>}

//       {orderStatus && (
//         <div className="order-details">
//           <h3>Order Details</h3>
//           <p>Order ID: {orderId}</p>
//           <p>Order Status: {orderStatus}</p>
//           <p>Order Date: {orderDate}</p>
//           <h4>Item Details:</h4>
//           {itemDetails && itemDetails.length > 0 ? (
//             <ul>
//               {itemDetails.map((item, index) => (
//                 <li key={index}>
//                   <p>Item ID: {item.itemId}</p>
//                   <p>Quantity: {item.quantity}</p>
//                   <p>Price: ${item.price}</p>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p>No items found in this order.</p>
//           )}
//           {deliverer && (
//             <div>
//               <h4>Deliverer Details:</h4>
//               <p>Name: {deliverer.name}</p>
//               <p>Contact: {deliverer.contact}</p>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default TrackOrder;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TrackOrder = () => {
  const [orderId, setOrderId] = useState("");
  const [orderStatus, setOrderStatus] = useState(null);
  const [itemDetails, setItemDetails] = useState(null);
  const [orderDate, setOrderDate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [deliverer, setDeliverer] = useState(null);
  const [isCancelling, setIsCancelling] = useState(false);
  const [cancelMessage, setCancelMessage] = useState(null);
  const navigate = useNavigate();

  const fetchOrderDetails = async () => {
    if (!orderId) {
      setError("Please enter your Order ID.");
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `http://localhost:5000/api/orders/track/${orderId}`
      );
      if (!response.ok) {
        throw new Error("u have not ordered yet");
      }
      const data = await response.json();
      console.log("Response Data:", data);

      if (data) {
        setOrderStatus(data.order?.status);
        setItemDetails(data.order?.item_details);
        setOrderDate(data.order?.order_date);
        setDeliverer(data.deliverer);
      } else {
        setError("Order not found. Please check your Order ID.");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCancelOrder = async () => {
    if (!orderId) {
      setError("Please enter your Order ID to cancel.");
      return;
    }

    if (orderStatus === "Delivered") {
      setCancelMessage(
        "You cannot cancel this order as it has already been delivered."
      );
      return;
    }

    const confirmCancel = window.confirm(
      "Are you sure you want to cancel this order?"
    );
    if (confirmCancel) {
      setIsCancelling(true);
      setCancelMessage(null);
      try {
        const response = await fetch(
          `http://localhost:5000/api/orders/cancel/`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ orderId }), // include orderId here
          }
        );

        if (!response.ok) {
          throw new Error(`Failed to cancel order: ${response.status}`);
        }
        const data = await response.json();
        if (data.message === "Order cancelled successfully") {
          setOrderStatus("cancelled");
          setCancelMessage(
            "Your order has been cancelled. You will receive your refund within a week."
          );
        } else {
          setCancelMessage("Failed to cancel order. Please try again later.");
        }
      } catch (error) {
        setCancelMessage(error.message);
      } finally {
        setIsCancelling(false);
      }
    }
  };

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="track-order-container">
      <h2>Track Your Order</h2>
      <div className="input-container">
        <label htmlFor="orderId">Order ID:</label>
        <input
          type="text"
          id="orderId"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          placeholder="Enter your Order ID"
        />
        <button onClick={fetchOrderDetails} disabled={loading}>
          {loading ? "Loading..." : "Track Order"}
        </button>
      </div>

      {error && <p className="error-message">{error}</p>}
      {cancelMessage && (
        <p
          className={
            orderStatus === "cancelled" ? "success-message" : "error-message"
          }
        >
          {cancelMessage}
        </p>
      )}

      {orderStatus && (
        <div className="order-details">
          <h3>Order Details</h3>
          <p>Order ID: {orderId}</p>
          <p>Order Status: {orderStatus}</p>
          <p>Order Date: {orderDate}</p>
          <h4>Item Details:</h4>
          {itemDetails && itemDetails.length > 0 ? (
            <ul>
              {itemDetails.map((item, index) => (
                <li key={index}>
                  <p>Item ID: {item.itemId}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ${item.price}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No items found in this order.</p>
          )}
          {deliverer && (
            <div>
              <h4>Deliverer Details:</h4>
              <p>Name: {deliverer.name}</p>
              <p>Contact: {deliverer.contact}</p>
            </div>
          )}
          {orderStatus !== "delivered" && orderStatus !== "cancelled" && (
            <button onClick={handleCancelOrder} disabled={isCancelling}>
              {isCancelling ? "Cancelling..." : "Cancel Order"}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default TrackOrder;
