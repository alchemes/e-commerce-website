// src/components/CreateProfile.jsx

// src/components/CreateProfile.jsx
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Profile.css";

// const CreateProfile = () => {
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [address, setAddress] = useState("");
//   const [email, setEmail] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const userEmail = localStorage.getItem("userEmail");
//     if (userEmail) {
//       setEmail(userEmail);
//     }
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Before getItem userId"); // ADDED
//     const userId = localStorage.getItem("userId"); // Get userId here
//     console.log(
//       "CreateProfile.jsx: fetch called",
//       userId,
//       name,
//       phone,
//       address,
//       email
//     );
//     if (userId) {
//       try {
//         const response = await fetch(
//           `http://localhost:5000/api/users/profile/${userId}`,
//           {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ userId, name, phone, address, email }),
//           }
//         );
//         const data = await response.json();
//         console.log("CreateProfile.jsx: response", data);
//         if (response.ok) {
//           alert("Profile created successfully!");
//           navigate("/profile");
//         } else {
//           console.error("Failed to create profile:", data);
//         }
//       } catch (error) {
//         console.error("Error creating profile:", error);
//       }
//     } else {
//       console.error("No user ID found. Redirecting to login.");
//       navigate("/login");
//     }
//   };

//   return (
//     <div>
//       <h1>Create Your Profile</h1>
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
//               readOnly
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
//           <button className="button" type="submit">
//             Create Profile
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CreateProfile;

// src/components/CreateProfile.jsx

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Profile.css";

// const CreateProfile = () => {
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [address, setAddress] = useState("");
//   const [email, setEmail] = useState("");
//   const [profilePicture, setProfilePicture] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const userEmail = localStorage.getItem("userEmail");
//     if (userEmail) {
//       setEmail(userEmail);
//       console.log("CreateProfile.js: Email state set to:", userEmail); // Added for debugging
//     }
//   }, []);

//   const handleFileChange = (e) => {
//     setProfilePicture(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Before getItem userId");
//     const userId = localStorage.getItem("userId");
//     console.log(
//       "CreateProfile.jsx: fetch called",
//       userId,
//       name,
//       phone,
//       address,
//       email,
//       profilePicture
//     );
//     if (userId) {
//       try {
//         const formData = new FormData();
//         formData.append("name", name);
//         formData.append("phone", phone);
//         formData.append("address", address);
//         formData.append("email", email); // Use the email from state
//         if (profilePicture) {
//           formData.append("profilePicture", profilePicture);
//         }
//         const response = await fetch(
//           `http://localhost:5000/api/users/profile/${userId}`,
//           {
//             method: "POST",
//             body: formData,
//           }
//         );
//         const data = await response.json();
//         console.log("CreateProfile.jsx: response", data);
//         if (response.ok) {
//           alert("Profile created successfully!");
//           navigate("/profile");
//         } else {
//           console.error("Failed to create profile:", data);
//         }
//       } catch (error) {
//         console.error("Error creating profile:", error);
//       }
//     } else {
//       console.error("No user ID found. Redirecting to login.");
//       navigate("/signup");
//     }
//   };

//   return (
//     <div>
//       <h1>Create Your Profile</h1>
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
//           {/* <div className="name-label">
//             <label className="name">Email:</label>
//             <input
//               className="inputname"
//               type="email"
//               value={email} // Use the email state here
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               readOnly
//             />
//           </div> */}
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
//           <div className="name-label">
//             <label className="name">Profile Picture:</label>
//             <input
//               className="inputname"
//               type="file"
//               onChange={handleFileChange}
//               accept="image/*"
//             />
//           </div>
//           <button className="button" type="submit">
//             Create Profile
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CreateProfile;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Profile.css";

// const CreateProfile = () => {
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [address, setAddress] = useState("");
//   const [email, setEmail] = useState("");
//   const [profilePicture, setProfilePicture] = useState(null);
//   const [nameError, setNameError] = useState("");
//   const [phoneError, setPhoneError] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const userId = localStorage.getItem("userId");

