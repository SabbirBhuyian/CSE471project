const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');  // For session handling
const cookieParser = require('cookie-parser');  // For cookie parsing
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');  // Import admin routes

// Initialize Express app
const app = express();

// Middleware to allow cross-origin requests
app.use(cors({
  origin: 'http://localhost:3000',  // Your frontend URL (React app)
  credentials: true,  // Allow cookies and credentials to be sent
}));

// Middleware to parse JSON request bodies
app.use(express.json());

// Middleware for cookie parsing and session management
app.use(cookieParser());
app.use(session({
  secret: 'your_secret_key',  // Secret for session encryption
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false },  // Set to true if using HTTPS
}));

// MongoDB connection (Local or Atlas)
const mongoURI = 'mongodb://localhost:27017/quickhammer';  // Use your local DB URI or Atlas URI

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Use the user routes
app.use('/api', userRoutes);

// Use the admin routes (make sure admin routes are prefixed with /admin)
app.use('/api/admin', adminRoutes);  // Admin routes for user management

app.get("/", (req, res) => {
  res.send("Mongoose server is running");
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});