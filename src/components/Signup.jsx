/*
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Updated from useHistory to useNavigate
import './Signup.css'; // Import the CSS file for styling

const Signup = () => {
  const [action, setAction] = useState('view'); // State to track user's choice
  const navigate = useNavigate(); // Updated from history to useNavigate
  
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    
    if (action === 'post') {
      // Redirect to the Post Item page
      navigate('/post-item'); // Updated to use navigate
    } else {
      // Handle the view logic or signup logic if necessary
      console.log('View selected');
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label>
            <input 
              type="radio" 
              value="post" 
              checked={action === 'post'} 
              onChange={() => setAction('post')} 
            />
            Post
          </label>
          <label>
            <input 
              type="radio" 
              value="view" 
              checked={action === 'view'} 
              onChange={() => setAction('view')} 
            />
            View
          </label>
        </div>
        <div className="form-field">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-field">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;*/

/*
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = ({ setPostedItems }) => {
  const [action, setAction] = useState('view');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (action === 'post') {
      // Redirect to the Post Item page
      navigate('/post-item');
    } else {
      // Navigate to the Products page
      navigate('/products');
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label>
            <input 
              type="radio" 
              value="post" 
              checked={action === 'post'} 
              onChange={() => setAction('post')} 
            />
            Post
          </label>
          <label>
            <input 
              type="radio" 
              value="view" 
              checked={action === 'view'} 
              onChange={() => setAction('view')} 
            />
            View
          </label>
        </div>
        <div className="form-field">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-field">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
*/

// this is the real one
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Signup.css";

// const Signup = () => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Perform your signup logic here (e.g., create a user)

//     // After successful signup, navigate to the Profile page
//     navigate("/profile");
//   };

//   return (
//     <div className="signup-container">
//       <h2>Signup</h2>
//       <form className="signup-form" onSubmit={handleSubmit}>
//         <div className="form-field">
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             required
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div className="form-field">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div className="form-field">
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             required
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <button type="submit">Signup</button>
//       </form>
//     </div>
//   );
// };

// export default Signup;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios"; // Import axios
// import "./Signup.css";

// const Signup = () => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(""); // Added state for error message
//   const [message, setMessage] = useState(""); // Added state for success message
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(""); // Clear previous errors
//     setMessage("");

//     try {
//       // Send a POST request to your Laravel backend API endpoint
//       const response = await axios.post("/api/signup", {
//         //  Make sure this matches your Laravel route
//         username,
//         email,
//         password,
//       });

//       // Handle successful signup
//       setMessage(response.data.message); // set the success message
//       setUsername("");
//       setEmail("");
//       setPassword("");
//       // After successful signup, navigate to the Profile page
//       navigate("/profile");
//     } catch (error) {
//       // Handle signup errors
//       if (error.response) {
//         setError(error.response.data.errors); // Set the error message from the server
//       } else {
//         setError("An error occurred during signup.");
//       }
//     }
//   };

//   return (
//     <div className="signup-container">
//       <h2>Signup</h2>
//       <form className="signup-form" onSubmit={handleSubmit}>
//         <div className="form-field">
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             required
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div className="form-field">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div className="form-field">
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             required
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <button type="submit">Signup</button>
//         {error && <p className="error-message">{error}</p>}{" "}
//         {/* Display error message */}
//         {message && <p className="success-message">{message}</p>}
//       </form>
//     </div>
//   );
// };

// export default Signup;

// src/components/Signup.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Signup successful:", data);
        localStorage.setItem("userId", data.userId); // Store the userId
        console.log("Signup.js: userId stored in localStorage:", data.userId); // Add this line
        navigate("/createprofile");

        navigate("/createprofile");
      } else {
        console.error("Signup failed:", data);
        setError(data.message || "Signup failed.");
      }
    } catch (error) {
      console.error("There was an error during signup:", error);
      setError("Network error during signup.");
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      {error && <p className="error-message">{error}</p>}
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
