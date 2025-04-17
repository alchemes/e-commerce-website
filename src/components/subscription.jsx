import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./subscription.css";

const Subscription = () => {
  const [subscriptionType, setSubscriptionType] = useState("monthly"); // State for subscription type
  const [paymentMethod, setPaymentMethod] = useState("cbe"); // State for payment method

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Subscribed to ${subscriptionType} plan using ${paymentMethod} payment. Thank you!`
    );
    // After a successful subscription, navigate to another page as needed (e.g., a confirmation page)
    navigate("/confirmation");
  };

  return (
    <div>
      <h1>Subscription Page</h1>
      <form onSubmit={handleSubmit}>
        <h2>Choose a Subscription Plan:</h2>
        <div className="subscription-options">
          <label>
            <input
              type="radio"
              value="monthly"
              checked={subscriptionType === "monthly"}
              onChange={(e) => setSubscriptionType(e.target.value)}
            />
            Monthly - 50 birr
          </label>
          <label>
            <input
              type="radio"
              value="yearly"
              checked={subscriptionType === "yearly"}
              onChange={(e) => setSubscriptionType(e.target.value)}
            />
            Yearly - 550 birr
          </label>
        </div>

        <h2>Select Payment Method:</h2>
        <div className="payment-options">
          <label>
            <input
              type="radio"
              value="cbe"
              checked={paymentMethod === "cbe"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            CBE
          </label>
          <label>
            <input
              type="radio"
              value="telebirr"
              checked={paymentMethod === "telebirr"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Telebirr
          </label>
          <label>
            <input
              type="radio"
              value="awash"
              checked={paymentMethod === "awash"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Awash Pro
          </label>
        </div>

        <button className="button" type="submit">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Subscription;
