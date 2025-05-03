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

// src/components/Profile.js

// src/components/Profile.js

// src/components/Profile.jsx

// src/components/Profile.jsx

// src/components/Profile.jsx

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Profile.css";

// const Profile = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [address, setAddress] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [isEditing, setIsEditing] = useState(false);
//   const navigate = useNavigate();

//   const fetchProfile = async () => {
//     setLoading(true);
//     setError("");
//     const userId = localStorage.getItem("userId");
//     if (userId) {
//       try {
//         const response = await fetch(
//           `http://localhost:5000/api/users/profile/${userId}`,
//           {
//             headers: {
//               "Content-Type": "application/json",
//               // Include your authentication token if you implement it
//             },
//           }
//         );
//         if (response.ok) {
//           const data = await response.json();
//           setName(data.name || "");
//           setEmail(data.email || "");
//           setPhone(data.phone || "");
//           setAddress(data.address || "");
//         } else if (response.status === 404) {
//           console.log("Profile not found, redirecting to create profile.");
//           navigate("/create-profile");
//         } else {
//           console.error("Failed to fetch profile:", response.status);
//           setError("Failed to load profile information.");
//         }
//       } catch (error) {
//         console.error("Error fetching profile:", error);
//         setError("Network error while loading profile.");
//       } finally {
//         setLoading(false);
//       }
//     } else {
//       console.error("No user ID found. Redirecting to login.");
//       navigate("/login");
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProfile();
//   }, [navigate]);

//   const handleEditClick = () => {
//     setIsEditing(true);
//   };

//   const handleCancelEdit = () => {
//     setIsEditing(false);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const userId = localStorage.getItem("userId");
//     if (userId) {
//       try {
//         const response = await fetch(
//           `http://localhost:5000/api/users/profile/${userId}`,
//           {
//             method: "PUT",
//             headers: {
//               "Content-Type": "application/json",
//               // Include authentication token if needed
//             },
//             body: JSON.stringify({ name, phone, address }),
//           }
//         );
//         const data = await response.json();
//         if (response.ok) {
//           alert("Profile updated successfully!");
//           setIsEditing(false);
//           fetchProfile();
//         } else {
//           console.error("Failed to update profile:", data);
//           setError(data.message || "Failed to update profile.");
//         }
//       } catch (error) {
//         console.error("Error updating profile:", error);
//         setError("Network error while updating profile.");
//       }
//     } else {
//       console.error("No user ID found. Redirecting to login.");
//       navigate("/login");
//     }
//   };

//   if (loading) {
//     return <div>Loading profile...</div>;
//   }

//   if (error) {
//     return <div className="error-message">{error}</div>;
//   }

//   return (
//     <div>
//       <h1>Your Profile</h1>

//       {!isEditing ? (
//         <div>
//           <p>
//             <strong>Name:</strong> {name}
//           </p>
//           <p>
//             <strong>Email:</strong> {email}
//           </p>
//           <p>
//             <strong>Phone:</strong> {phone}
//           </p>
//           <p>
//             <strong>Address:</strong> {address}
//           </p>
//           <button className="button" onClick={handleEditClick}>
//             Update Profile
//           </button>
//         </div>
//       ) : (
//         <form onSubmit={handleSubmit}>
//           <div className="container">
//             <div className="name-label">
//               <label className="name">Name:</label>
//               <input
//                 className="inputname"
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="name-label">
//               <label className="name">Email:</label>
//               <input
//                 className="inputname"
//                 type="email"
//                 value={email}
//                 readOnly
//               />
//             </div>
//             <div className="name-label">
//               <label className="name">Phone:</label>
//               <input
//                 className="inputname"
//                 type="tel"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="name-label">
//               <label className="name">Address:</label>
//               <input
//                 className="inputname"
//                 type="text"
//                 value={address}
//                 onChange={(e) => setAddress(e.target.value)}
//                 required
//               />
//             </div>
//             <button className="button" type="submit">
//               Save Changes
//             </button>
//             <button className="button" type="button" onClick={handleCancelEdit}>
//               Cancel
//             </button>
//           </div>
//         </form>
//       )}

//       <h2>Choose What you want:</h2>
//       <div className="containerr">
//         <button className="button" onClick={() => navigate("/products")}>
//           View Products
//         </button>
//         <button className="button" onClick={() => navigate("/subscription")}>
//           Post Products
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Profile;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Profile.css";

// const Profile = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [address, setAddress] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [isEditing, setIsEditing] = useState(false);
//   const navigate = useNavigate();
//   const [profilePicture, setProfilePicture] = useState(null); // State for profile picture URL
//   const [newProfilePicture, setNewProfilePicture] = useState(null); // State for new picture

