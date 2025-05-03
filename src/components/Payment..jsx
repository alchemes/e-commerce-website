// import React from 'react';
// import { useLocation } from 'react-router-dom'; // Import useLocation hook

// const Payment = () => {
//   const location = useLocation();

//   const items = location.state?.items || []; // Get items passed from the Product component
//   const totalPrice = location.state?.totalPrice || 0; // Get total price

//   const handlePayment = (event) => {
//     event.preventDefault();
//     // Handle the payment logic here
//     alert('Payment and delivery options submitted');
//   };

//   return (
//     <div className="payment-container">
//       <h2>Payment Options</h2>
//       <h3>Items in Cart:</h3>
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>
//             {item.itemType} - ${item.price} x {item.quantity} = ${item.price * item.quantity}
//           </li>
//         ))}
//       </ul>
//       <h3>Total Price: ${totalPrice}</h3>
//       <form onSubmit={handlePayment}>
//         <div>
//           <label htmlFor="address">Delivery Address:</label>
//           <input type="text" id="address" required />
//         </div>
//         <div>
//           <label htmlFor="phone">Phone Number:</label>
//           <input type="tel" id="phone" required />
//         </div>
//         <div>
//           <label htmlFor="payment-method">Payment Method:</label>
//           <select id="payment-method" required>
//             <option value="">Select Payment Method</option>
//             <option value="cbe">Cbe</option>
//             <option value="telbirr">telbirr</option>
//             <option value="awash-pro">awash-pro</option>
//           </select>
//         </div>
//         <button type="submit">Submit Payment</button>
//       </form>
//     </div>
//   );
// };

// export default Payment;

// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// const Payment = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const items = location.state?.items || [];
//   const totalPrice = location.state?.totalPrice || 0;

//   const [deliveryTime, setDeliveryTime] = useState("");
//   const [isAgreed, setIsAgreed] = useState(false);

//   // Calculate the commission
//   const commissionRate = 0.15; // 15%
//   const commission = totalPrice * commissionRate;
//   const finalPrice = totalPrice + commission;

//   const deliveryOptions = [
//     { value: "3", label: "3 Hours" },
//     { value: "6", label: "6 Hours" },
//     { value: "1", label: "1 Day" },
//     { value: "2", label: "2 Days" },
//     { value: "7", label: "1 Week" },
//   ];

//   const handlePayment = (event) => {
//     event.preventDefault();

//     if (!deliveryTime) {
//       alert("Please select a delivery time.");
//       return;
//     }

//     if (!isAgreed) {
//       alert("Please agree to the terms and conditions to proceed.");
//       return;
//     }
//     const confirmationMessage = `Are you sure you want to purchase the selected items with a total price of $${totalPrice}, a commission fee of $${commission.toFixed(
//       2
//     )}, and a final price of $${finalPrice.toFixed(2)}?`;
//     if (window.confirm(confirmationMessage)) {
//       alert("Payment and delivery options submitted");
//       navigate("/order-confirmation", {
//         state: { items, finalPrice, deliveryTime },
//       });
//     }
//   };

//   return (
//     <div className="payment-container">
//       <h2>Payment Options</h2>
//       <h3>Items in Cart:</h3>
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>
//             {item.itemType} - ${item.price} x {item.quantity} = $
//             {item.price * item.quantity}
//           </li>
//         ))}
//       </ul>
//       <p>Total Price: ${totalPrice.toFixed(2)}</p>
//       <p>Commission (15%): ${commission.toFixed(2)}</p>
//       <p>Final Price (Total + Commission): ${finalPrice.toFixed(2)}</p>
//       <form onSubmit={handlePayment}>
//         <div>
//           <label htmlFor="address">Delivery Address:</label>
//           <input type="text" id="address" required />
//         </div>
//         <div>
//           <label htmlFor="phone">Phone Number:</label>
//           <input type="tel" id="phone" required />
//         </div>
//         <div>
//           <label htmlFor="delivery-time">Delivery Time:</label>
//           <select
//             id="delivery-time"
//             value={deliveryTime}
//             onChange={(e) => setDeliveryTime(e.target.value)}
//             required
//           >
//             <option value="">Select Delivery Time</option>
//             {deliveryOptions.map((option) => (
//               <option key={option.value} value={option.value}>
//                 {option.label}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div>
//           <label htmlFor="payment-method">Payment Method:</label>
//           <select id="payment-method" required>
//             <option value="">Select Payment Method</option>
//             <option value="cbe">Cbe</option>
//             <option value="telbirr">telbirr</option>
//             <option value="awash-pro">awash-pro</option>
//           </select>
//         </div>
//         <div>
//           <label>
//             <input
//               type="checkbox"
//               checked={isAgreed}
//               onChange={(e) => setIsAgreed(e.target.checked)}
//               required
//             />
//             I agree to the terms and conditions
//           </label>
//         </div>
//         <button type="submit">Confirm and Pay</button>
//       </form>
//     </div>
//   );
// };

// export default Payment;

// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// const Payment = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const items = location.state?.items || [];
//   const totalPrice = location.state?.totalPrice || 0;
//   const [deliveryOption, setDeliveryOption] = useState("");
//   const [deliveryTime, setDeliveryTime] = useState("");
//   const [isAgreed, setIsAgreed] = useState(false);

//   // Calculate the commission
//   const commissionRate = 0.15; // 15%
//   const commission = totalPrice * commissionRate;
//   const deliveryFee = 50; // Delivery fee of 50 Birr
//   const finalPrice =
//     deliveryOption === "delivery"
//       ? totalPrice + commission + deliveryFee
//       : totalPrice + commission;

//   const deliveryOptions = [
//     { value: "3", label: "3 Hours" },
//     { value: "6", label: "6 Hours" },
//     { value: "1", label: "1 Day" },
//     { value: "2", label: "2 Days" },
//     { value: "7", label: "1 Week" },
//   ];

//   const handlePayment = (event) => {
//     event.preventDefault();

//     if (!isAgreed) {
//       alert("Please agree to the terms and conditions to proceed.");
//       return;
//     }

//     if (deliveryOption === "delivery" && !deliveryTime) {
//       alert("Please select a delivery time.");
//       return;
//     }

//     const confirmationMessage = `Are you sure you want to ${
//       deliveryOption === "delivery"
//         ? "purchase and have it delivered"
//         : "purchase and go buy it"
//     }?\nTotal Price: $${totalPrice.toFixed(
//       2
//     )}\nCommission (15%): $${commission.toFixed(2)} ${
//       deliveryOption === "delivery" ? `\nDelivery Fee: ${deliveryFee} Birr` : ""
//     }\nFinal Price: $${finalPrice.toFixed(2)}`;

//     if (window.confirm(confirmationMessage)) {
//       alert("Payment options submitted");
//       navigate("/order-confirmation", {
//         state: { items, finalPrice, deliveryTime, deliveryOption },
//       });
//     }
//   };

//   return (
//     <div className="payment-container">
//       <h2>Payment Options</h2>
//       <h3>Items in Cart:</h3>
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>
//             {item.itemType} - ${item.price} x {item.quantity} = $
//             {item.price * item.quantity}
//           </li>
//         ))}
//       </ul>
//       <p>Total Price: ${totalPrice.toFixed(2)}</p>
//       <p>Commission (15%): ${commission.toFixed(2)}</p>
//       {deliveryOption === "delivery" && <p>Delivery Fee: {deliveryFee} Birr</p>}
//       <p>
//         Final Price (
//         {deliveryOption === "delivery"
//           ? "Total + Commission + Delivery"
//           : "Total + Commission"}
//         ): ${finalPrice.toFixed(2)}
//       </p>
//       <form onSubmit={handlePayment}>
//         <div>
//           <label>Choose an option:</label>
//           <div>
//             <label>
//               <input
//                 type="radio"
//                 value="delivery"
//                 checked={deliveryOption === "delivery"}
//                 onChange={(e) => setDeliveryOption(e.target.value)}
//                 required
//               />
//               Delivery
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 value="go-and-buy"
//                 checked={deliveryOption === "go-and-buy"}
//                 onChange={(e) => setDeliveryOption(e.target.value)}
//                 required
//               />
//               Go and Buy It
//             </label>
//           </div>
//         </div>
//         {deliveryOption === "delivery" && (
//           <div>
//             <label htmlFor="delivery-time">Delivery Time:</label>
//             <select
//               id="delivery-time"
//               value={deliveryTime}
//               onChange={(e) => setDeliveryTime(e.target.value)}
//               required
//             >
//               <option value="">Select Delivery Time</option>
//               {deliveryOptions.map((option) => (
//                 <option key={option.value} value={option.value}>
//                   {option.label}
//                 </option>
//               ))}
//             </select>
//           </div>
//         )}
//         {deliveryOption === "delivery" && (
//           <>
//             <div>
//               <label htmlFor="address">Delivery Address:</label>
//               <input type="text" id="address" required />
//             </div>
//             <div>
//               <label htmlFor="phone">Phone Number:</label>
//               <input type="tel" id="phone" required />
//             </div>
//           </>
//         )}
//         <div>
//           <label htmlFor="payment-method">Payment Method:</label>
//           <select id="payment-method" required>
//             <option value="">Select Payment Method</option>
//             <option value="cbe">Cbe</option>
//             <option value="telbirr">telbirr</option>
//             <option value="awash-pro">awash-pro</option>
//           </select>
//         </div>
//         <div>
//           <label>
//             <input
//               type="checkbox"
//               checked={isAgreed}
//               onChange={(e) => setIsAgreed(e.target.checked)}
//               required
//             />
//             I agree to the terms and conditions
//           </label>
//         </div>
//         <button type="submit">Confirm and Pay</button>
//       </form>
//     </div>
//   );
// };

