import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Hoteldetails = () => {
  const { hotelid } = useParams(); // Extract hotel ID from URL params
  const [hotel, setHotel] = useState(null); // Initialize hotel state as null
  const [message, setMessage] = useState(''); // State for messages

  console.log(hotelid);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://bookit-app-vn3p.vercel.app/api/hotels/${hotelid}`); // Fetch hotel details
        if (!response.ok) { // Check if response is not OK
          throw new Error('Hotel not found');
        }
        const responseObject = await response.json(); // Parse response to JSON
        if (responseObject) {
          setHotel(responseObject); // Set hotel data to state
        } else {
          setMessage('There are no more hotels available.');
        }
      } catch (err) {
        console.error("Error fetching hotel details:", err);
        setMessage(err.message || 'An error occurred');
      }
    };
    fetchData();
  }, [hotelid]); // Run effect when hotel ID changes

  if (!hotel && !message) return <div>Loading...</div>; // Loading state

  return (
    <>
      {message && <p className="error-message fw-bolder text-danger fs-3">{message}</p>}
      {hotel && (
        <>
          <div>Hotel Name: {hotel.name}</div>
          <div>Description: {hotel.description}</div>
          <img
            src={hotel.imageUrl}
            className="bd-placeholder-img card-img-top"
            alt={hotel.name}
          />
        </>
      )}
      <a href="#" className="back-to-top">
        <i className="fa fa-chevron-up"></i>
      </a>
    </>
  );
};

export default Hoteldetails;
