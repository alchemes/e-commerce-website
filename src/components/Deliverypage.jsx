// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// const DeliveryPage = ({
//   orderData,
//   items,
//   finalPrice,
//   deliveryTime,
//   orderId,
// }) => {
//   const navigate = useNavigate();
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [deliveryAddress, setDeliveryAddress] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const location = useLocation();
//   const [localOrderId, setLocalOrderId] = useState(orderId); // Use a local state for orderId
//   const [localItems, setLocalItems] = useState(items); // Use a local state for items

//   // Use useEffect to get data.
//   useEffect(() => {
//     // Check if the data is available in props
//     if (orderId && items) {
//       // Set the local state variables.
//       setLocalOrderId(orderId);
//       setLocalItems(items);
//     } else if (
//       location.state &&
//       location.state.orderId &&
//       location.state.items
//     ) {
//       // If not in props, check location.state
//       setLocalOrderId(location.state.orderId);
//       setLocalItems(location.state.items);
//     } else {
//       //if data is not available.
//       setError(
//         "Order data is missing. Please go through the checkout process again."
//       );
//     }
//   }, [location, orderId, items]); //  Include orderId and items in the dependency array

//   const handleDeliverySubmit = async (event) => {
//     event.preventDefault();

//     if (!fullName || !email || !deliveryAddress || !phoneNumber) {
//       alert("Please fill in all delivery details.");
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     // Add console logs to check the values before sending
//     console.log("localOrderId:", localOrderId); // Use localOrderId
//     console.log("localItems:", localItems); // Use localItems
//     console.log("fullName:", fullName);
//     console.log("email:", email);
//     console.log("deliveryAddress:", deliveryAddress);
//     console.log("phoneNumber:", phoneNumber);

//     try {
//       // Send the data to your backend API endpoint
//       const response = await fetch(`http://localhost:5000/api/buyers`, {
//         // Changed endpoint
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           orderId: localOrderId, // Use localOrderId
//           items: localItems, // Use localItems
//           fullName,
//           email,
//           deliveryAddress,
//           phoneNumber,
//         }),
//       });

//       if (!response.ok) {
//         const errorData = await response.json(); // Attempt to get error message from server
//         throw new Error(
//           errorData.message ||
//             `Failed to submit delivery information: ${response.status}`
//         );
//       }

//       const responseData = await response.json(); // Parse the JSON response from your server
//       console.log("Delivery information submitted successfully", responseData);

//       // Navigate to order confirmation
//       navigate("/trackorder", {
//         state: {
//           ...orderData,
//           items: localItems, // Use localItems here as well, to be consistent.
//           finalPrice,
//           deliveryTime,
//           orderId: localOrderId, // and here
//         },
//       });
//     } catch (err) {
//       setError(err.message || "Failed to submit delivery details.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (error) {
//     return (
//       <div className="delivery-page-container">
//         <p className="error-message">{error}</p>
//       </div>
//     );
//   }

//   return (
//     <div className="delivery-page-container">
//       <h2>Delivery Information</h2>
//       <form onSubmit={handleDeliverySubmit} className="delivery-form">
//         <div className="form-group">
//           <label htmlFor="fullName">Full Name:</label>
//           <input
//             type="text"
//             id="fullName"
//             value={fullName}
//             onChange={(e) => setFullName(e.target.value)}
//             required
//             placeholder="Enter your full name"
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             placeholder="Enter your email"
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="deliveryAddress">Delivery Address:</label>
//           <input
//             type="text"
//             id="deliveryAddress"
//             value={deliveryAddress}
//             onChange={(e) => setDeliveryAddress(e.target.value)}
//             required
//             placeholder="Enter your delivery address"
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="phoneNumber">Phone Number:</label>
//           <input
//             type="tel"
//             id="phoneNumber"
//             value={phoneNumber}
//             onChange={(e) => setPhoneNumber(e.target.value)}
//             required
//             placeholder="Enter your phone number"
//           />
//         </div>
//         <button type="submit" disabled={loading}>
//           {loading ? "Submitting..." : "Submit Delivery Details"}
//         </button>
//         {error && <p className="error-message">{error}</p>}
//       </form>
//     </div>
//   );
// };

// export default DeliveryPage;

// import React, { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";