//   const fetchProfile = async () => {
//     setLoading(true);
//     setError("");
//     const userId = localStorage.getItem("userId");
//     if (userId) {
//       try {
//         const response = await fetch(
//           `http://localhost:5000/api/users/profile/${userId}`,
//           {
//             headers: {
//               "Content-Type": "application/json",
//               // Include your authentication token if you implement it
//             },
//           }
//         );
//         if (response.ok) {
//           const data = await response.json();
//           setName(data.name || "");
//           setEmail(data.email || "");
//           setPhone(data.phone || "");
//           setAddress(data.address || "");
//           setProfilePicture(data.profile_picture || null); // Get image URL
//         } else if (response.status === 404) {
//           console.log("Profile not found, redirecting to create profile.");
//           navigate("/create-profile");
//         } else {
//           console.error("Failed to fetch profile:", response.status);
//           setError("Failed to load profile information.");
//         }
//       } catch (error) {
//         console.error("Error fetching profile:", error);
//         setError("Network error while loading profile.");
//       } finally {
//         setLoading(false);
//       }
//     } else {
//       console.error("No user ID found. Redirecting to login.");
//       navigate("/login");
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProfile();
//   }, [navigate]);

//   const handleEditClick = () => {
//     setIsEditing(true);
//   };

//   const handleCancelEdit = () => {
//     setIsEditing(false);
//   };

//   const handleFileChange = (e) => {
//     setNewProfilePicture(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const userId = localStorage.getItem("userId");
//     if (userId) {
//       try {
//         const formData = new FormData();
//         formData.append("name", name);
//         formData.append("phone", phone);
//         formData.append("address", address);
//         if (newProfilePicture) {
//           formData.append("profilePicture", newProfilePicture);
//         }

//         const response = await fetch(
//           `http://localhost:5000/api/users/profile/${userId}`,
//           {
//             method: "PUT",
//             body: formData, // Use formData, not JSON.stringify
//           }
//         );
//         const data = await response.json();
//         if (response.ok) {
//           alert("Profile updated successfully!");
//           setIsEditing(false);
//           fetchProfile();
//         } else {
//           console.error("Failed to update profile:", data);
//           setError(data.message || "Failed to update profile.");
//         }
//       } catch (error) {
//         console.error("Error updating profile:", error);
//         setError("Network error while updating profile.");
//       }
//     } else {
//       console.error("No user ID found. Redirecting to login.");
//       navigate("/login");
//     }
//   };

//   if (loading) {
//     return <div>Loading profile...</div>;
//   }

//   if (error) {
//     return <div className="error-message">{error}</div>;
//   }

//   return (
//     <div>
//       <h1>Your Profile</h1>

//       {!isEditing ? (
//         <div>
//           {profilePicture && (
//             <img
//               src={profilePicture}
//               alt="Profile"
//               style={{ maxWidth: "200px", maxHeight: "200px" }}
//             />
//           )}
//           <p>
//             <strong>Name:</strong> {name}
//           </p>
//           <p>
//             <strong>Email:</strong> {email}
//           </p>
//           <p>
//             <strong>Phone:</strong> {phone}
//           </p>
//           <p>
//             <strong>Address:</strong> {address}
//           </p>
//           <button className="button" onClick={handleEditClick}>
//             Update Profile
//           </button>
//         </div>
//       ) : (
//         <form onSubmit={handleSubmit}>
//           <div className="container">
//             <div className="name-label">
//               <label className="name">Profile Picture:</label>
//               <input
//                 className="inputname"
//                 type="file"
//                 onChange={handleFileChange}
//                 accept="image/*"
//               />
//             </div>
//             <div className="name-label">
//               <label className="name">Name:</label>
//               <input
//                 className="inputname"
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="name-label">
//               <label className="name">Email:</label>
//               <input
//                 className="inputname"
//                 type="email"
//                 value={email}
//                 readOnly
//               />
//             </div>
//             <div className="name-label">
//               <label className="name">Phone:</label>
//               <input
//                 className="inputname"
//                 type="tel"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="name-label">
//               <label className="name">Address:</label>
//               <input
//                 className="inputname"
//                 type="text"
//                 value={address}
//                 onChange={(e) => setAddress(e.target.value)}
//                 required
//               />
//             </div>
//             <button className="button" type="submit">
//               Save Changes
//             </button>
//             <button className="button" type="button" onClick={handleCancelEdit}>
//               Cancel
//             </button>
//           </div>
//         </form>
//       )}

