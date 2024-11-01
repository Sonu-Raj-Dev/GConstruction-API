// app.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config');
const userRoutes = require('./Routes/Routes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Routes
app.use('/api', userRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
  res.status(500).json({ success: false, message: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