//     if (!userId) {
//       console.error("No user ID found. Redirecting to signup.");
//       localStorage.clear(); // Clear stale data
//       navigate("/signup");
//       return;
//     }

//     // Fetch user email from backend
//     const fetchUserEmail = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:5000/api/users/${userId}`,
//           {
//             headers: {
//               "Content-Type": "application/json",
//             },
//           }
//         );
//         if (response.ok) {
//           const data = await response.json();
//           if (data.email) {
//             setEmail(data.email);
//             localStorage.setItem("userEmail", data.email);
//             console.log(
//               "CreateProfile.js: Email fetched and set to:",
//               data.email
//             );
//           } else {
//             setEmailError("No email associated with this account.");
//           }
//         } else {
//           console.error("Failed to fetch user:", response.status);
//           setEmailError("Failed to fetch user email. Please log in again.");
//           localStorage.clear(); // Clear potentially invalid userId
//           setTimeout(() => navigate("/signup"), 2000); // Redirect after showing error
//         }
//       } catch (error) {
//         console.error("Error fetching user email:", error);
//         setEmailError(
//           "Network error while fetching user email. Please try again."
//         );
//         localStorage.clear();
//         setTimeout(() => navigate("/signup"), 2000);
//       }
//     };

//     fetchUserEmail();
//   }, [navigate]);

//   const handleFileChange = (e) => {
//     setProfilePicture(e.target.files[0]);
//   };

//   const validateName = (value) => {
//     const nameRegex = /^[a-zA-Z\s]*$/;
//     if (!nameRegex.test(value)) {
//       setNameError("Name can only contain letters and spaces.");
//       return false;
//     }
//     if (value.trim().length === 0) {
//       setNameError("Name cannot be empty.");
//       return false;
//     }
//     setNameError("");
//     return true;
//   };

//   const validatePhone = (value) => {
//     const phoneRegex = /^\d{10}$/;
//     if (!phoneRegex.test(value)) {
//       if (value.length !== 10) {
//         setPhoneError("Phone number must be exactly 10 digits.");
//       } else {
//         setPhoneError("Phone number can only contain digits.");
//       }
//       return false;
//     }
//     setPhoneError("");
//     return true;
//   };

//   const handleNameChange = (e) => {
//     const value = e.target.value;
//     setName(value);
//     validateName(value);
//   };

//   const handlePhoneChange = (e) => {
//     const value = e.target.value;
//     if (/^\d{0,10}$/.test(value)) {
//       setPhone(value);
//       validatePhone(value);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const userId = localStorage.getItem("userId");
//     console.log(
//       "CreateProfile.js: fetch called",
//       userId,
//       name,
//       phone,
//       address,
//       email,
//       profilePicture
//     );

//     if (!userId) {
//       console.error("No user ID found. Redirecting to signup.");
//       localStorage.clear();
//       navigate("/signup");
//       return;
//     }

//     const isNameValid = validateName(name);
//     const isPhoneValid = validatePhone(phone);

//     if (!isNameValid || !isPhoneValid || emailError) {
//       return;
//     }

//     try {
//       const formData = new FormData();
//       formData.append("name", name);
//       formData.append("phone", phone);
//       formData.append("address", address);
//       formData.append("email", email);
//       if (profilePicture) {
//         formData.append("profilePicture", profilePicture);
//       }
//       const response = await fetch(
//         `http://localhost:5000/api/users/profile/${userId}`,
//         {
//           method: "POST",
//           body: formData,
//         }
//       );
//       const data = await response.json();
//       console.log("CreateProfile.js: response", data);
//       if (response.ok) {
//         alert("Profile created successfully!");
//         navigate("/profile");
//       } else {
//         console.error("Failed to create profile:", data);
//         alert(data.message || "Failed to create profile.");
//       }
//     } catch (error) {
//       console.error("Error creating profile:", error);
//       alert("Network error while creating profile.");
//     }
//   };