//       <h2>Choose What you want:</h2>
//       <div className="containerr">
//         <button className="button" onClick={() => navigate("/personalproduct")}>
//           View Products
//         </button>
//         <button className="button" onClick={() => navigate("/subscription")}>
//           Post Products
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Profile;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  const [profilePicture, setProfilePicture] = useState(null);
  const [newProfilePicture, setNewProfilePicture] = useState(null);
  const [subscriptionExpired, setSubscriptionExpired] = useState(false);
  const [message, setMessage] = useState(""); // For profile update success

  const fetchProfile = async () => {
    setLoading(true);
    setError("");
    const userId = localStorage.getItem("userId");
    console.log("User ID from localStorage:", userId); // Debug log
    if (userId) {
      try {
        const response = await fetch(
          `http://localhost:5000/api/users/profile/${userId}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log("API response status:", response.status); // Debug log
        if (response.ok) {
          const data = await response.json();
          console.log("Full API response data:", JSON.stringify(data, null, 2)); // Debug log
          setName(data.name || "");
          setEmail(data.email || "");
          setPhone(data.phone || "");
          setAddress(data.address || "");
          setProfilePicture(data.profile_picture || null);
          setSubscriptionExpired(data.subscriptionExpired || false);
          console.log("Subscription expired set to:", data.subscriptionExpired); // Debug log
        } else if (response.status === 404) {
          console.log("Profile not found, redirecting to create profile.");
          navigate("/createprofile");
        } else {
          console.error("Failed to fetch profile:", response.status);
          setError("Failed to load profile information.");
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
        setError("Network error while loading profile.");
      } finally {
        setLoading(false);
      }
    } else {
      console.error("No user ID found. Redirecting to login.");
      navigate("/login");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, [navigate]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleFileChange = (e) => {
    setNewProfilePicture(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem("userId");
    if (userId) {
      try {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("phone", phone);
        formData.append("address", address);
        if (newProfilePicture) {
          formData.append("profilePicture", newProfilePicture);
        }

        const response = await fetch(
          `http://localhost:5000/api/users/profile/${userId}`,
          {
            method: "PUT",
            body: formData,
          }
        );
        const data = await response.json();
        if (response.ok) {
          setMessage("Profile updated successfully!");
          setIsEditing(false);
          fetchProfile();
          setTimeout(() => setMessage(""), 3000);
        } else {
          console.error("Failed to update profile:", data);
          setError(data.message || "Failed to update profile.");
        }
      } catch (error) {
        console.error("Error updating profile:", error);
        setError("Network error while updating profile.");
      }
    } else {
      console.error("No user ID found. Redirecting to login.");
      navigate("/login");
    }
  };

  const handleViewProductsClick = () => {
    navigate("/personalproduct");
  };

  const handlePostProductsClick = () => {
    console.log(
      "Post Products clicked, subscriptionExpired:",
      subscriptionExpired
    ); // Debug log
    if (subscriptionExpired) {
      console.log("Triggering alert for post products"); // Debug log
      window.alert(
        "Your subscription has expired. Please renew to post products."
      );
      navigate("/subscription");
    } else {
      navigate("/subscription");
    }
  };

  if (loading) {
    return <div>Loading profile...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div>
      <h1>Your Profile</h1>
      {message && <div className="message">{message}</div>}

      {!isEditing ? (
        <div>
          {profilePicture && (
            <img
              src={profilePicture}
              alt="Profile"
              style={{ maxWidth: "200px", maxHeight: "200px" }}
            />
          )}
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>Phone:</strong> {phone}
          </p>
          <p>
            <strong>Address:</strong> {address}
          </p>
          {subscriptionExpired && (
            <p style={{ color: "red" }}>
              Your subscription has expired. Please renew to use our services.
            </p>
          )}
          <button className="button" onClick={handleEditClick}>
            Update Profile
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="container">
            <div className="name-label">
              <label className="name">Profile Picture:</label>
              <input
                className="inputname"
                type="file"
                onChange={handleFileChange}
                accept="image/*"
              />
            </div>
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
                readOnly
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
              Save Changes
            </button>
            <button className="button" type="button" onClick={handleCancelEdit}>
              Cancel
            </button>
          </div>
        </form>
      )}

      <h2>Choose What you want:</h2>
      <div className="containerr">
        <button className="button" onClick={handleViewProductsClick}>
          View Products
        </button>
        <button className="button" onClick={handlePostProductsClick}>
          Post Products
        </button>
      </div>
    </div>
  );
};

export default Profile;
