// src/components/AboutUs.jsx
// src/components/MainPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';  // Import CSS for navigation bar

const ContactUs = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">
          <img class="image"src="src/components/1.jpg"></img> {/* Replace 'MyLogo' with your actual logo */}
        </div>
        <ul className="navbar-links">
          <li><Link to="/main">Home</Link></li>
          <li><Link to="/upload">Upload</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>  {/* Added Contact Us link */}
        </ul>
        <div className="navbar-profile">
          <button className="profile-button" onClick={toggleDropdown}><img class="image"src="src/components/2.jpg"></img></button>
          {dropdownOpen && (
            <ul className="profile-dropdown">
              <li><Link to="/settings">Settings</Link></li>
              <li><Link to="/YourOrders">Your Orders</Link></li>
              <li><Link to="/how-it-works">How it Works</Link></li>
              <li><Link to="/logout">Logout</Link></li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default ContactUs;