//   return (
//     <div>
//       <h1>Create Your Profile</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="container">
//           <div className="name-label">
//             <label className="name">Name:</label>
//             <input
//               className="inputname"
//               type="text"
//               value={name}
//               onChange={handleNameChange}
//               pattern="[a-zA-Z\s]*"
//               title="Name can only contain letters and spaces."
//               required
//             />
//             {nameError && (
//               <p className="error-message" style={{ color: "red" }}>
//                 {nameError}
//               </p>
//             )}
//           </div>
//           <div className="name-label">
//             <label className="name">Email:</label>
//             <input className="inputname" type="email" value={email} readOnly />
//             {emailError && (
//               <p className="error-message" style={{ color: "red" }}>
//                 {emailError}
//               </p>
//             )}
//           </div>
//           <div className="name-label">
//             <label className="name">Phone:</label>
//             <input
//               className="inputname"
//               type="tel"
//               value={phone}
//               onChange={handlePhoneChange}
//               pattern="\d{10}"
//               title="Phone number must be exactly 10 digits."
//               required
//             />
//             {phoneError && (
//               <p className="error-message" style={{ color: "red" }}>
//                 {phoneError}
//               </p>
//             )}
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
//           <div className="name-label">
//             <label className="name">Profile Picture:</label>
//             <input
//               className="inputname"
//               type="file"
//               onChange={handleFileChange}
//               accept="image/*"
//             />
//           </div>
//           <button className="button" type="submit" disabled={!!emailError}>
//             Create Profile
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CreateProfile;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./register.css";
// const CreateProfile = () => {
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [address, setAddress] = useState("");
//   const [email, setEmail] = useState("");
//   const [profilePicture, setProfilePicture] = useState(null);

//   const [nameError, setNameError] = useState("");
//   const [phoneError, setPhoneError] = useState("");
//   const [emailError, setEmailError] = useState("");

//   // New state for bank account
//   const [bankAccount, setBankAccount] = useState("");
//   const [bankAccountError, setBankAccountError] = useState("");

//   const navigate = useNavigate();

//   useEffect(() => {
//     const userId = localStorage.getItem("userId");

//     if (!userId) {
//       console.error("No user ID found. Redirecting to signup.");
//       localStorage.clear(); // Clear stale data
//       navigate("/signup");
//       return;
//     }

//     // Fetch user email from backend
//     const fetchUserEmail = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:5000/api/users/${userId}`,
//           {
//             headers: {
//               "Content-Type": "application/json",
//             },
//           }
//         );
//         if (response.ok) {
//           const data = await response.json();
//           if (data.email) {
//             setEmail(data.email);
//             localStorage.setItem("userEmail", data.email);
//             console.log(
//               "CreateProfile.js: Email fetched and set to:",
//               data.email
//             );
//           } else {
//             setEmailError("No email associated with this account.");
//           }
//         } else {
//           console.error("Failed to fetch user:", response.status);
//           setEmailError("Failed to fetch user email. Please log in again.");
//           localStorage.clear(); // Clear potentially invalid userId
//           setTimeout(() => navigate("/signup"), 2000);
//         }
//       } catch (error) {
//         console.error("Error fetching user email:", error);
//         setEmailError(
//           "Network error while fetching user email. Please try again."
//         );
//         localStorage.clear();
//         setTimeout(() => navigate("/signup"), 2000);
//       }
//     };

//     fetchUserEmail();
//   }, [navigate]);

//   const handleFileChange = (e) => {
//     setProfilePicture(e.target.files[0]);
//   };

//   const validateName = (value) => {
//     const nameRegex = /^[a-zA-Z\s]*$/;
//     if (!nameRegex.test(value)) {
//       setNameError("Name can only contain letters and spaces.");
//       return false;
//     }
//     if (value.trim().length === 0) {
//       setNameError("Name cannot be empty.");
//       return false;
//     }
//     setNameError("");
//     return true;
//   };