// const DeliveryPage = ({
//   orderData,
//   items,
//   finalPrice,
//   deliveryTime,
//   orderId,
// }) => {
//   const navigate = useNavigate();
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [deliveryAddress, setDeliveryAddress] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const location = useLocation();
//   const [localOrderId, setLocalOrderId] = useState(orderId); // Use a local state for orderId
//   const [localItems, setLocalItems] = useState(items); // Use a local state for items
//   const [showConfirmation, setShowConfirmation] = useState(false); // Add state for confirmation message

//   // Use useEffect to get data.
//   useEffect(() => {
//     // Check if the data is available in props
//     if (orderId && items) {
//       // Set the local state variables.
//       setLocalOrderId(orderId);
//       setLocalItems(items);
//     } else if (
//       location.state &&
//       location.state.orderId &&
//       location.state.items
//     ) {
//       // If not in props, check location.state
//       setLocalOrderId(location.state.orderId);
//       setLocalItems(location.state.items);
//     } else {
//       //if data is not available.
//       setError(
//         "Order data is missing. Please go through the checkout process again."
//       );
//     }
//   }, [location, orderId, items]); //  Include orderId and items in the dependency array

//   const handleDeliverySubmit = async (event) => {
//     event.preventDefault();

//     if (!fullName || !email || !deliveryAddress || !phoneNumber) {
//       alert("Please fill in all delivery details.");
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     // Add console logs to check the values before sending
//     console.log("localOrderId:", localOrderId); // Use localOrderId
//     console.log("localItems:", localItems); // Use localItems
//     console.log("fullName:", fullName);
//     console.log("email:", email);
//     console.log("deliveryAddress:", deliveryAddress);
//     console.log("phoneNumber:", phoneNumber);

//     try {
//       // Send the data to your backend API endpoint
//       const response = await fetch(`http://localhost:5000/api/buyers`, {
//         // Changed endpoint
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           orderId: localOrderId, // Use localOrderId
//           items: localItems, // Use localItems
//           fullName,
//           email,
//           deliveryAddress,
//           phoneNumber,
//         }),
//       });

//       if (!response.ok) {
//         const errorData = await response.json(); // Attempt to get error message from server
//         throw new Error(
//           errorData.message ||
//             `Failed to submit delivery information: ${response.status}`
//         );
//       }

//       const responseData = await response.json(); // Parse the JSON response from your server
//       console.log("Delivery information submitted successfully", responseData);

//       //  Show confirmation message with order ID
//       setShowConfirmation(true);
//     } catch (err) {
//       setError(err.message || "Failed to submit delivery details.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleGoToTrackOrder = () => {
//     // Navigate to track order
//     navigate("/trackorder", {
//       state: {
//         orderData,
//         items: localItems, // Use localItems here
//         finalPrice,
//         deliveryTime,
//         orderId: localOrderId, //  and here
//       },
//     });
//   };

//   if (error) {
//     return (
//       <div className="delivery-page-container">
//         <p className="error-message">{error}</p>
//       </div>
//     );
//   }

//   return (
//     <div className="delivery-page-container">
//       <h2>Delivery Information</h2>
//       <form onSubmit={handleDeliverySubmit} className="delivery-form">
//         <div className="form-group">
//           <label htmlFor="fullName">Full Name:</label>
//           <input
//             type="text"
//             id="fullName"
//             value={fullName}
//             onChange={(e) => setFullName(e.target.value)}
//             required
//             placeholder="Enter your full name"
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             placeholder="Enter your email"
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="deliveryAddress">Delivery Address:</label>
//           <input
//             type="text"
//             id="deliveryAddress"
//             value={deliveryAddress}
//             onChange={(e) => setDeliveryAddress(e.target.value)}
//             required
//             placeholder="Enter your delivery address"
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="phoneNumber">Phone Number:</label>
//           <input
//             type="tel"
//             id="phoneNumber"
//             value={phoneNumber}
//             onChange={(e) => setPhoneNumber(e.target.value)}
//             required
//             placeholder="Enter your phone number"
//           />
//         </div>
//         <button type="submit" disabled={loading}>
//           {loading ? "Submitting..." : "Submit Delivery Details"}
//         </button>
//         {error && <p className="error-message">{error}</p>}
//       </form>

//       {/* Conditionally render confirmation message */}
//       {showConfirmation && (
//         <div className="confirmation-message">
//           <p>
//             Your order has been placed successfully. Your Order ID is:{" "}
//             <strong>{localOrderId}</strong>
//           </p>
//           <p>Do you want to track your order?</p>
//           <button onClick={handleGoToTrackOrder} disabled={loading}>
//             Yes, Track Order
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DeliveryPage;
// import React, { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";

