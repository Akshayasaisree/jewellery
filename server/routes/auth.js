// server/routes/auth.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');  // Import JWT package
const User = require('../models/User');

const router = express.Router();

// Login route with JWT
router.post('/', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Compare password with hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Generate a JWT token
    const token = jwt.sign(
      { id: existingUser._id, email: existingUser.email },  // Payload (can include more user info)
      process.env.JWT_SECRET,  // Secret key from environment variable
      { expiresIn: '1h' }  // Token expiration time (1 hour)
    );

    // Send the token to the client
    res.status(200).json({
      message: 'Login successful',
      token,  // Send the token to the client
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

