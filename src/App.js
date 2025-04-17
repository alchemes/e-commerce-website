import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login.';
import Signup from './components/Signup';
import About from './components/About';
import Product from './components/Product';
import Contact from './components/Contact';
import PostItem from './components/PostItem';
import Payment from './components/Payment.';
import Profile from './components/Profile';
import ProductDetails from './components/ProductDetails';
import Subscription from './components/subscription';

import './App.css';


function App() {
  const [postedItems, setPostedItems] = useState([]); // State to hold posted items

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route 
            path="/profile" 
            element={<Profile />}  // Added route to Profile Page
          />
          <Route 
            path="/post-item" 
            element={<PostItem setPostedItems={setPostedItems} />} 
          />
          <Route path="/about" element={<About />} />
          <Route 
            path="/products" 
            element={<Product postedItems={postedItems} />} 
          />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route 
            path="/payment" 
            element={<Payment />} // Route to the Payment component
          />
         
          <Route path="/contact" element={<Contact />} />
          <Route path="/subscription" element={<Subscription/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;