const express = require('express');
const app = express();
const port = process.env.PORT || 3100;
const userRouter = require("./routes/user.route")
const hotelRouter = require("./routes/hotel.route");
const cors = require("cors")
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const mongoose = require("mongoose")

// Load environment variables first
require("dotenv").config()

// Middleware setup
app.use(express.urlencoded({ extended: true, limit: "100mb" }))
app.use(express.json())

// Allowed frontend URLs
const allowedOrigins = [
  "https://bookit-app-topaz.vercel.app",
  "http://localhost:3000",
  "http://localhost:3001"
];

// Enhanced CORS config
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (mobile apps, curl, etc.)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.log('Blocked origin:', origin);
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "Accept", "Origin", "X-Requested-With"],
  credentials: true,
  optionsSuccessStatus: 200 // For legacy browser support
}));

// Handle preflight requests explicitly
app.options("*", (req, res) => {
  res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type,Authorization,Accept,Origin,X-Requested-With");
  res.header("Access-Control-Allow-Credentials", "true");
  res.status(200).end();
});

// Connect to MongoDB
const URI = process.env.MONGO_DB_URI
if (!URI) {
  console.error("MONGO_DB_URI is not defined in environment variables");
  process.exit(1);
}

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("MongoDB Connected");
})
.catch((err) => {
  console.log("MongoDB connection error:", err);
  process.exit(1);
})

// Routes
app.use("/user", userRouter)
app.use("/api", hotelRouter)

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.get('/', (req, res) => {
  res.json({ message: 'BookIt API is running!', timestamp: new Date().toISOString() });
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})