// const DeliveryPage = ({
//   orderData,
//   items,
//   finalPrice,
//   deliveryTime,
//   orderId,
// }) => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [deliveryAddress, setDeliveryAddress] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [fullNameError, setFullNameError] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [deliveryAddressError, setDeliveryAddressError] = useState("");
//   const [phoneNumberError, setPhoneNumberError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [localOrderId, setLocalOrderId] = useState(orderId);
//   const [localItems, setLocalItems] = useState(items);
//   const [showConfirmation, setShowConfirmation] = useState(false);

//   useEffect(() => {
//     if (orderId && items) {
//       setLocalOrderId(orderId);
//       setLocalItems(items);
//     } else if (
//       location.state &&
//       location.state.orderId &&
//       location.state.items
//     ) {
//       setLocalOrderId(location.state.orderId);
//       setLocalItems(location.state.items);
//     } else {
//       setError(
//         "Order data is missing. Please go through the checkout process again."
//       );
//     }
//   }, [location, orderId, items]);

//   const validateFullName = (value) => {
//     const nameRegex = /^[a-zA-Z\s]*$/;
//     if (!nameRegex.test(value)) {
//       setFullNameError("Name can only contain letters and spaces.");
//       return false;
//     }
//     if (value.trim().length === 0) {
//       setFullNameError("Name cannot be empty.");
//       return false;
//     }
//     setFullNameError("");
//     return true;
//   };

//   const validateEmail = (value) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(value)) {
//       setEmailError("Please enter a valid email address.");
//       return false;
//     }
//     setEmailError("");
//     return true;
//   };

//   const validatePhoneNumber = (value) => {
//     const phoneRegex = /^\d{10}$/;
//     if (!phoneRegex.test(value)) {
//       if (value.length !== 10) {
//         setPhoneNumberError("Phone number must be exactly 10 digits.");
//       } else {
//         setPhoneNumberError("Phone number can only contain digits.");
//       }
//       return false;
//     }
//     setPhoneNumberError("");
//     return true;
//   };

//   const validateDeliveryAddress = (value) => {
//     if (value.trim().length === 0) {
//       setDeliveryAddressError("Delivery address cannot be empty.");
//       return false;
//     }
//     setDeliveryAddressError("");
//     return true;
//   };

//   const handleFullNameChange = (e) => {
//     const value = e.target.value;
//     setFullName(value);
//     validateFullName(value);
//   };

//   const handleEmailChange = (e) => {
//     const value = e.target.value;
//     setEmail(value);
//     validateEmail(value);
//   };

//   const handlePhoneNumberChange = (e) => {
//     const value = e.target.value;
//     if (/^\d{0,10}$/.test(value)) {
//       setPhoneNumber(value);
//       validatePhoneNumber(value);
//     }
//   };

//   const handleDeliveryAddressChange = (e) => {
//     const value = e.target.value;
//     setDeliveryAddress(value);
//     validateDeliveryAddress(value);
//   };

//   const handleDeliverySubmit = async (event) => {
//     event.preventDefault();

//     const isFullNameValid = validateFullName(fullName);
//     const isEmailValid = validateEmail(email);
//     const isPhoneNumberValid = validatePhoneNumber(phoneNumber);
//     const isDeliveryAddressValid = validateDeliveryAddress(deliveryAddress);

//     if (
//       !isFullNameValid ||
//       !isEmailValid ||
//       !isPhoneNumberValid ||
//       !isDeliveryAddressValid
//     ) {
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     console.log("localOrderId:", localOrderId);
//     console.log("localItems:", localItems);
//     console.log("fullName:", fullName);
//     console.log("email:", email);
//     console.log("deliveryAddress:", deliveryAddress);
//     console.log("phoneNumber:", phoneNumber);

//     try {
//       const response = await fetch(`http://localhost:5000/api/buyers`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           orderId: localOrderId,
//           items: localItems,
//           fullName,
//           email,
//           deliveryAddress,
//           phoneNumber,
//         }),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(
//           errorData.message ||
//             `Failed to submit delivery information: ${response.status}`
//         );
//       }

//       const responseData = await response.json();
//       console.log("Delivery information submitted successfully", responseData);
//       setShowConfirmation(true);
//     } catch (err) {
//       setError(err.message || "Failed to submit delivery details.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleGoToTrackOrder = () => {
//     navigate("/trackorder", {
//       state: {
//         orderData,
//         items: localItems,
//         finalPrice,
//         deliveryTime,
//         orderId: localOrderId,
//       },
//     });
//   };