// export default Payment;

// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// const Payment = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const items = location.state?.items || [];
//   const totalPrice = location.state?.totalPrice || 0;
//   const [deliveryOption, setDeliveryOption] = useState("");
//   const [deliveryTime, setDeliveryTime] = useState("");
//   const [isAgreed, setIsAgreed] = useState(false);
//   const [paymentMethod, setPaymentMethod] = useState(""); // Add state for payment method

//   // Calculate the commission
//   const commissionRate = 0.15; // 15%
//   const commission = totalPrice * commissionRate;
//   const deliveryFee = 50; // Delivery fee of 50 Birr
//   const finalPrice =
//     deliveryOption === "delivery"
//       ? totalPrice + commission + deliveryFee
//       : totalPrice + commission;

//   const deliveryOptions = [
//     { value: "3", label: "3 Hours" },
//     { value: "6", label: "6 Hours" },
//     { value: "1", label: "1 Day" },
//     { value: "2", label: "2 Days" },
//     { value: "7", label: "1 Week" },
//   ];

//   // Get user ID from localStorage
//   const userId = localStorage.getItem("userId");

//   const handlePayment = async (event) => {
//     event.preventDefault();

//     if (!isAgreed) {
//       alert("Please agree to the terms and conditions to proceed.");
//       return;
//     }

//     if (deliveryOption === "delivery" && !deliveryTime) {
//       alert("Please select a delivery time.");
//       return;
//     }

//     if (!paymentMethod) {
//       // Validate payment method
//       alert("Please select a payment method.");
//       return;
//     }

//     const confirmationMessage = `Are you sure you want to ${
//       deliveryOption === "delivery"
//         ? "purchase and have it delivered"
//         : "purchase and go buy it"
//     }?\nTotal Price: $${totalPrice.toFixed(
//       2
//     )}\nCommission (15%): $${commission.toFixed(2)} ${
//       deliveryOption === "delivery" ? `\nDelivery Fee: ${deliveryFee} Birr` : ""
//     }\nFinal Price: $${finalPrice.toFixed(2)}`;

//     if (window.confirm(confirmationMessage)) {
//       alert("Payment options submitted");

//       // Prepare order data to send to the backend
//       const orderData = {
//         userId: parseInt(userId, 10),
//         totalAmount: finalPrice,
//         status: "Pending",
//         deliveryOption,
//         deliveryTime,
//         paymentMethod,
//         items: items.map((item) => {
//           console.log("Item being mapped:", item); // <---- Add this line
//           return {
//             itemId: item.id,
//             quantity: item.quantity,
//             price: item.price,
//           };
//         }),
//       };

//       try {
//         // Send order data to your backend API (replace with your actual endpoint)
//         const response = await fetch("http://localhost:5000/api/orders", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(orderData),
//         });

//         if (!response.ok) {
//           throw new Error(`Failed to create order: ${response.status}`);
//         }

//         const responseData = await response.json(); // Get the response from the server, e.g., the new order ID
//         console.log("Order created successfully:", responseData);

//         if (deliveryOption === "delivery") {
//           navigate("/delivery-page", {
//             state: {
//               ...orderData, //  Pass the order data
//               items,
//               finalPrice,
//               deliveryTime,
//               deliveryOption,
//               orderId: responseData.orderId, // Pass the new order ID from the response
//             },
//           });
//         } else {
//           navigate("/order-confirmation", {
//             state: {
//               ...orderData,
//               items,
//               finalPrice,
//               deliveryTime,
//               deliveryOption,
//               orderId: responseData.orderId,
//             },
//           }); //  Pass order ID
//         }
//       } catch (error) {
//         console.error("Error creating order:", error);
//         alert("Failed to create order. Please try again."); //  Inform the user
//       }
//     }
//   };

//   return (
//     <div className="payment-container">
//       <h2>Payment Options</h2>
//       <h3>Items in Cart:</h3>
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>
//             {item.itemType} - ${item.price} x {item.quantity} = $
//             {item.price * item.quantity}
//           </li>
//         ))}
//       </ul>
//       <p>Total Price: ${totalPrice.toFixed(2)}</p>
//       <p>Commission (15%): ${commission.toFixed(2)}</p>
//       {deliveryOption === "delivery" && <p>Delivery Fee: {deliveryFee} Birr</p>}
//       <p>
//         Final Price (
//         {deliveryOption === "delivery"
//           ? "Total + Commission + Delivery"
//           : "Total + Commission"}
//         ): ${finalPrice.toFixed(2)}
//       </p>
//       <form onSubmit={handlePayment}>
//         <div>
//           <label>Choose an option:</label>
//           <div>
//             <label>
//               <input
//                 type="radio"
//                 value="delivery"
//                 checked={deliveryOption === "delivery"}
//                 onChange={(e) => setDeliveryOption(e.target.value)}
//                 required
//               />
//               Delivery
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 value="go-and-buy"
//                 checked={deliveryOption === "go-and-buy"}
//                 onChange={(e) => setDeliveryOption(e.target.value)}
//                 required
//               />
//               Go and Buy It
//             </label>
//           </div>
//         </div>
//         {deliveryOption === "delivery" && (
//           <div>
//             <label htmlFor="delivery-time">Delivery Time:</label>
//             <select
//               id="delivery-time"
//               value={deliveryTime}
//               onChange={(e) => setDeliveryTime(e.target.value)}
//               required
//             >
//               <option value="">Select Delivery Time</option>
//               {deliveryOptions.map((option) => (
//                 <option key={option.value} value={option.value}>
//                   {option.label}
//                 </option>
//               ))}
//             </select>
//           </div>
//         )}
//         {deliveryOption === "delivery" && (
//           <>
//             <div>
//               <label htmlFor="address">Delivery Address:</label>
//               <input type="text" id="address" required />
//             </div>
//             <div>
//               <label htmlFor="phone">Phone Number:</label>
//               <input type="tel" id="phone" required />
//             </div>
//           </>
//         )}
//         <div>
//           <label htmlFor="payment-method">Payment Method:</label>
//           <select
//             id="payment-method"
//             value={paymentMethod}
//             onChange={(e) => setPaymentMethod(e.target.value)}
//             required
//           >
//             <option value="">Select Payment Method</option>
//             <option value="cbe">Cbe</option>
//             <option value="telbirr">telbirr</option>
//             <option value="awash-pro">Awash-pro</option>
//           </select>
//         </div>
//         <div>
//           <label>
//             <input
//               type="checkbox"
//               checked={isAgreed}
//               onChange={(e) => setIsAgreed(e.target.checked)}
//               required
//             />
//             I agree to the terms and conditions
//           </label>
//         </div>
//         <button type="submit">Confirm and Pay</button>
//       </form>
//     </div>
//   );
// };

// export default Payment;

// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// const Payment = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const items = location.state?.items || [];
//   const totalPrice = location.state?.totalPrice || 0;
//   const [deliveryOption, setDeliveryOption] = useState("");
//   const [deliveryTime, setDeliveryTime] = useState("");
//   const [isAgreed, setIsAgreed] = useState(false);
//   const [paymentMethod, setPaymentMethod] = useState(""); // Add state for payment method

