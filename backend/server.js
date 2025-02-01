const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");

const projectRoutes = require("./routes/projectRoutes");
const errorMiddleware = require("./middlewares/errorMiddleware");

dotenv.config();

// Initialize Express app
const app = express();

// CORS configuration for local and deployed frontend
const corsOptions = {
  origin: [
    "http://localhost:5173", // Local frontend
    "https://portfolio-xi-coral-49.vercel.app", // Deployed frontend
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true, // Allow credentials (cookies, authorization headers)
};

app.use(cors(corsOptions)); // Enable CORS with the specified options
app.options("*", cors(corsOptions)); // Handle preflight requests for all routes

// Logging middleware for debugging
app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  console.log(`Origin: ${req.headers.origin}`); // Log the origin of the request
  next();
});

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected successfully!");
  } catch (err) {
    console.error(`❌ MongoDB connection error: ${err.message}`);
    process.exit(1);
  }
};

connectDB();

// Routes
app.use("/api/projects", projectRoutes);

// Error Handling Middleware
app.use(errorMiddleware);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

module.exports = app; // Required for Vercel deployment