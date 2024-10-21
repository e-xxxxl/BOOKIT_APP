import React, { useState } from 'react';

const Payments = () => {
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState(0);

  const handlePayment = async () => {
    const response = await fetch('https://bookit-app-vn3p.vercel.app/initialize-payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,  // Make sure the key name matches the backend
        amount: amount,  // Send the amount from the state
      }),
    });

    const data = await response.json();
    if (data.authorization_url) {
      window.location.href = data.authorization_url; // Redirect to Paystack payment page
    } else {
      console.error('Payment initialization failed');
    }
  };

  return (
    <div>
      <h3>Pay with Paystack</h3>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default Payments;
