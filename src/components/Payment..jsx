import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation hook

const Payment = () => {
  const location = useLocation();
  
 
  const items = location.state?.items || []; // Get items passed from the Product component
  const totalPrice = location.state?.totalPrice || 0; // Get total price

  const handlePayment = (event) => {
    event.preventDefault();
    // Handle the payment logic here
    alert('Payment and delivery options submitted');
  };

  return (
    <div className="payment-container">
      <h2>Payment Options</h2>
      <h3>Items in Cart:</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.itemType} - ${item.price} x {item.quantity} = ${item.price * item.quantity}
          </li>
        ))}
      </ul>
      <h3>Total Price: ${totalPrice}</h3>
      <form onSubmit={handlePayment}>
        <div>
          <label htmlFor="address">Delivery Address:</label>
          <input type="text" id="address" required />
        </div>
        <div>
          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" required />
        </div>
        <div>
          <label htmlFor="payment-method">Payment Method:</label>
          <select id="payment-method" required>
            <option value="">Select Payment Method</option>
            <option value="cbe">Cbe</option>
            <option value="telbirr">telbirr</option>
            <option value="awash-pro">awash-pro</option>
          </select>
        </div>
        <button type="submit">Submit Payment</button>
      </form>
    </div>
  );
};

export default Payment;