import React, { useState,useEffect } from 'react';
import { PaystackButton } from 'react-paystack';

const Atlanticsuite = () => {
const publicKey = "pk_test_0d806d856f29e108a37eb6d02d7fb3ec77124301";
const amount = 27787500;
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [rooms, setekoRooms] = useState([]);

  const resetForm = () => {
    setEmail('');
    setName('');
    setPhone('');
  };
  const componentProps = {
  
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: 'Book Now',
    onSuccess: ({ reference }) => {
      alert(
        `Your room was booked sucessfully! Transaction reference: ${reference}`
      );
      resetForm();
    },
    onClose: () => alert("Are you sure you want to cancel the transaction?"),
 };

 useEffect(() => {
    // Fetch hotels from the backend
    fetch("https://bookit-app-vn3p.vercel.app/api/ekoRooms")
      .then((response) => response.json())
      .then((data) => {
        setekoRooms(data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching hotels:", error));
  }, []);
  const getekoRoomsById = (id) => {
    return rooms.filter((room) => room.id === id);
  };

  const Eko3 = getekoRoomsById(3);
  return (
    <>
    {Eko3.map((rooms) => ( 
    <div className="paystackApp">
      <div className="paystackcontainer">
        <div className="paystackitem">
          <div className="paystackoverlay-effect"></div>
          <img
            className="paystackitem-image"
            src={rooms.imageUrl}
            alt="product"
          />
          <div className="paystackitem-details">
            <p className="paystackitem-details__title">Classic Suite</p>
            <p className="paystackitem-details__amount">NGN {amount / 100}</p>
          </div>
        </div>
        <div className="paystackcheckout">
          <div className="paystackcheckout-form">
            <div className="paystackcheckout-field">
              <label>Name</label>
              <input
                required
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="paystackcheckout-field">
              <label>Email</label>
              <input
                required
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="paystackcheckout-field">
              <label>Phone</label>
              <input
                required
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <PaystackButton className="paystack-button" {...componentProps} />
          </div>
        </div>
      </div>
    </div>
))}
    </>
  )
}

export default Atlanticsuite