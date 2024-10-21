const express = require('express');
const app = express();
const port = 3100;
const userRouter = require("./routes/user.route")
const hotelRouter = require("./routes/hotel.route");
const cors = require("cors")
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const mongoose = require("mongoose")


app.use(express.urlencoded({ extended: true, limit: "100mb" }))
app.use(express.json())
app.use(cors())
app.use("/user", userRouter)
app.use("/api", hotelRouter)
require("dotenv").config()
const URI = process.env.MONGO_DB_URI
mongoose.connect(URI)


  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  })

// SEARCH

// const hotels = [
//   { name: 'Imperial' },
//   { name: 'Nest' },
//   { name: 'Star' },
//   { name: 'Hilton' },
//   { name: 'Hill' }
// ];

// // Route to handle search requests
// // app.get('/search', (req, res) => {
// //  const searchTerm = req.query.q; // Get the search query
//  // if (!searchTerm) {
//  //   return res.json([]); // Return empty array if no query
//  // }

//   // Filter items based on the search term (case-insensitive)
//  // const filteredItems = hotels.filter(item =>
//  //   item.name.toLowerCase().includes(searchTerm.toLowerCase())
//  // );

//  // res.json(filteredItems); // Send the filtered results back to the frontend
// //});


// // SEARCH ENDS HERE

app.get('/', (req, res) => {
  res.send('Hello')
})

app.listen(port, () => {
  console.log(`node is running on ${port}`)
})