//   const validatePhone = (value) => {
//     const phoneRegex = /^\d{10}$/;
//     if (!phoneRegex.test(value)) {
//       if (value.length !== 10) {
//         setPhoneError("Phone number must be exactly 10 digits.");
//       } else {
//         setPhoneError("Phone number can only contain digits.");
//       }
//       return false;
//     }
//     setPhoneError("");
//     return true;
//   };

//   // Validation for Bank Account
//   const validateBankAccount = (value) => {
//     const bankRegex = /^\d+$/; // only digits
//     if (!bankRegex.test(value)) {
//       setBankAccountError("Bank account can only contain digits.");
//       return false;
//     }
//     if (value.trim().length < 8 || value.trim().length > 20) {
//       setBankAccountError("Bank account must be between 8 and 20 digits.");
//       return false;
//     }
//     setBankAccountError("");
//     return true;
//   };

//   const handleNameChange = (e) => {
//     const value = e.target.value;
//     setName(value);
//     validateName(value);
//   };

//   const handlePhoneChange = (e) => {
//     const value = e.target.value;
//     if (/^\d{0,10}$/.test(value)) {
//       setPhone(value);
//       validatePhone(value);
//     }
//   };

//   const handleBankAccountChange = (e) => {
//     const value = e.target.value;
//     if (/^\d{0,20}$/.test(value)) {
//       setBankAccount(value);
//       validateBankAccount(value);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const userId = localStorage.getItem("userId");
//     console.log(
//       "CreateProfile.js: fetch called",
//       userId,
//       name,
//       phone,
//       address,
//       email,
//       profilePicture,
//       bankAccount
//     );

//     if (!userId) {
//       console.error("No user ID found. Redirecting to signup.");
//       localStorage.clear();
//       navigate("/signup");
//       return;
//     }

//     const isNameValid = validateName(name);
//     const isPhoneValid = validatePhone(phone);
//     const isBankAccountValid = validateBankAccount(bankAccount);

//     if (!isNameValid || !isPhoneValid || !isBankAccountValid || emailError) {
//       return;
//     }

//     try {
//       const formData = new FormData();
//       formData.append("name", name);
//       formData.append("phone", phone);
//       formData.append("address", address);
//       formData.append("email", email);
//       formData.append("bankAccount", bankAccount); // included bank account
//       if (profilePicture) {
//         formData.append("profilePicture", profilePicture);
//       }

//       const response = await fetch(
//         `http://localhost:5000/api/users/profile/${userId}`,
//         {
//           method: "POST",
//           body: formData,
//         }
//       );
//       const data = await response.json();
//       console.log("CreateProfile.js: response", data);
//       if (response.ok) {
//         alert("Profile created successfully!");
//         navigate("/profile");
//       } else {
//         console.error("Failed to create profile:", data);
//         alert(data.message || "Failed to create profile.");
//       }
//     } catch (error) {
//       console.error("Error creating profile:", error);
//       alert("Network error while creating profile.");
//     }
//   };

//   return (
//     <div className="create-profile-page">
//       <h1>Create Your Profile</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="container">
//           {/* Name */}
//           <div className="name-label">
//             <label className="name">Name:</label>
//             <input
//               className="inputname"
//               type="text"
//               value={name}
//               onChange={handleNameChange}
//               pattern="[a-zA-Z\s]*"
//               title="Name can only contain letters and spaces."
//               required
//             />
//             {nameError && (
//               <p className="error-message" style={{ color: "red" }}>
//                 {nameError}
//               </p>
//             )}
//           </div>

//           {/* Email */}
//           <div className="name-label">
//             <label className="name">Email:</label>
//             <input className="inputname" type="email" value={email} readOnly />
//             {emailError && (
//               <p className="error-message" style={{ color: "red" }}>
//                 {emailError}
//               </p>
//             )}
//           </div>

//           {/* Phone */}
//           <div className="name-label">
//             <label className="name">Phone:</label>
//             <input
//               className="inputname"
//               type="tel"
//               value={phone}
//               onChange={handlePhoneChange}
//               pattern="\d{10}"
//               title="Phone number must be exactly 10 digits."
//               required
//             />
//             {phoneError && (
//               <p className="error-message" style={{ color: "red" }}>
//                 {phoneError}
//               </p>
//             )}
//           </div>