//   // Calculate the commission
//   const commissionRate = 0.15; // 15%
//   const commission = totalPrice * commissionRate;
//   const deliveryFee = 50; // Delivery fee of 50 Birr
//   const finalPrice =
//     deliveryOption === "delivery"
//       ? totalPrice + commission + deliveryFee
//       : totalPrice + commission;

//   const deliveryOptions = [
//     { value: "3", label: "3 Hours" },
//     { value: "6", label: "6 Hours" },
//     { value: "1", label: "1 Day" },
//     { value: "2", label: "2 Days" },
//     { value: "7", label: "1 Week" },
//   ];

//   // Get user ID from localStorage
//   const userId = localStorage.getItem("userId");

//   const handlePayment = async (event) => {
//     event.preventDefault();

//     if (!isAgreed) {
//       alert("Please agree to the terms and conditions to proceed.");
//       return;
//     }

//     if (deliveryOption === "delivery" && !deliveryTime) {
//       alert("Please select a delivery time.");
//       return;
//     }

//     if (!paymentMethod) {
//       // Validate payment method
//       alert("Please select a payment method.");
//       return;
//     }

//     const confirmationMessage = `Are you sure you want to ${
//       deliveryOption === "delivery"
//         ? "purchase and have it delivered"
//         : "purchase and go buy it"
//     }?\nTotal Price: $${totalPrice.toFixed(
//       2
//     )}\nCommission (15%): $${commission.toFixed(2)} ${
//       deliveryOption === "delivery" ? `\nDelivery Fee: ${deliveryFee} Birr` : ""
//     }\nFinal Price: $${finalPrice.toFixed(2)}`;

//     if (window.confirm(confirmationMessage)) {
//       alert("Payment options submitted");

//       // Prepare order data to send to the backend
//       const orderData = {
//         userId: parseInt(userId, 10),
//         totalAmount: finalPrice,
//         status: "Pending",
//         deliveryOption,
//         deliveryTime,
//         paymentMethod,
//         items: items.map((item) => {
//           console.log("Item being mapped:", item);
//           return {
//             itemId: item.id,
//             quantity: item.quantity,
//             price: item.price,
//           };
//         }),
//       };

//       try {
//         // Send order data to your backend API (replace with your actual endpoint)
//         const response = await fetch("http://localhost:5000/api/orders", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(orderData),
//         });

//         if (!response.ok) {
//           throw new Error(`Failed to create order: ${response.status}`);
//         }

//         const responseData = await response.json(); // Get the response from the server, e.g., the new order ID
//         console.log("Order created successfully:", responseData);

//         if (deliveryOption === "delivery") {
//           navigate("/delivery-page", {
//             state: {
//               ...orderData,
//               items,
//               finalPrice,
//               deliveryTime,
//               deliveryOption,
//               orderId: responseData.orderId,
//             },
//           });
//         } else {
//           navigate("/order-confirmation", {
//             state: {
//               ...orderData,
//               items,
//               finalPrice,
//               deliveryTime,
//               deliveryOption,
//               orderId: responseData.orderId,
//             },
//           });
//         }
//       } catch (error) {
//         console.error("Error creating order:", error);
//         alert("Failed to create order. Please try again.");
//       }
//     }
//   };

//   return (
//     <div className="payment-container">
//       <h2>Payment Options</h2>
//       <h3>Items in Cart:</h3>
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>
//             <p>Item ID: {item.id}</p>
//             <p>{item.itemType}</p>
//             <p>Price: ${item.price}</p>
//             <p>Quantity: {item.quantity}</p>
//             <p>Subtotal: ${item.price * item.quantity}</p>
//           </li>
//         ))}
//       </ul>
//       <p>Total Price: ${totalPrice.toFixed(2)}</p>
//       <p>Commission (15%): ${commission.toFixed(2)}</p>
//       {deliveryOption === "delivery" && <p>Delivery Fee: {deliveryFee} Birr</p>}
//       <p>
//         Final Price (
//         {deliveryOption === "delivery"
//           ? "Total + Commission + Delivery"
//           : "Total + Commission"}
//         ): ${finalPrice.toFixed(2)}
//       </p>
//       <form onSubmit={handlePayment}>
//         <div>
//           <label>Choose an option:</label>
//           <div>
//             <label>
//               <input
//                 type="radio"
//                 value="delivery"
//                 checked={deliveryOption === "delivery"}
//                 onChange={(e) => setDeliveryOption(e.target.value)}
//                 required
//               />
//               Delivery
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 value="go-and-buy"
//                 checked={deliveryOption === "go-and-buy"}
//                 onChange={(e) => setDeliveryOption(e.target.value)}
//                 required
//               />
//               Go and Buy It
//             </label>
//           </div>
//         </div>
//         {deliveryOption === "delivery" && (
//           <div>
//             <label htmlFor="delivery-time">Delivery Time:</label>
//             <select
//               id="delivery-time"
//               value={deliveryTime}
//               onChange={(e) => setDeliveryTime(e.target.value)}
//               required
//             >
//               <option value="">Select Delivery Time</option>
//               {deliveryOptions.map((option) => (
//                 <option key={option.value} value={option.value}>
//                   {option.label}
//                 </option>
//               ))}
//             </select>
//           </div>
//         )}
//         {deliveryOption === "delivery" && (
//           <>
//             <div>
//               <label htmlFor="address">Delivery Address:</label>
//               <input type="text" id="address" required />
//             </div>
//             <div>
//               <label htmlFor="phone">Phone Number:</label>
//               <input type="tel" id="phone" required />
//             </div>
//           </>
//         )}
//         <div>
//           <label htmlFor="payment-method">Payment Method:</label>
//           <select
//             id="payment-method"
//             value={paymentMethod}
//             onChange={(e) => setPaymentMethod(e.target.value)}
//             required
//           >
//             <option value="">Select Payment Method</option>
//             <option value="cbe">Cbe</option>
//             <option value="telbirr">telbirr</option>
//             <option value="awash-pro">Awash-pro</option>
//           </select>
//         </div>
//         <div>
//           <label>
//             <input
//               type="checkbox"
//               checked={isAgreed}
//               onChange={(e) => setIsAgreed(e.target.checked)}
//               required
//             />
//             I agree to the terms and conditions
//           </label>
//         </div>
//         <button type="submit">Confirm and Pay</button>
//       </form>
//     </div>
//   );
// };

// export default Payment;

// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// const Payment = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const items = location.state?.items || [];
//   const totalPrice = location.state?.totalPrice || 0;
//   const [deliveryTime, setDeliveryTime] = useState("");
//   const [isAgreed, setIsAgreed] = useState(false);
//   const [sellerInfo, setSellerInfo] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [deliveryOption, setDeliveryOption] = useState("");
//   const [paymentMethod, setPaymentMethod] = useState(""); // Add state for payment method

//   // Calculate the commission
//   const commissionRate = 0.15; // 15%
//   const commission = totalPrice * commissionRate;
//   const deliveryFee = 50; // Delivery fee of 50 Birr
//   const finalPrice =
//     deliveryOption === "delivery"
//       ? totalPrice + commission + deliveryFee
//       : totalPrice + commission;

//   const deliveryOptions = [
//     { value: "3", label: "3 Hours" },
//     { value: "6", label: "6 Hours" },
//     { value: "1", label: "1 Day" },
//     { value: "2", label: "2 Days" },
//     { value: "7", label: "1 Week" },
//   ];

//   // Get user ID from localStorage
//   const userId = localStorage.getItem("userId");

//   // Fetch seller info
//   useEffect(() => {
//     const fetchSellerInfo = async (userId) => {
//       setLoading(true);
//       setError(null);
//       try {
//         const response = await fetch(
//           `http://localhost:5000/api/users/${userId}`
//         );
//         if (!response.ok) {
//           throw new Error(`Failed to fetch seller info: ${response.status}`);
//         }
//         const data = await response.json();
//         setSellerInfo(data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     // Get unique user IDs from the items
//     const sellerIds = [...new Set(items.map((item) => item.user_id))];
//     // Fetch seller info for the first seller.  In a real app, you might
//     // want to handle multiple sellers.
//     if (sellerIds.length > 0) {
//       fetchSellerInfo(sellerIds[0]); // Fetch info for the first seller
//     }
//   }, [items]);

//   const handlePayment = async (event) => {
//     event.preventDefault();

//     if (!isAgreed) {
//       alert("Please agree to the terms and conditions to proceed.");
//       return;
//     }

