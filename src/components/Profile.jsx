/*
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate(); // Add useNavigate for navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Personal information submitted");
  };

  return (
    <div>
      <h1>User Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="name-label">
            <label className="name">
              Name:
            </label>
            <input
              className="inputname"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="name-label">
            <label className="name">
              Email:
            </label>
            <input
              className="inputname"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="name-label">
            <label className="name">
              Phone:
            </label>
            <input
              className="inputname"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="name-label">
            <label className="name">
              Address:
            </label>
            <input
              className="inputname"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <button className="button" type="submit">
            Submit
          </button>
        </div>
      </form>
      <h2>Choose What you want:</h2>
      <div className="containerr">
        <button 
          className="button" 
          onClick={() => navigate("/products")} // Navigate to products
        >
          View Products
        </button>
        <button 
          className="button" 
          onClick={() => navigate("/post-item")} // Navigate to post item
        >
          Post Products
        </button>
      </div>
    </div>
  );
};

export default Profile; */

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Profile.css";

// const Profile = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [address, setAddress] = useState("");
//   const [subscriptionType, setSubscriptionType] = useState("monthly"); // State for subscription type
//   const [paymentMethod, setPaymentMethod] = useState("cbe"); // State for payment method

//   const navigate = useNavigate(); // Add useNavigate for navigation

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Subscribed to ${subscriptionType} plan using ${paymentMethod} payment. Thank you!`);
//   };

//   return (
//     <div>
//       <h1>User Profile</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="container">
//           <div className="name-label">
//             <label className="name">Name:</label>
//             <input
//               className="inputname"
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           </div>
//           <div className="name-label">
//             <label className="name">Email:</label>
//             <input
//               className="inputname"
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="name-label">
//             <label className="name">Phone:</label>
//             <input
//               className="inputname"
//               type="tel"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               required
//             />
//           </div>
//           <div className="name-label">
//             <label className="name">Address:</label>
//             <input
//               className="inputname"
//               type="text"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               required
//             />
//           </div>

//           <h2>Choose a Subscription Plan:</h2>
//           <div className="subscription-options">
//             <label>
//               <input
//                 type="radio"
//                 value="monthly"
//                 checked={subscriptionType === "monthly"}
//                 onChange={(e) => setSubscriptionType(e.target.value)}
//               />
//               Monthly - 50birr
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 value="yearly"
//                 checked={subscriptionType === "yearly"}
//                 onChange={(e) => setSubscriptionType(e.target.value)}
//               />
//               Yearly - 550 birr
//             </label>
//           </div>

//           <h2>Select Payment Method:</h2>
//           <div className="payment-options">
//             <label>
//               <input
//                 type="radio"
//                 value="cbe"
//                 checked={paymentMethod === "cbe"}
//                 onChange={(e) => setPaymentMethod(e.target.value)}
//               />
//               CBE
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 value="telebirr"
//                 checked={paymentMethod === "telebirr"}
//                 onChange={(e) => setPaymentMethod(e.target.value)}
//               />
//               Telebirr
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 value="awash"
//                 checked={paymentMethod === "awash"}
//                 onChange={(e) => setPaymentMethod(e.target.value)}
//               />
//               Awash Pro
//             </label>
//           </div>

//           <button className="button" type="submit">
//             Subscribe
//           </button>
//         </div>
//       </form>
//       <h2>Choose What you want:</h2>
//       <div className="containerr">
//         <button
//           className="button"
//           onClick={() => navigate("/products")} // Navigate to products
//         >
//           View Products
//         </button>
//         <button
//           className="button"
//           onClick={() => navigate("/post-item")} // Navigate to post item
//         >
//           Post Products
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Profile;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate(); // Add useNavigate for navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Profile updated. Thank you!`);
  };

  return (
    <div>
      <h1>User Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="name-label">
            <label className="name">Name:</label>
            <input
              className="inputname"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="name-label">
            <label className="name">Email:</label>
            <input
              className="inputname"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="name-label">
            <label className="name">Phone:</label>
            <input
              className="inputname"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="name-label">
            <label className="name">Address:</label>
            <input
              className="inputname"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>

          <button className="button" type="submit">
            Update Profile
          </button>
        </div>
      </form>
      <h2>Choose What you want:</h2>
      <div className="containerr">
        <button
          className="button"
          onClick={() => navigate("/products")} // Navigate to products
        >
          View Products
        </button>
        <button
          className="button"
          onClick={() => navigate("/subscription")} // Navigate to subscription page
        >
          Post Products
        </button>
      </div>
    </div>
  );
};

export default Profile;
