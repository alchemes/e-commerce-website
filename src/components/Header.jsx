// src/components/Header.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Header.css';

// const Header = () => {
//   return (
//     <header className="header">
//       <nav>
//         <ul>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/products">Products</Link></li>
//           <li><Link to="/contact">Contact</Link></li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;

// import React from "react";
// import { Link } from "react-router-dom";
// import "./Header.css"; // Make sure this CSS file exists

// const Header = () => {
//   return (
//     <header className="header">
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/products">Products</Link>
//           </li>
//           <li>
//             <Link to="/contact">Contact</Link>
//           </li>
//           <li style={{ marginLeft: "auto" }}>
//             {" "}
//             {/* Push Track Order to the right */}
//             <Link to="/trackorder">Track Order</Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;
/**
 * 1. Header Component (Header.js)
 * -   Redirects to /login when "Track Order" is clicked.
 * -   Stores the intended destination (/trackorder) in localStorage.
 */

// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./Header.css";

// const Header = () => {
//   const navigate = useNavigate();

//   const handleTrackOrderClick = (event) => {
//     event.preventDefault();

//     navigate("/trackorder");
//   };

//   return (
//     <header className="header">
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/products">Products</Link>
//           </li>
//           <li>
//             <Link to="/contact">Contact</Link>
//           </li>
//           <li style={{ marginLeft: "auto" }}>
//             <a href="/trackorder" onClick={handleTrackOrderClick}>
//               Track Order
//             </a>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;

// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./Header.css";

// const Header = () => {
//   const navigate = useNavigate();

//   const handleTrackOrderClick = (event) => {
//     event.preventDefault();
//     navigate("/trackorder");
//   };

//   const handleLogoutClick = async (event) => {
//     event.preventDefault();
//     const userId = localStorage.getItem("userId");

//     console.log("Header.js: Initiating logout, userId:", userId);

//     if (!userId) {
//       console.log(
//         "Header.js: No user ID found. Clearing localStorage and navigating to login."
//       );
//       localStorage.clear();
//       navigate("/login");
//       return;
//     }

//     try {
//       console.log("Header.js: Sending DELETE request for userId:", userId);
//       const response = await fetch(
//         `http://localhost:5000/api/users/${userId}`,
//         {
//           method: "DELETE",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       if (response.ok) {
//         console.log("Header.js: User soft deleted successfully.");
//       } else {
//         const errorData = await response.json();
//         console.error(
//           "Header.js: Failed to delete user, status:",
//           response.status,
//           "message:",
//           errorData.message
//         );
//         alert(`Failed to delete user: ${errorData.message || "Unknown error"}`);
//       }
//     } catch (error) {
//       console.error("Header.js: Error during DELETE request:", error);
//       alert("Network error while deleting user. Please try again.");
//     } finally {
//       // Clear local storage and redirect
//       console.log("Header.js: Clearing localStorage and navigating to login.");
//       localStorage.clear();
//       navigate("/login");
//     }
//   };

//   return (
//     <header className="header">
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/products">Products</Link>
//           </li>
//           <li>
//             <Link to="/contact">Contact</Link>
//           </li>
//           <li style={{ marginLeft: "auto" }}>
//             <a href="/trackorder" onClick={handleTrackOrderClick}>
//               Track Order
//             </a>
//           </li>
//           <li>
//             <a href="/login" onClick={handleLogoutClick}>
//               Logout
//             </a>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("userId"); // Check if user is logged in

  const handleTrackOrderClick = (event) => {
    event.preventDefault();
    navigate("/trackorder");
  };

  const handleDashboardClick = (event) => {
    event.preventDefault();
    navigate("/profile");
  };

  const handleLogoutClick = (event) => {
    event.preventDefault();
    console.log("Header.js: Initiating logout");

    // Clear local storage and redirect to login
    localStorage.clear();
    console.log("Header.js: Cleared localStorage and navigating to login");
    navigate("/login");
  };

  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          {isLoggedIn && (
            <>
              <li style={{ marginLeft: "auto" }}>
                <a href="/trackorder" onClick={handleTrackOrderClick}>
                  Track Order
                </a>
              </li>
              <li>
                <a href="/profile" onClick={handleDashboardClick}>
                  My Dashboard
                </a>
              </li>
              <li>
                <a href="/login" onClick={handleLogoutClick}>
                  Logout
                </a>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
