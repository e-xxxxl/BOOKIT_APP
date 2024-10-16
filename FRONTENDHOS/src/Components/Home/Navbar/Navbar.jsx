import React from "react";
import log from "../../../assets/log.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* <!-- Navbar Start --> */}
      <nav  class="navbar position-fixed top-0 w-100 navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <a
          href=""
          class="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5"
        >
          <img src={log} alt="Book It" style={{width:"150px"}}/>
        </a>
        <button
          type="button"
          class="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav ms-auto p-4 p-lg-0">
            <a href="/" class="nav-item nav-link active">
              Home
            </a>
            <a href="/user/about" class="nav-item nav-link">
              About
            </a>
            <div class="nav-item dropdown">
              <a href="/user/contact" class="nav-link " >
                Contact
              </a>
            </div>
          
          </div>
          <Link to="/user/signup" className="text-decoration-none">
          <button class="btn  fw-bold me-3 d-lg-block " style={{backgroundColor:"#445297", color:"white"}}>
            Get Started<i class="fa fa-arrow-right ms-3"></i>
          </button>
          </Link>
        </div>
      </nav>
      {/* <!-- Navbar End --> */}
    </>
  );
};

export default Navbar;