//           {/* Address */}
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

//           {/* Profile Picture */}
//           <div className="name-label">
//             <label className="name">Profile Picture:</label>
//             <input
//               className="inputname"
//               type="file"
//               onChange={handleFileChange}
//               accept="image/*"
//             />
//           </div>

//           {/* Bank Account */}
//           <div className="name-label">
//             <label className="name">Bank Account:</label>
//             <input
//               className="inputname"
//               type="text"
//               value={bankAccount}
//               onChange={handleBankAccountChange}
//               placeholder="Enter bank account number"
//             />
//             {bankAccountError && (
//               <p className="error-message" style={{ color: "red" }}>
//                 {bankAccountError}
//               </p>
//             )}
//           </div>

//           {/* Submit Button */}
//           <button className="button" type="submit" disabled={!!emailError}>
//             Create Profile
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CreateProfile;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";

const CreateProfile = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);

  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");

  // New state for bank account
  const [bankAccount, setBankAccount] = useState("");
  const [bankAccountError, setBankAccountError] = useState("");

  // New state for bank provider
  const [bankProvider, setBankProvider] = useState("");
  const [bankProviderError, setBankProviderError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      console.error("No user ID found. Redirecting to signup.");
      localStorage.clear(); // Clear stale data
      navigate("/signup");
      return;
    }

    // Fetch user email from backend
    const fetchUserEmail = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/users/${userId}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          if (data.email) {
            setEmail(data.email);
            localStorage.setItem("userEmail", data.email);
            console.log(
              "CreateProfile.js: Email fetched and set to:",
              data.email
            );
          } else {
            setEmailError("No email associated with this account.");
          }
        } else {
          console.error("Failed to fetch user:", response.status);
          setEmailError("Failed to fetch user email. Please log in again.");
          localStorage.clear(); // Clear potentially invalid userId
          setTimeout(() => navigate("/signup"), 2000);
        }
      } catch (error) {
        console.error("Error fetching user email:", error);
        setEmailError(
          "Network error while fetching user email. Please try again."
        );
        localStorage.clear();
        setTimeout(() => navigate("/signup"), 2000);
      }
    };

    fetchUserEmail();
  }, [navigate]);

  const handleFileChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  const validateName = (value) => {
    const nameRegex = /^[a-zA-Z\s]*$/;
    if (!nameRegex.test(value)) {
      setNameError("Name can only contain letters and spaces.");
      return false;
    }
    if (value.trim().length === 0) {
      setNameError("Name cannot be empty.");
      return false;
    }
    setNameError("");
    return true;
  };

  const validatePhone = (value) => {
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(value)) {
      if (value.length !== 10) {
        setPhoneError("Phone number must be exactly 10 digits.");
      } else {
        setPhoneError("Phone number can only contain digits.");
      }
      return false;
    }
    setPhoneError("");
    return true;
  };

  const validateBankAccount = (value) => {
    const bankRegex = /^\d+$/; // only digits
    if (!bankRegex.test(value)) {
      setBankAccountError("Bank account can only contain digits.");
      return false;
    }
    if (value.trim().length < 8 || value.trim().length > 20) {
      setBankAccountError("Bank account must be between 8 and 20 digits.");
      return false;
    }
    setBankAccountError("");
    return true;
  };

  const validateBankProvider = () => {
    if (!bankProvider) {
      setBankProviderError("Please select a bank provider.");
      return false;
    }
    setBankProviderError("");
    return true;
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    validateName(value);
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,10}$/.test(value)) {
      setPhone(value);
      validatePhone(value);
    }
  };

  const handleBankAccountChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,20}$/.test(value)) {
      setBankAccount(value);
      validateBankAccount(value);
    }
  };

  const handleBankProviderChange = (value) => {
    setBankProvider(value);
    setBankProviderError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem("userId");
    console.log(
      "CreateProfile.js: fetch called",
      userId,
      name,
      phone,
      address,
      email,
      profilePicture,
      bankAccount,
      bankProvider
    );

    if (!userId) {
      console.error("No user ID found. Redirecting to signup.");
      localStorage.clear();
      navigate("/signup");
      return;
    }

    const isNameValid = validateName(name);
    const isPhoneValid = validatePhone(phone);
    const isBankAccountValid = validateBankAccount(bankAccount);
    const isBankProviderValid = validateBankProvider();

    if (
      !isNameValid ||
      !isPhoneValid ||
      !isBankAccountValid ||
      !isBankProviderValid ||
      emailError
    ) {
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("phone", phone);
      formData.append("address", address);
      formData.append("email", email);
      formData.append("bankAccount", bankAccount);
      formData.append("bankProvider", bankProvider);
      if (profilePicture) {
        formData.append("profilePicture", profilePicture);
      }

      const response = await fetch(
        `http://localhost:5000/api/users/profile/${userId}`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      console.log("CreateProfile.js: response", data);
      if (response.ok) {
        alert("Profile created successfully!");
        navigate("/profile");
      } else {
        console.error("Failed to create profile:", data);
        alert(data.message || "Failed to create profile.");
      }
    } catch (error) {
      console.error("Error creating profile:", error);
      alert("Network error while creating profile.");
    }
  };

  return (
    <div className="create-profile-page">
      <h1>Create Your Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="container">
          {/* Name */}
          <div className="name-label">
            <label className="name">Name:</label>
            <input
              className="inputname"
              type="text"
              value={name}
              onChange={handleNameChange}
              pattern="[a-zA-Z\s]*"
              title="Name can only contain letters and spaces."
              required
            />
            {nameError && (
              <p className="error-message" style={{ color: "red" }}>
                {nameError}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="name-label">
            <label className="name">Email:</label>
            <input className="inputname" type="email" value={email} readOnly />
            {emailError && (
              <p className="error-message" style={{ color: "red" }}>
                {emailError}
              </p>
            )}
          </div>

          {/* Phone */}
          <div className="name-label">
            <label className="name">Phone:</label>
            <input
              className="inputname"
              type="tel"
              value={phone}
              onChange={handlePhoneChange}
              pattern="\d{10}"
              title="Phone number must be exactly 10 digits."
              required
            />
            {phoneError && (
              <p className="error-message" style={{ color: "red" }}>
                {phoneError}
              </p>
            )}
          </div>

          {/* Address */}
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

          {/* Profile Picture */}
          <div className="name-label">
            <label className="name">Profile Picture:</label>
            <input
              className="inputname"
              type="file"
              onChange={handleFileChange}
              accept="image/*"
            />
          </div>

          {/* Bank Provider (Radio Buttons) */}
          <div className="name-label">
            <label className="name">Bank Provider:</label>
            <div>
              <label>
                <input
                  type="radio"
                  name="bankProvider"
                  value="CBE"
                  checked={bankProvider === "CBE"}
                  onChange={() => handleBankProviderChange("CBE")}
                />
                CBE
              </label>
              <label style={{ marginLeft: "10px" }}>
                <input
                  type="radio"
                  name="bankProvider"
                  value="AWASH"
                  checked={bankProvider === "AWASH"}
                  onChange={() => handleBankProviderChange("AWASH")}
                />
                Telbir
              </label>
            </div>
            {bankProviderError && (
              <p className="error-message" style={{ color: "red" }}>
                {bankProviderError}
              </p>
            )}
          </div>

          {/* Bank Account */}
          <div className="name-label">
            <label className="name">Bank Account:</label>
            <input
              className="inputname"
              type="text"
              value={bankAccount}
              onChange={handleBankAccountChange}
              placeholder="Enter bank account number"
            />
            {bankAccountError && (
              <p className="error-message" style={{ color: "red" }}>
                {bankAccountError}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button className="button" type="submit" disabled={!!emailError}>
            Create Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProfile;