//   if (error) {
//     return (
//       <div className="delivery-page-container">
//         <p className="error-message">{error}</p>
//       </div>
//     );
//   }

//   return (
//     <div className="delivery-page-container">
//       <h2>Delivery Information</h2>
//       <form onSubmit={handleDeliverySubmit} className="delivery-form">
//         <div className="form-group">
//           <label htmlFor="fullName">Full Name:</label>
//           <input
//             type="text"
//             id="fullName"
//             value={fullName}
//             onChange={handleFullNameChange}
//             required
//             placeholder="Enter your full name"
//             pattern="[a-zA-Z\s]*"
//             title="Name can only contain letters and spaces."
//           />
//           {fullNameError && <p className="error-message">{fullNameError}</p>}
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={handleEmailChange}
//             required
//             placeholder="Enter your email"
//           />
//           {emailError && <p className="error-message">{emailError}</p>}
//         </div>
//         <div className="form-group">
//           <label htmlFor="deliveryAddress">Delivery Address:</label>
//           <input
//             type="text"
//             id="deliveryAddress"
//             value={deliveryAddress}
//             onChange={handleDeliveryAddressChange}
//             required
//             placeholder="Enter your delivery address"
//           />
//           {deliveryAddressError && (
//             <p className="error-message">{deliveryAddressError}</p>
//           )}
//         </div>
//         <div className="form-group">
//           <label htmlFor="phoneNumber">Phone Number:</label>
//           <input
//             type="tel"
//             id="phoneNumber"
//             value={phoneNumber}
//             onChange={handlePhoneNumberChange}
//             required
//             placeholder="Enter your phone number"
//             pattern="\d{10}"
//             title="Phone number must be exactly 10 digits."
//           />
//           {phoneNumberError && (
//             <p className="error-message">{phoneNumberError}</p>
//           )}
//         </div>
//         <button
//           type="submit"
//           disabled={
//             loading ||
//             !!fullNameError ||
//             !!emailError ||
//             !!phoneNumberError ||
//             !!deliveryAddressError
//           }
//         >
//           {loading ? "Submitting..." : "Submit Delivery Details"}
//         </button>
//         {error && <p className="error-message">{error}</p>}
//       </form>

//       {showConfirmation && (
//         <div className="confirmation-message">
//           <p>
//             Your order has been placed successfully. Your Order ID is:{" "}
//             <strong>{localOrderId}</strong>
//           </p>
//           <p>Do you want to track your order?</p>
//           <button onClick={handleGoToTrackOrder} disabled={loading}>
//             Yes, Track Order
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DeliveryPage;

