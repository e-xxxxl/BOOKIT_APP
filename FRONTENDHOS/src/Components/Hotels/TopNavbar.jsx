import React, { useState } from 'react';
import log from "../../assets/log.jpg";
import Avatar from 'react-avatar';
import { Outlet } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

const TopNavbar = () => {
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
      <nav className="navbar navbar-expand-lg bg-body-white shadow">
        <div className="container-fluid">
          <img draggable='false' src={log} alt="Book It" style={{ width: "150px" }} />
          <button className="navbar-toggler  ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex mx-auto pt-2 me-auto" role="search">
              <input className="form-control me-2" type="search" placeholder="Search For" aria-label="Search" />
              <button className="btn btn-outline-success border-0" type="submit" style={{ backgroundColor: "#445297", color: "white" }}>Search</button>
            </form>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link fw-bold" aria-current="page" href="/user/Dashboard">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active fw-bold" href="#">Hotels</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="/user/about">About Us</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link fw-bold" href="/user/contact" role="button" aria-expanded="false">
                  Contact
                </a>
              </li>
            </ul>
         
          </div>
          <div style={{ position: 'relative', marginLeft: "10px", }}>
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
      <Outlet />
    </>
  );
};

export default TopNavbar;