//     if (deliveryOption === "delivery" && !deliveryTime) {
//       alert("Please select a delivery time.");
//       return;
//     }

//     if (!paymentMethod) {
//       // Validate payment method
//       alert("Please select a payment method.");
//       return;
//     }

//     const confirmationMessage = `Are you sure you want to ${
//       deliveryOption === "delivery"
//         ? "purchase and have it delivered"
//         : "purchase and go buy it"
//     }?\nTotal Price: $${totalPrice.toFixed(
//       2
//     )}\nCommission (15%): $${commission.toFixed(2)} ${
//       deliveryOption === "delivery" ? `\nDelivery Fee: ${deliveryFee} Birr` : ""
//     }\nFinal Price: $${finalPrice.toFixed(2)}`;

//     if (window.confirm(confirmationMessage)) {
//       alert("Payment options submitted");

//       // Prepare order data to send to the backend
//       const orderData = {
//         userId: parseInt(userId, 10),
//         totalAmount: finalPrice,
//         status: "Pending",
//         deliveryOption,
//         deliveryTime,
//         paymentMethod,
//         items: items.map((item) => ({
//           itemId: item.id,
//           quantity: item.quantity,
//           price: item.price,
//         })),
//       };

//       try {
//         // Send order data to your backend API (replace with your actual endpoint)
//         const response = await fetch("http://localhost:5000/api/orders", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(orderData),
//         });

//         if (!response.ok) {
//           throw new Error(`Failed to create order: ${response.status}`);
//         }

//         const responseData = await response.json(); // Get the response from the server, e.g., the new order ID
//         console.log("Order created successfully:", responseData);

//         if (deliveryOption === "delivery") {
//           navigate("/deliverypage", {
//             state: {
//               ...orderData,
//               items,
//               finalPrice,
//               deliveryTime,
//               deliveryOption,
//               orderId: responseData.orderId,
//             },
//           });
//         } else {
//           navigate("/order-confirmation", {
//             state: {
//               ...orderData,
//               items,
//               finalPrice,
//               deliveryTime,
//               deliveryOption,
//               orderId: responseData.orderId,
//             },
//           });
//         }
//       } catch (error) {
//         console.error("Error creating order:", error);
//         alert("Failed to create order. Please try again.");
//       }
//     }
//   };

//   return (
//     <div className="payment-container">
//       <h2>Payment Options</h2>
//       <h3>Items in Cart:</h3>
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>
//             <p>Item ID: {item.id}</p>
//             <p>{item.itemType}</p>
//             <p>Price: ${item.price}</p>
//             <p>Quantity: {item.quantity}</p>
//             <p>Subtotal: ${item.price * item.quantity}</p>
//           </li>
//         ))}
//       </ul>
//       <p>Total Price: ${totalPrice.toFixed(2)}</p>
//       <p>Commission (15%): ${commission.toFixed(2)}</p>
//       {deliveryOption === "delivery" && <p>Delivery Fee: {deliveryFee} Birr</p>}
//       <p>
//         Final Price (
//         {deliveryOption === "delivery"
//           ? "Total + Commission + Delivery"
//           : "Total + Commission"}
//         ): ${finalPrice.toFixed(2)}
//       </p>
//       <form onSubmit={handlePayment}>
//         <div>
//           <label>Choose an option:</label>
//           <div>
//             <label>
//               <input
//                 type="radio"
//                 value="delivery"
//                 checked={deliveryOption === "delivery"}
//                 onChange={(e) => setDeliveryOption(e.target.value)}
//                 required
//               />
//               Delivery
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 value="go-and-buy"
//                 checked={deliveryOption === "go-and-buy"}
//                 onChange={(e) => setDeliveryOption(e.target.value)}
//                 required
//               />
//               Go and Buy It
//             </label>
//           </div>
//         </div>
//         {deliveryOption === "delivery" && (
//           <div>
//             <label htmlFor="delivery-time">Delivery Time:</label>
//             <select
//               id="delivery-time"
//               value={deliveryTime}
//               onChange={(e) => setDeliveryTime(e.target.value)}
//               required
//             >
//               <option value="">Select Delivery Time</option>
//               {deliveryOptions.map((option) => (
//                 <option key={option.value} value={option.value}>
//                   {option.label}
//                 </option>
//               ))}
//             </select>
//           </div>
//         )}
//         {deliveryOption === "delivery" && (
//           <>
//             <div>
//               <label htmlFor="address">Delivery Address:</label>
//               <input type="text" id="address" required />
//             </div>
//             <div>
//               <label htmlFor="phone">Phone Number:</label>
//               <input type="tel" id="phone" required />
//             </div>
//           </>
//         )}
//         <div>
//           <label htmlFor="payment-method">Payment Method:</label>
//           <select
//             id="payment-method"
//             value={paymentMethod}
//             onChange={(e) => setPaymentMethod(e.target.value)}
//             required
//           >
//             <option value="">Select Payment Method</option>
//             <option value="cbe">Cbe</option>
//             <option value="telbirr">telbirr</option>
//             <option value="awash-pro">Awash-pro</option>
//           </select>
//         </div>
//         <div>
//           <label>
//             <input
//               type="checkbox"
//               checked={isAgreed}
//               onChange={(e) => setIsAgreed(e.target.checked)}
//               required
//             />
//             I agree to the terms and conditions
//           </label>
//         </div>
//         <button type="submit">Confirm and Pay</button>
//       </form>
//     </div>
//   );
// };

// export default Payment;
// import { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import DeliveryPage from "./Deliverypage";
// const Payment = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const items = location.state?.items || [];
//   const totalPrice = location.state?.totalPrice || 0;
//   const [deliveryTime, setDeliveryTime] = useState("");
//   const [isAgreed, setIsAgreed] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [deliveryOption, setDeliveryOption] = useState("");
//   const [paymentMethod, setPaymentMethod] = useState(""); // Add state for payment method
//   const userId = localStorage.getItem("userId");

//   // Calculate the commission
//   const commissionRate = 0.15; // 15%
//   const commission = totalPrice * commissionRate;
//   const deliveryFee = 50; // Delivery fee of 50 Birr
//   const finalPrice =
//     deliveryOption === "delivery"
//       ? totalPrice + commission + deliveryFee
//       : totalPrice + commission;

//   const deliveryOptions = [
//     { value: "3", label: "3 Hours" },
//     { value: "6", label: "6 Hours" },
//     { value: "1", label: "1 Day" },
//     { value: "2", label: "2 Days" },
//     { value: "7", label: "1 Week" },
//   ];

//   const handlePayment = async (event) => {
//     event.preventDefault();

//     if (!isAgreed) {
//       alert("Please agree to the terms and conditions to proceed.");
//       return;
//     }

//     if (deliveryOption === "delivery" && !deliveryTime) {
//       alert("Please select a delivery time.");
//       return;
//     }

//     if (!paymentMethod) {
//       // Validate payment method
//       alert("Please select a payment method.");
//       return;
//     }

//     const confirmationMessage = `Are you sure you want to ${
//       deliveryOption === "delivery"
//         ? "purchase and have it delivered"
//         : "purchase and go buy it"
//     }?\nTotal Price: $${totalPrice.toFixed(
//       2
//     )}\nCommission (15%): $${commission.toFixed(2)} ${
//       deliveryOption === "delivery" ? `\nDelivery Fee: ${deliveryFee} Birr` : ""
//     }\nFinal Price: $${finalPrice.toFixed(2)}`;

//     if (window.confirm(confirmationMessage)) {
//       alert("Payment options submitted");

//       // Prepare order data to send to the backend
//       const orderData = {
//         userId: parseInt(userId || "0", 10),
//         totalAmount: finalPrice,
//         status: "Pending",
//         deliveryOption,
//         deliveryTime,
//         paymentMethod,
//         items: items.map((item) => ({
//           itemId: item.id,
//           quantity: item.quantity,
//           price: item.price,
//         })),
//       };

//       try {
//         // Send order data to your backend API (replace with your actual endpoint)
//         const response = await fetch("http://localhost:5000/api/orders", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(orderData),
//         });

//         if (!response.ok) {
//           throw new Error(`Failed to create order: ${response.status}`);
//         }

//         const responseData = await response.json(); // Get the response from the server, e.g., the new order ID
//         console.log("Order created successfully:", responseData);
//         const orderId = responseData.orderId;

//         if (deliveryOption === "delivery") {
//           navigate("/deliverypage", {
//             state: {
//               orderData,
//               items,
//               finalPrice,
//               deliveryTime,
//               orderId,
//             },
//           });
//         } else {
//           navigate("/order-confirmation", {
//             state: {
//               ...orderData,
//               items,
//               finalPrice,
//               deliveryTime,
//               orderId: responseData.orderId,
//             },
//           });
//         }
//       } catch (err) {
//         setError(err.message || "Failed to create order. Please try again.");
//       }
//     }
//   };

//   if (location.pathname === "/deliverypage") {
//     const { orderData, items, finalPrice, deliveryTime, orderId } =
//       location.state;
//     return (
//       <DeliveryPage
//         orderData={orderData}
//         items={items}
//         finalPrice={finalPrice}
//         deliveryTime={deliveryTime}
//         orderId={orderId}
//       />
//     );
//   }

//   return (
//     <div className="payment-container">
//       <h2>Payment Options</h2>
//       <h3>Items in Cart:</h3>
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>
//             <p>Item ID: {item.id}</p>
//             <p>{item.itemType}</p>
//             <p>Price: ${item.price}</p>
//             <p>Quantity: {item.quantity}</p>
//             <p>Subtotal: ${item.price * item.quantity}</p>
//           </li>
//         ))}
//       </ul>
//       <p>Total Price: ${totalPrice.toFixed(2)}</p>
//       <p>Commission (15%): ${commission.toFixed(2)}</p>
//       {deliveryOption === "delivery" && <p>Delivery Fee: {deliveryFee} Birr</p>}
//       <p>
//         Final Price (
//         {deliveryOption === "delivery"
//           ? "Total + Commission + Delivery"
//           : "Total + Commission"}
//         ): ${finalPrice.toFixed(2)}
//       </p>
//       <form onSubmit={handlePayment}>
//         <div>
//           <label>Choose an option:</label>
//           <div>
//             <label>
//               <input
//                 type="radio"
//                 value="delivery"
//                 checked={deliveryOption === "delivery"}
//                 onChange={(e) => setDeliveryOption(e.target.value)}
//                 required
//               />
//               Delivery
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 value="go-and-buy"
//                 checked={deliveryOption === "go-and-buy"}
//                 onChange={(e) => setDeliveryOption(e.target.value)}
//                 required
//               />
//               Go and Buy It
//             </label>
//           </div>
//         </div>
//         {deliveryOption === "delivery" && (
//           <div>
//             <label htmlFor="delivery-time">Delivery Time:</label>
//             <select
//               id="delivery-time"
//               value={deliveryTime}
//               onChange={(e) => setDeliveryTime(e.target.value)}
//               required
//             >
//               <option value="">Select Delivery Time</option>
//               {deliveryOptions.map((option) => (
//                 <option key={option.value} value={option.value}>
//                   {option.label}
//                 </option>
//               ))}
//             </select>
//           </div>
//         )}

//         <div>
//           <label htmlFor="payment-method">Payment Method:</label>
//           <select
//             id="payment-method"
//             value={paymentMethod}
//             onChange={(e) => setPaymentMethod(e.target.value)}
//             required
//           >
//             <option value="">Select Payment Method</option>
//             <option value="cbe">Cbe</option>
//             <option value="telbirr">telbirr</option>
//             <option value="awash-pro">Awash-pro</option>
//           </select>
//         </div>
//         <div>
//           <label>
//             <input
//               type="checkbox"
//               checked={isAgreed}
//               onChange={(e) => setIsAgreed(e.target.checked)}
//               required
//             />
//             I agree to the terms and conditions
//           </label>
//         </div>
//         <button type="submit" disabled={loading}>
//           {loading ? "Processing..." : "Confirm and Pay"}
//         </button>
//         {error && <p className="error-message">{error}</p>}
//       </form>
//     </div>
//   );
// };

// export default Payment;

// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import DeliveryPage from "./Deliverypage";

// const Payment = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const items = location.state?.items || [];
//   const totalPrice = location.state?.totalPrice || 0;
//   const [deliveryTime, setDeliveryTime] = useState("");
//   const [isAgreed, setIsAgreed] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [deliveryOption, setDeliveryOption] = useState("");
//   const [paymentMethod, setPaymentMethod] = useState(""); // Add state for payment method
//   const userId = localStorage.getItem("userId");

//   // Calculate the commission
//   const commissionRate = 0.15; // 15%
//   const commission = totalPrice * commissionRate;
//   const deliveryFee = 50; // Delivery fee of 50 Birr
//   const finalPrice =
//     deliveryOption === "delivery"
//       ? totalPrice + commission + deliveryFee
//       : totalPrice + commission;

//   const deliveryOptions = [
//     { value: "3", label: "3 Hours" },
//     { value: "6", label: "6 Hours" },
//     { value: "1", label: "1 Day" },
//     { value: "2", label: "2 Days" },
//     { value: "7", label: "1 Week" },
//   ];

//   const handlePayment = async (event) => {
//     event.preventDefault();

//     if (!isAgreed) {
//       alert("Please agree to the terms and conditions to proceed.");
//       return;
//     }

//     if (deliveryOption === "delivery" && !deliveryTime) {
//       alert("Please select a delivery time.");
//       return;
//     }

//     if (!paymentMethod) {
//       // Validate payment method
//       alert("Please select a payment method.");
//       return;
//     }

//     const confirmationMessage = `Are you sure you want to ${
//       deliveryOption === "delivery"
//         ? "purchase and have it delivered"
//         : "purchase and go buy it"
//     }?\nTotal Price: $${totalPrice.toFixed(
//       2
//     )}\nCommission (15%): $${commission.toFixed(2)} ${
//       deliveryOption === "delivery" ? `\nDelivery Fee: ${deliveryFee} Birr` : ""
//     }\nFinal Price: $${finalPrice.toFixed(2)}`;

//     if (window.confirm(confirmationMessage)) {
//       alert("Payment options submitted");
//       setLoading(true); // Set loading to true before starting the process.
//       setError(null);

//       // Prepare order data to send to the backend
//       const orderData = {
//         userId: parseInt(userId || "0", 10),
//         totalAmount: finalPrice,
//         status: "Pending",
//         deliveryOption,
//         deliveryTime,
//         paymentMethod,
//         items: items.map((item) => ({
//           itemId: item.id,
//           quantity: item.quantity,
//           price: item.price,
//         })),
//       };
//       console.log("orderData being sent:", orderData);

//       try {
//         // Send order data to your backend API (replace with your actual endpoint)
//         const response = await fetch("http://localhost:5000/api/orders", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(orderData),
//         });

//         if (!response.ok) {
//           throw new Error(`Failed to create order: ${response.status}`);
//         }

//         const responseData = await response.json(); // Get the response from the server, e.g., the new order ID
//         console.log("Order created successfully:", responseData);
//         const orderId = responseData.orderId;

//         // Update product quantities in the database
//         for (const item of items) {
//           const updateResponse = await fetch(
//             `http://localhost:5000/api/products/${item.id}`, //  API endpoint to update a product
//             {
//               method: "PUT", // Use PUT to update
//               headers: {
//                 "Content-Type": "application/json",
//               },
//               body: JSON.stringify({ quantity: item.quantity }), // Send the quantity to *subtract*
//             }
//           );

//           if (!updateResponse.ok) {
//             throw new Error(
//               `Failed to update product ${item.id}: ${updateResponse.status}`
//             );
//           }

//           const productUpdateData = await updateResponse.json();
//           console.log(
//             `Product ${item.id} updated successfully:`,
//             productUpdateData
//           );

//           if (productUpdateData.quantity <= 0) {
//             //if quantity is zero, delete product
//             const deleteResponse = await fetch(
//               `http://localhost:5000/api/products/${item.id}`,
//               {
//                 method: "DELETE",
//               }
//             );
//           }
//         }

//         setLoading(false); //  Set loading to false *after* all operations are complete

//         if (deliveryOption === "delivery") {
//           navigate("/deliverypage", {
//             state: {
//               orderData,
//               items,
//               finalPrice,
//               deliveryTime,
//               orderId,
//             },
//           });
//         } else {
//           navigate("/order-confirmation", {
//             state: {
//               ...orderData,
//               items,
//               finalPrice,
//               deliveryTime,
//               orderId: responseData.orderId,
//             },
//           });
//         }
//       } catch (err) {
//         setError(err.message || "Failed to create order. Please try again.");
//         setLoading(false); //  Set loading to false on error
//       }
//     }
//   };