import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const DeliveryPage = ({
  orderData,
  items,
  finalPrice,
  deliveryTime,
  orderId,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fullNameError, setFullNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [deliveryAddressError, setDeliveryAddressError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [localOrderId, setLocalOrderId] = useState(orderId);
  const [localItems, setLocalItems] = useState(items);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    if (orderId && items) {
      setLocalOrderId(orderId);
      setLocalItems(items);
    } else if (
      location.state &&
      location.state.orderId &&
      location.state.items
    ) {
      setLocalOrderId(location.state.orderId);
      setLocalItems(location.state.items);
    } else {
      setError(
        "Order data is missing. Please go through the checkout process again."
      );
    }
  }, [location, orderId, items]);

  const validateFullName = (value) => {
    const nameRegex = /^[a-zA-Z\s]*$/;
    if (!nameRegex.test(value)) {
      setFullNameError("Name can only contain letters and spaces.");
      return false;
    }
    if (value.trim().length === 0) {
      setFullNameError("Name cannot be empty.");
      return false;
    }
    setFullNameError("");
    return true;
  };

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError("Please enter a valid email address.");
      return false;
    }
    setEmailError("");
    return true;
  };

  const validatePhoneNumber = (value) => {
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(value)) {
      if (value.length !== 10) {
        setPhoneNumberError("Phone number must be exactly 10 digits.");
      } else {
        setPhoneNumberError("Phone number can only contain digits.");
      }
      return false;
    }
    setPhoneNumberError("");
    return true;
  };

  const validateDeliveryAddress = (value) => {
    if (value.trim().length === 0) {
      setDeliveryAddressError("Delivery address cannot be empty.");
      return false;
    }
    setDeliveryAddressError("");
    return true;
  };

  const handleFullNameChange = (e) => {
    const value = e.target.value;
    setFullName(value);
    validateFullName(value);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,10}$/.test(value)) {
      setPhoneNumber(value);
      validatePhoneNumber(value);
    }
  };

  const handleDeliveryAddressChange = (e) => {
    const value = e.target.value;
    setDeliveryAddress(value);
    validateDeliveryAddress(value);
  };

  const handleDeliverySubmit = async (event) => {
    event.preventDefault();

    const isFullNameValid = validateFullName(fullName);
    const isEmailValid = validateEmail(email);
    const isPhoneNumberValid = validatePhoneNumber(phoneNumber);
    const isDeliveryAddressValid = validateDeliveryAddress(deliveryAddress);

    if (
      !isFullNameValid ||
      !isEmailValid ||
      !isPhoneNumberValid ||
      !isDeliveryAddressValid
    ) {
      return;
    }

    setLoading(true);
    setError(null);

    console.log("localOrderId:", localOrderId);
    console.log("localItems:", localItems);
    console.log("fullName:", fullName);
    console.log("email:", email);
    console.log("deliveryAddress:", deliveryAddress);
    console.log("phoneNumber:", phoneNumber);

    try {
      const response = await fetch(`http://localhost:5000/api/buyers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderId: localOrderId,
          items: localItems,
          fullName,
          email,
          deliveryAddress,
          phoneNumber,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message ||
            `Failed to submit delivery information: ${response.status}`
        );
      }

      const responseData = await response.json();
      console.log("Delivery information submitted successfully", responseData);
      setShowConfirmation(true);
    } catch (err) {
      setError(err.message || "Failed to submit delivery details.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoToTrackOrder = () => {
    navigate("/trackorder", {
      state: {
        orderData,
        items: localItems,
        finalPrice,
        deliveryTime,
        orderId: localOrderId,
      },
    });
  };

  if (error) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Delivery Information</h2>
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <form
            onSubmit={handleDeliverySubmit}
            className="delivery-form bg-white shadow-md rounded p-4"
          >
            <div className="form-group">
              <label htmlFor="fullName">Full Name:</label>
              <input
                type="text"
                className={`form-control ${fullNameError ? "is-invalid" : ""}`}
                id="fullName"
                value={fullName}
                onChange={handleFullNameChange}
                required
                placeholder="Enter your full name"
                pattern="[a-zA-Z\s]*"
                title="Name can only contain letters and spaces."
              />
              {fullNameError && (
                <div className="invalid-feedback">{fullNameError}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className={`form-control ${emailError ? "is-invalid" : ""}`}
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
                placeholder="Enter your email"
              />
              {emailError && (
                <div className="invalid-feedback">{emailError}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="deliveryAddress">Delivery Address:</label>
              <input
                type="text"
                className={`form-control ${
                  deliveryAddressError ? "is-invalid" : ""
                }`}
                id="deliveryAddress"
                value={deliveryAddress}
                onChange={handleDeliveryAddressChange}
                required
                placeholder="Enter your delivery address"
              />
              {deliveryAddressError && (
                <div className="invalid-feedback">{deliveryAddressError}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input
                type="tel"
                className={`form-control ${
                  phoneNumberError ? "is-invalid" : ""
                }`}
                id="phoneNumber"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                required
                placeholder="Enter your phone number"
                pattern="\d{10}"
                title="Phone number must be exactly 10 digits."
              />
              {phoneNumberError && (
                <div className="invalid-feedback">{phoneNumberError}</div>
              )}
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-block"
              disabled={
                loading ||
                !!fullNameError ||
                !!emailError ||
                !!phoneNumberError ||
                !!deliveryAddressError
              }
            >
              {loading ? "Submitting..." : "Submit Delivery Details"}
            </button>
            {error && (
              <div className="text-danger mt-3 text-center">{error}</div>
            )}
          </form>

          {showConfirmation && (
            <div className="alert alert-success mt-4 text-center" role="alert">
              <p>
                Your order has been placed successfully. Your Order ID is:{" "}
                <strong>{localOrderId}</strong>
              </p>
              <p>Do you want to track your order?</p>
              <button
                onClick={handleGoToTrackOrder}
                className="btn btn-secondary mt-2"
                disabled={loading}
              >
                Yes, Track Order
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeliveryPage;
