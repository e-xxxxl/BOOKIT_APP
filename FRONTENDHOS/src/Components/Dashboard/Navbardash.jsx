import React, { useState } from 'react'
import log from "../../assets/log.jpg";
import Avatar from 'react-avatar';
import Dropdown from 'react-bootstrap/Dropdown';
const Navbardash = () => {
  const [isOpen, setIsOpen] = useState(false);
  const storedName = localStorage.getItem("userName");
  let displayName = "User"; 

  if (storedName) {
    try {
      const parsedName = JSON.parse(storedName);
      displayName = parsedName.name;
    } catch (error) {
      console.error("Error parsing userName from localStorage:", error);
    }
  } else {
    console.warn("userName not found in localStorage");
  }
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/user/signin'; // Redirect to sign-in page
  };

  return (
    <>

    <nav class="navbar navbar-expand-lg bg-body-white shadow">
  <div class="container-fluid">
  <img draggable='false' src={log} alt="Book It" style={{width:"150px"}}/>
    <button class="navbar-toggler pe-2 me-2 ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
  
      <form class="d-flex mx-auto pt-2  me-auto" role="search">
       
      </form>
      <ul class="navbar-nav  mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active fw-bold" aria-current="page" href="/user/dashboard">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bold" href="/user/hotels">Hotels</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bold" href="/user/about">About Us</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link fw-bold " href="/user/contact" role="button"  aria-expanded="false">
            Contact
          </a>
        </li>
      </ul>
   

    </div>
    <div  style={{ position: 'relative', }}>
      <Dropdown onToggle={(isOpen) => setIsOpen(isOpen)}>
        <Dropdown.Toggle as="div" style={{ cursor: "pointer" }}>
          <Avatar
            name={displayName}
            size="40"
            round={true}
            style={{ backgroundColor: '#4CAF50', color: '#fff' }}
          />
        </Dropdown.Toggle>

        <Dropdown.Menu align="end" style={{padding: "20px"}}>
          <Dropdown.ItemText className='fw-bold fs-4'>{displayName}</Dropdown.ItemText>
          <Dropdown.Item onClick={handleLogout} className="logout-button ">
            Logout
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbardash