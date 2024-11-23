// // server/app.js
// const express = require('express');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const authRoutes = require('./api/auth.js');

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5500;

// // Middleware
// app.use(cors({
//   origin: 'http://localhost:5173', // adjust to your frontend URL
//   methods: ['GET', 'POST'], // allow specific methods
// }));
// app.use(bodyParser.json());

// // MongoDB Connection
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => console.log('MongoDB connected successfully'))
//   .catch((err) => console.log('MongoDB connection error:', err));

// // Routes
// app.use('/signup', authRoutes);

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
require('dotenv').config();
const authRoutes = require('./api/auth');
const app = express();

app.use(cors({
  origin: 'http://localhost:5173' // Replace with your frontend's URL
}));
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb+srv://akshayasaisree:Akshaya123@cluster0.um1xv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.log("MongoDB connection error:", error));

app.use('/api/auth', authRoutes);

// app.post('/api/auth/signup', async (req, res) => {
//   const { username,email, password } = req.body;
//   // Add signup logic here, such as saving user data to the database
//   const existingUser = await User.findOne({ email });
//     if (existingUser) {
//         return res.status(400).json({ error: 'User with this email already exists' });
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create and save the new user
//     const newUser = new User({ username, email, password: hashedPassword });
//     await newUser.save();

//     // Send success response
//     res.status(201).json({ message: 'User created successfully' });
// });


const PORT = 5500;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
