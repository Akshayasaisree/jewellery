// src/components/SignUp.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
    if (!passwordRegex.test(password)) {
      setError('Password must be at least 8 characters, with 1 uppercase, 1 lowercase letter, and 1 symbol.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5500/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();
      if (response.status === 201) {
        setSuccessMessage(data.message);
        setError('');
        navigate('/'); // Redirect to login after successful signup
      } else {
        setError(data.message || 'Sign up failed');
      }
    } catch (err) {
      setError('Sign up failed');
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      {error && <p className="error-message">{error}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword((prevShowPassword) => !prevShowPassword)}
            className="show-password-toggle"
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        <button type="submit" class="sign">Sign Up</button>
      </form>

      <div className="extra-links">
        <p>Have an account? <a href="/">Login</a></p>
      </div>
    </div>
  );
};

export default SignUp;
