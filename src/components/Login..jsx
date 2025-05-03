// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Login.css";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://localhost:5000/api/users/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ username, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         console.log("Login successful:", data);
//         localStorage.setItem("userId", data.userId); // Store the userId upon login
//         console.log("Login.js: userId stored in localStorage:", data.userId); // ADDED
//         localStorage.setItem("userEmail", data.email);
//         navigate("/profile");
//       } else {
//         console.error("Login failed:", data);
//         setError(data.message || "Login failed.");
//       }
//     } catch (error) {
//       console.error("There was an error during login:", error);
//       setError("Network error during login.");
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       {error && <p className="error-message">{error}</p>}
//       <form className="login-form" onSubmit={handleSubmit}>
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
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Login.css";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (
//       (username === "abel12" && password === "ab345") ||
//       (username === "delivery1" && password === "getu1234")
//     ) {
//       // Hardcoded delivery person ID.
//       const deliveryPersonId = username === "abel12" ? 1 : 2;
//       localStorage.setItem("userId", deliveryPersonId.toString());
//       navigate("/deliverydetails");
//       return; // Important: Exit the function.  Do not continue with the rest of the login.
//     }

//     try {
//       const response = await fetch("http://localhost:5000/api/users/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ username, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         console.log("Login successful:", data);
//         localStorage.setItem("userId", data.userId);
//         localStorage.setItem("userEmail", data.email);
//         navigate("/profile");
//       } else {
//         console.error("Login failed:", data);
//         setError(data.message || "Login failed.");
//       }
//     } catch (error) {
//       console.error("There was an error during login:", error);
//       setError("Network error during login.");
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       {error && <p className="error-message">{error}</p>}
//       <form className="login-form" onSubmit={handleSubmit}>
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
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      (username === "abel12" && password === "ab345") ||
      (username === "delivery1" && password === "getu1234")
    ) {
      // Hardcoded delivery person ID.
      const deliveryPersonId = username === "abel12" ? 1 : 2;
      localStorage.setItem("userId", deliveryPersonId.toString());
      navigate("/deliverydetails");
      return; // Important: Exit the function.  Do not continue with the rest of the login.
    }

    try {
      const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login successful:", data);
        localStorage.setItem("userId", data.userId);
        localStorage.setItem("userEmail", data.email);
        // Redirect to payment page if nextPath is provided, otherwise go to profile
        const nextPath = location.state?.nextPath || "/profile";
        const items = location.state?.items;
        const totalPrice = location.state?.totalPrice;
        navigate(nextPath, { state: { items, totalPrice } }); // Pass the data!
      } else {
        console.error("Login failed:", data);
        setError(data.message || "Login failed.");
        if (data.message === "Invalid credentials.") {
          navigate("/signup");
        }
      }
    } catch (error) {
      console.error("There was an error during login:", error);
      setError("Network error during login.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>}
      <form className="login-form" onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
