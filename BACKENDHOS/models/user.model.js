const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema({
    Name: { type: String, required: true },
    Email: { type: String, required: true, },
    Password: { type: String, required: true },
    dateAdded: { type: Date, default: Date.now() },
    lastLogin: { type: Date } 
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
