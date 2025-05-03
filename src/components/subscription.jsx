// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./subscription.css";

// const Subscription = () => {
//   const [subscriptionType, setSubscriptionType] = useState("monthly"); // State for subscription type
//   const [paymentMethod, setPaymentMethod] = useState("cbe"); // State for payment method

//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(
//       `Subscribed to ${subscriptionType} plan using ${paymentMethod} payment. Thank you!`
//     );
//     // After a successful subscription, navigate to another page as needed (e.g., a confirmation page)
//     navigate("/post-item");
//   };

//   return (
//     <div>
//       <h1>Subscription Page</h1>
//       <form onSubmit={handleSubmit}>
//         <h2>Choose a Subscription Plan:</h2>
//         <div className="subscription-options">
//           <label>
//             <input
//               type="radio"
//               value="monthly"
//               checked={subscriptionType === "monthly"}
//               onChange={(e) => setSubscriptionType(e.target.value)}
//             />
//             Monthly - 50 birr
//           </label>
//           <label>
//             <input
//               type="radio"
//               value="yearly"
//               checked={subscriptionType === "yearly"}
//               onChange={(e) => setSubscriptionType(e.target.value)}
//             />
//             Yearly - 550 birr
//           </label>
//         </div>

//         <h2>Select Payment Method:</h2>
//         <div className="payment-options">
//           <label>
//             <input
//               type="radio"
//               value="cbe"
//               checked={paymentMethod === "cbe"}
//               onChange={(e) => setPaymentMethod(e.target.value)}
//             />
//             CBE
//           </label>
//           <label>
//             <input
//               type="radio"
//               value="telebirr"
//               checked={paymentMethod === "telebirr"}
//               onChange={(e) => setPaymentMethod(e.target.value)}
//             />
//             Telebirr
//           </label>
//           <label>
//             <input
//               type="radio"
//               value="awash"
//               checked={paymentMethod === "awash"}
//               onChange={(e) => setPaymentMethod(e.target.value)}
//             />
//             Awash Pro
//           </label>
//         </div>

//         <button className="button" type="submit">
//           Subscribe
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Subscription;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./subscription.css";

// const Subscription = () => {
//   const [subscriptionType, setSubscriptionType] = useState("monthly");
//   const [paymentMethod, setPaymentMethod] = useState("cbe");
//   const [email, setEmail] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const navigate = useNavigate();
//   const [error, setError] = useState(""); // Add state for error messages

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setError(""); // Clear any previous errors

//     if (!email) {
//       setError("Please enter your email address.");
//       setIsSubmitting(false);
//       return;
//     }

//     const transactionId = "TXN-" + Math.random().toString(36).substring(7);

//     try {
//       const response = await fetch("http://localhost:5000/api/subscription", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           subscriptionType,
//           paymentMethod,
//           transactionId,
//           amount: subscriptionType === "monthly" ? 50 : 550,
//           email: email, // Send the email
//         }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         alert(data.message);
//         navigate("/post-item");
//       } else {
//         console.error("Subscription failed:", data);
//         setError(data.message || "Subscription failed. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error during subscription:", error);
//       setError(
//         "An error occurred while processing your subscription. Please check your network connection."
//       );
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div>
//       <h1>Subscription Page</h1>
//       <form onSubmit={handleSubmit}>
//         <h2>Enter Your Email:</h2>
//         <div className="email-input">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <h2>Choose a Subscription Plan:</h2>
//         <div className="subscription-options">
//           <label>
//             <input
//               type="radio"
//               value="monthly"
//               checked={subscriptionType === "monthly"}
//               onChange={(e) => setSubscriptionType(e.target.value)}
//             />
//             Monthly - 50 birr
//           </label>
//           <label>
//             <input
//               type="radio"
//               value="yearly"
//               checked={subscriptionType === "yearly"}
//               onChange={(e) => setSubscriptionType(e.target.value)}
//             />
//             Yearly - 550 birr
//           </label>
//         </div>
//         <h2>Select Payment Method:</h2>
//         <div className="payment-options">
//           <label>
//             <input
//               type="radio"
//               value="cbe"
//               checked={paymentMethod === "cbe"}
//               onChange={(e) => setPaymentMethod(e.target.value)}
//             />
//             CBE
//           </label>
//           <label>
//             <input
//               type="radio"
//               value="telebirr"
//               checked={paymentMethod === "telebirr"}
//               onChange={(e) => setPaymentMethod(e.target.value)}
//             />
//             Telebirr
//           </label>
//           <label>
//             <input
//               type="radio"
//               value="awash"
//               checked={paymentMethod === "awash"}
//               onChange={(e) => setPaymentMethod(e.target.value)}
//             />
//             Awash Pro
//           </label>
//         </div>
//         {error && <p className="error-message">{error}</p>}{" "}
//         {/* Display error message */}
//         <button className="button" type="submit" disabled={isSubmitting}>
//           {isSubmitting ? "Subscribing..." : "Subscribe"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Subscription;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./subscription.css";

const Subscription = () => {
  const [subscriptionType, setSubscriptionType] = useState("monthly");
  const [paymentMethod, setPaymentMethod] = useState("cbe");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [subscriptionActive, setSubscriptionActive] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    if (storedEmail) {
      setEmail(storedEmail);
    }

    const checkSubscription = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "http://localhost:5000/api/check-subscription",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: storedEmail }),
          }
        );

        const data = await response.json();

        if (response.ok) {
          setSubscriptionActive(data.subscriptionActive);
          if (data.subscriptionActive) {
            navigate("/post-item");
          }
        } else {
          console.error("Failed to check subscription:", data);
          setError("Failed to check your subscription status.");
        }
      } catch (error) {
        console.error("Error checking subscription:", error);
        setError("An error occurred while checking your subscription.");
      } finally {
        setLoading(false);
      }
    };

    if (storedEmail) {
      checkSubscription();
    } else {
      setLoading(false); //important
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    if (!email) {
      setError("Please enter your email address.");
      setIsSubmitting(false);
      return;
    }

    const transactionId = "TXN-" + Math.random().toString(36).substring(7);

    try {
      const response = await fetch("http://localhost:5000/api/subscription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subscriptionType,
          paymentMethod,
          transactionId,
          amount: subscriptionType === "monthly" ? 50 : 550,
          email: email,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        localStorage.setItem("userEmail", email);
        setSubscriptionActive(true);
        navigate("/post-item");
      } else {
        console.error("Subscription failed:", data);
        setError(data.message || "Subscription failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during subscription:", error);
      setError(
        "An error occurred while processing your subscription. Please check your network connection."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (subscriptionActive) {
    return (
      <div>
        <h1>You are already subscribed!</h1>
        <button onClick={() => navigate("/post-item")}>Go to Post Item</button>
      </div>
    );
  }

  //  Show subscription form for unsubscribed users
  return (
    <div>
      <h1>Subscription Page</h1>
      <form onSubmit={handleSubmit}>
        <h2>Enter Your Email:</h2>
        <div className="email-input">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
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
        {error && <p className="error-message">{error}</p>}
        <button className="button" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
    </div>
  );
};

export default Subscription;
