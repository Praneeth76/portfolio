// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const projectRoutes = require('./routes/projectRoutes');
const errorMiddleware = require('./middlewares/errorMiddleware');

dotenv.config();

// Initialize the Express app
const app = express();

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:5173', // React frontend URL
  methods: ['GET', 'POST'], 
};

app.use(cors(corsOptions));  // Enable CORS with the specified options

// Middleware
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => {
    console.error(`MongoDB connection error: ${err.message}`);
    process.exit(1);
  });

// Routes
app.use('/api/projects', projectRoutes);

// Error handling middleware
app.use(errorMiddleware);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
