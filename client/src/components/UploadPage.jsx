// src/components/MainPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';  // Import CSS for navigation bar

const UploadPage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div class="body">
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
      <div className="choices">
      <button>
        <Link to="/upload1" className="c">
          <h1>2D-3D <br></br>IMAGES</h1>
        </Link>
      </button>
      
      <button>
        <Link to="/upload2" className="c">
          <h1>BLUR-CLEAR<br></br>IMAGES</h1>
          
        </Link>
      </button>
      
      <button>
        <Link to="/upload3" className="c">
          <h1>3</h1>
        </Link>
      </button>
      </div>
    </div>
  );
};

export default UploadPage;

