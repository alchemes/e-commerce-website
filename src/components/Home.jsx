
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const currentYear = new Date().getFullYear(); 

  return (
    <div className="home-container">
      <h1>Welcome to E-Arts</h1>
      <p>Your one-stop shop for everything!</p>
      <div className="button-container">
        <Link to="/login">
          <button className="btn">Login</button>
        </Link>
        <Link to="/signup">
          <button className="btn">Signup</button>
        </Link>
        <img src="/photo1.jpg" alt="E-Arts visual representation" />
      </div>
      <footer className="footer">
        <p>&copy; {currentYear} E-Arts. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;