//   if (location.pathname === "/deliverypage") {
//     const { orderData, items, finalPrice, deliveryTime, orderId } =
//       location.state;
//     return (
//       <DeliveryPage
//         orderData={orderData}
//         items={items}
//         finalPrice={finalPrice}
//         deliveryTime={deliveryTime}
//         orderId={orderId}
//       />
//     );
//   }

//   return (
//     <div className="payment-container">
//       <h2>Payment Options</h2>
//       <h3>Items in Cart:</h3>
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>
//             <p>Item ID: {item.id}</p>
//             <p>{item.itemType}</p>
//             <p>Price: ${item.price}</p>
//             <p>Quantity: {item.quantity}</p>
//             <p>Subtotal: ${item.price * item.quantity}</p>
//           </li>
//         ))}
//       </ul>
//       <p>Total Price: ${totalPrice.toFixed(2)}</p>
//       <p>Commission (15%): ${commission.toFixed(2)}</p>
//       {deliveryOption === "delivery" && <p>Delivery Fee: {deliveryFee} Birr</p>}
//       <p>
//         Final Price (
//         {deliveryOption === "delivery"
//           ? "Total + Commission + Delivery"
//           : "Total + Commission"}
//         ): ${finalPrice.toFixed(2)}
//       </p>
//       <form onSubmit={handlePayment}>
//         <div>
//           <label>Choose an option:</label>
//           <div>
//             <label>
//               <input
//                 type="radio"
//                 value="delivery"
//                 checked={deliveryOption === "delivery"}
//                 onChange={(e) => setDeliveryOption(e.target.value)}
//                 required
//               />
//               Delivery
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 value="go-and-buy"
//                 checked={deliveryOption === "go-and-buy"}
//                 onChange={(e) => setDeliveryOption(e.target.value)}
//                 required
//               />
//               Go and Buy It
//             </label>
//           </div>
//         </div>
//         {deliveryOption === "delivery" && (
//           <div>
//             <label htmlFor="delivery-time">Delivery Time:</label>
//             <select
//               id="delivery-time"
//               value={deliveryTime}
//               onChange={(e) => setDeliveryTime(e.target.value)}
//               required
//             >
//               <option value="">Select Delivery Time</option>
//               {deliveryOptions.map((option) => (
//                 <option key={option.value} value={option.value}>
//                   {option.label}
//                 </option>
//               ))}
//             </select>
//           </div>
//         )}

//         <div>
//           <label htmlFor="payment-method">Payment Method:</label>
//           <select
//             id="payment-method"
//             value={paymentMethod}
//             onChange={(e) => setPaymentMethod(e.target.value)}
//             required
//           >
//             <option value="">Select Payment Method</option>
//             <option value="cbe">Cbe</option>
//             <option value="telbirr">telbirr</option>
//             <option value="awash-pro">Awash-pro</option>
//           </select>
//         </div>
//         <div>
//           <label>
//             <input
//               type="checkbox"
//               checked={isAgreed}
//               onChange={(e) => setIsAgreed(e.target.checked)}
//               required
//             />
//             I agree to the terms and conditions
//           </label>
//         </div>
//         <button type="submit" disabled={loading}>
//           {loading ? "Processing..." : "Confirm and Pay"}
//         </button>
//         {error && <p className="error-message">{error}</p>}
//       </form>
//     </div>
//   );
// };

// export default Payment;

// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import DeliveryPage from "./Deliverypage";

// const Payment = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const items = location.state?.items || [];
//   const totalPrice = location.state?.totalPrice || 0;
//   const [deliveryTime, setDeliveryTime] = useState("");
//   const [isAgreed, setIsAgreed] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [deliveryOption, setDeliveryOption] = useState("");
//   const [paymentMethod, setPaymentMethod] = useState("");
//   const userId = localStorage.getItem("userId");

//   const commissionRate = 0.15;
//   const commission = totalPrice * commissionRate;
//   const deliveryFee = 50;
//   const finalPrice =
//     deliveryOption === "delivery"
//       ? totalPrice + commission + deliveryFee
//       : totalPrice + commission;

//   const deliveryOptions = [
//     { value: "3", label: "3 Hours" },
//     { value: "6", label: "6 Hours" },
//     { value: "1", label: "1 Day" },
//     { value: "2", label: "2 Days" },
//     { value: "7", label: "1 Week" },
//   ];

//   const handlePayment = async (event) => {
//     event.preventDefault();

//     if (!isAgreed) {
//       alert("Please agree to the terms and conditions to proceed.");
//       return;
//     }

//     if (deliveryOption === "delivery" && !deliveryTime) {
//       alert("Please select a delivery time.");
//       return;
//     }

//     if (!paymentMethod) {
//       alert("Please select a payment method.");
//       return;
//     }

//     const finalDeliveryTime =
//       deliveryOption === "delivery" ? deliveryTime : "Self Pickup";

//     const orderData = {
//       userId: parseInt(userId || "0", 10),
//       totalAmount: finalPrice,
//       status: "Pending",
//       deliveryOption,
//       deliveryTime: finalDeliveryTime, // Use the calculated value
//       paymentMethod,
//       items: items.map((item) => ({
//         itemId: item.id,
//         quantity: item.quantity,
//         price: item.price,
//       })),
//     };

//     // IMPORTANT:  Log the orderData *immediately before* sending it.
//     console.log("orderData being sent:", orderData);

//     try {
//       setLoading(true);
//       setError(null);
//       console.log("orderData just before fetch:", orderData);
//       const response = await fetch("http://localhost:5000/api/orders", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(orderData),
//       });

//       if (!response.ok) {
//         throw new Error(`Failed to create order: ${response.status}`);
//       }

//       const responseData = await response.json();
//       console.log("Order created successfully:", responseData);
//       const orderId = responseData.orderId;

//       for (const item of items) {
//         const updateResponse = await fetch(
//           `http://localhost:5000/api/products/${item.id}`,
//           {
//             method: "PUT",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ quantity: item.quantity }),
//           }
//         );

//         if (!updateResponse.ok) {
//           throw new Error(
//             `Failed to update product ${item.id}: ${updateResponse.status}`
//           );
//         }

//         const productUpdateData = await updateResponse.json();
//         console.log(
//           `Product ${item.id} updated successfully:`,
//           productUpdateData
//         );

//         if (productUpdateData.quantity <= 0) {
//           const deleteResponse = await fetch(
//             `http://localhost:5000/api/products/${item.id}`,
//             {
//               method: "DELETE",
//             }
//           );
//         }
//       }

//       setLoading(false);

//       if (deliveryOption === "delivery") {
//         navigate("/deliverypage", {
//           state: {
//             orderData,
//             items,
//             finalPrice,
//             deliveryTime: finalDeliveryTime,
//             orderId,
//           },
//         });
//       } else {
//         navigate("/order-confirmation", {
//           state: {
//             ...orderData,
//             items,
//             finalPrice,
//             deliveryTime: finalDeliveryTime,
//             orderId: responseData.orderId,
//           },
//         });
//       }
//     } catch (err) {
//       setError(err.message || "Failed to create order. Please try again.");
//       setLoading(false);
//     }
//   };

//   if (location.pathname === "/deliverypage") {
//     const { orderData, items, finalPrice, deliveryTime, orderId } =
//       location.state;
//     return (
//       <DeliveryPage
//         orderData={orderData}
//         items={items}
//         finalPrice={finalPrice}
//         deliveryTime={deliveryTime}
//         orderId={orderId}
//       />
//     );
//   }

