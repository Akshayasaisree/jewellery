// // src/components/MainPage.jsx
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './NavBar.css';  // Import CSS for navigation bar


// const MainPage = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

//   // Carousel settings for autoplaying videos
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     pauseOnHover: true,
//   };

//   return (
//     <div>
//       <nav className="navbar">
//         <div className="navbar-logo">
//           <img class="image"src="src/components/1.jpg"></img> {/* Replace 'MyLogo' with your actual logo */}
//         </div>
//         <ul className="navbar-links">
//           <li><Link to="/main">Home</Link></li>
//           <li><Link to="/upload">Upload</Link></li>
//           <li><Link to="/about">About Us</Link></li>
//           <li><Link to="/contact">Contact Us</Link></li>  {/* Added Contact Us link */}
//         </ul>
//         <div className="navbar-profile">
//           <button className="profile-button" onClick={toggleDropdown}><img class="image"src="src/components/2.jpg"></img></button>
//           {dropdownOpen && (
//             <ul className="profile-dropdown">
//               <li><Link to="/settings">Settings</Link></li>
//               <li><Link to="/YourOrders">Your Orders</Link></li>
//               <li><Link to="/how-it-works">How it Works</Link></li>
//               <li><Link to="/logout">Logout</Link></li>
//             </ul>
//           )}
//         </div>
//       </nav>
//       {/* Autoplay Video Carousel Section */}
//       <div className="video-carousel">
//         <Slider {...settings}>
//           <div>
//             <video autoPlay muted loop className="carousel-video">
//               <source src="path/to/video1.mp4" type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           </div>
//           <div>
//             <video autoPlay muted loop className="carousel-video">
//               <source src="path/to/video2.mp4" type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           </div>
//           <div>
//             <video autoPlay muted loop className="carousel-video">
//               <source src="path/to/video3.mp4" type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           </div>
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default MainPage;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick"; // Import react-slick for the video carousel
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const MainPage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  // Carousel settings for autoplaying videos
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">
          <img className="image" src="src/components/1.jpg" alt="Logo" />
        </div>
        <ul className="navbar-links">
          <li><Link to="/main">Home</Link></li>
          <li><Link to="/upload">Upload</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
        <div className="navbar-profile">
          <button className="profile-button" onClick={toggleDropdown}>
            <img className="image" src="src/components/2.jpg" alt="Profile" />
          </button>
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

      {/* Autoplay Video Carousel Section */}
      <div className="video-carousel">
          <Slider {...settings}> 
          {/* <div>
            <video autoPlay muted loop className="carousel-video">
              <source src="src/components/video1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div> */} 
          {/* <div>
            <video autoPlay muted loop className="carousel-video">
              <source src="src/components/video2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div> */}
          {/* <div>
            <video autoPlay muted loop className="carousel-video">
              <source src="src/components/video3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div> */}
          <div>
            <img class="img" src="src/components/1.jpg"></img>
          </div>
          <div>
            <img class="img" src="src/components/3.jpg"></img>
          </div>
          <div>
            <img class="img" src="src/components/4.jpg"></img>
          </div>
          <div>
            <img class="img" src="src/components/5.jpg"></img>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default MainPage;

