// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import MainPage from './components/MainPage';
import ForgotPassword from './components/ForgotPassword';
import UploadPage from './components/UploadPage';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';  // Import ContactUs component
import Settings from './components/Settings';
import YourOrders from './components/YourOrders';
import HowItWorks from './components/HowItWorks';
import ImageUpload1 from './components/ImageUpload1';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/upload1" element={<ImageUpload1 />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />  {/* Added ContactUs route */}
        <Route path="/settings" element={<Settings />} />
        <Route path="/YourOrders" element={<YourOrders />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/logout" element={<Login />} />  
      </Routes>
    </Router>
  );
}

export default App;
