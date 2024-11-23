// src/components/AboutUs.jsx
// src/components/MainPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';  // Import CSS for navigation bar

const AboutUs = () => {
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
      <div class="info">
        <h1>About Us</h1><br></br>

        <p>Welcome to [Your Brand Name], where your creativity meets cutting-edge technology!<br></br>
        <h3>Our Vision</h3><br></br>
At [Your Brand Name], we believe that every piece of jewelry tells a unique story. Our mission is to transform your 2D sketches and images into stunning 3D designs, making your artistic vision a reality. With a focus on innovation and craftsmanship, we aim to redefine how jewelry is designed and created.

<br></br><h3>What We Do</h3><br></br>
Using advanced Generative Adversarial Networks (GANs) and deep learning techniques, we take your initial ideas—whether it’s a hand-drawn sketch or a digital image—and turn them into beautifully rendered 3D models. Our state-of-the-art technology allows us to produce intricate designs with unparalleled detail and accuracy.Our Commitment
We are passionate about combining art and technology to empower designers like you. Whether you are a professional jeweler or an aspiring artist, we are here to support your journey and help you create pieces that resonate with beauty and elegance.
<br></br>
Join us in this exciting adventure, and let’s turn your imagination into exquisite jewelry!

<h3>Get In Touch</h3><br></br>
Have questions or ready to start your design? Contact us today, and let’s create something extraordinary together!</p>
      </div>
    </div>
  );
};

export default AboutUs;