//   return (
//     <div className="payment-container">
//       <h2>Payment Options</h2>
//       <h3>Items in Cart:</h3>
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>
//             <p>Item ID: {item.id}</p>
//             <p>{item.itemType}</p>
//             <p>Price: ${item.price}</p>
//             <p>Quantity: {item.quantity}</p>
//             <p>Subtotal: ${item.price * item.quantity}</p>
//           </li>
//         ))}
//       </ul>
//       <p>Total Price: ${totalPrice.toFixed(2)}</p>
//       <p>Commission (15%): ${commission.toFixed(2)}</p>
//       {deliveryOption === "delivery" && <p>Delivery Fee: {deliveryFee} Birr</p>}
//       <p>
//         Final Price (
//         {deliveryOption === "delivery"
//           ? "Total + Commission + Delivery"
//           : "Total + Commission"}
//         ): ${finalPrice.toFixed(2)}
//       </p>
//       <form onSubmit={handlePayment}>
//         <div>
//           <label>Choose an option:</label>
//           <div>
//             <label>
//               <input
//                 type="radio"
//                 value="delivery"
//                 checked={deliveryOption === "delivery"}
//                 onChange={(e) => setDeliveryOption(e.target.value)}
//                 required
//               />
//               Delivery
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 value="go-and-buy"
//                 checked={deliveryOption === "go-and-buy"}
//                 onChange={(e) => setDeliveryOption(e.target.value)}
//                 required
//               />
//               Go and Buy It
//             </label>
//           </div>
//         </div>
//         {deliveryOption === "delivery" && (
//           <div>
//             <label htmlFor="delivery-time">Delivery Time:</label>
//             <select
//               id="delivery-time"
//               value={deliveryTime}
//               onChange={(e) => setDeliveryTime(e.target.value)}
//               required
//             >
//               <option value="">Select Delivery Time</option>
//               {deliveryOptions.map((option) => (
//                 <option key={option.value} value={option.value}>
//                   {option.label}
//                 </option>
//               ))}
//             </select>
//           </div>
//         )}

//         <div>
//           <label htmlFor="payment-method">Payment Method:</label>
//           <select
//             id="payment-method"
//             value={paymentMethod}
//             onChange={(e) => setPaymentMethod(e.target.value)}
//             required
//           >
//             <option value="">Select Payment Method</option>
//             <option value="cbe">Cbe</option>
//             <option value="telbirr">telbirr</option>
//             <option value="awash-pro">Awash-pro</option>
//           </select>
//         </div>
//         <div>
//           <label>
//             <input
//               type="checkbox"
//               checked={isAgreed}
//               onChange={(e) => setIsAgreed(e.target.checked)}
//               required
//             />
//             I agree to the terms and conditions
//           </label>
//         </div>
//         <button type="submit" disabled={loading}>
//           {loading ? "Processing..." : "Confirm and Pay"}
//         </button>
//         {error && <p className="error-message">{error}</p>}
//       </form>
//     </div>
//   );
// };

// export default Payment;

// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import DeliveryPage from "./Deliverypage";

// const Payment = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const items = location.state?.items || [];
//   const totalPrice = location.state?.totalPrice || 0;
//   const [deliveryTime, setDeliveryTime] = useState("");
//   const [isAgreed, setIsAgreed] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [deliveryOption, setDeliveryOption] = useState("");
//   const [paymentMethod, setPaymentMethod] = useState("");
//   const userId = localStorage.getItem("userId");

//   const commissionRate = 0.15;
//   const commission = totalPrice * commissionRate;
//   const deliveryFee = 50;
//   const finalPrice =
//     deliveryOption === "delivery"
//       ? totalPrice + commission + deliveryFee
//       : totalPrice + commission;

//   const deliveryOptions = [
//     { value: "3", label: "3 Hours" },
//     { value: "6", label: "6 Hours" },
//     { value: "1", label: "1 Day" },
//     { value: "2", label: "2 Days" },
//     { value: "7", label: "1 Week" },
//   ];

//   const handlePayment = async (event) => {
//     event.preventDefault();

//     if (!isAgreed) {
//       alert("Please agree to the terms and conditions to proceed.");
//       return;
//     }

//     if (deliveryOption === "delivery" && !deliveryTime) {
//       alert("Please select a delivery time.");
//       return;
//     }

//     if (!paymentMethod) {
//       alert("Please select a payment method.");
//       return;
//     }

//     const finalDeliveryTime =
//       deliveryOption === "delivery" ? deliveryTime : "Self Pickup";

//     const orderData = {
//       userId: parseInt(userId || "0", 10),
//       totalAmount: finalPrice,
//       status: "Pending",
//       deliveryOption,
//       deliveryTime: finalDeliveryTime, // Use the calculated value
//       paymentMethod,
//       items: items.map((item) => ({
//         itemId: item.id,
//         quantity: item.quantity,
//         price: item.price,
//       })),
//     };

//     // IMPORTANT:  Log the orderData *immediately before* sending it.
//     console.log("orderData being sent:", orderData);
//     console.log("finalDeliveryTime:", finalDeliveryTime); // Add this line
//     console.log("deliveryTime state:", deliveryTime); //and this
//     console.log("orderData.deliveryTime before fetch:", orderData.deliveryTime);
//     try {
//       setLoading(true);
//       setError(null);
//       console.log("orderData just before fetch:", orderData);
//       const response = await fetch("http://localhost:5000/api/orders", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(orderData),
//       });

//       if (!response.ok) {
//         throw new Error(`Failed to create order: ${response.status}`);
//       }

//       const responseData = await response.json();
//       console.log("Order created successfully:", responseData);
//       const orderId = responseData.orderId;

//       for (const item of items) {
//         const updateResponse = await fetch(
//           `http://localhost:5000/api/products/${item.id}`,
//           {
//             method: "PUT",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ quantity: item.quantity }),
//           }
//         );

//         if (!updateResponse.ok) {
//           throw new Error(
//             `Failed to update product ${item.id}: ${updateResponse.status}`
//           );
//         }

//         const productUpdateData = await updateResponse.json();
//         console.log(
//           `Product ${item.id} updated successfully:`,
//           productUpdateData
//         );

//         if (productUpdateData.quantity <= 0) {
//           const deleteResponse = await fetch(
//             `http://localhost:5000/api/products/${item.id}`,
//             {
//               method: "DELETE",
//             }
//           );
//         }
//       }

//       setLoading(false);

//       if (deliveryOption === "delivery") {
//         navigate("/deliverypage", {
//           state: {
//             orderData,
//             items,
//             finalPrice,
//             deliveryTime: finalDeliveryTime,
//             orderId,
//           },
//         });
//       } else {
//         navigate("/order-confirmation", {
//           state: {
//             ...orderData,
//             items,
//             finalPrice,
//             deliveryTime: finalDeliveryTime,
//             orderId: responseData.orderId,
//           },
//         });
//       }
//     } catch (err) {
//       setError(err.message || "Failed to create order. Please try again.");
//       setLoading(false);
//     }
//   };

//   if (location.pathname === "/deliverypage") {
//     const { orderData, items, finalPrice, deliveryTime, orderId } =
//       location.state;
//     return (
//       <DeliveryPage
//         orderData={orderData}
//         items={items}
//         finalPrice={finalPrice}
//         deliveryTime={deliveryTime}
//         orderId={orderId}
//       />
//     );
//   }

//   return (
//     <div className="payment-container">
//       <h2>Payment Options</h2>
//       <h3>Items in Cart:</h3>
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>
//             <p>Item ID: {item.id}</p>
//             <p>{item.itemType}</p>
//             <p>Price: ${item.price}</p>
//             <p>Quantity: {item.quantity}</p>
//             <p>Subtotal: ${item.price * item.quantity}</p>
//           </li>
//         ))}
//       </ul>
//       <p>Total Price: ${totalPrice.toFixed(2)}</p>
//       <p>Commission (15%): ${commission.toFixed(2)}</p>
//       {deliveryOption === "delivery" && <p>Delivery Fee: {deliveryFee} Birr</p>}
//       <p>
//         Final Price (
//         {deliveryOption === "delivery"
//           ? "Total + Commission + Delivery"
//           : "Total + Commission"}
//         ): ${finalPrice.toFixed(2)}
//       </p>
//       <form onSubmit={handlePayment}>
//         <div>
//           <label>Choose an option:</label>
//           <div>
//             <label>
//               <input
//                 type="radio"
//                 value="delivery"
//                 checked={deliveryOption === "delivery"}
//                 onChange={(e) => setDeliveryOption(e.target.value)}
//                 required
//               />
//               Delivery
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 value="go-and-buy"
//                 checked={deliveryOption === "go-and-buy"}
//                 onChange={(e) => setDeliveryOption(e.target.value)}
//                 required
//               />
//               Go and Buy It
//             </label>
//           </div>
//         </div>
//         {deliveryOption === "delivery" && (
//           <div>
//             <label htmlFor="delivery-time">Delivery Time:</label>
//             <select
//               id="delivery-time"
//               value={deliveryTime}
//               onChange={(e) => setDeliveryTime(e.target.value)}
//               required
//             >
//               <option value="">Select Delivery Time</option>
//               {deliveryOptions.map((option) => (
//                 <option key={option.value} value={option.value}>
//                   {option.label}
//                 </option>
//               ))}
//             </select>
//           </div>
//         )}

