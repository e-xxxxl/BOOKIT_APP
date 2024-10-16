const userModel = require("../models/user.model");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

require("dotenv").config()
const fetchEmail = (req,res)=>{
    userModel.find()
    .then((Email)=>{
        res.status(200).json(Email)
    })
    .catch((err)=>{
        console.log("i dey get email")
    })
}
const transporter = nodemailer.createTransport({
    service: 'gmail',  // You can replace this with any other email service you prefer
    auth: {
      user: process.env.EMAIL_USER,  // Your email
      pass: process.env.EMAIL_PASS,  // Your email password or app password
    },
  });
  
  // Function to send a welcome email
  const sendWelcomeEmail = async (Email, Name) => {
    const mailOptions = {
      from: '"BOOKIT APP" <bookit@gmail.com>',  // Sender address
      to:` ${Email}`,  // Receiver email
      subject: 'Welcome to BOOKIT App!',  // Subject line
      html: `<h1>Welcome, ${Name}!</h1>
             <p>Thanks for signing up at BOOKIT. We're happy to have you on board!</p>
             <p>Best regards,<br/>BOOKIT Team</p>`,  // HTML body
    };
  
    // Send the email
    await transporter.sendMail(mailOptions);
  };








const signup = async (req, res) => {
    try {
        const { Name, Email, Password } = req.body;

        // Check if the user already exists
        const existingUser = await userModel.findOne({ Email });
        if (existingUser) {
            return res.status(400).json({ status: false, message: 'User already exists' });
        }else{
            // Hash the password
        const hashedPassword = await bcrypt.hash(Password, 10);

        // Create and save the new user
        const newUser = new userModel({ Name, Email, Password: hashedPassword });
        await newUser.save();

        console.log("User saved successfully");
        await sendWelcomeEmail(Email, Name);
        res.status(201).json({ status: true, message: "User registered successfully" });
        }

        
    } catch (err) {
        console.error("Error while saving user:", err);
        res.status(500).json({ status: false, message: "Error while saving user" });
    }
};
const signin = (req, res) => {
    const { Email, Password } = req.body;

    // Check if the user exists
    userModel.findOne({ Email })
        .then(user => {
            if (!user) {
                console.log('Invalid credentials: User not found');
                return res.status(400).json({ status: false, message: 'Invalid credentials' });
            }

            // Compare password with the hashed password
            return bcrypt.compare(Password, user.Password)
                .then(isMatch => {
                    if (!isMatch) {
                        console.log('Invalid credentials: Password mismatch');
                        return res.status(400).json({ status: false, message: 'Invalid credentials' });
                    }

                    // Generate a JWT token
                    const token = jwt.sign({ Email: user.Email }, process.env.JWT_SECRET, { expiresIn: '1h' });
                    console.log('Login successful for user:', Email);

                    // Verify the token right after signing it
                    return new Promise((resolve, reject) => {
                        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
                            if (err) {
                                console.error("Token verification failed:", err);
                                return reject(err);
                            }
                            resolve(decoded);
                        });
                    }).then(decoded => {
                        return res.status(200).json({ status: true, message: 'Login successful', token, decoded });
                    });
                });
                
        })
        .catch(err => {
            console.error("Error during signin:", err);
            return res.status(500).json({ status: false, message: 'Error during signin' });
        });
};

module.exports = {
    signup,
    signin,fetchEmail
};