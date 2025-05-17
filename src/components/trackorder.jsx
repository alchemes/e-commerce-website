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
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const TrackOrder = () => {
//   const [orderId, setOrderId] = useState("");
//   const [orderStatus, setOrderStatus] = useState(null);
//   const [itemDetails, setItemDetails] = useState(null);
//   const [orderDate, setOrderDate] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [deliverer, setDeliverer] = useState(null);
//   const [isCancelling, setIsCancelling] = useState(false);
//   const [cancelMessage, setCancelMessage] = useState(null);
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
//         throw new Error("u have not ordered yet");
//       }
//       const data = await response.json();
//       console.log("Response Data:", data);

//       if (data) {
//         setOrderStatus(data.order?.status);
//         setItemDetails(data.order?.item_details);
//         setOrderDate(data.order?.order_date);
//         setDeliverer(data.deliverer);
//       } else {
//         setError("Order not found. Please check your Order ID.");
//       }
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleCancelOrder = async () => {
//     if (!orderId) {
//       setError("Please enter your Order ID to cancel.");
//       return;
//     }

//     if (orderStatus === "Delivered") {
//       setCancelMessage(
//         "You cannot cancel this order as it has already been delivered."
//       );
//       return;
//     }

//     const confirmCancel = window.confirm(
//       "Are you sure you want to cancel this order?"
//     );
//     if (confirmCancel) {
//       setIsCancelling(true);
//       setCancelMessage(null);
//       try {
//         const response = await fetch(
//           `http://localhost:5000/api/orders/cancel/`,
//           {
//             method: "PUT",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ orderId }), // include orderId here
//           }
//         );

//         if (!response.ok) {
//           throw new Error(`Failed to cancel order: ${response.status}`);
//         }
//         const data = await response.json();
//         if (data.message === "Order cancelled successfully") {
//           setOrderStatus("cancelled");
//           setCancelMessage(
//             "Your order has been cancelled. You will receive your refund within a week."
//           );
//         } else {
//           setCancelMessage("Failed to cancel order. Please try again later.");
//         }
//       } catch (error) {
//         setCancelMessage(error.message);
//       } finally {
//         setIsCancelling(false);
//       }
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
//       {cancelMessage && (
//         <p
//           className={
//             orderStatus === "cancelled" ? "success-message" : "error-message"
//           }
//         >
//           {cancelMessage}
//         </p>
//       )}

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
//           {orderStatus !== "delivered" && orderStatus !== "cancelled" && (
//             <button onClick={handleCancelOrder} disabled={isCancelling}>
//               {isCancelling ? "Cancelling..." : "Cancel Order"}
//             </button>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default TrackOrder;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Alert, Card, ListGroup, Spinner } from "react-bootstrap";
import {
  Truck,
  XCircle,
  CheckCircle,
  Calendar,
  Package,
  User,
  Info,
} from "lucide-react"; // Import icons

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
        throw new Error("You have not ordered yet");
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

  // Helper function to get status icon and color
  const getStatusInfo = (status) => {
    switch (status) {
      case "pending":
        return {
          icon: <Info className="text-info" size={20} />,
          color: "text-info",
        };
      case "processing":
        return {
          icon: <Truck className="text-warning" size={20} />,
          color: "text-warning",
        };
      case "Delivered":
        return {
          icon: <CheckCircle className="text-success" size={20} />,
          color: "text-success",
        };
      case "cancelled":
        return {
          icon: <XCircle className="text-danger" size={20} />,
          color: "text-danger",
        };
      default:
        return {
          icon: <Info className="text-muted" size={20} />,
          color: "text-muted",
        };
    }
  };

  const statusInfo = getStatusInfo(orderStatus);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">
        <Truck className="inline-block mr-2" size={30} />
        Track Your Order
      </h1>

      <Card className="mb-4">
        <Card.Body>
          <Form.Group className="mb-3" controlId="formOrderId">
            <Form.Label>Order ID:</Form.Label>
            <Form.Control
              type="text"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              placeholder="Enter your Order ID"
            />
          </Form.Group>
          <Button
            variant="outline-primary"
            onClick={fetchOrderDetails}
            disabled={loading}
            size="sm"
            className="my-2"
          >
            {loading ? (
              <>
                <Spinner animation="border" size="sm" className="mr-2" />
                Loading...
              </>
            ) : (
              "Track Order"
            )}
          </Button>
        </Card.Body>
      </Card>

      {error && <Alert variant="danger">{error}</Alert>}
      {cancelMessage && <Alert variant="secondary">{cancelMessage}</Alert>}

      {orderStatus && (
        <Card>
          <Card.Body>
            <h2 className="mb-4">Order Details</h2>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <strong>Order ID:</strong> {orderId}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Order Status:</strong>
                <span className={`ml-2 ${statusInfo.color}`}>
                  {statusInfo.icon} {orderStatus}
                </span>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Order Date:</strong>
                <Calendar className="inline-block mr-2" size={20} />
                {orderDate}
              </ListGroup.Item>
            </ListGroup>

            <h3 className="mt-4 ms-1">
              <Package className="inline-block mr-2" size={24} />
              Item Details:
            </h3>
            {itemDetails && itemDetails.length > 0 ? (
              <ListGroup className="mb-4 me-3">
                {itemDetails.map((item, index) => (
                  <ListGroup.Item key={index}>
                    <div className="d-flex justify-content-between">
                      <div>
                        <p>
                          <strong>Item ID:</strong> {item.itemId}
                        </p>
                        <p>
                          <strong>Quantity:</strong> {item.quantity}
                        </p>
                      </div>
                      <div>
                        <p>
                          <strong>Price:</strong> ${item.price}
                        </p>
                      </div>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            ) : (
              <Alert variant="info">No items found in this order.</Alert>
            )}

            {deliverer && (
              <>
                <h3 className="mt-4 ms-3">
                  <User className="inline-block mr-2" size={24} />
                  Deliverer Details:
                </h3>
                <ListGroup>
                  <ListGroup.Item>
                    <strong>Name:</strong> {deliverer.name}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Contact:</strong> {deliverer.contact}
                  </ListGroup.Item>
                </ListGroup>
              </>
            )}
          </Card.Body>
        </Card>
      )}
      {orderStatus !== "Delivered" && orderStatus !== "cancelled" && (
        <div className="d-flex justify-content-center my-3">
          <Button
            variant="outline-danger"
            onClick={handleCancelOrder}
            disabled={isCancelling}
            size="sm"
            className="p-4"
          >
            {isCancelling ? (
              <>
                <Spinner animation="border" size="sm" className="mr-2" />
                Cancelling...
              </>
            ) : (
              "Cancel Order"
            )}
          </Button>
        </div>
      )}
    </div>
  );
};

export default TrackOrder;