//         <div>
//           <label htmlFor="payment-method">Payment Method:</label>
//           <select
//             id="payment-method"
//             value={paymentMethod}
//             onChange={(e) => setPaymentMethod(e.target.value)}
//             required
//           >
//             <option value="">Select Payment Method</option>
//             <option value="cbe">Cbe</option>
//             <option value="telbirr">telbirr</option>
//             <option value="awash-pro">Awash-pro</option>
//           </select>
//         </div>
//         <div>
//           <label>
//             <input
//               type="checkbox"
//               checked={isAgreed}
//               onChange={(e) => setIsAgreed(e.target.checked)}
//               required
//             />
//             I agree to the terms and conditions
//           </label>
//         </div>
//         <button type="submit" disabled={loading}>
//           {loading ? "Processing..." : "Confirm and Pay"}
//         </button>
//         {error && <p className="error-message">{error}</p>}
//       </form>
//     </div>
//   );
// };

// export default Payment;
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import emailjs from "emailjs-com"; // Import EmailJS
import DeliveryPage from "./Deliverypage";

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const items = location.state?.items || [];
  const totalPrice = location.state?.totalPrice || 0;
  const [deliveryTime, setDeliveryTime] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [deliveryOption, setDeliveryOption] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const userId = localStorage.getItem("userId");

  const commissionRate = 0.15;
  const commission = totalPrice * commissionRate;
  const deliveryFee = 50;
  const finalPrice =
    deliveryOption === "delivery"
      ? totalPrice + commission + deliveryFee
      : totalPrice + commission;

  const deliveryOptions = [
    { value: "3", label: "3 Hours" },
    { value: "6", label: "6 Hours" },
    { value: "1", label: "1 Day" },
    { value: "2", label: "2 Days" },
    { value: "7", label: "1 Week" },
  ];

  const handlePayment = async (event) => {
    event.preventDefault();

    if (!isAgreed) {
      alert("Please agree to the terms and conditions to proceed.");
      return;
    }

    if (deliveryOption === "delivery" && !deliveryTime) {
      alert("Please select a delivery time.");
      return;
    }

    if (!paymentMethod) {
      alert("Please select a payment method.");
      return;
    }

    const finalDeliveryTime =
      deliveryOption === "delivery" ? deliveryTime : "Self Pickup";

    const orderData = {
      userId: parseInt(userId || "0", 10),
      totalAmount: finalPrice,
      status: "Pending",
      deliveryOption,
      deliveryTime: finalDeliveryTime,
      paymentMethod,
      items: items.map((item) => ({
        itemId: item.id,
        quantity: item.quantity,
        price: item.price,
      })),
    };

    console.log("orderData being sent:", orderData);
    console.log("finalDeliveryTime:", finalDeliveryTime);
    console.log("deliveryTime state:", deliveryTime);
    console.log("orderData.deliveryTime before fetch:", orderData.deliveryTime);

    try {
      setLoading(true);
      setError(null);

      // Create the order
      console.log("orderData just before fetch:", orderData);
      const response = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error(`Failed to create order: ${response.status}`);
      }

      const responseData = await response.json();
      console.log("Order created successfully:", responseData);
      const orderId = responseData.orderId;

      // Update product quantities and delete if necessary
      for (const item of items) {
        const updateResponse = await fetch(
          `http://localhost:5000/api/products/${item.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ quantity: item.quantity }),
          }
        );

        if (!updateResponse.ok) {
          throw new Error(
            `Failed to update product ${item.id}: ${updateResponse.status}`
          );
        }

        const productUpdateData = await updateResponse.json();
        console.log(
          `Product ${item.id} updated successfully:`,
          productUpdateData
        );

        if (productUpdateData.quantity <= 0) {
          const deleteResponse = await fetch(
            `http://localhost:5000/api/products/${item.id}`,
            {
              method: "DELETE",
            }
          );
          if (!deleteResponse.ok) {
            console.warn(`Failed to delete product ${item.id}`);
          }
        }
      }

      // Send email to each seller
      for (const item of items) {
        try {
          // Fetch seller's email by item ID
          const sellerResponse = await fetch(
            `http://localhost:5000/api/items/${item.id}/seller-email`
          );
          if (!sellerResponse.ok) {
            throw new Error(`Failed to fetch seller email for item ${item.id}`);
          }
          const { email } = await sellerResponse.json();
          console.log(`Seller email for item ${item.id}:`, email);

          // Prepare email message
          const emailMessage = `
            Dear Seller,
            Your item (ID: ${item.id}, Type: ${item.itemType}) has been sold!
            Quantity: ${item.quantity}
            Price per unit: $${item.price}
            Total: $${item.price * item.quantity}
            Order ID: ${orderId}
            Delivery Option: ${deliveryOption}
            Delivery Time: ${finalDeliveryTime}
            Thank you for using our platform!
          `;

          // Send email via EmailJS
          await emailjs.send(
            "service_cdegjfl", // Your EmailJS Service ID
            "template_hudgqt7", // Your EmailJS Template ID
            {
              message: emailMessage,
              to_email: email, // Seller's email
            },
            "Tlpn2u3frnQzDygJg" // Your EmailJS User ID
          );
          console.log(`Email sent to seller for item ${item.id}`);
        } catch (emailError) {
          console.error(
            `Failed to send email for item ${item.id}:`,
            emailError
          );
          // Continue with other items instead of failing the entire order
        }
      }

      setLoading(false);

      // Navigate to the appropriate page
      if (deliveryOption === "delivery") {
        navigate("/deliverypage", {
          state: {
            orderData,
            items,
            finalPrice,
            deliveryTime: finalDeliveryTime,
            orderId,
          },
        });
      } else {
        navigate("/order-confirmation", {
          state: {
            ...orderData,
            items,
            finalPrice,
            deliveryTime: finalDeliveryTime,
            orderId: responseData.orderId,
          },
        });
      }
    } catch (err) {
      setError(err.message || "Failed to create order. Please try again.");
      setLoading(false);
      console.error("Order creation error:", err);
    }
  };

  if (location.pathname === "/deliverypage") {
    const { orderData, items, finalPrice, deliveryTime, orderId } =
      location.state;
    return (
      <DeliveryPage
        orderData={orderData}
        items={items}
        finalPrice={finalPrice}
        deliveryTime={deliveryTime}
        orderId={orderId}
      />
    );
  }

  return (
    <div className="payment-container">
      <h2>Payment Options</h2>
      <h3>Items in Cart:</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <p>Item ID: {item.id}</p>
            <p>{item.itemType}</p>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Subtotal: ${item.price * item.quantity}</p>
          </li>
        ))}
      </ul>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
      <p>Commission (15%): ${commission.toFixed(2)}</p>
      {deliveryOption === "delivery" && <p>Delivery Fee: {deliveryFee} Birr</p>}
      <p>
        Final Price (
        {deliveryOption === "delivery"
          ? "Total + Commission + Delivery"
          : "Total + Commission"}
        ): ${finalPrice.toFixed(2)}
      </p>
      <form onSubmit={handlePayment}>
        <div>
          <label>Choose an option:</label>
          <div>
            <label>
              <input
                type="radio"
                value="delivery"
                checked={deliveryOption === "delivery"}
                onChange={(e) => setDeliveryOption(e.target.value)}
                required
              />
              Delivery
            </label>
            <label>
              <input
                type="radio"
                value="go-and-buy"
                checked={deliveryOption === "go-and-buy"}
                onChange={(e) => setDeliveryOption(e.target.value)}
                required
              />
              Go and Buy It
            </label>
          </div>
        </div>
        {deliveryOption === "delivery" && (
          <div>
            <label htmlFor="delivery-time">Delivery Time:</label>
            <select
              id="delivery-time"
              value={deliveryTime}
              onChange={(e) => setDeliveryTime(e.target.value)}
              required
            >
              <option value="">Select Delivery Time</option>
              {deliveryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        )}

        <div>
          <label htmlFor="payment-method">Payment Method:</label>
          <select
            id="payment-method"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            required
          >
            <option value="">Select Payment Method</option>
            <option value="cbe">Cbe</option>
            <option value="telbirr">telbirr</option>
            <option value="awash-pro">Awash-pro</option>
          </select>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={isAgreed}
              onChange={(e) => setIsAgreed(e.target.checked)}
              required
            />
            I agree to the terms and conditions
          </label>
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Processing..." : "Confirm and Pay"}
        </button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default Payment;
