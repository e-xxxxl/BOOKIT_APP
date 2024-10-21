const axios = require('axios');
const express = require('express');
const router = express.Router();

app.use(express.json());


// Initialize Paystack payment
app.post('/initialize-payment', async (req, res) => {
    const { email, amount } = req.body; // get email and amount from frontend
  
    // Prepare the data to send to Paystack
    const paymentData = {
      email: email, // customer's email
      amount: amount * 100, // Paystack expects amount in kobo (multiply by 100)
      currency: 'NGN',
      callback_url: 'https://bookit-app-topaz.vercel.app/payment/callback', // Replace with your actual callback URL
    };
  
    try {
      // Make a request to Paystack to initialize the payment
      const response = await axios.post('https://api.paystack.co/transaction/initialize', paymentData, {
        headers: {
          Authorization: `sk_test_39f60f4c11ac0fe1601f01cb3363d77e73c8b68f`, // Use your secret key
          'Content-Type': 'application/json',
        },
      });
  
      // Send the authorization URL back to the frontend
      res.send({ authorization_url: response.data.data.authorization_url });
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred while initializing payment.');
    }
  });
  
//   app.listen(5000, () => {
//     console.log('Server is running on port 5000');
//   });
